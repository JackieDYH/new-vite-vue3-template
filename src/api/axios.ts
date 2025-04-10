import axios, { AxiosRequestConfig, AxiosResponse } from "axios"
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
    config.headers.set("tenant-id", "1")
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  (res) => {
    if (res.status === 200) {
      const { code, msg } = res.data as Result<any>
      if (code === 0) {
        return res
      } else {
        showToast(msg)
        return Promise.reject(msg)
      }
    } else {
      return Promise.reject()
    }
  },
  (error) => {
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
