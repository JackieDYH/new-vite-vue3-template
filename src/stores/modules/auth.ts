import { defineStore } from "pinia"
import { ref } from "vue"
import { getUserInfoApi } from "@/api/user"

export const useAuthStore = defineStore(
  "auth",
  () => {
    const userId = ref<number | null>()
    const accessToken = ref<string | null>()
    const refreshToken = ref<string | null>()
    const openId = ref<string | null>()
    const identifier = ref<string | null>()
    const expiresTime = ref<number | null>()
    const tenantId = ref<number>(1)
    const userInfo = ref<User.UserInfo | null>()

    async function saveAuth(params: any) {
      userId.value = params.userId
      accessToken.value = params.accessToken
      refreshToken.value = params.refreshToken
      openId.value = params.openid
      identifier.value = params.identifier
      expiresTime.value = params.expiresTime
      tenantId.value = params.tenantId || 1
      localStorage.setItem("accessToken", params.accessToken)
    }

    function clearAuth() {
      userId.value = null
      accessToken.value = null
      refreshToken.value = null
      openId.value = null
      identifier.value = null
      expiresTime.value = null
      tenantId.value = 1
      localStorage.removeItem("accessToken")
    }

    function clearUserInfo() {
      userInfo.value = null
    }

    // 更新用户信息
    async function updateUserInfo(userInfoData?: User.UserInfo) {
      if (userInfoData) {
        userInfo.value = userInfoData
      } else {
        const data = await getUserInfoApi()
        userInfo.value = data
      }
    }

    const setTenantId = (id: number) => {
      tenantId.value = id
    }

    return {
      userId,
      accessToken,
      refreshToken,
      openId,
      identifier,
      expiresTime,
      tenantId,
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
