import { Color3 } from "@babylonjs/core/Maths/math.color"
import { Texture } from "@babylonjs/core/Materials/Textures/texture"
import { HDRCubeTexture } from "@babylonjs/core/Materials/Textures/hdrCubeTexture"
import { EquiRectangularCubeTexture } from "@babylonjs/core/Materials/Textures/equiRectangularCubeTexture"
import { Engine } from "@babylonjs/core/Engines/engine"
import { Scene } from "@babylonjs/core/scene"
import { ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera"
import { Observable } from "@babylonjs/core/Misc/observable"
import { AbstractMesh } from "@babylonjs/core/Meshes/abstractMesh"
import { Nullable, Tuple } from "@babylonjs/core/types"
import { ISceneLoaderProgressEvent } from "@babylonjs/core/Loading/sceneLoader"
export { ISceneLoaderProgressEvent } from "@babylonjs/core/Loading/sceneLoader"
import { TransformNode } from "@babylonjs/core/Meshes/transformNode"
import { AnimationGroup } from "@babylonjs/core/Animations/animationGroup"
import { TonemappingOperator } from "@babylonjs/core/PostProcesses/tonemapPostProcess"
export { TonemappingOperator } from "@babylonjs/core/PostProcesses/tonemapPostProcess"

/**
 * 本地资源接口
 */
interface ILocalResourcesInterface {
  /**资源id */
  id: number
  /**资源名称 */
  name: string
  /**缩略图 */
  thumbnailUrl: string
  /**资源路径 */
  url: string
}

/**
 * 数据值的类型
 */
type IValueType = "slider" | "inputNum" | "inputText" | "select" | "color"
interface ISelectType {
  key: string
  value: string | number
}
/**
 * 公共的信息类型
 */
interface ICommonInfoType {
  /**属性描述 */
  describe?: string
  /**数据类型,对应前端组件 */
  valueType: IValueType
  /**滑块条 */
  slider?: {
    /**最小值 */
    min: number
    /**最大值 */
    max: number
    /**步长 */
    step: number
  }
  select?: ISelectType[]
  /**设置的回调函数名称 */
  setCallBackName?: string
}
/**
 * 信息类型
 */
interface InfoType extends ICommonInfoType {
  key: string
  opts?: any
}
/**
 * 数据类型
 */
interface IDataInfo {
  [k: string]: any
}
interface IPackageDataType extends ICommonInfoType {
  /**键名 */
  keyName: string
  /**键值 */
  keyValue: number | string
  /**属性说明 */
  describe: string
}

/**
 * 贴图canvas资源类型接口
 */
interface IImageCanvasSourcesInterface {
  /**对应贴图的id */
  uid: number
  /**图片名称 */
  name: string
  /**canvas预览的dom */
  canvas: HTMLCanvasElement
}
/**
 * 贴图对对前端的类型
 */
interface ITextureToFrontEndType {
  /**贴图id */
  id: number
  /**过滤 */
  filter: string
  /**包裹U */
  wrapU: string
  /**包裹V */
  wrapV: string
  /**第几套UV */
  texCoordUnit: number
  /**uv scale的x */
  uvTransformScaleX: number
  /**uv scale的y */
  uvTransformScaleY: number
  /**uv rotation*/
  uvTransformRotation: number
  /**uv offset的x*/
  uvTransformOffsetX: number
  /**uv offset的y*/
  uvTransformOffsetY: number
}
/**
 * 贴图File数据类型
 */
interface IRequestTextureFileInterface {
  /**用户上传的file文件 */
  file: File
  /**上传到服务端的贴图id */
  requestId: string
  /**3D引擎中的贴图id */
  uniqueId: number
}
/**
 * 来自于gltf的贴图下标数据类型
 */
interface ITextureIndexToGltfInterface {
  /**源下标 */
  sourceIndex: number
}

/**
 * 模型信息的类型接口
 */
interface IModelInfo {
  /**
   * 面数
   */
  faces: number
  /**
   * 顶点数量
   */
  vertices: number
  /**
   * 贴图数量
   */
  textures: number
  /**
   * 材质数量
   */
  materials: number
  /**
   * 是否含有PBR通道
   */
  isPBR: boolean
  /**
   * 动画的数量
   */
  animations: number
}

/**通道名称枚举 */
declare enum IChannelName {
  /**漫反射通道 */
  AlbedoMap = "AlbedoMap",
  /**金属通道 */
  MetallicMap = "MetallicMap",
  /**粗糙度通道 */
  RoughnessMap = "RoughnessMap",
  /**AO通道 */
  OcclusionMap = "OcclusionMap",
  /**法线通道 */
  NormalMap = "NormalMap",
  /**发光通道 */
  EmissivelMap = "EmissivelMap",
  /**透明通道 */
  OpacityMap = "OpacityMap",
  /**镜面反射强度的通道 */
  SpecularMap = "SpecularMap",
  /**镜面反射的F0颜色的通道 */
  SpecularColorMap = "SpecularColorMap",
  /**镜面光泽度通道 */
  SpecularGlossinessMap = "SpecularGlossinessMap"
}
/**
 * gltf的属性与bbl材质属性对应关系
 * SpecularGlossinessMap => reflectivityTexture
 * specularColorTexture => reflectanceTexture
 * specularTexture => metallicReflectanceTexture
 * KHR_materials_specular specularFactor => metallicF0Factor
 * specularColorFactor => metallicReflectanceColor
 * glossinessFactor => microSurface
 * KHR_materials_pbrSpecularGlossiness  specularFactor => reflectivityColor
 */
/**
 * 材质的透明模式枚举
 */
declare enum MaterialTransparencyMode {
  /**不透明 */
  OPAQUE,
  /**混合 */
  BLEND,
  /**透明测试 */
  ALPHATEST,
  /**透明测试和混合 */
  ALPHATESTANDBLEND
}
/**
 * 材质名称集合数据接口
 */
interface IMaterialNameCollectInterface {
  /**材质名称 */
  name: string
  /**材质id */
  id: number
}
/**
 * PBR材质的工作流
 */
declare enum IPBRWorkFlow {
  /**金属工作流 */
  Metallic = "Metallic",
  /**高光工作流 */
  Specular = "Specular"
}
/**
 * 颜色值类型
 */
type IColorValueType = [number, number, number]
/**
 * uv的Transform值类型
 */
type ITransformValueType = [number, number]
/**
 * UV Transform类型
 */
interface IUVTransformType {
  /**scale缩放 */
  scale: ITransformValueType
  /**offset偏移 */
  offset: ITransformValueType
  /**旋转度数(弧度) */
  rotation: number
}
/**贴图类型 */
interface ITextureValueType {
  /**最大采样 */
  magFilter: string
  /**最小采样 */
  minFilter: string
  /**U包裹 */
  wrapU: string
  /**V包裹 */
  wrapV: string
  /**texture的格式 */
  textureFormat: string
  /**第几套UV */
  texCoordUnit: number
  /**贴图的的uid */
  uid: number
  /**贴图的服务端id,有新增或者修改时图片的id,无新增和修改默认是-1(字符串) */
  id: string
  /**更换场景中贴图对应的gltf中textures的源下标(唯有更换时候对应，默认为-1) */
  sourceIndex: number
}
/**
 * 材质通道信息接口(用来存储本地材质通道的数据)
 */
interface IMaterialChannelsInfoStoreInterface {
  /**材质id */
  materialId: number
  /**贴图通道列表 */
  channels: Record<IChannelName, IChannelBaseInterface>
}
/**
 * 通道类型的基础接口
 */
interface IChannelBaseInterface {
  /**是否开启 */
  enable: boolean
  /**强度 */
  factor: number
  /**类型 */
  type?: string
  /**颜色 */
  color?: IColorValueType
  /**法线翻转绿色通道 */
  normalMapFlipGreen?: boolean
  /**镜面反射遮蔽 */
  specularOcclude?: boolean
  /**倒转透明纹理开关 */
  invertTransparent?: boolean
  /**更换场景中贴图对应的gltf中textures的源下标(唯有更换时候对应，默认为-1) */
  sourceIndex: number
  /**通道所使用贴图对应的id,默认为-1,-1表示无引用贴图 */
  textureId: number
}
/**
 * 贴图的综合信息，包含texture和uvtransforms字段(到后端)
 */
interface ITextureInformationInterface {
  /**uv变换 */
  uvtransforms?: IUVTransformType
  /**贴图 */
  texture?: ITextureValueType
}
/**
 * 通道类型(到后端)
 */
interface IChannelType extends IChannelBaseInterface, ITextureInformationInterface {}
/**
 * 通道信息类型集合
 */
interface IChannelInfoType {
  [k: string]: IChannelType
}
/**
 * 材质信息收集类型(到后端)
 */
interface IMaterialCollectInfoType {
  /**材质名称 */
  materialName: string
  materialIndex: number
  /**材质id */
  materialId: number
  /**工作流模式类型 */
  workFlowType: IPBRWorkFlow
  /**透明模式 */
  transparencyMode: string
  /**alpha模式 */
  alphaMode: number
  /**alpha剔除 */
  alphaCutOff: number
  /**材质的透明度 */
  alpha: number
  /**深度预渲染 */
  needDepthPrePass: boolean
  /**是否是双面 */
  doubleSided: boolean
  /**PBR材质的F0因子*/
  f0: number
  /**通道信息 */
  channels: IChannelInfoType
  /**是否包含KHR_materials_specular拓展属性 */
  hasSpecularExtension: boolean
  /**材质的环境光反射强度 */
  environmentIntensity: number
  /**反射高光 */
  useRadianceOverAlpha: boolean
}
interface IMaterialCollectToUIListType {
  [key: string]: IMaterialCollectToUIType
}
interface IMaterialCollectToUIType {
  /**通道基础属性 */
  basicAttributes: IPackageDataType[]
  /**贴图属性 */
  textureAttributes?: IPackageDataType[]
}
/**
 * 材质上的的属性类型(到前端使用)
 */
interface IMaterialPropetyToFrontEndInterface {
  /**材质名称 */
  materialName: string
  /**透明模式 */
  transparencyMode: string
  /**材质的透明度 */
  alpha: number
  /**是否是双面 */
  doubleSided: boolean
  /**深度预渲染 */
  needDepthPrePass: boolean
  /**alpha剔除 */
  alphaCutOff: number
  /**PBR材质的F0因子*/
  f0: number
  /**是否包含KHR_materials_specular拓展属性 */
  hasSpecularExtension: boolean
  /**材质的环境光反射强度 */
  environmentIntensity: number
  /**反射高光 */
  useRadianceOverAlpha: boolean
}
/**
 * 前端材质数据类型
 */
interface IMaterialInfoToFrontEndType extends IMaterialPropetyToFrontEndInterface {
  /**材质id */
  id: number
  /**工作流 */
  workFlowType: string
  channels: Record<string, IMaterialInfoToFrontEndChannelType>
  /**uv列表 */
  uvList: string[]
}
/**
 * 前端通道数据类型
 */
interface IMaterialInfoToFrontEndChannelType {
  /**是否开启 */
  enable: boolean
  /**强度 */
  factor: number
  /**颜色 */
  color?: string
  /**类型 */
  type?: string
  /**法线翻转绿色通道 */
  normalMapFlipGreen?: boolean
  /**镜面反射遮蔽 */
  specularOcclude?: boolean
  /**倒转透明纹理开关 */
  invertTransparent?: boolean
  /**贴图对象 */
  texture?: ITextureToFrontEndType
}
/**
 * 材质设置属性类型
 */
interface IMaterialSetValueType {
  /**材质属性 */
  property: string
  /**值 */
  value: number | string | boolean
}
/**
 * 通道设置类型
 */
interface IChannelSetValueType {
  /**通道名称 */
  channelName: string
  /**通道属性 */
  property: string
  /**通道值 */
  value: number | string | boolean
}
/**
 * 贴图参数设置类型
 */
interface ITextureSetValueType {
  /**属性名称 */
  property: string
  /**值 */
  value: number | string
}
/**
 * 材质信息参数存储
 */
interface IMaterialInfoStoreType {
  /**自发光贴图的id */
  emissiveTextureId: number | null
  /**发光强度 */
  emissiveIntensity: number
  /**发光颜色 */
  emissiveColor: Color3
  /**发线图的id */
  bumpTextureId: number | null
  /**法线强度 */
  bumpFactor: number
  /**环境光贴图的id */
  ambientTextureId: number | null
  /**环境光遮蔽强度 */
  ambientFactor: number
  /**透明通道贴图的id */
  opacityTextureId: number | null
  /**透明贴图强度 */
  opacityFactor: number
}
/**
 * 贴图图片资源类型
 */
interface IImageSourcesType {
  /**对应贴图的id */
  uid: number
  /**图片名称 */
  name: string
  /**图片对象 */
  images: {
    /**图片路径 */
    url: string
    /**图片宽度 */
    width: number
    /**图片高度 */
    height: number
  }
}
/**
 * 贴图关联材质信息接口
 */
interface ITextureCorrelationMaterialInfoInterface {
  /**材质id */
  materialId: number
  /**材质名称 */
  materialName: string
  /**关联的通道名称 */
  channelsNames: IChannelName[]
}
/**
 *
 * 贴图文件类型
 */
interface ITextureFile {
  /**上传的贴图文件 */
  file: File
  /**3D中的id */
  uniqueId: number
}
/**MaterialInfoStore里的key类型 */
type IMaterialStoreKeyType = keyof IMaterialInfoStoreType

/**
 * 解析hdr文件接口类型
 */
interface IParseHDRFileInfoInterface {
  /**hdr的cubeTexture */
  cubeTexture: HDRCubeTexture
  /**等矩形图 */
  equiRectangularTexture?: Texture
}
/**
 * 解析jpg的EquiRectangular文件接口类型
 */
interface IParseJPGEquiRectangularInfoInterface {
  cubeTexture: EquiRectangularCubeTexture
  /**等矩形图 */
  equiRectangularTexture?: Texture
}
/**
 * 将其它类型转换成env文件的接口类型
 */
interface IConvertToFileInterface {
  /**env文件 */
  envFile: File
  /**预览图base64数据 */
  previewImageBase64: string
}

/**
 * 自定义Scene
 */
interface CustomScene {
  /**
   * 获取场景中__root__节点的mesh
   */
  getRootMesh(): Nullable<AbstractMesh>
}
declare module "@babylonjs/core/scene" {
  interface Scene extends CustomScene {}
}

/**
 * 自定义拓展Color3
 */
interface CustomColor3 {
  /**
   * 设置hex颜色
   */
  setHexString(hex: string): Color3
}
declare module "@babylonjs/core/Maths/math.color" {
  interface Color3 extends CustomColor3 {}
}

/**背景类型定义 */
type IBackgroundType = "color" | "image" | "environment"
/**阴影类型 */
type IShadowType = "shadowCaster" | "bakedAO"
/**ToneMapping类型 */
type IToneMappingType = "Standard" | "ACES" | "PBRNeutral"
/**资源类型（系统还是用户） */
type IFromSourceType = "system" | "user"
/**
 * 引擎配置参数
 */
interface IEngineConfigInterface {
  /**相机是否需要过渡动画,默认false */
  transitionCamera: boolean
  /**相机过渡时间,单位为秒,默认1.3 */
  transitionTime: number
  /**环境球资源的id(编辑器中使用) */
  environmentId: number
  /**默认背景图片id */
  backgroundImageId: number
  /**hdr路径 */
  HDRUrl: string
  /**背景图片路径 */
  backgroundImageUrl: string
  /**相机最小缩放限制,默认0.01 */
  lowerRadiusLimitRatio: number
  /**相机最大缩放限制,默认8 */
  upperRadiusLimitRatio: number
  /**滚轮滚动速率,默认0.01 */
  wheelDeltaPercentage: number
  /**鼠标按压移动速率,默认0.01 */
  pinchDeltaPercentage: number
  /**平移灵敏度 */
  /**是否禁用平移 */
  enablePanning: boolean
  /**是否禁用缩放 */
  enableZoom: boolean
  /**自适应视角时相机的半径比例,默认1 */
  radiusScale: number
  /**toneMapping是否开启 */
  toneMappingEnable: boolean
  /**toneMapping类型 */
  toneMappingType: IToneMappingType
  /**是否进行绑定线框 */
  bindWireframe: boolean
  /**图像后处理是否开启 */
  imageProcessingEnabled: boolean
  /**是否使用相机自转 */
  useAutoRotation: boolean
  /**相机自动转动速度，默认0.1 */
  idleRotationSpeed: number
  /**canvas事件是否调用preventdefault(),默认false */
  noPreventDefault: boolean
  /**是否自动适配移动端设备比率 */
  autoMobileDeviceRatio: boolean
  /**移动端最大比率 */
  mobileMaxRatio: number
  /**自动适配设备比率 */
  autoAdaptaDeviceRatio: boolean
  /**pc和移动最大比率，如果开启了自动适配移动端比率，则以移动端为主 */
  maxDeviceRation: number
}

/**
 * 基础引擎
 */
declare class BasicEngine {
  protected canvasDom: HTMLCanvasElement | null
  protected engine?: Engine
  protected scene?: Scene
  /**主相机 */
  protected camera?: ArcRotateCamera
  /**是否在进行渲染 */
  protected doRender: boolean
  /**有canvas的情况下，渲染成功 */
  protected renderSuccess: boolean
  private _engineResize
  /**窗口事件监听 */
  protected onWindowResizeObservable: Observable<boolean>
  /**是否是移动端设备 */
  protected isMobile: boolean
  protected autoMobileDeviceRatio: boolean
  protected autoAdaptaDeviceRatio: boolean
  private _engineFullScreen
  /**初始默认的hdr的id */
  private _initDefaultHDRId
  /**引擎配置 */
  protected engineConfig: IEngineConfigInterface
  constructor(canvasId: string)
  /**
   * 初始化
   */
  init(engineConfig?: IEngineConfigInterface): void
  /**读取配置 */
  private readOptions
  /**
   * 初始化Engine
   */
  private initEngine
  /**
   * 初始化场景
   */
  private initScene
  /**
   * 初始化场景环境HDR
   */
  private initSceneEnvironment
  private initCamera
  private renderLoop
  private bindEngineResize
  private removeEngineResize
  private bindEngineFullScreen
  private removeEngineFullScreen
  /**
   * 设置渲染器大小(canvas)
   * @param width 宽度
   * @param height 高度
   */
  setRenderSize(width: number, height: number): void
  /**
   * 调整3D场景视图大小
   * @param forceSetSize 强制设置canvas大小
   */
  resize(forceSetSize?: boolean): void
  /**
   * 设置默认的hdr的id
   * @param id
   */
  setDefaultHDRId(id: number): void
  /**
   * 更新引擎配置
   * @param config 引擎配置
   */
  protected updateEngineConfig(config: IEngineConfigInterface): void
  protected addWindowResizeEvent(fn: () => void): void
  /**
   * 销毁场景
   */
  dispose(): void
  /**
   * 设置画布缩放级别
   */
  setAutoDevicePixelRatio(): void
  /**
   * 获取渲染的canvas
   * @returns
   */
  getRenderCanvas(): HTMLCanvasElement | null
}

/**
 * 资源加载错误报错
 */
interface ILoadedErrorType {
  /**提示信息 */
  message: string
  /**加载资源的类型 */
  loadType: string
}
/**
 * 模型选中信息
 */
interface IModelSelectInfoInterface {
  /**mesh的id */
  meshId: number
  /**材质id */
  materialId: number
}

/**
 * 三维向量接口
 */
interface IVector3Interface {
  x: number
  y: number
  z: number
}

/**
 * 相机信息接口
 */
interface ICameraInfoInterface {
  /**视野角度 */
  fov: number
  /**相机近裁剪截面值 */
  nearDistance: number
  /**相机远截面值 */
  farDistance?: number
  /**相机position坐标 */
  position?: IVector3Interface
  /**相机target坐标 */
  target?: IVector3Interface
}

/**
 * 环境球信息接口
 */
interface IEnvironmentInfoInterface {
  /**环境球的开启关闭 */
  enable: boolean
  /**环境球资源的id */
  id: number
  /**环境球的强度 */
  intensity: number
  /**背景强度 */
  backgroundExposure: number
  /**旋转角度 */
  rotation: number
  /**模糊程度 */
  blur: number
  /**平行光的开关 */
  lightEnable: boolean
  /**灯光强度 */
  lightIntensity: number
  /**偏移量 */
  shadowBias: number
  /**资源的来源类型 */
  fromSourceType?: IFromSourceType
}

/**
 * 模型的方向与位置接口
 */
interface IOrientationInfoInterface {
  /**矩阵 */
  matrix?: Tuple<number, 16>
}

/**后处理信息接口 */
interface IPostProcessInfoInterface {
  /**后处理总开关 */
  enable: boolean
  /**bloom类型接口 */
  bloom: IBloomInterface
  /**SSAO类型接口 */
  ssao: ISSAOInterface
  /**SSR类型接口 */
  ssr: ISSRInterface
  /**Vignette类型接口 */
  vignette: IVignetteInterface
  /**DepthOfField类型接口 */
  depthOfField: IDepthOfFieldInterface
  /**Grain类型接口 */
  grain: IGrainInterface
  /**Sharpen类型接口 */
  sharpen: ISharpenInterface
  /**fxaa类型接口 */
  fxaa: IFXAAInterface
  /**taa类型接口 */
  taa: ITAAInterface
}
/**
 * bloom类型接口
 */
interface IBloomInterface {
  /**开关 */
  enable: boolean
  /**强度 */
  factor: number
  /**阈值 */
  threshold: number
}
/**
 * Vignette类型接口(中文叫渐晕)
 */
interface IVignetteInterface {
  /**开关 */
  enable: boolean
  /**强度 */
  vignetteWeight: number
  /**颜色 */
  vignetteColor: string
  /**渐晕的视域大小 */
  vignetteCameraFov: number
}
/**
 * DepthOfField类型接口(中文名叫景深)
 */
interface IDepthOfFieldInterface {
  /**开关 */
  enable: boolean
  /**光圈大小 */
  fStop: number
  /**焦点距离 */
  /**虚化强度 */
  lensSize: number
}
/**Grain类型接口(中文名是颗粒效果) */
interface IGrainInterface {
  /**开关 */
  enable: boolean
  /**强度 */
  intensity: number
  /**进行动画 */
  animated: boolean
}
/**
 * Sharpen类型接口(中文名叫锐化)
 */
interface ISharpenInterface {
  /**开关 */
  enable: boolean
  /**边缘强度 */
  edgeAmount: number
  /**颜色对比度 */
  colorAmount: number
}
/**
 * Tonemap类型接口(中文叫色调映射)
 */
interface ITonemappingInterface {
  /**开关 */
  enable: boolean
  /**类型 */
  tonemapType: TonemappingOperator
}

/**
 * SSR类型接口(屏幕空间反射)
 */
interface ISSRInterface {
  /**开关 */
  enable: boolean
  /**强度 */
  factor: number
  /**衰减指数 */
  reflectionSpecularFalloffExponent: number
  /**光线跳跃步数 */
  selfCollisionNumSkip: number
  /**厚度 */
  thickness: number
  /**自动计算厚度 */
  enableAutomaticThicknessComputation: boolean
  /**反射模糊 */
  blurDispersionStrength: number
  /**朝向相机方向是否进行衰减 */
  attenuateFacingCamera: boolean
}
/**
 * SSAO类型接口(屏幕空间环境光遮蔽)
 */
interface ISSAOInterface {
  /**开关 */
  enable: boolean
  /**整体强度 */
  factor: number
  /**像素周围半径 */
  radius: number
  /**基本强度 */
  base: number
  /**衰减速率 */
  fallOff: number
  /**采样区域大小 */
  area: number
}
/**
 * FXAA类型接口(快速抗锯齿)
 */
interface IFXAAInterface {
  /**开关 */
  enable: boolean
}
/**
 * TAA类型接口(时间抗锯齿)
 */
interface ITAAInterface {
  /**开关 */
  enable: boolean
  /**混合因子 */
  factor: number
  /**累计样本数 */
  samples: number
}

/**
 * 背景信息接口
 */
interface IBackgroundInfoInterface {
  /**是否开启背景，否则背景则是透明的 */
  enable: boolean
  /**背景类型 */
  bgType: IBackgroundType
  /**背景颜色 */
  color: string
  /**背景图片id */
  id: number
  /**资源的来源类型 */
  fromSourceType?: IFromSourceType
}

/**阴影信息接口 */
interface IShadowInfoInterface {
  /**开关 */
  enable: boolean
  /**阴暗程度 */
  darkness: number
  /**高度 */
  height: number
  /**大小 */
  size: number
  /**阴影类型 */
  shadowType: IShadowType
}

/**
 * 线框信息接口
 */
interface IWireframeInfoInterface {
  /**线框开启关闭 */
  enable: boolean
  /**线框颜色 */
  color: string
  /**线框透明度 */
  factor: number
}

/**
 * 给前端的设置参数
 */
interface ISettingParamInfoInterface {
  orientation: IOrientationInfoInterface
  background: IBackgroundInfoInterface
  environment: IEnvironmentInfoInterface
  camera: ICameraInfoInterface
  wireframe: IWireframeInfoInterface
  shadowGround: IShadowInfoInterface
  postProcess: IPostProcessInfoInterface
}

/**
 * 动画列表数据的类型
 */
interface IAnimationItemDataInterface {
  /**动画名称 */
  name: string
  /**动画结束帧 */
  to: number
}
/**
 * 动画信息接口
 */
interface IAnimationInfoInterface {
  /**动画初始帧 */
  from: number
  /**动画结束帧 */
  to: number
  /**是否在播放 */
  isPlaying: boolean
  /**当前帧 */
  currentFrame: number
  /**当前动画的下标 */
  animationIndex: number
  /**动画列表数据 */
  animationListData: IAnimationItemDataInterface[]
}
/**
 * 监听回调函数的参数
 */
interface IAnimationListenParamInterface {
  /**动画运动的当前帧 */
  currentFrame: number
}
/**
 * 动画的监听函数类型
 * @param obj 回调函数的返回值
 */
type AnimationListenFunctionType = (obj: IAnimationListenParamInterface) => void

/**
 * 内部场景监听接口
 */
interface IOnInternalSceneLoadedInterface {
  /**当前使用的加载插件名称 */
  currentPluginName: string
  /**加载的Mesh */
  loadMesh: AbstractMesh
}
/**
 * Mesh选中接口
 */
interface IPickMeshInterface {
  /**选中的mesh */
  mesh: AbstractMesh
}
/**
 * 相机缩放到物体包围盒的数据接口
 */
interface IZoomCameraToMeshBoundingInfoEventInterface {
  /**mesh列表 */
  meshList: AbstractMesh[]
  /**相机是否进行缩放 */
  isZoom: boolean
}
/**
 * 全局状态数据
 */
declare class GlobalState {
  /**canvas渲染宽度 */
  renderWidth: number
  /**canvas渲染高度 */
  renderHeight: number
  /**截图质量 */
  screenShotQuality: number
  /**加载模型的根节点 */
  rootMesh: Nullable<AbstractMesh>
  /**Meta的空节点 */
  metaTransformNode: Nullable<TransformNode>
  /**加载模型后animationGroup列表 */
  loadAnimationGroups: AnimationGroup[]
  /**
   * @internal
   * 内部使用的是否引用到后处理(为true表示应用到后处理，颜色都要在线性空间内)
   */
  applyByPostProcess: boolean
  /**是否进行过预设值,默认为false */
  hasBeenPresets: boolean
  /**预设初始参数 */
  presetsInitParam?: ISettingParamInfoInterface
  /**当前场景 */
  currentScene?: Scene
  /**场景加载完毕订阅 */
  onSceneLoaded: Observable<unknown>
  /**场景加载进度订阅 */
  onSceneProgressed: Observable<ISceneLoaderProgressEvent>
  /**场景加载文件报错订阅 */
  onLoadedError: Observable<ILoadedErrorType>
  /**报错回调 */
  onError: Observable<unknown>
  /**
   * @internal
   * 内部使用的场景加载模型监听事件
   */
  onInternalSceneLoaded: Observable<IOnInternalSceneLoadedInterface>
  /**
   * @internal
   * 内部使用的windows窗口改变大小监听事件
   */
  onInternalWindowResizeEvent: Observable<boolean>
  /**相机准备完成(已完成动画) */
  onCameraReadyComplete: Observable<unknown>
  /**引擎配置 */
  engineConfig: IEngineConfigInterface
  /**mesh被选中事件 */
  onPickMeshObservable: Observable<IPickMeshInterface>
  /**选中模型事件 */
  onModelSelectEvent: Observable<IModelSelectInfoInterface>
  /**webgl上下文丢失事件 */
  onContextLostEvent: Observable<unknown>
  onZoomCameraToMeshBoundingInfoEvent: Observable<IZoomCameraToMeshBoundingInfoEventInterface>
}

/**
 * 深度遍历所有属性并设为可选
 */
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[] ? DeepPartial<U>[] : T[P] extends object ? DeepPartial<T[P]> : T[P]
}

