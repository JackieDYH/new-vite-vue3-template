import axios, { APP } from "./axios"

/**
 * 用户信息
 */
export const getUserInfoApi = () => {
  return axios.get<User.UserInfo>(`${APP}/member/explat/user/get`)
}

/**
 * 预约数据统计
 */
export const getUserStatistics = () => {
  return axios.get<{ preBookNum: number; purchasingOrderNum: number }>(`${APP}/product/explat/app/store/statistics`)
}
