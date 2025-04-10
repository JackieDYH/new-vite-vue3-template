// uno.config.ts
import { defineConfig, presetAttributify, presetUno } from "unocss"
import presetRemToPx from "@unocss/preset-rem-to-px"
export default defineConfig({
  theme: {
    colors: {
      primary: "#115ee8",
      base: "#232833"
    }
  },
  presets: [presetAttributify({}), presetUno(), presetRemToPx()]
})
