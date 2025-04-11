import { createI18n } from 'vue-i18n'
import zh from '@/locales/zh-cn.json'
import en from '@/locales/en.json'
const i18n = createI18n({
  locale: 'zh',
  fallbackLocale: 'zh',
  legacy: false,
  messages: {
    zh,
    en
  }
})

export default i18n