import axios, { APP } from "./axios"

/**
 * 获取投放详情
 */
export const getDropDetail = (data: { id: number; sign: string }) =>
  axios
    .get<{
      id: number
      templateType: number
      spuId: string
      createTime: number
      userId: string
      content: string
      data: {
        name: string
        desc: string
        btnName: string
        btnUrl: string
      }
      fileResourceInfoRespDTO: {
        fileResourceUrlsRespDTO: {
          fileId: string
          fileURL: string
          type: number
          formatType: number
          fileSize: number
          gltfFileURL: string
          coverImageType: any
        }
        editInfo: string
      }
    }>(`${APP}/product/mini-program/spu/detail`, data)
    .then((res) => {
      res.data = JSON.parse(res.content)
      return res
    })