/**
 * 纹理转换引擎
 */
declare class TextureTransformEngine {
  canvas: HTMLCanvasElement
  protected engine: Engine
  protected scene: Scene
  constructor()
  init(): void
  /**
   * 已有场景下将hdr文件转换为env贴图文件
   * @param file 上传文件的file
   * @returns
   */
  convertHDRToEnvTextureFile(file: File): Promise<IConvertToFileInterface>
  /**
   * 已有场景下将jpg文件转换为env贴图文件
   * @param file 上传文件的file
   * @returns
   */
  convertJPGToEnvTextureFile(file: File): Promise<IConvertToFileInterface>
  /**
   * 销毁当前场景
   */
  dispose(): void
}

/**
 * 觅她3D引擎
 */
declare class Meta3DEngine extends BasicEngine {
  /**引擎版本 */
  readonly version: string
  /**加载操作类 */
  private loader?
  private screenShot?
  /**相机操作类 */
  private cameraOperate?
  /**场景操作类 */
  private sceneOperate?
  /**灯光操作类 */
  private lightOperate?
  /**材质操作类 */
  private materialOperate?
  /**线框操作类 */
  private wireframeOperate?
  /**后处理操作类 */
  private postProcessOperate?
  private modelInteractiveOperate?
  private animationOperate?
  private modelOperate?
  private globalState
  /**预设初始参数 */
  private presetsInitParam
  /**是否进行过预设值,默认为false */
  private hasBeenPresets
  /**
   * 场景加载完毕订阅
   * @description 用于监听场景模型是否加载完毕
   * @example
   * ```
   * //示例
   * meta3DEngine.onSceneLoaded.add(()=>{
   *    //do someting
   * })
   * ```
   */
  onSceneLoaded: GlobalState["onSceneLoaded"]
  /**
   * 场景加载进度订阅
   * @description 用于监听场景模型加载的进度
   * @example
   * ```
   * //示例
   * meta3DEngine.onSceneProgressed.add((progress)=>{
   *    //do someting
   * })
   * ```
   */
  onSceneProgressed: GlobalState["onSceneProgressed"]
  /**
   * 场景加载报错订阅
   * @description 用于监听场景模型报错时监听
   * @example
   * ```
   * //示例
   * meta3DEngine.onLoadedError.add((res)=>{
   *    //do someting
   * })
   * ```
   */
  onLoadedError: GlobalState["onLoadedError"]
  /**
   * webgl上下文丢失事件监听
   * @description 用于监听3D场景上下文丢失
   * @example
   * ```
   * //示例
   * meta3DEngine.onContextLostEvent.add((res)=>{
   *    //do someting
   * })
   * ```
   */
  onContextLostEvent: GlobalState["onContextLostEvent"]
  /**服务器资源路径 */
  static ServerResourceURL: string
  /**贴图纹理的转换引擎 */
  static TextureTransformEngine: typeof TextureTransformEngine
  /**
   * Meta3D引擎的实例化
   * @param canvasId 页面上canvas的id
   */
  constructor(canvasId: string)
  /**
   * 引擎初始化调用
   * @description 必须在dom加载完成之后调用
   * @param engineConfig 引擎的配置参数
   * @example
   * ```
   * //让相机做过渡动画
   * meta3DEngine.init({
   *  transitionCamera: true
   * })
   * ```
   */
  init(engineConfig?: Partial<IEngineConfigInterface>): void
  /**
   * 显示调试工具
   */
  showInspector(): void
  /**
   * 加载File文件模型
   * @param file File类型
   */
  loadFile(file: File): void
  /**
   * 通过url加载模型(gltf,glb)
   * @param modelURL 模型的url
   * @param extension 格式
   */
  loadModelUrl(modelURL: string, extension?: string): void
  /**
   * 通过url加载mta格式模型
   * @param modelURL 通过url加载模型(mta)
   * @param key 秘钥
   * @param iv 初始向量
   */
  loadModelUrlByMTA(modelURL: string, key: string, iv: string): void
  /**
   * drop时读取的File文件
   * @param event DragEvent事件
   */
  dropLoadFiles(event: DragEvent): void
  /**************************************设置******************************************/
  /**
   * 设置背景类型
   * @param type 类型 color | image | enviroment
   * @param value  背景值，color的话是十六进制字符串, image的话为true或者false, enviroment的话为true或者false
   * ```
   * //示例1 设置场景背景颜色值
   * meta3DEngine.setBackground("color", "#dddddd")
   * ```
   */
  setBackground(type: IBackgroundType, value: string | boolean): void
  /**
   * 通过路径设置背景图片
   * @param url 背景图片路径
   */
  setBackgroundImageByUrl(url: string): void
  /**
   * 设置场景的开启关闭
   * @param value true为开启，false为关闭,关闭时背景是透明的
   */
  setBackgroundEnable(value: boolean): void
  /**
   * 设置线框参数,开关和线框宽度与颜色
   * @param property 属性名称
   * @param value 属性值
   */
  setWireframeParam(property: string, value: boolean | number | string): void
  /**
   * 设置阴影地面的参数
   * @param property 属性名称
   * @param value 属性值
   * ```
   * //设置阴暗程度
   * meta3DEngine.setShadowGroundParam("darkness", 0.5)
   * ```
   */
  setShadowGroundParam(property: string, value: boolean | number): void
  /**
   * 设置环境球参数
   * @param property 属性名称
   * @param value 属性值
   * ```
   * //设置环境球强度
   * meta3DEngine.setShadowGroundParam("intensity", 0.5)
   * ```
   */
  setEnvironmentParam(property: string, value: number | boolean): void
  /**
   * 设置环境球的hdr的id
   * @param id 环境球hdr的id,切换hdr环境球时使用
   * @deprecated 已改用setEnvironmentHDRByUrl
   */
  setEnvironmentHDRId(id: number): void
  /**
   * 通过路径设置环境球
   * @param url hdr资源路径
   * @deprecated 已改用setEnvironmentHDRByUrl
   */
  setEnvironmentHDRURL(url: string, id?: number): void
  /**
   * 通过url设置环境球
   * @param url 环境球hdr的url
   */
  setEnvironmentHDRByUrl(url: string): void
  /**
   * 设置环境球下灯光阴影的参数
   * @param property 属性名称
   * @param value 属性值
   * ```
   * //示例设置环境球灯光阴影的参数
   * meta3DEngine.setShadowGroundParam("lightIntensity", 0.5)
   * ```
   */
  setEnvironmentLightShadowParam(property: string, value: number | boolean): void
  /**
   * 设置相机参数
   * @param property 属性名称
   * @param value 属性值
   */
  setCameraParam(property: string, value: number): void
  /**
     * 设置播放动画的参数
     * @param property 属性名称 isPlaying | currentFrame | animationIndex
     * @param value 属性值
     * @example
     * ```
     * //暂停
     * meta3DEngine.setAnimationParam('isPlaying', false);
     
     * //设置某帧
     * meta3DEngine.setAnimationParam('currentFrame', 5);
     * ```
     */
  setAnimationParam(property: string, value: boolean | number): void
  /**
   * 更新通道贴图
   * @param materialId 材质id
   * @param channelName 通道名称
   * @param imgFile 图片文件
   */
  updateChannelTexture(materialId: number, channelName: IChannelName, imgFile: File): Promise<boolean>
  /**
   * 删除通道贴图
   * @param materialId 材质id
   * @param channelName 通道名称
   */
  deleteChannelTexture(materialId: number, channelName: string): void
  /**
   * 设置选中材质id
   * @param materialId
   */
  setSelectMaterialId(materialId: number): void
  /**
   * 设置outline效果的开启关闭
   * @param enable
   */
  setOutlineEnable(enable: boolean): void
  /**
   * 设置outline颜色
   * @param color 颜色
   */
  setOutlineColor(color: string): void
  /**
   * 设置outline线的宽度
   * @param lineWidth 宽度值
   */
  setOutlineWidth(lineWidth: number): void
  /**
   * 设置mesh是否可以pick(鼠标点击拾取)
   * @param enable
   */
  setIsPickable(enable: boolean): void
  /**
   * 公有调用
   * @param value 值
   * @param callBackName 调用的函数名
   */
  pulicCalls(value: number | string, callBackName?: string): void
  /**
   * 通过材质id设置材质参数
   * @param materialId 材质id
   * @param datas 材质属性和值
   */
  setMaterialParam(materialId: number, datas: IMaterialSetValueType): void
  /**
   * 通过材质name设置材质参数
   * @param materialName 材质name
   * @param datas 材质属性和值
   */
  setMaterialParamByName(materialName: string, datas: IMaterialSetValueType): void
  /**
   * 通过材质名称设置材质的环境反射强度
   * @param materialName 材质名称
   * @param datas 属性和值
   */
  setMaterialEnvironmentIntensityByName(materialName: string, datas: IMaterialSetValueType): void
  /**
   * 通过材质id设置材质通道参数
   * @param materialId 材质id
   * @param datas 通道名称、属性和值
   */
  setChannelParam(materialId: number, datas: IChannelSetValueType): void
  /**
   * 通过材质名称设置材质通道参数
   * @param materialId 材质id
   * @param datas 通道名称、属性和值
   */
  setChannelParamByMaterialName(materialName: string, datas: IChannelSetValueType): void
  /**
   * 设置材质贴图属性设置
   * @param textureId 贴图id
   * @param datas 通道名称、属性和值
   *
   ***datas详情**
   * | property | value | 描述 |
   * |:---:|:---:|:---:|
   * | filter | string | 滤波值 |
   * | wrapU | string | 包裹S |
   * | wrapV | string | 包裹T |
   * | texCoordUnit | number | UV值 |
   * | uvTransformScaleX | number | U缩放值 |
   * | uvTransformScaleY | number | V缩放值 |
   * | uvTransformOffsetX | number | U偏移量 |
   * | uvTransformOffsetY | number | V偏移量 |
   * | uvTransformRotation | number | 旋转角度 |
   */
  setTextureParam(textureId: number, datas: ITextureSetValueType): void
  /**
   * 切换材质的通道贴图(在场景中已有的贴图基础上切换)
   * @param materialId 材质id
   * @param channelName 通道名称
   * @param textureId 贴图id
   */
  changeMaterialChannelTexture(materialId: number, channelName: IChannelName, textureId: number): void
  /**
   * 设置后处理总开关
   * @param value 开启或关闭
   */
  setPostProcessingTotalEnable(value: boolean): void
  /**
   * 设Bloom参数,包含开关与参数值
   * @param property 属性名称
   * @param value 属性值
   */
  setBloomParam(property: string, value: number | boolean): void
  /**
   * 设SSAO参数,包含开关与参数值
   * @param property 属性名称
   * @param value 属性值
   */
  setSSAOParam(property: string, value: number | boolean): void
  /**
   * 设SSR参数,包含开关与参数值
   * @param property 属性名称
   * @param value 属性值
   */
  setSSRParam(property: string, value: number | boolean): void
  /**
   * 设TAA参数
   * @param property 属性名称
   * @param value 属性值
   */
  setTAAParam(property: string, value: number | boolean): void
  /**
   * 设置Vignette参数，包含开关与参数值
   * @param property 属性名称
   * @param value 属性值
   */
  setVignetteParam(property: string, value: number | boolean | string): void
  /**
   * 设置DepthOfField参数，包含开关与参数值
   * @param property 属性名称
   * @param value 属性值
   */
  setDepthOfFieldParam(property: string, value: number | boolean): void
  /**
   * 设置Grain参数，包含开关与参数值
   * @param property 属性名称
   * @param value 属性值
   */
  setGrainParam(property: string, value: number | boolean): void
  /**
   * 设置Sharpen参数，包含开关与参数值
   * @param property 属性名称
   * @param value 属性值
   */
  setSharpenParam(property: string, value: number | boolean): void
  /**
   * 设置Fxaa参数，只有开关
   * @param property 属性名称
   * @param value 属性值
   */
  setFxaaParam(property: string, value: boolean): void
  /**
   * 预设初始化参数,在初始化之前
   * @param initParam
   */
  presetsInitialParam(initParam: DeepPartial<ISettingParamInfoInterface>): void
  /**
   * 设置预设参数
   * @param presetsParam
   */
  private setPresetParam
  /**
   * 显示场景的小工具
   * @param visible true为显示，false为隐藏
   */
  showSceneGizmo(visible?: boolean): void
  /**
   * 放大选中材质
   * @param materialId 材质id
   * @param isZoom 是否进行放大
   */
  enlargeSelectMaterial(materialId: number, isZoom: boolean): void
  /**
   * 读取来自服务端存储的材质列表信息
   * @param materialList 材质列表信息
   */
  readMaterialListFromServer(materialList: IMaterialCollectInfoType[]): void
  /**
   * 已有场景下将hdr文件转换为env贴图文件
   * @param file 上传文件的file
   * @returns
   */
  convertHDRToEnvTextureFile(file: File): Promise<IConvertToFileInterface> | undefined
  /**
   * 已有场景下将jpg文件转换为env贴图文件
   * @param file 上传文件的file
   * @returns
   */
  convertJPGToEnvTextureFile(file: File): Promise<IConvertToFileInterface> | undefined
  /**
   * 添加动画监听函数
   * @param fn 动画播放时调用的函数
   * @example
   * ```
   * //示例
   * meta3DEngine.addAnimationListen(({currentFrame})=>{
   *    //do something
   * });
   * ```
   */
  addAnimationListen(fn: AnimationListenFunctionType): void
  /**
   * 获取贴图文件列表
   * @returns
   */
  getTextureFileList(): ITextureFile[]
  /**
   * 更新纹理贴图的服务端id
   * @param uniqueId 3D引擎中贴图的id
   * @param requestId 服务端资源id
   */
  updateTextureRequestId(uniqueId: number, requestId: string): void
  /**
   * 通过File文件上传本地贴图
   * @param imgFile file文件
   */
  uploadLocalTextureWithFile(imgFile: File): Promise<boolean>
  /**
   * 将通道贴图设为空(前端对应取消选中功能)
   * @param materialId 材质id
   * @param channelName 通道名称
   */
  emptyChannelTexture(materialId: number, channelName: IChannelName): void
  /**
   * 通过贴图的id删除贴图
   * @param textureId 贴图的id
   */
  deleteTextureById(textureId: number): void
  setLowerRadiusLimitRatio(value: number): void
  setRadiusScale(value: number): void
  setUpperRadiusLimitRatio(value: number): void
  setWheelDeltaPercentage(value: number): void
  setPinchDeltaPercentage(value: number): void
  /**
   * 设置是否开启相机平移
   * @param enable
   */
  setEnablePanning(enable: boolean): void
  /**
   * 设置是否开启相机缩放
   * @param enable
   */
  setEnableZoom(enable: boolean): void
  /**
   * 设置toneMapping的开启关闭
   * @param enable 开关
   */
  setToneMappingEnable(enable: boolean): void
  /**
   * 设置toneMappingType
   * @param type Standard | ACES | PBRNeutral
   */
  setToneMappingType(type: IToneMappingType): void
  /*************************************获取********************************************************/
  /**
   * 获取预览图像
   */
  private getPreviewImage
  /**
   * 获取六视图图片
   */
  private getSixViewsImage
  /**
   * 获取屏幕截图
   * @param width 默认960宽度
   * @param height 默认540宽度
   * @param x — 开始截取的区域x横坐标(默认0)
   * @param y — 开始截取的区域y横坐标(默认0)
   * @param forcedChange 是否强制以传入的宽高自适应截图，默认为false
   * @returns 返回图片base64数据
   */
  getScreenshot(width?: number, height?: number, x?: number, y?: number, forcedChange?: boolean): Promise<string> | undefined
  /**
   * 获取模型基础信息，如顶点数量、面数、贴图数量等..
   * @returns
   */
  getModelInfo(): IModelInfo | undefined
  /**
   * 获取材质名称列表
   * @returns
   */
  getCollectMaterialNameList(): IMaterialNameCollectInterface[]
  /**
   * 获取材质的信息(给到数据库)
   * @param id 材质的id
   * @returns
   */
  getMaterialCollectInfo(id: number): IMaterialCollectInfoType | undefined
  /**
   * 获取材质信息到前端UI展示
   * @param id 材质的id
   * @returns
   */
  getMaterialInfoToFrontEnd(id: number): IMaterialInfoToFrontEndType | undefined
  /**
   * 获取贴图列表信息到前端(用于前端页面使用)
   * @returns
   */
  getTextureListInfoToFrontEnd(): ITextureToFrontEndType[]
  /**
   * 获取贴图调整信息返回给前端(用于前端页面使用)
   * @param textureId 贴图id
   */
  getTextureInfoByIdToFrontEnd(textureId: number): ITextureToFrontEndType | undefined
  /**
   * 获取材质的uv选择列表
   * @param id 材质的id
   */
  getMaterialUVSelectList(id: number): ISelectType[]
  /**
   * 获取所有Images资源列表
   * @returns
   */
  getAllImagesListAsync(): Promise<IImageSourcesType[]>
  /**
   * 获取所有缩略图的canvas展示
   * @returns
   */
  getAllImageCanvasList(): Promise<IImageCanvasSourcesInterface[]>
  /**
   * 获取所有材质的信息到后端
   * @returns
   */
  getAllMaterialCollectInfo(): IMaterialCollectInfoType[]
  /**
   * 获取贴图Filtering的选项
   * @returns
   */
  getFilteringOptions(): ISelectType[]
  /**
   * 获取贴图Wrap的选项
   * @returns
   */
  getWrapOptions(): ISelectType[]
  /**
   * 获取贴图Format的选项
   * @returns
   */
  getFormatOptions(): ISelectType[]
  getMaterial(materialName: string): void
  /**
   *获取编辑设置参数到前端使用
   * @returns
   */
  getEditorSettingParamToFrontEnd(): ISettingParamInfoInterface
  /**
   * 获取模型动画信息
   */
  getModelAnimationInfo(): IAnimationInfoInterface | undefined
  /**
   * 场景背景图片资源数据
   * @returns
   */
  static GetSceneBackgroundImageResourcesData(): ILocalResourcesInterface[]
  /**
   * 获取场景环境球资源数据
   * @returns
   */
  static GetSceneEnvironmentResourcesData(): ILocalResourcesInterface[]
  /**
   * 通过贴图id查找与材质通道的关联信息
   * @param textureId
   * @returns
   */
  findTextureWithMaterialChannelInfoById(textureId: number): ITextureCorrelationMaterialInfoInterface[]
  /**
   * 获取透明模式列表
   * @returns
   */
  getTransparentModeList(): ISelectType[]
  /**
   * 获取模型纹理数量是否变化
   * @returns 返回true或者false
   */
  getTextureQuantityChange(): boolean
  /**
   * 导出glb文件对象
   */
  exportGLBAsync(): Promise<Blob>
  /**
   * 导出mita格式
   * @param key 密钥
   * @param iv 初始向量
   * @param name 文件名称
   */
  exportMitaFileAsync(key: string, iv: string, name?: string): Promise<File>
  /**
   * 用于场景的销毁
   * @description 须在组件销毁之前调用
   */
  dispose(): void
  disposeGlobalState(): void
  private initTest
  /**
   * 添加渲染回调,每帧调用
   * @param fn 回调函数
   */
  onRenderCallback(fn: () => void): void
  /**
   * 相机准备完成的监听函数(加载模型时的初始截图可以在这里面做)
   * @param fn 回调函数
   * @example
   * ```
   * //示例
   * meta3DEngine.onCameraReadyCompleteListen(()=>{
   *    //do someting
   *    //meta3DEngine.getScreenshot();
   * })
   * ```
   */
  onCameraReadyCompleteListen(fn: () => void): void
  /**
   * 获取编辑器设置参数的默认值
   */
  static GetEditorSettingParamDefaultData: () => ISettingParamInfoInterface
  /**
   * 鼠标拾取3D模型选中时的监听
   * @param fn 回调函数,回调函数返回模型id和材质id
   * @example
   * ```
   * //示例
   * meta3DEngine.onModelSeclectListen((info)=>{
   *    //do someting
   * })
   * ```
   */
  onModelSeclectListen(fn: (info: IModelSelectInfoInterface) => void): void
  /**
   * 获取当前引擎配置参数
   * @returns 返回引擎配置对象
   */
  getEngineConfig(): IEngineConfigInterface
}
/**
 * Meta3DEngine引擎的类型
 */
