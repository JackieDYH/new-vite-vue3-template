export const INIT_VECTOR_FILE = "eyJhbGciOiJIUzI1"
export const MTA_FORMAT = "mta"
// 文件key获取的方式
export enum FileKeyType {
  ENCRYPTION = 1,
  DECRYPT = 0
}

export const FILE_CHUNK_SIZE = 5 * 1024 * 1024

/**
 * @description：请求配置
 */
export enum ResultEnum {
  SUCCESS = 200,
  ERROR = 500,
  OVERDUE = 401,
  NOT_FOUND = 404,
  TIMEOUT = 3000,
  TYPE = "success",
  NORMAL = 0
}

/* 1代表需要传输缩略图，2、表示不传 */
export enum RenderCanvasTypeEnum {
  Upload = 1,
  Default
}

/**
 * @description：是AR试摆还是AR试戴
 */
export enum ModelViewEnum {
  BASE = 1,
  DISPLAY,
  PLACEMENT,
  FITTING
}
