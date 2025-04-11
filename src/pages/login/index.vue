<template>
  <div class="text-[22px]" @click="goPath">登录</div>
</template>
<script setup lang="ts">
const router = useRouter()
const goPath = () => {
  router.replace("/")
}
</script>
<style scoped></style>

