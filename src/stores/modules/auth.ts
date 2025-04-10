import { defineStore } from "pinia"
import { ref } from "vue"

export const useAuthStore = defineStore(
  "auth",
  () => {
    const accessToken = ref<string | null>()
    const tenantId = ref<number>(1)
    const refreshToken = ref<string | null>()
    const userId = ref<number | null>(null)
    const userInfo = ref<object | null>()

    async function saveAuth(params: any) {
      accessToken.value = params.accessToken
      refreshToken.value = params.refreshToken
      userId.value = params.userId
      localStorage.setItem("accessToken", params.accessToken)
    }

    function clearAuth() {
      accessToken.value = null
      refreshToken.value = null
      userId.value = null
      tenantId.value = 1
      localStorage.removeItem("accessToken")
    }

    function clearUserInfo() {
      userInfo.value = null
    }

    // 更新用户信息
    async function updateUserInfo(userInfoData?: object) {
      // if (userInfoData) {
      //   userInfo.value = userInfoData
      // } else {
      //   const data = await getUserInfoApi()
      //   userInfo.value = data
      // }
    }

    const setTenantId = (id: number) => {
      tenantId.value = id
    }

    return {
      accessToken,
      tenantId,
      refreshToken,
      userId,
      userInfo,
      saveAuth,
      setTenantId,
      updateUserInfo,
      clearAuth,
      clearUserInfo
    }
  },
  {
    persist: true
  }
)
