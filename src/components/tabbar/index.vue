<template>
  <van-tabbar v-model="active" active-color="#1A1A1A" inactive-color="#999" @change="onChange">
    <van-tabbar-item v-for="(item, index) in tabItems" :key="index">
      <div class="flex items-center">
        <component class="w-[20px] h-[20px]" :is="item.icon" :style="{ color: active === index ? '#1A1A1A' : '#999' }" />
        <span class="text-[16px] ml-1 pt-[2px]">{{ item.label }}</span>
      </div>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"
import iconTab1 from "@/assets/icons/tab1.svg"
import iconTab2 from "@/assets/icons/tab2.svg"
import iconTab3 from "@/assets/icons/tab3.svg"

const route = useRoute()
const router = useRouter()

const active = ref(0)

const tabItems = [
  {
    label: "品牌介绍",
    icon: iconTab1,
    route: "/introduce"
  },
  {
    label: "产品中心",
    icon: iconTab2,
    route: "/product"
  },
  {
    label: "服务中心",
    icon: iconTab3,
    route: "/user"
  }
]

const onChange = (index: number) => {
  active.value = index
  console.log(index)
  if (tabItems[index]?.route) {
    router.push(tabItems[index].route)
  }
}

onMounted(() => {
  const currentRoute = route.path
  const index = tabItems.findIndex((item) => item.route === currentRoute)
  if (index !== -1) {
    active.value = index
  }
})
</script>

<style scoped></style>

