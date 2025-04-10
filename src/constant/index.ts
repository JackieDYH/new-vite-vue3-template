export const ossUrl = import.meta.env.VITE_OSS_HOST

const userAgent = navigator.userAgent
export const isIos = /iphone|ipad|ipod/.test(userAgent.toLowerCase())
