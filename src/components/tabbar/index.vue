<template>
  <van-tabbar v-model="active" active-color="#1A1A1A" inactive-color="#999" @change="onChange">
    <van-tabbar-item v-for="(item, index) in tabItems" :key="index">
      <div class="flex items-center">
        <component class="w-[20px] h-[20px]" :is="active === index ? item.activeIcon : item.inactiveIcon" />
        <span class="text-[16px] ml-1 pt-[2px]">{{ item.label }}</span>
      </div>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import iconTab1 from "@/assets/icons/tab1.svg"
import iconTab2 from "@/assets/icons/tab2.svg"
import iconTab3 from "@/assets/icons/tab3.svg"
import iconTab11 from "@/assets/icons/tab11.svg"
import iconTab22 from "@/assets/icons/tab22.svg"
import iconTab33 from "@/assets/icons/tab33.svg"

const router = useRouter()
const active = ref(0)

const tabItems = [
  {
    label: "商品介绍",
    activeIcon: iconTab11,
    inactiveIcon: iconTab1,
    route: "/introduce"
  },
  {
    label: "产品中心",
    activeIcon: iconTab22,
    inactiveIcon: iconTab2,
    route: "/product"
  },
  {
    label: "服务中心",
    activeIcon: iconTab33,
    inactiveIcon: iconTab3,
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
</script>

<style scoped></style>

