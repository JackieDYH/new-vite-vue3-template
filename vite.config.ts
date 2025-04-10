import { defineConfig, loadEnv } from "vite"
import vue from "@vitejs/plugin-vue"
import AutoImport from "unplugin-auto-import/vite"
import { join } from "path"
// import { visualizer } from "rollup-plugin-visualizer"
import UnoCSS from "unocss/vite"
import { VantResolver } from "@vant/auto-import-resolver"
import Components from "unplugin-vue-components/vite"
import svgLoader from "vite-svg-loader"
import basicSsl from "@vitejs/plugin-basic-ssl"

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const envData = loadEnv(mode, "env")

  return {
    base: "./",
    envDir: "./env",
    plugins: [
      vue(),
      UnoCSS(),
      AutoImport({
        imports: ["vue", "vue-router", "pinia"],
        dirs: ["src/api/**", "src/enum/**", "src/constant/**", "src/components/**", "src/stores/**"],
        vueTemplate: true,
        resolvers: [VantResolver()]
      }),
      Components({
        resolvers: [VantResolver()]
      }),
      svgLoader()
    ],
    server: {
      host: "0.0.0.0",
      port: 5174,
      proxy: {
        "/app-api": {
          target: envData.VITE_API_HOST,
          ws: false,
          changeOrigin: true
        },
        "/admin-api": {
          target: envData.VITE_API_HOST,
          ws: false,
          changeOrigin: true
        }
      }
    },
    resolve: {
      alias: {
        "@": join(__dirname, "src")
      }
    }
  }
})
