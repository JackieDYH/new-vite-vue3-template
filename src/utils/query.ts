// src/router/helper/query.js
import { AesEncryption } from "@/utils/cipher"
// src/router/index.js
// 创建路由使用加解密方法
// import { parseQuery, stringifyQuery } from "./helper/query"

const aes = new AesEncryption()

export const stringifyStr = (data: string): string => {
  if (!data) return ""
  return aes.encryptByAES(data)
}

export const parseStr = (query: string): string => {
  let q = query.trim().replace(/^(\?|#|&)/, "")
  if (!q) return ""
  return aes.decryptByAES(q)
}

export const stringifyStrByCBC = (data: string): string => {
  if (!data) return ""
  return aes.encryptByCBC(data)
}

export const parseStrByCBC = (query: string): string => {
  let q = query.trim().replace(/^(\?|#|&)/, "")
  if (!q) return ""
  return aes.decryptByCBC(q)
}
