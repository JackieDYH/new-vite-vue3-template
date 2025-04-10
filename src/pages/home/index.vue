<template>
  <div>home{{ k }}</div>
  <p>Access Token: {{ authStore.accessToken }}</p>
  <button @click="authStore.clearAuth">Clear Auth</button>
</template>
<script setup lang="ts">
// import { useAuthStore } from "@/stores/modules/auth"
const k = ref(1)
const authStore = useAuthStore()
onMounted(() => {
  authStore.saveAuth({
    accessToken: "123",
    refreshToken: "123",
    userId: "123",
    userInfo: {
      id: "123",
      name: "123",
      avatar: "123",
      email: "123",
      phone: "123"
    }
  })
  console.log(authStore.token)
})
</script>
<style scoped></style>
