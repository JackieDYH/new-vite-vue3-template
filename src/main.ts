import { createApp } from "vue"
import i18n from "./locales/i18n"
import "./assets/styles/index.scss"
import "virtual:uno.css"
import "@unocss/reset/tailwind-compat.css"
import router from "./router"
import App from "./App.vue"
import pinia from "@/stores"
import "amfe-flexible"
// import vConsole from "vconsole"
// new vConsole()

createApp(App).use(i18n).use(router).use(pinia).mount("#app")
