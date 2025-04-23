import axios, { AxiosRequestConfig, AxiosResponse } from "axios"
import router from "@/router"
import { useAuthStore } from "@/stores/modules/auth"
import { showToast } from "vant"
interface Result<T> {
  code: number
  data: T
  msg: string
}

const instance = axios.create({
  timeout: 15000
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    const authStore = useAuthStore()
    config.headers.set("tenant-id", String(authStore.tenantId))
    const token = authStore.accessToken || localStorage.getItem("accessToken")
    if (token) {
      config.headers.set("Authorization", `Bearer ${token}`)
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  (res) => {
    const authStore = useAuthStore()
    if (res.status === 200) {
      const { code, msg } = res.data as Result<any>
      if (code === 0) {
        return res
      } else if (code === 401) {
        authStore.clearAuth()
        authStore.clearUserInfo()
        showToast(msg)
        if (router.currentRoute.value.path !== "/login") {
          router.push("/login")
        }
        return Promise.reject(msg)
      } else {
        showToast(msg)
        return Promise.reject(msg)
      }
    } else {
      return Promise.reject()
    }
  },
  (error) => {
    if (error?.message.indexOf("timeout") !== -1) {
      showToast("请求超时")
      return Promise.reject(error)
    }
    if (error.message.indexOf("Network Error") !== -1) {
      showToast("网络异常")
      return Promise.reject(error)
    }
    showToast("请求失败")
    return Promise.reject(error)
  }
)

export const APP = "/app-api"
export const ADMIN = "/admin-api"

const getData = <T>({ data }: AxiosResponse<Result<T>>) => {
  return data.data
}

const wrapAxios = <T>(options: AxiosRequestConfig) => instance<Result<T>>(options).then(getData)
wrapAxios.post = <T>(url: string, data?: any) => instance.post<Result<T>>(url, data).then(getData)
wrapAxios.get = <T>(url: string, params?: any) => instance.get<Result<T>>(url, { params }).then(getData)

export default wrapAxios
