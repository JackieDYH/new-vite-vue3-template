import axios, { APP } from "./axios"

/**
 *  文件转换
 */
interface FileTransfer {
  CryptoTokenRes: {
    cryptoToken: string
    timeStamp: number
  }
  OtpParams: {
    cryptoToken: string
  }
  // 一次性秘钥
  OtpRes: {
    totp: string
    timeStamp: number
  }
  AesParams: {
    fileHash?: string
    productId?: string
    resourceId?: string
    cryptoToken: string
    userScope: number
  }
  AesRes: {
    key: string
    vector: string
    sign: string
    timeStamp: number
  }
}

export const getCryptoToken = () => {
  return axios.post<FileTransfer["CryptoTokenRes"]>(`${APP}/infra/crypto/obtain/token`)
}
export const getObtainKey = (data: FileTransfer["AesParams"]) => {
  return axios.post<FileTransfer["AesRes"]>(`${APP}/infra/crypto/obtain/key`, data)
}
export const getObtainTotp = (data: FileTransfer["OtpParams"]) => {
  return axios.post<FileTransfer["OtpRes"]>(`${APP}/infra/crypto/obtain/totp`, data)
}

/**
 * 获取模型详情
 */
export const getModelInfoApi = (id: string) => {
  return axios.get<any>(`${APP}/product/get-detail`, { id, inlandFlag: true })
}

/**
 * 查询模型使用的素材
 */
export const queryMaterialFromModel = (params: { bizId: string }) =>
  axios.post<{
    backMaterRelation: {
      bizId: string
      materialId: string
      path: string
      materialName: string
      minPath: string
    }
    environMaterRelation: {
      bizId: string
      materialId: string
      path: string
      materialName: string
      minPath: string
    }
  }>(`${APP}/product/material/get/relation`, { ...params, sorts: [1, 2] })

/**
 * 获取模型AR配置详情
 */
export const getModelARInfo = (params: { productId: string; optionTypes: ModelViewEnum[] }) => {
  return axios.post<
    Array<{
      productId: number
      optionType: number
      genQrNum: number
      copyLinkNum: number
      useArNum: number
      status: number
      createTime: number
      initialPlacement: number
      initialPlacementName: string
      modelTypeId: string
      modelTypePic: string
      modelTypeName: string
      buttonInfoVOList: Array<{
        name: string
        enable: boolean
        url: string
      }>
    }>
  >(`${APP}/product/ar/option-detail`, params)
}

// 更新模型二维码生成次数与复制链接次数、使用统计
export const updateModelAccumulated = (params: {
  productId: string
  optionType: number
  genQrNum?: number
  copyLinkNum?: number
  useArNum?: number
}) => {
  return axios.post<boolean>(`${APP}/product/ar/accumulated-change`, params)
}