type Meta3DEngineType = InstanceType<typeof Meta3DEngine>

export {
  type AnimationListenFunctionType,
  type DeepPartial,
  type IAnimationInfoInterface,
  type IAnimationItemDataInterface,
  type IAnimationListenParamInterface,
  type IBackgroundInfoInterface,
  type IBackgroundType,
  type IBloomInterface,
  type ICameraInfoInterface,
  type IChannelBaseInterface,
  type IChannelInfoType,
  IChannelName,
  type IChannelSetValueType,
  type IChannelType,
  type IColorValueType,
  type IConvertToFileInterface,
  type IDataInfo,
  type IDepthOfFieldInterface,
  type IEngineConfigInterface,
  type IEnvironmentInfoInterface,
  type IFXAAInterface,
  type IFromSourceType,
  type IGrainInterface,
  type IImageCanvasSourcesInterface,
  type IImageSourcesType,
  type ILoadedErrorType,
  type ILocalResourcesInterface,
  type IMaterialChannelsInfoStoreInterface,
  type IMaterialCollectInfoType,
  type IMaterialCollectToUIListType,
  type IMaterialCollectToUIType,
  type IMaterialInfoStoreType,
  type IMaterialInfoToFrontEndChannelType,
  type IMaterialInfoToFrontEndType,
  type IMaterialNameCollectInterface,
  type IMaterialPropetyToFrontEndInterface,
  type IMaterialSetValueType,
  type IMaterialStoreKeyType,
  type IModelInfo,
  type IModelSelectInfoInterface,
  type IOrientationInfoInterface,
  IPBRWorkFlow,
  type IPackageDataType,
  type IParseHDRFileInfoInterface,
  type IParseJPGEquiRectangularInfoInterface,
  type IPostProcessInfoInterface,
  type IRequestTextureFileInterface,
  type ISSAOInterface,
  type ISSRInterface,
  type ISettingParamInfoInterface,
  type IShadowInfoInterface,
  type IShadowType,
  type ISharpenInterface,
  type ITAAInterface,
  type ITextureCorrelationMaterialInfoInterface,
  type ITextureFile,
  type ITextureIndexToGltfInterface,
  type ITextureInformationInterface,
  type ITextureSetValueType,
  type ITextureToFrontEndType,
  type ITextureValueType,
  type IToneMappingType,
  type ITonemappingInterface,
  type ITransformValueType,
  type IUVTransformType,
  type IVector3Interface,
  type IVignetteInterface,
  type IWireframeInfoInterface,
  type InfoType,
  MaterialTransparencyMode,
  type Meta3DEngineType,
  TextureTransformEngine,
  Meta3DEngine as default
}
