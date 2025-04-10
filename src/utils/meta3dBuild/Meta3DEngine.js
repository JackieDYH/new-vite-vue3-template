import { MeshBuilder as e } from "@babylonjs/core/Meshes/meshBuilder"
import { HemisphericLight as t } from "@babylonjs/core/Lights/hemisphericLight"
import { Vector3 as a, Matrix as i, Quaternion as r } from "@babylonjs/core/Maths/math.vector"
import { round as n, merge as s, isNumber as o } from "lodash-es"
import { Engine as l } from "@babylonjs/core/Engines/engine"
import { Scene as c } from "@babylonjs/core/scene"
import { ArcRotateCamera as h } from "@babylonjs/core/Cameras/arcRotateCamera"
import { Color3 as u, Color4 as d } from "@babylonjs/core/Maths/math.color"
import { Texture as m } from "@babylonjs/core/Materials/Textures/texture"
import { CubeTexture as p } from "@babylonjs/core/Materials/Textures/cubeTexture"
import { Tools as b } from "@babylonjs/core/Misc/tools"
import { Observable as g } from "@babylonjs/core/Misc/observable"
import { DracoCompression as f } from "@babylonjs/core/Meshes/Compression/dracoCompression"
import "@babylonjs/core/Materials/Textures/Loaders/envTextureLoader"
import "@babylonjs/core/Materials/Textures/Loaders/ktxTextureLoader"
import "@babylonjs/core/Materials/Textures/Loaders/hdrTextureLoader"
import "@babylonjs/core/Materials/Textures/Loaders/basisTextureLoader"
import "@babylonjs/core/Rendering"
import { Mesh as v } from "@babylonjs/core/Meshes/mesh"
import { SubMesh as P } from "@babylonjs/core/Meshes/subMesh"
import { VertexBuffer as x } from "@babylonjs/core/Buffers/buffer"
import { EngineStore as T } from "@babylonjs/core/Engines"
import { SceneLoader as M } from "@babylonjs/core/Loading/sceneLoader"
import { FilesInput as y } from "@babylonjs/core/Misc/filesInput"
import { AbstractMesh as S } from "@babylonjs/core/Meshes/abstractMesh"
import "@babylonjs/loaders/glTF"
import { GLTFFileLoader as O } from "@babylonjs/loaders/glTF/glTFFileLoader"
import { GLTFLoader as I, ArrayItem as w } from "@babylonjs/loaders/glTF/2.0/glTFLoader"
import { PBRMaterial as E } from "@babylonjs/core/Materials/PBR/pbrMaterial"
import { MultiMaterial as C } from "@babylonjs/core/Materials/multiMaterial"
import { TransformNode as R } from "@babylonjs/core/Meshes/transformNode"
import A from "crypto-es"
import { DumpTools as F } from "@babylonjs/core/Misc/dumpTools"
import { RenderTargetTexture as L } from "@babylonjs/core/Materials/Textures/renderTargetTexture"
import { CreateBox as k } from "@babylonjs/core/Meshes/Builders/boxBuilder"
import { Layer as j } from "@babylonjs/core/Layers/layer"
import { ImageProcessingConfiguration as B } from "@babylonjs/core/Materials/imageProcessingConfiguration"
import { Camera as _ } from "@babylonjs/core/Cameras/camera"
import { Effect as D } from "@babylonjs/core/Materials/effect"
import { Light as G } from "@babylonjs/core/Lights/light"
import { FramingBehavior as N } from "@babylonjs/core/Behaviors/Cameras/framingBehavior"
import { Animation as U } from "@babylonjs/core/Animations/animation"
import { Spherical as z } from "@babylonjs/core/Maths/math.polar"
import { DirectionalLight as H } from "@babylonjs/core/Lights/directionalLight"
import { BoundingBox as V } from "@babylonjs/core/Culling/boundingBox"
import { ShadowGenerator as W } from "@babylonjs/core/Lights/Shadows/shadowGenerator"
import "@babylonjs/core/Lights/Shadows/shadowGeneratorSceneComponent"
import { ShadowOnlyMaterial as q } from "@babylonjs/materials/shadowOnly/shadowOnlyMaterial"
import { TextureTools as $ } from "@babylonjs/core/Misc/textureTools"
import { GenerateBase64StringFromTexture as X } from "@babylonjs/core/Misc/copyTools"
import { StandardMaterial as Y } from "@babylonjs/core/Materials/standardMaterial"
import { DefaultRenderingPipeline as Z } from "@babylonjs/core/PostProcesses/RenderPipeline/Pipelines"
import { SSAORenderingPipeline as Q } from "@babylonjs/core/PostProcesses/RenderPipeline/Pipelines/ssaoRenderingPipeline"
import { SSRRenderingPipeline as K } from "@babylonjs/core/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline"
import { TAARenderingPipeline as J } from "@babylonjs/core/PostProcesses/RenderPipeline/Pipelines/taaRenderingPipeline"
import { PostProcessRenderPipelineManager as ee } from "@babylonjs/core/PostProcesses/RenderPipeline/postProcessRenderPipelineManager"
import { GizmoManager as te } from "@babylonjs/core/Gizmos/gizmoManager"
import { PointerEventTypes as ae } from "@babylonjs/core/Events/pointerEvents"
import { GridMaterial as ie } from "@babylonjs/materials"
import { HighlightLayer as re } from "@babylonjs/core/Layers/highlightLayer"
import { HDRCubeTexture as ne } from "@babylonjs/core/Materials/Textures/hdrCubeTexture"
import { EquiRectangularCubeTexture as se } from "@babylonjs/core/Materials/Textures/equiRectangularCubeTexture"
import { HDRFiltering as oe } from "@babylonjs/core/Materials/Textures/Filtering/hdrFiltering"
import { EnvironmentTextureTools as le } from "@babylonjs/core/Misc/environmentTextureTools"
import { FilesInputStore as ce } from "@babylonjs/core/Misc/filesInputStore"
import { _GLTFMaterialExporter as he } from "@babylonjs/serializers/glTF/2.0/glTFMaterialExporter"
import { Constants as ue } from "@babylonjs/core/Engines/constants"
import { GLTF2Export as de, _Exporter as me } from "@babylonjs/serializers/glTF/2.0/index"
import { _Exporter as pe } from "@babylonjs/serializers/glTF/2.0/glTFExporter"
;(c.prototype.getRootMesh = function () {
  return this.getMeshByName("__root__")
}),
  (u.prototype.setHexString = function (e) {
    return this.copyFrom(u.FromHexString(e)), this
  }),
  (v.prototype._convertToUnIndexedMesh = function (e = !1) {
    const t = this.getVerticesDataKinds().filter((e) => !this.getVertexBuffer(e)?.getIsInstanced()),
      a = this.getIndices(),
      i = {},
      r = (e, t) => {
        const i = new Float32Array(a.length * t)
        let r = 0
        for (let n = 0; n < a.length; n++) for (let s = 0; s < t; s++) i[r++] = e[a[n] * t + s]
        return i
      },
      n = this.getBoundingInfo(),
      s = this.geometry ? this.subMeshes.slice(0) : []
    for (const e of t) i[e] = this.getVerticesData(e)
    for (const n of t) {
      const t = this.getVertexBuffer(n),
        s = t.getSize()
      if (e && n === x.NormalKind) {
        const e = this._getFlattenedNormals(a, i[x.PositionKind])
        this.setVerticesData(x.NormalKind, e, t.isUpdatable(), s)
      } else this.setVerticesData(n, r(i[n], s), t.isUpdatable(), s)
    }
    if (this.morphTargetManager) {
      for (let t = 0; t < this.morphTargetManager.numTargets; t++) {
        const i = this.morphTargetManager.getTarget(t),
          n = i.getPositions()
        i.setPositions(r(n, 3))
        const s = i.getNormals()
        s && i.setNormals(e ? this._getFlattenedNormals(a, n) : r(s, 3))
        const o = i.getTangents()
        o && i.setTangents(r(o, 3))
        const l = i.getUVs()
        l && i.setUVs(r(l, 2))
      }
      this.morphTargetManager.synchronize()
    }
    for (let e = 0; e < a.length; e++) a[e] = e
    this.setIndices(a), (this._unIndexed = !0), this.releaseSubMeshes()
    for (const e of s) {
      const t = e.getBoundingInfo()
      P.AddToMesh(e.materialIndex, e.indexStart, e.indexCount, e.indexStart, e.indexCount, this).setBoundingInfo(t)
    }
    return this.setBoundingInfo(n), this.synchronizeInstances(), this
  })
function be() {
  for (
    var e = [
        "Android",
        "iPhone",
        "iPad",
        "iPod",
        "BlackBerry",
        "Windows Phone",
        "Opera Mini",
        "IEMobile",
        "Mobile",
        "Opera Mobi"
      ],
      t = navigator.userAgent || navigator.vendor,
      a = 0;
    a < e.length;
    a++
  )
    if (t.indexOf(e[a]) > -1) return !0
  return !1
}
function ge(e, t) {
  return n(e, t)
}
f.Configuration = {
  decoder: {
    wasmUrl: "/draco/draco_wasm_wrapper_gltf.js",
    wasmBinaryUrl: "/draco/draco_decoder_gltf.wasm",
    fallbackUrl: "/draco/draco_decoder_gltf.js"
  }
}
class fe {
  constructor(e) {
    Object.defineProperty(this, "canvasDom", { enumerable: !0, configurable: !0, writable: !0, value: null }),
      Object.defineProperty(this, "engine", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "scene", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "camera", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "doRender", { enumerable: !0, configurable: !0, writable: !0, value: !0 }),
      Object.defineProperty(this, "renderSuccess", { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
      Object.defineProperty(this, "_engineResize", { enumerable: !0, configurable: !0, writable: !0, value: () => {} }),
      Object.defineProperty(this, "onWindowResizeObservable", { enumerable: !0, configurable: !0, writable: !0, value: new g() }),
      Object.defineProperty(this, "isMobile", { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
      Object.defineProperty(this, "autoMobileDeviceRatio", { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
      Object.defineProperty(this, "autoAdaptaDeviceRatio", { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
      Object.defineProperty(this, "_engineFullScreen", { enumerable: !0, configurable: !0, writable: !0, value: () => {} }),
      Object.defineProperty(this, "_initDefaultHDRId", { enumerable: !0, configurable: !0, writable: !0, value: -1 }),
      Object.defineProperty(this, "engineConfig", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: {
          transitionCamera: !1,
          transitionTime: 1.3,
          HDRUrl: "",
          backgroundImageUrl: "",
          lowerRadiusLimitRatio: 0.01,
          upperRadiusLimitRatio: 8,
          enablePanning: !0,
          enableZoom: !0,
          wheelDeltaPercentage: 0.01,
          pinchDeltaPercentage: 0.01,
          radiusScale: 1,
          toneMappingEnable: !1,
          environmentId: 12,
          backgroundImageId: 1,
          toneMappingType: "Standard",
          bindWireframe: !0,
          imageProcessingEnabled: !1,
          useAutoRotation: !1,
          idleRotationSpeed: 0.05,
          noPreventDefault: !1,
          autoAdaptaDeviceRatio: !0,
          maxDeviceRation: 1.5,
          autoMobileDeviceRatio: !0,
          mobileMaxRatio: 1.6
        }
      })
    let t = document.getElementById(e)
    t
      ? t instanceof HTMLCanvasElement && ((this.canvasDom = t), (this.renderSuccess = !0))
      : console.error("请检查canvasId是否正确，没有正确的canvasid将无法渲染")
  }
  init(e) {
    if ((e && (this.engineConfig = e), this.canvasDom))
      try {
        ;(this.isMobile = be()),
          this.readOptions(),
          this.initEngine(),
          this.setAutoDevicePixelRatio(),
          this.initScene(),
          this.initSceneEnvironment(),
          this.initCamera(),
          this.renderLoop(),
          this.bindEngineResize(),
          this.bindEngineFullScreen()
      } catch (e) {
        console.error("error:::", e)
      }
  }
  readOptions() {
    ;(this.autoMobileDeviceRatio = this.engineConfig.autoMobileDeviceRatio),
      (this.autoAdaptaDeviceRatio = this.engineConfig.autoAdaptaDeviceRatio)
  }
  initEngine() {
    this.engine = new l(this.canvasDom)
  }
  initScene() {
    this.engine && (this.scene = new c(this.engine))
  }
  initSceneEnvironment() {
    if (this.scene)
      if (((this.scene.clearColor = d.FromHexString("#DDDDDD")), this.engineConfig.HDRUrl)) {
        let e = p.CreateFromPrefilteredData(this.engineConfig.HDRUrl, this.scene)
        this.scene.environmentTexture = e
      } else console.error("HDRUrl路径无效..")
  }
  initCamera() {
    ;(this.camera = new h("mainCamera", 0, 0.4 * Math.PI, 10, new a(0, 0, 0), this.scene)),
      (this.camera.minZ = 0.01),
      (this.camera.fov = b.ToRadians(45)),
      (this.camera.lowerRadiusLimit = 0.01),
      (this.camera.wheelDeltaPercentage = 0.01),
      (this.camera.wheelPrecision = 0.02),
      this.camera?.attachControl(this.canvasDom, this.engineConfig.noPreventDefault),
      new h("sixViewCamera", Math.PI / 2, 0.8, 10, a.Zero(), this.scene)
  }
  renderLoop() {
    0 == this.doRender && this.scene?.render(),
      this.engine?.runRenderLoop(() => {
        this.doRender && this.scene?.render()
      })
  }
  bindEngineResize() {
    ;(this._engineResize = () => {
      ;(this.isMobile = be()), this.setAutoDevicePixelRatio(), this.onWindowResizeObservable.notifyObservers(!0)
    }),
      window.addEventListener("resize", this._engineResize)
  }
  removeEngineResize() {
    window.removeEventListener("resize", this._engineResize)
  }
  bindEngineFullScreen() {
    ;(this._engineFullScreen = () => {
      this.resize()
    }),
      document.addEventListener("fullscreenchange", this._engineFullScreen)
  }
  removeEngineFullScreen() {
    ;(this._engineFullScreen = () => {
      this.resize()
    }),
      document.removeEventListener("fullscreenchange", this._engineFullScreen)
  }
  setRenderSize(e, t) {
    "number" == typeof e && "number" == typeof t ? this.engine?.setSize(e, t) : console.error("请设置正确的宽高数字...")
  }
  resize(e) {
    this.engine?.resize(e)
  }
  setDefaultHDRId(e) {
    ;(this._initDefaultHDRId = e), (this.engineConfig.environmentId = e)
  }
  updateEngineConfig(e) {
    this.engineConfig = e
  }
  addWindowResizeEvent(e) {
    this.onWindowResizeObservable.add(e)
  }
  dispose() {
    this.removeEngineResize(),
      this.removeEngineFullScreen(),
      this.onWindowResizeObservable.clear(),
      (this.onWindowResizeObservable = null),
      this.scene?.meshes.forEach((e) => e.dispose()),
      this.scene?.lights.forEach((e) => e.dispose()),
      this.scene?.cameras.forEach((e) => e.dispose()),
      this.scene?.textures.forEach((e) => e.dispose()),
      this.scene &&
        (this.scene.dispose(),
        (this.scene.textures = []),
        (this.scene.geometries = []),
        (this.scene.meshes = []),
        (this.scene.transformNodes = []),
        (this.scene.animations = []),
        (this.scene.animationGroups = [])),
      this.engine?.dispose(),
      (T.Instances = []),
      (T._LastCreatedScene = null)
  }
  setAutoDevicePixelRatio() {
    const e = window.devicePixelRatio
    let t = 1
    if (this.autoMobileDeviceRatio && this.isMobile) {
      t = e >= 1 ? this.engineConfig.mobileMaxRatio : 1.2
      let a = t / e
      this.engine?.setHardwareScalingLevel(a)
    } else
      this.autoAdaptaDeviceRatio
        ? (e > 1 && (t = Math.max(this.engineConfig.maxDeviceRation, 1)), this.engine?.setHardwareScalingLevel(1 / t))
        : this.engine?.setHardwareScalingLevel(t)
  }
  getRenderCanvas() {
    return this.canvasDom
  }
}
m.OnTextureLoadErrorObservable.add((e) => {
  console.error("贴图加载错误...", e.name)
})
class ve {
  constructor() {
    Object.defineProperty(this, "renderWidth", { enumerable: !0, configurable: !0, writable: !0, value: 1 }),
      Object.defineProperty(this, "renderHeight", { enumerable: !0, configurable: !0, writable: !0, value: 1 }),
      Object.defineProperty(this, "screenShotQuality", { enumerable: !0, configurable: !0, writable: !0, value: 0.95 }),
      Object.defineProperty(this, "rootMesh", { enumerable: !0, configurable: !0, writable: !0, value: null }),
      Object.defineProperty(this, "metaTransformNode", { enumerable: !0, configurable: !0, writable: !0, value: null }),
      Object.defineProperty(this, "loadAnimationGroups", { enumerable: !0, configurable: !0, writable: !0, value: [] }),
      Object.defineProperty(this, "applyByPostProcess", { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
      Object.defineProperty(this, "hasBeenPresets", { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
      Object.defineProperty(this, "presetsInitParam", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "currentScene", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "onSceneLoaded", { enumerable: !0, configurable: !0, writable: !0, value: new g() }),
      Object.defineProperty(this, "onSceneProgressed", { enumerable: !0, configurable: !0, writable: !0, value: new g() }),
      Object.defineProperty(this, "onLoadedError", { enumerable: !0, configurable: !0, writable: !0, value: new g() }),
      Object.defineProperty(this, "onError", { enumerable: !0, configurable: !0, writable: !0, value: new g() }),
      Object.defineProperty(this, "onInternalSceneLoaded", { enumerable: !0, configurable: !0, writable: !0, value: new g() }),
      Object.defineProperty(this, "onInternalWindowResizeEvent", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: new g()
      }),
      Object.defineProperty(this, "onCameraReadyComplete", { enumerable: !0, configurable: !0, writable: !0, value: new g() }),
      Object.defineProperty(this, "engineConfig", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: {
          transitionCamera: !1,
          transitionTime: 1.3,
          HDRUrl: "",
          backgroundImageUrl: "",
          lowerRadiusLimitRatio: 0.01,
          upperRadiusLimitRatio: 8,
          enablePanning: !0,
          enableZoom: !0,
          wheelDeltaPercentage: 0.01,
          pinchDeltaPercentage: 0.01,
          radiusScale: 1,
          toneMappingEnable: !1,
          environmentId: 12,
          backgroundImageId: 1,
          toneMappingType: "Standard",
          bindWireframe: !0,
          imageProcessingEnabled: !1,
          useAutoRotation: !1,
          idleRotationSpeed: 0.05,
          noPreventDefault: !1,
          autoAdaptaDeviceRatio: !0,
          maxDeviceRation: 1.5,
          autoMobileDeviceRatio: !0,
          mobileMaxRatio: 1.6
        }
      }),
      Object.defineProperty(this, "onPickMeshObservable", { enumerable: !0, configurable: !0, writable: !0, value: new g() }),
      Object.defineProperty(this, "onModelSelectEvent", { enumerable: !0, configurable: !0, writable: !0, value: new g() }),
      Object.defineProperty(this, "onContextLostEvent", { enumerable: !0, configurable: !0, writable: !0, value: new g() }),
      Object.defineProperty(this, "onZoomCameraToMeshBoundingInfoEvent", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: new g()
      })
  }
}
class Pe extends I {
  constructor(e) {
    super(e)
  }
  loadTextureInfoAsync(e, t, a = () => {}) {
    let i = this
    const r = i._extensionsLoadTextureInfoAsync(e, t, a)
    if (r) return r
    if ((this.logOpen(`${e}`), t.texCoord >= 6)) throw new Error(`${e}/texCoord: Invalid value (${t.texCoord})`)
    let n = i._gltf.textures
    const s = w.Get(`${e}/index`, n, t.index)
    s._textureInfo = t
    const o = this._loadTextureAsync(`/textures/${t.index}`, s, (r) => {
      ;(r.coordinatesIndex = t.texCoord || 0),
        I.AddPointerMetadata(r, e),
        I.AddPointerMetadata(r, `source#image#${t.index}`),
        i._parent.onTextureLoadedObservable.notifyObservers(r),
        a(r)
    })
    return this.logClose(), o
  }
}
var xe
;(O._CreateGLTF2Loader = (e) => new Pe(e)),
  (function (e) {
    ;(e[(e.LOADING = 0)] = "LOADING"), (e[(e.READY = 1)] = "READY"), (e[(e.COMPLETE = 2)] = "COMPLETE")
  })(xe || (xe = {}))
class Te extends O {
  constructor() {
    super(...arguments),
      Object.defineProperty(this, "name", { enumerable: !0, configurable: !0, writable: !0, value: "mita" }),
      Object.defineProperty(this, "extensions", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: { ".mta": { isBinary: !0 } }
      })
  }
  createPlugin() {
    return new Te()
  }
}
;(Te.prototype._getLoader = function (e) {
  const t = e.json.asset || {}
  this._log(`Asset version: ${t.version}`),
    t.minVersion && this._log(`Asset minimum version: ${t.minVersion}`),
    t.generator && this._log(`Asset generator: ${t.generator}`)
  const a = Te._parseVersion(t.version)
  if (!a) throw new Error("Invalid version: " + t.version)
  if (void 0 !== t.minVersion) {
    const e = Te._parseVersion(t.minVersion)
    if (!e) throw new Error("Invalid minimum version: " + t.minVersion)
    if (Te._compareVersion(e, { major: 2, minor: 0 }) > 0) throw new Error("Incompatible minimum version: " + t.minVersion)
  }
  const i = { 1: O._CreateGLTF1Loader, 2: Te._CreateGLTF2Loader }[a.major]
  if (!i) throw new Error("Unsupported version: " + t.version)
  return i(this)
}),
  M && M.RegisterPlugin(new Te())
class Me extends I {
  constructor(e) {
    super(e)
  }
  loadTextureInfoAsync(e, t, a = () => {}) {
    let i = this
    const r = i._extensionsLoadTextureInfoAsync(e, t, a)
    if (r) return r
    if ((this.logOpen(`${e}`), t.texCoord >= 6)) throw new Error(`${e}/texCoord: Invalid value (${t.texCoord})`)
    let n = i._gltf.textures
    const s = w.Get(`${e}/index`, n, t.index)
    s._textureInfo = t
    const o = this._loadTextureAsync(`/textures/${t.index}`, s, (r) => {
      ;(r.coordinatesIndex = t.texCoord || 0),
        I.AddPointerMetadata(r, e),
        I.AddPointerMetadata(r, `source#image#${t.index}`),
        i._parent.onTextureLoadedObservable.notifyObservers(r),
        a(r)
    })
    return this.logClose(), o
  }
}
Te._CreateGLTF2Loader = (e) => new Me(e)
const ye = "hdrSkyBox",
  Se = "ground",
  Oe = "bottomGrid",
  Ie = "gizmoTransformNode",
  we = "Meta_model"
function Ee(e, t) {
  let a = (function (e) {
      let t = 0,
        a = 0
      return (
        e.getChildMeshes().forEach(function (e) {
          let a = e.getTotalIndices()
          t += 0 !== a ? a : e.getTotalVertices()
        }),
        (a = t / 3),
        a
      )
    })(e),
    i = (function (e) {
      let t = 0
      return (
        e.getChildMeshes().forEach(function (e) {
          t += e.getTotalVertices()
        }),
        t
      )
    })(e),
    r = Le(e),
    n = (function (e) {
      let t = new Set()
      return (
        Ce(e, (e) => {
          t.add(e.uniqueId)
        }),
        t.size
      )
    })(e),
    s = (function (e) {
      let t = !1,
        a = e.getChildMeshes()
      for (let e = 0; e < a.length; e++) {
        const i = a[e]
        if (Array.isArray(i.material))
          for (let e = 0; e < i.material.length; e++) {
            if (((t = Fe(i.material[e])), t)) return t
          }
        else if (i.material && ((t = Fe(i.material)), t)) return t
      }
      return t
    })(e),
    o = (function (e, t) {
      return t.animationGroups.length
    })(0, t)
  return { faces: a, vertices: i, textures: r, materials: n, isPBR: s, animations: o }
}
function Ce(e, t, a = !0) {
  let i = e.getChildMeshes()
  a && Re(e, t),
    i.forEach((e) => {
      Re(e, t)
    })
}
function Re(e, t) {
  e.material &&
    (e.material instanceof C
      ? e.material.subMaterials.forEach((a) => {
          a && t?.(a, e)
        })
      : t?.(e.material, e))
}
function Ae(e) {
  return e.getHierarchyBoundingVectors(!0, (e) => e.isEnabled() && e.isVisible)
}
function Fe(e) {
  return e instanceof E && !!e.metallicTexture
}
function Le(e) {
  let t = new Set(),
    a = new Set(),
    i = (e) => {
      e.forEach((e) => {
        if (e) {
          let a = e.getInternalTexture()
          a && t.add(a.uniqueId)
        }
      })
    }
  return (
    Ce(e, (e) => {
      if (e instanceof E) {
        let t = e.uniqueId
        a.has(t) && a.add(t),
          e.isMetallicWorkflow() ? i([e.metallicTexture]) : i([e.reflectivityTexture]),
          i([
            e.albedoTexture,
            e.bumpTexture,
            e.ambientTexture,
            e.opacityTexture,
            e.emissiveTexture,
            e.lightmapTexture,
            e.metallicReflectanceTexture,
            e.reflectanceTexture
          ]),
          i([e.anisotropy.texture]),
          i([e.subSurface.refractionIntensityTexture, e.subSurface.thicknessTexture]),
          i([e.sheen.texture, e.sheen.textureRoughness]),
          i([e.clearCoat.texture, e.clearCoat.textureRoughness, e.clearCoat.bumpTexture]),
          i([e.iridescence.texture, e.iridescence.thicknessTexture])
      }
    }),
    t.size
  )
}
const ke = 1635018061
function je(e) {
  let t = new Uint8Array(e, 0, e.byteLength),
    a = [],
    i = t.length
  for (let e = 0; e < i; e += 1) a[e >>> 2] |= (255 & t[e]) << (24 - (e % 4) * 8)
  return A.lib.WordArray.create(a, i)
}
function Be(e) {
  for (var t = e.words, a = e.sigBytes, i = new ArrayBuffer(a), r = new Uint8Array(i), n = 0; n < a; n++)
    r[n] = (t[n >>> 2] >>> (24 - (n % 4) * 8)) & 255
  return i
}
function _e(e, t, a = "application/octet-stream") {
  const i = new Blob([e], { type: a })
  return new File([i], t, { type: a })
}
function De(e) {
  const t = e.lastIndexOf(".")
  return -1 === t || 0 === t ? e : e.substring(0, t)
}
const Ge = (e, t, a) => {
  let i = e.slice(0, 12),
    r = new Uint8Array(i.slice(0, 4))
  new TextDecoder().decode(r)
  let n = new DataView(i)
  if (n.getUint32(0, !0) == ke) {
    n.getUint32(4, !0)
    let i = n.getUint32(8, !0)
    var s = je(e.slice(12, i + 12))
    const r = A.enc.Utf8.parse(t),
      c = A.enc.Utf8.parse(a)
    var o = A.lib.CipherParams.create({ ciphertext: s }),
      l = Be(A.AES.decrypt(o, r, { iv: c, mode: A.mode.CBC, padding: A.pad.ZeroPadding }))
    let h = new Uint8Array(l),
      u = new Uint8Array(e.slice(12 + i, e.byteLength)),
      d = new Uint8Array(h.byteLength + u.length)
    return d.set(h, 0), d.set(u, h.length), d
  }
  console.error("文件格式错误，请检查")
}
M.ShowLoadingScreen = !1
class Ne {
  constructor(e, t) {
    Object.defineProperty(this, "scene", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "filesInput", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "globalState", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "currentPluginName", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      (this.scene = e),
      (this.globalState = t)
    let a = this.scene.getEngine()
    ;(this.filesInput = new y(
      a,
      this.scene,
      () => {
        this.onSceneLoaded()
      },
      (e) => {
        this.onSceneProgressed(e)
      },
      null,
      null,
      null,
      null,
      (e, t, a) => {
        this.onModelLoadError(a)
      },
      !0
    )),
      M.OnPluginActivatedObservable.add((e) => {
        if (((this.currentPluginName = e.name), "gltf" == e.name || "mita" == e.name)) {
          e.transparencyAsCoverage = !0
        }
      })
  }
  loadURL(e, t = () => {}, a = (e) => {}, i = () => {}, r) {
    this.disposeExistingRootMesh(),
      M.LoadAssetContainer(
        e,
        "",
        this.scene,
        (e) => {
          this.onSceneLoaded(e), t()
        },
        (e) => {
          this.onSceneProgressed(e), a(e)
        },
        (e, t, a) => {
          console.error("exception::", a), this.onModelLoadError(t, a)
        },
        r
      )
  }
  loadURLByMTA(e, t, a) {
    ;(function (e, t, a, i) {
      return new Promise((r, n) => {
        b.LoadFile(
          e,
          (e) => {
            if (e instanceof ArrayBuffer) {
              let i = Ge(e, t, a)
              i ? r(i) : n("模型有误.")
            }
          },
          i,
          void 0,
          !0
        )
      })
    })(e, t, a, (e) => {
      this.onSceneProgressed(e)
    }).then((e) => {
      this.disposeExistingRootMesh(),
        M.LoadAssetContainer(
          "",
          e,
          this.scene,
          (e) => {
            this.onSceneLoaded(e)
          },
          void 0,
          (e, t, a) => {
            console.error("exception::", a), this.onModelLoadError(t, a)
          },
          ".mta"
        )
    })
  }
  loadFile(e, t = () => {}, a = (e) => {}, i = () => {}) {
    M.Append(
      "",
      e,
      this.scene,
      (e) => {
        t()
      },
      a,
      i
    )
  }
  dropLoadFiles(e) {
    this.disposeExistingRootMesh(), this.filesInput?.loadFiles(e)
  }
  onSceneLoaded(e) {
    if (e) {
      this.globalState.loadAnimationGroups = e.animationGroups
      let t = e.rootNodes
      if (t[0] && this.currentPluginName) {
        let a = t[0]
        if (a instanceof S) {
          let t = a.getChildTransformNodes(!0, (e) => e.name == we)[0]
          if (t) this.globalState.metaTransformNode = t
          else {
            let t = a.getChildren(),
              i = new R(we, this.scene)
            t.forEach((e) => {
              e.parent = i
            }),
              (i.parent = a),
              e.transformNodes.push(i),
              (this.globalState.metaTransformNode = i)
          }
          ;(this.globalState.rootMesh = a),
            this.globalState.onInternalSceneLoaded.notifyObservers({ loadMesh: a, currentPluginName: this.currentPluginName })
        }
      }
      e.addAllToScene()
    }
    ;(this.currentPluginName = void 0),
      this.scene?.executeWhenReady(() => {
        this.globalState.onSceneLoaded.notifyObservers({ load: !0 }),
          0 == this.globalState.engineConfig.transitionCamera && this.globalState.onCameraReadyComplete.notifyObservers(!0)
      })
  }
  onSceneProgressed(e) {
    this.globalState.onSceneProgressed.notifyObservers(e)
  }
  onModelLoadError(e, t) {
    this.globalState.onLoadedError.notifyObservers({ message: "加载文件错误", loadType: "model" }), console.error(e)
  }
  disposeExistingRootMesh() {
    let e = this.globalState.rootMesh
    e &&
      (e.getChildMeshes().forEach((e) => {
        e.dispose(!1, !0)
      }),
      this.scene?.removeMesh(e, !0))
  }
  dispose() {
    M.OnPluginActivatedObservable.clear()
  }
}
function Ue(e, t) {
  let a = []
  var i
  ;(i = e), Object.keys(i).length !== t.length && console.warn("请检查对应的数据类型是否正确")
  for (const i in e)
    if (Object.prototype.hasOwnProperty.call(e, i)) {
      const r = e[i]
      let n = t.find((e) => e.key == i)
      n
        ? a.push({
            keyName: i,
            keyValue: r,
            valueType: n.valueType,
            slider: n.slider,
            select: n.select,
            describe: n.describe || i,
            setCallBackName: n.setCallBackName
          })
        : console.warn(`缺少${i}属性的数据描述`)
    }
  return a
}
;(D.ShadersStore.layerPixelShader =
  "varying vec2 vUV;uniform sampler2D textureSampler;uniform vec4 color;\n  #include<helperFunctions>\n  #define CUSTOM_FRAGMENT_DEFINITIONS\n  void main(void) {\n  #define CUSTOM_FRAGMENT_MAIN_BEGIN\n  vec4 baseColor=texture2D(textureSampler,vUV);\n  #ifdef LINEAR\n  baseColor.rgb=toGammaSpace(baseColor.rgb);\n  #endif\n  #ifdef ALPHATEST\n  if (baseColor.a<0.4)\n  discard;\n  #endif\n  gl_FragColor=baseColor*color;\n  #define CUSTOM_FRAGMENT_MAIN_END\n  #include<imageProcessingCompatibility>\n  }"),
  (j.prototype.isReady = function () {
    let e = this
    const t = e._scene.getEngine()
    let a = ""
    this.alphaTest && (a = "#define ALPHATEST"),
      this.texture && !this.texture.gammaSpace && (a += "\n#define LINEAR"),
      e._scene.imageProcessingConfiguration &&
        e._scene.imageProcessingConfiguration.applyByPostProcess &&
        (a += "\n#define IMAGEPROCESSINGPOSTPROCESS"),
      e._previousDefines !== a &&
        ((e._previousDefines = a),
        (e._drawWrapper.effect = t.createEffect(
          "layer",
          [x.PositionKind],
          ["textureMatrix", "color", "scale", "offset"],
          ["textureSampler"],
          a
        )))
    const i = e._drawWrapper.effect
    return i?.isReady() && (!this.texture || this.texture.isReady())
  })
let ze = (e) => void 0 === e,
  He = (e) => void 0 !== e,
  Ve = (e) => "number" == typeof e,
  We = (e) => "boolean" == typeof e,
  qe = (e) => "string" == typeof e
function $e(e, t, a) {
  switch (t) {
    case "string":
      qe(e) && a?.(e)
      break
    case "number":
      Ve(e) && a?.(e)
      break
    case "boolean":
      We(e) && a?.(e)
  }
}
const Xe = [
  { label: "Alpha", normalizable: 0, value: ue.TEXTUREFORMAT_ALPHA },
  { label: "Luminance", normalizable: 0, value: ue.TEXTUREFORMAT_LUMINANCE },
  { label: "Luminance/Alpha", normalizable: 0, value: ue.TEXTUREFORMAT_LUMINANCE_ALPHA },
  { label: "RGB", normalizable: 1, value: ue.TEXTUREFORMAT_RGB },
  { label: "RGBA", normalizable: 1, value: ue.TEXTUREFORMAT_RGBA },
  { label: "R (red)", normalizable: 1, value: ue.TEXTUREFORMAT_RED },
  { label: "RG (red/green)", normalizable: 1, value: ue.TEXTUREFORMAT_RG },
  { label: "R (red) integer", normalizable: 0, value: ue.TEXTUREFORMAT_RED_INTEGER },
  { label: "RG (red/green) integer", normalizable: 0, value: ue.TEXTUREFORMAT_RG_INTEGER },
  { label: "RGB integer", normalizable: 0, value: ue.TEXTUREFORMAT_RGB_INTEGER },
  { label: "RGBA integer", normalizable: 0, value: ue.TEXTUREFORMAT_RGBA_INTEGER },
  { label: "BGRA", normalizable: 1, value: ue.TEXTUREFORMAT_BGRA },
  { label: "Depth24/Stencil8", normalizable: 0, hideType: !0, value: ue.TEXTUREFORMAT_DEPTH24_STENCIL8 },
  { label: "Depth32 float", normalizable: 0, hideType: !0, value: ue.TEXTUREFORMAT_DEPTH32_FLOAT },
  { label: "Depth16", normalizable: 0, value: ue.TEXTUREFORMAT_DEPTH16 },
  { label: "Depth24", normalizable: 0, value: ue.TEXTUREFORMAT_DEPTH24 },
  { label: "Depth24Unorm/Stencil8", normalizable: 0, hideType: !0, value: ue.TEXTUREFORMAT_DEPTH24UNORM_STENCIL8 },
  { label: "Depth32Float/Stencil8", normalizable: 0, hideType: !0, value: ue.TEXTUREFORMAT_DEPTH32FLOAT_STENCIL8 },
  { label: "RGBA BPTC UNorm", normalizable: 0, compressed: !0, value: ue.TEXTUREFORMAT_COMPRESSED_RGBA_BPTC_UNORM },
  { label: "RGB BPTC UFloat", normalizable: 0, compressed: !0, value: ue.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT },
  { label: "RGB BPTC SFloat", normalizable: 0, compressed: !0, value: ue.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_SIGNED_FLOAT },
  { label: "RGBA S3TC DXT5", normalizable: 0, compressed: !0, value: ue.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT5 },
  { label: "RGBA S3TC DXT3", normalizable: 0, compressed: !0, value: ue.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT3 },
  { label: "RGBA S3TC DXT1", normalizable: 0, compressed: !0, value: ue.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT1 },
  { label: "RGB S3TC DXT1", normalizable: 0, compressed: !0, value: ue.TEXTUREFORMAT_COMPRESSED_RGB_S3TC_DXT1 },
  { label: "RGBA ASTC 4x4", normalizable: 0, compressed: !0, value: ue.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_4x4 }
]
;(he.prototype._getPixelsFromTexture = function (e) {
  const t = e._texture?.format ?? -2,
    a = (function (e) {
      for (let t = 0; t < Xe.length; ++t) if (Xe[t].value === e) return Xe[t]
      return null
    })(-1 === t ? ue.TEXTUREFORMAT_RGBA : t)
  if (a && a.compressed) {
    let t = e.getSize()
    return $.GetTextureDataAsync(e, t.width, t.height)
  }
  return e.textureType, ue.TEXTURETYPE_UNSIGNED_INT, e.readPixels()
}),
  (he.prototype._convertStandardMaterialAsync = function (e, t, a) {
    let i = this
    const r = this._exporter._materialMap,
      n = this._exporter._materials,
      s = [],
      o = this._convertToGLTFPBRMetallicRoughness(e),
      l = { name: e.name }
    if (
      (null == e.backFaceCulling ||
        e.backFaceCulling ||
        (e.twoSidedLighting ||
          b.Warn(e.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."),
        (l.doubleSided = !0)),
      a)
    ) {
      e.diffuseTexture &&
        s.push(
          i._exportTextureAsync(e.diffuseTexture, t).then((e) => {
            e && (o.baseColorTexture = e)
          })
        )
      const a = e.bumpTexture
      a &&
        s.push(
          i._exportTextureAsync(a, t).then((e) => {
            e && ((l.normalTexture = e), 1 !== a.level && (l.normalTexture.scale = a.level))
          })
        ),
        e.emissiveTexture &&
          ((l.emissiveFactor = [1, 1, 1]),
          s.push(
            i._exportTextureAsync(e.emissiveTexture, t).then((e) => {
              e && (l.emissiveTexture = e)
            })
          )),
        e.ambientTexture &&
          s.push(
            i._exportTextureAsync(e.ambientTexture, t).then((e) => {
              if (e) {
                const t = { index: e.index }
                l.occlusionTexture = t
              }
            })
          )
    }
    return (
      (e.alpha < 1 || e.opacityTexture) &&
        (e.alphaMode === ue.ALPHA_COMBINE
          ? (l.alphaMode = "BLEND")
          : b.Warn(e.name + ": glTF 2.0 does not support alpha mode: " + e.alphaMode.toString())),
      e.emissiveColor &&
        !he._FuzzyEquals(e.emissiveColor, u.Black(), he._Epsilon) &&
        (l.emissiveFactor = e.emissiveColor.asArray()),
      (l.pbrMetallicRoughness = o),
      he._SetAlphaMode(l, e),
      e.metadata && e.metadata.gltf && (l.extras = e.metadata.gltf.extras),
      n.push(l),
      (r[e.uniqueId] = n.length - 1),
      this._finishMaterial(s, l, e, t)
    )
  }),
  (he.prototype._setMetallicRoughnessPbrMaterial = function (e, t, a, i, r, n) {
    let s = this,
      o = he
    const l = this._exporter._materialMap,
      c = this._exporter._materials,
      h = []
    if (e) {
      if (
        (he._SetAlphaMode(a, t),
        (o._FuzzyEquals(e.baseColor, u.White(), o._Epsilon) && t.alpha >= o._Epsilon) ||
          (i.baseColorFactor = [e.baseColor.r, e.baseColor.g, e.baseColor.b, t.alpha]),
        null != e.metallic && 1 !== e.metallic && (i.metallicFactor = e.metallic),
        null != e.roughness && 1 !== e.roughness && (i.roughnessFactor = e.roughness),
        null == t.backFaceCulling ||
          t.backFaceCulling ||
          (t._twoSidedLighting ||
            b.Warn(t.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."),
          (a.doubleSided = !0)),
        n)
      ) {
        const e = t._bumpTexture
        if (e) {
          const t = s._exportTextureAsync(e, r).then((t) => {
            t && ((a.normalTexture = t), 1 !== e.level && (a.normalTexture.scale = e.level))
          })
          h.push(t)
        }
        const i = t._ambientTexture
        if (i) {
          const e = s._exportTextureAsync(i, r).then((e) => {
            if (e) {
              const i = { index: e.index, texCoord: e.texCoord, extensions: e.extensions }
              a.occlusionTexture = i
              const r = t._ambientTextureStrength
              r && (i.strength = r)
            }
          })
          h.push(e)
        }
        const n = t._emissiveTexture
        if (n) {
          const e = s._exportTextureAsync(n, r).then((e) => {
            e && (a.emissiveTexture = e)
          })
          h.push(e)
        }
      }
      const d = t._emissiveColor
      o._FuzzyEquals(d, u.Black(), o._Epsilon) || (a.emissiveFactor = d.asArray()),
        (a.pbrMetallicRoughness = i),
        t.metadata && t.metadata.gltf && (a.extras = t.metadata.gltf.extras),
        c.push(a),
        (l[t.uniqueId] = c.length - 1)
    }
    return this._finishMaterial(h, a, t, r)
  }),
  (de.GLBAsync = function (e, t, a) {
    let i = this
    return i._PreExportAsync(e, a).then(() => {
      const r = t.replace(/\.[^/.]+$/, ""),
        n = new me(e, a)
      return (n._glTF.asset.generator = "Export from Mita"), n._generateGLBAsync(r).then((t) => i._PostExportAsync(e, t, a))
    })
  })
const Ye = "KHR_texture_transform"
class Ze {
  constructor() {
    Object.defineProperty(this, "name", { enumerable: !0, configurable: !0, writable: !0, value: Ye }),
      Object.defineProperty(this, "enabled", { enumerable: !0, configurable: !0, writable: !0, value: !0 }),
      Object.defineProperty(this, "required", { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
      Object.defineProperty(this, "_wasUsed", { enumerable: !0, configurable: !0, writable: !0, value: !1 })
  }
  dispose() {}
  get wasUsed() {
    return this._wasUsed
  }
  postExportTexture(e, t, a) {
    if (!a.getScene()) return void b.Warn(`${e}: "scene" is not defined for Babylon texture ${a.name}! Not exporting with ${Ye}.`)
    if (0 !== a.uAng || 0 !== a.vAng)
      return void b.Warn(`${e}: Texture ${a.name} with rotation in the u or v axis is not supported in glTF.`)
    const i = {}
    let r = !1
    if (
      ((0 === a.uOffset && 0 === a.vOffset) || ((i.offset = [a.uOffset, a.vOffset]), (r = !0)),
      (1 === a.uScale && 1 === a.vScale) || ((i.scale = [a.uScale, a.vScale]), (r = !0)),
      0 !== a.wAng)
    ) {
      if (0 !== a.uRotationCenter || 0 !== a.vRotationCenter) {
        if (1 !== a.uScale || 1 !== a.vScale)
          return void b.Warn(
            `${e}: Texture ${a.name} with scaling and a rotation not centered at the origin cannot be exported with ${Ye}`
          )
        b.Warn(
          `${e}: Texture ${a.name} with rotation not centered at the origin will be exported with an adjusted texture offset for ${Ye}.`
        ),
          (i.offset = (function (e) {
            const { uOffset: t, vOffset: a, uRotationCenter: i, vRotationCenter: r, wAng: n } = e,
              s = Math.cos(-n),
              o = Math.sin(-n)
            return [t + (i * (1 - s) - r * o), a + (r * (1 - s) + i * o)]
          })(a))
      }
      ;(i.rotation = -a.wAng), (r = !0)
    }
    0 !== a.coordinatesIndex && ((i.texCoord = a.coordinatesIndex), (r = !0)),
      r && ((this._wasUsed = !0), t.extensions || (t.extensions = {}), (t.extensions[Ye] = i))
  }
}
pe.UnregisterExtension(Ye), pe.RegisterExtension(Ye, () => new Ze())
class Qe {
  constructor(e, t) {
    Object.defineProperty(this, "scene", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "environmentBlur", { enumerable: !0, configurable: !0, writable: !0, value: 0.3 }),
      Object.defineProperty(this, "hdrSkybox", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "skyBoxMaterial", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "environmentTexture", { enumerable: !0, configurable: !0, writable: !0, value: null }),
      Object.defineProperty(this, "bgType", { enumerable: !0, configurable: !0, writable: !0, value: "color" }),
      Object.defineProperty(this, "imageId", { enumerable: !0, configurable: !0, writable: !0, value: 1 }),
      Object.defineProperty(this, "bgFormSouceType", { enumerable: !0, configurable: !0, writable: !0, value: "system" }),
      Object.defineProperty(this, "environmentFormSouceType", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "system"
      }),
      Object.defineProperty(this, "environmentId", { enumerable: !0, configurable: !0, writable: !0, value: -1 }),
      Object.defineProperty(this, "sceneTransparent", { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
      Object.defineProperty(this, "bgColor", { enumerable: !0, configurable: !0, writable: !0, value: "#dddddd" }),
      Object.defineProperty(this, "backgroundImageUrl", { enumerable: !0, configurable: !0, writable: !0, value: "" }),
      Object.defineProperty(this, "backgroundExposure", { enumerable: !0, configurable: !0, writable: !0, value: 1 }),
      Object.defineProperty(this, "environmentMapList", { enumerable: !0, configurable: !0, writable: !0, value: new Map() }),
      Object.defineProperty(this, "globalState", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "staticPoseForScreenshot", { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
      Object.defineProperty(this, "bgLayerSize", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: { width: 1, height: 1 }
      }),
      Object.defineProperty(this, "currentBackgroundLayer", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      (this.scene = e),
      (this.globalState = t),
      (this.environmentTexture = this.scene.environmentTexture),
      (this.environmentId = this.globalState.engineConfig.environmentId),
      (this.imageId = this.globalState.engineConfig.backgroundImageId),
      (this.backgroundImageUrl = this.globalState.engineConfig.backgroundImageUrl),
      this.updateRenderSize(),
      (this.bgLayerSize = { width: this.globalState.renderWidth, height: this.globalState.renderHeight })
  }
  init() {
    this.createHDRSkyBox()
  }
  initBindListener() {
    this.globalState.onInternalSceneLoaded.add(({ loadMesh: e }) => {
      this.globalState.hasBeenPresets && this.globalState.presetsInitParam
    }),
      this.globalState.onInternalWindowResizeEvent.add(() => {
        this.updateRenderSize(), this.adaptBackgroundTextureToScreen()
      })
  }
  initToneMapping() {
    let e = this.globalState.engineConfig
    this.setToneMappingEnable(e.toneMappingEnable), this.setToneMappingType(e.toneMappingType)
  }
  setToneMappingEnable(e) {
    ;(this.scene.imageProcessingConfiguration.toneMappingEnabled = e), (this.globalState.engineConfig.toneMappingEnable = e)
  }
  setToneMappingType(e) {
    switch (e) {
      case "Standard":
        this.scene.imageProcessingConfiguration.toneMappingType = B.TONEMAPPING_STANDARD
        break
      case "ACES":
        this.scene.imageProcessingConfiguration.toneMappingType = B.TONEMAPPING_ACES
    }
    this.globalState.engineConfig.toneMappingType = e
  }
  setPresetsEnvironmentId(e) {
    ;(this.environmentId = e), (this.globalState.engineConfig.environmentId = e)
  }
  setBackgroundPresetsParam(e) {
    "color" == e.bgType
      ? this.setBackground("color", e.color)
      : "image" == e.bgType
        ? (this.setBackground("image", !0), this.setBackgroundImageByUrl(this.backgroundImageUrl))
        : this.setBackground("environment", !0),
      0 == e.enable && this.setBackgroundEnable(e.enable)
  }
  setEnvironmentPresetsParam(e) {
    for (const t in e)
      if (Object.prototype.hasOwnProperty.call(e, t)) {
        const a = e[t]
        this.setEnvironmentParam(t, a)
      }
  }
  setBackground(e, t) {
    if ("color" == e && qe(t)) {
      ;(this.bgColor = t), this.showHDRSkeyBox(!1), this.hideSceneLayer()
      let a = d.FromHexString(t)
      this.scene.imageProcessingConfiguration.isEnabled && (a = a.toLinearSpace()),
        (this.scene.clearColor = a),
        (this.bgType = e),
        this.refreshGridColor(this.bgColor)
    } else
      "image" == e
        ? (this.showHDRSkeyBox(!1), (this.bgType = e))
        : "environment" == e && We(t) && (this.hideSceneLayer(), this.showHDRSkeyBox(t), (this.bgType = e))
  }
  setBackgroundEnable(e) {
    1 == e
      ? ("color" == this.bgType
          ? this.setBackground(this.bgType, this.bgColor)
          : "image" == this.bgType
            ? (this.setBackground(this.bgType, e), this.setBackgroundImageByUrl(this.backgroundImageUrl))
            : "environment" == this.bgType && this.setBackground(this.bgType, !0),
        (this.sceneTransparent = !1))
      : (this.scene.clearColor.set(0, 0, 0, 0), this.hideSceneLayer(), this.showHDRSkeyBox(!1), (this.sceneTransparent = !0))
  }
  setEnvironmentBlurStrength(e) {
    let t = this.hdrSkybox?.material
    if (t) {
      ;(this.environmentBlur = e), (t.microSurface = 1 - this.environmentBlur)
    }
  }
  setBackgroundImageId(e) {
    this.hideSceneLayer(), this.scene.layers?.forEach((e) => (e.isEnabled = !1))
    let t = wt.GetSceneBackgroundImageResourcesData().find((t) => e == t.id)
    if (t) {
      let a = this.scene.layers?.find((e) => e.name == t.url)
      if (((this.currentBackgroundLayer = a), a)) a.isEnabled = !0
      else {
        let e = new j("", t.url, this.scene, !0)
        if (e.texture) {
          e.texture.onLoadObservable.add((e) => {
            ;(this.bgLayerSize = e.getBaseSize()), this.adaptBackgroundTextureToScreen()
          })
        }
        ;(e.name = t.url), (this.currentBackgroundLayer = e)
      }
      ;(this.imageId = e), (this.globalState.engineConfig.backgroundImageId = e)
    }
  }
  setBackgroundImageByUrl(e) {
    if ("" !== e) {
      let t = this.scene.layers?.find((t) => t.name == e)
      if (((this.currentBackgroundLayer = t), t))
        this.hideSceneLayer(),
          (t.isEnabled = !0),
          (this.backgroundImageUrl = this.globalState.engineConfig.backgroundImageUrl = e)
      else {
        let t = new j(e, e, this.scene, !0)
        if (t.texture) {
          t.texture.onLoadObservable.add((a) => {
            e === a.url &&
              (this.hideSceneLayer(),
              (this.bgLayerSize = a.getBaseSize()),
              this.adaptBackgroundTextureToScreen(),
              (t.isEnabled = !0))
          }),
            (this.backgroundImageUrl = this.globalState.engineConfig.backgroundImageUrl = e)
        }
        this.currentBackgroundLayer = t
      }
    } else console.error("请传入正确的背景图片路径")
  }
  setBackgroundImage(e) {
    this.hideSceneLayer(), this.scene.layers?.forEach((e) => (e.isEnabled = !1))
    let t = this.scene.layers?.find((t) => t.name == e)
    if (t) t.isEnabled = !0
    else {
      new j("", e, this.scene, !0).name = e
    }
  }
  hideSceneLayer() {
    this.scene.layers?.forEach((e) => (e.isEnabled = !1))
  }
  createHDRSkyBox() {
    let e = this.scene.activeCamera,
      t = this.scene.environmentTexture
    if (e && t) {
      let a = e.maxZ
      const i = k(ye, { size: a }, this.scene),
        r = new E("skyBoxMaterial", this.scene)
      ;(r.backFaceCulling = !1),
        (r.reflectionTexture = t.clone()),
        r.reflectionTexture && (r.reflectionTexture.coordinatesMode = m.SKYBOX_MODE),
        (r.microSurface = 1 - this.environmentBlur),
        (r.disableLighting = !0),
        (r.twoSidedLighting = !0),
        (i.material = r),
        (this.skyBoxMaterial = r),
        (i.isPickable = !1),
        (i.ignoreCameraMaxZ = !0),
        (i.infiniteDistance = !0),
        i.setEnabled(!1),
        (this.hdrSkybox = i)
      let n = t.getInternalTexture()
      n && this.environmentMapList.set(n.url, { environment: t, skyBoxReflection: r.reflectionTexture })
    }
  }
  setEnvironmentEnable(e = !0) {
    this.scene.environmentTexture
      ? (this.scene.environmentTexture = e ? this.environmentTexture : null)
      : e && (this.scene.environmentTexture = this.environmentTexture)
  }
  setEnvironmentHDRId(e) {}
  setEnvironmentHDRByUrl(e) {
    let t = this.environmentMapList.get(e),
      a = null,
      i = null
    if (t) (a = t.environment), (i = t.skyBoxReflection), this.refreshEnvironmentTexture(a, i)
    else {
      let t = p.CreateFromPrefilteredData(e, this.scene)
      if (((a = t), (i = t.clone()), a && i)) {
        let e = a.getInternalTexture()
        e?.onLoadedObservable.add(() => {
          a && i && this.refreshEnvironmentTexture(a, i)
        })
      }
      this.environmentMapList.set(e, { environment: a, skyBoxReflection: i })
    }
  }
  refreshEnvironmentTexture(e, t) {
    ;(this.scene.environmentTexture = e),
      this.skyBoxMaterial &&
        ((t.coordinatesMode = m.SKYBOX_MODE), (t.level = this.backgroundExposure), (this.skyBoxMaterial.reflectionTexture = t)),
      (this.environmentTexture = e)
  }
  setEnvironmentHDRURL(e, t) {
    let a = p.CreateFromPrefilteredData(e, this.scene)
    ;(this.scene.environmentTexture = a),
      this.skyBoxMaterial && (this.skyBoxMaterial.reflectionTexture = a.clone()),
      (this.environmentTexture = a),
      Ve(t) && ((this.environmentId = t), (this.globalState.engineConfig.environmentId = t))
  }
  setEnvironmentParam(e, t) {
    if ("enable" == e && We(t)) this.setEnvironmentEnable(t)
    else if (Ve(t))
      switch (e) {
        case "intensity":
          this.setIntensity(t)
          break
        case "backgroundExposure":
          this.setEnvironmentBackgroundIntensity(t)
          break
        case "rotation":
          this.setEnvironmentOrientation(b.ToRadians(t))
          break
        case "blur":
          this.setEnvironmentBlurStrength(t)
      }
  }
  setEnvironmentBackgroundIntensity(e) {
    this.skyBoxMaterial?.reflectionTexture && ((this.skyBoxMaterial.reflectionTexture.level = e), (this.backgroundExposure = e))
  }
  setEnvironmentOrientation(e) {
    if (this.environmentTexture) {
      if (((this.environmentTexture.rotationY = e), this.skyBoxMaterial?.reflectionTexture)) {
        let t = this.skyBoxMaterial?.reflectionTexture
        t.rotationY = e
      }
    }
  }
  setIntensity(e) {
    this.scene.environmentIntensity = e
  }
  getBackgroundInfo() {
    return {
      enable: !this.sceneTransparent,
      bgType: this.bgType,
      id: this.imageId,
      color: this.bgColor,
      fromSourceType: this.bgFormSouceType
    }
  }
  getEnvironmentInfo() {
    let e = 0
    if (this.scene.environmentTexture) {
      let t = this.scene.environmentTexture
      e = b.ToDegrees(t.rotationY)
    }
    return {
      enable: !!this.scene.environmentTexture,
      id: this.environmentId,
      rotation: e,
      intensity: this.scene.environmentIntensity,
      blur: this.environmentBlur,
      backgroundExposure: this.backgroundExposure,
      fromSourceType: this.environmentFormSouceType
    }
  }
  getTransformEnvironmentInfo() {
    return Ue(this.getEnvironmentInfo(), [
      {
        key: "orientation",
        describe: "orientation",
        valueType: "slider",
        slider: { min: 0, max: 360, step: 0.001 },
        setCallBackName: "SceneEnvironment-setEnvironmentOrientation"
      },
      {
        key: "intensity",
        describe: "intensity",
        valueType: "slider",
        slider: { min: 0, max: 5, step: 0.001 },
        setCallBackName: "SceneEnvironment-setIntensity"
      }
    ])
  }
  getScreenshot(e, t, a = 0, i = 0) {
    let r = this.scene.getEngine()
    ;(e = e || r.getRenderWidth(!0)), (t = t || r.getRenderHeight(!0))
    const n = this.scene.activeCamera
    let s = this.scene.activeCamera?.clone("screenShotCamera"),
      o = new L("screenShotRender", { width: e, height: t }, this.scene, !1, !1),
      l = !1
    if (s && ((s.outputRenderTarget = o), n)) {
      if (this.staticPoseForScreenshot && this.scene.animationGroups.length > 0) {
        let e = this.scene.animationGroups[0]
        ;(l = e.isPlaying),
          l &&
            (e.pause(),
            this.scene.skeletons.forEach(function (e) {
              e.returnToRest()
            }))
      }
      ;(this.scene.activeCameras = [s]),
        this.scene.postProcessRenderPipelineManager.attachCamerasToRenderPipeline("basicPipeline", s)
    }
    return new Promise((n) => {
      const c = () => {
        o.isReadyForRendering() && s?.isReady(!0)
          ? (r.onEndFrameObservable.addOnce(() => {
              o.readPixels(void 0, void 0, void 0, !1, void 0, a, i)?.then((a) => {
                this.scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline("basicPipeline", s),
                  s?.dispose(),
                  o.dispose(),
                  (this.scene.activeCameras = []),
                  this.staticPoseForScreenshot &&
                    this.scene.animationGroups.length > 0 &&
                    l &&
                    this.scene.animationGroups[0].play(!0)
                let i = this.sceneTransparent ? "image/png" : "image/jpeg"
                F.DumpData(
                  e,
                  t,
                  a,
                  (e) => {
                    n(e)
                  },
                  i,
                  void 0,
                  !0,
                  void 0,
                  0.92
                )
              })
            }),
            this.scene.incrementRenderId(),
            this.scene.resetCachedMaterial(),
            o.render(!0),
            s.getProjectionMatrix(!0),
            this.scene.render())
          : setTimeout(() => {
              c()
            }, 16)
      }
      c()
    })
  }
  getScreenshot2(e, t, a = 0, i = 0, r = !1) {
    let n = this.scene.getEngine()
    const s = { width: n.getRenderWidth(), height: n.getRenderHeight() }
    ;(e = e || n.getRenderWidth(!0)), (t = t || n.getRenderHeight(!0))
    let o = s.width,
      l = s.height
    r && ((o = e), (l = t), n.setSize(e, t))
    const c = this.scene.activeCamera
    let h = new L("screenShotRender", { width: o, height: l }, this.scene, !1, !1)
    h.activeCamera = c
    let u = !1
    if (c && ((c.outputRenderTarget = h), c && this.staticPoseForScreenshot && this.scene.animationGroups.length > 0)) {
      let e = this.scene.animationGroups[0]
      ;(u = e.isPlaying),
        u &&
          (e.pause(),
          this.scene.skeletons.forEach(function (e) {
            e.returnToRest()
          }))
    }
    return new Promise((o) => {
      const l = () => {
        h.isReadyForRendering() && c?.isReady(!0)
          ? (n.onEndFrameObservable.addOnce(() => {
              let l = a,
                c = i,
                d = e,
                m = t
              if (r) n.setSize(s.width, s.height)
              else {
                let r = 1 / n.getHardwareScalingLevel()
                ;(l = Math.round(a * r)),
                  (c = Math.round(i * r)),
                  (d = Math.min(Math.round(e * r), s.width)),
                  (m = Math.min(Math.round(t * r), s.height))
              }
              h.readPixels(void 0, void 0, void 0, !1, void 0, l, c, d, m)?.then((e) => {
                h.dispose(),
                  this.staticPoseForScreenshot &&
                    this.scene.animationGroups.length > 0 &&
                    u &&
                    this.scene.animationGroups[0].play(!0)
                let t = this.sceneTransparent ? "image/png" : "image/jpeg"
                F.DumpData(
                  d,
                  m,
                  e,
                  (e) => {
                    o(e)
                  },
                  t,
                  void 0,
                  !0,
                  void 0,
                  this.globalState.screenShotQuality
                )
              })
            }),
            h.render(!0),
            this.scene.incrementRenderId(),
            this.scene.resetCachedMaterial(),
            c.getProjectionMatrix(!0),
            this.scene.render())
          : setTimeout(() => {
              l()
            }, 16)
      }
      l()
    })
  }
  showHDRSkeyBox(e = !0) {
    this.hdrSkybox?.setEnabled(e)
  }
  getModelOrientationInfo() {
    let e,
      t = this.scene.getRootMesh()
    return (
      t && t.rotationQuaternion ? (new i(), (e = t.rotationQuaternion.toRotationMatrix(i.Identity()))) : (e = i.Identity()),
      { matrix: Array.from(e.asArray()) }
    )
  }
  setModelOrientationInfo(e, t) {
    if (t.matrix) {
      let a = i.FromArray(t.matrix)
      e.computeWorldMatrix(!0)
      const n = e.getWorldMatrix().clone().invert().multiply(a),
        s = r.FromRotationMatrix(n)
      if (this.globalState.metaTransformNode) {
        const e = s.toEulerAngles()
        this.globalState.metaTransformNode.rotation = e
      }
    }
  }
  refreshGridColor(e) {
    let t = this.scene.getMaterialByName("bottomGridMaterial")
    if (t) {
      let a = t,
        i = new u(1, 1, 1).subtract(new u().setHexString(e))
      ;(a.mainColor = i), (a.lineColor = i)
    }
  }
  adaptBackgroundTextureToScreen() {
    let e = this.globalState.renderWidth / this.globalState.renderHeight,
      t = this.bgLayerSize.width / this.bgLayerSize.height,
      a = 1,
      i = 1,
      r = 0,
      n = 0
    if (
      (e > t ? ((a = 1), (i = t / e), (n = 0.5 * (1 - i))) : ((a = e / t), (i = 1), (r = 0.5 * (1 - a))),
      this.currentBackgroundLayer && this.currentBackgroundLayer.texture)
    ) {
      let e = this.currentBackgroundLayer.texture
      ;(e.uScale = a), (e.vScale = i), (e.uOffset = r), (e.vOffset = n)
    }
  }
  updateRenderSize() {
    let e = this.scene.getEngine()
    ;(this.globalState.renderWidth = e.getRenderWidth(!0)), (this.globalState.renderHeight = e.getRenderHeight(!0))
  }
  async exportGLBAsync(e = this.scene) {
    return new Promise((t, a) => {
      let i = [ye, Oe, Se, "shadowLight", Ie]
      let r = "exportScene"
      de.GLBAsync(e, r, {
        shouldExportNode: (e) => ((e) => !(i.includes(e.name) || e instanceof _ || e instanceof G))(e),
        exportUnusedUVs: !0
      }).then((e) => {
        let i = e.glTFFiles[`${r}.glb`]
        i instanceof Blob ? t(i) : a("导出错误")
      })
    })
  }
  dispose() {
    this.environmentMapList.forEach((e) => {
      e.environment.dispose(), e.skyBoxReflection.dispose()
    }),
      this.environmentMapList.clear(),
      this.hdrSkybox?.dispose(!1, !0),
      (this.hdrSkybox = null)
  }
  getModelStatistics() {
    this.scene.getMeshByName("")
  }
}
const Ke = (e) => ({ x: e.x, y: e.y, z: e.z })
class Je {
  constructor(e, t) {
    Object.defineProperty(this, "scene", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "camera", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "presetsParam", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "globalState", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "nearRatio", { enumerable: !0, configurable: !0, writable: !0, value: 0.01 }),
      Object.defineProperty(this, "transitionCamera", { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
      Object.defineProperty(this, "transitionTime", { enumerable: !0, configurable: !0, writable: !0, value: 1.3 }),
      Object.defineProperty(this, "engineConfig", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "panningSensibility", { enumerable: !0, configurable: !0, writable: !0, value: 0.01 }),
      Object.defineProperty(this, "lowerRadiusLimit", { enumerable: !0, configurable: !0, writable: !0, value: null }),
      Object.defineProperty(this, "upperRadiusLimit", { enumerable: !0, configurable: !0, writable: !0, value: null }),
      (this.scene = e),
      (this.camera = this.scene.activeCamera),
      (this.globalState = t),
      this.updateCameraStorageData(),
      (this.transitionCamera = t.engineConfig.transitionCamera),
      (this.transitionTime = t.engineConfig.transitionTime),
      (this.engineConfig = t.engineConfig),
      this.init()
  }
  init() {
    this.globalState.onInternalSceneLoaded.add(({ loadMesh: e, currentPluginName: t }) => {
      this.loadingSlefAdaption(e, t), this.updateCameraPresetsParam()
    }),
      this.globalState.onZoomCameraToMeshBoundingInfoEvent.add(({ meshList: e, isZoom: t }) => {
        this.zoomCameraToMeshListBoundingInfo(e, t)
      })
  }
  getCameraInfo() {
    let e = this.camera.position,
      t = this.camera.target
    return {
      fov: ge(b.ToDegrees(this.camera.fov), 5),
      nearDistance: ge(this.nearRatio, 5),
      farDistance: this.camera.maxZ,
      position: Ke(e),
      target: Ke(t)
    }
  }
  setCameraParam(e, t) {
    switch (e) {
      case "fov":
        this.camera.fov = b.ToRadians(t)
        break
      case "nearDistance":
        ;(this.nearRatio = t), (this.camera.minZ = this.nearRatio * this.camera.radius)
    }
  }
  updateCameraPresetsParam() {
    if (this.presetsParam) {
      let e = this.presetsParam
      this.setCameraParam("fov", e.fov), this.setCameraParam("nearDistance", e.nearDistance)
    }
  }
  setPresetsParam(e) {
    this.presetsParam = e
  }
  loadingSlefAdaption(e, t) {
    this.adaptiveCameraDistance(e, t)
  }
  adaptiveCameraDistance(e, t) {
    let i = this.camera
    this.atuoArcRotateCameraParam(i, e), ("gltf" != t && "mita" != t) || (i.alpha += Math.PI)
    const r = new N()
    if ((i.addBehavior(r, !0), (r.framingTime = 0), (r.elevationReturnTime = -1), this.scene.meshes.length)) {
      ;(i.lowerRadiusLimit = null), (i.upperRadiusLimit = null)
      const t = this.getWorldExtends(e)
      r.zoomOnBoundingInfo(t.min, t.max), (i.radius = i.radius * this.engineConfig.radiusScale)
      const n = i.radius
      ;(i.lowerRadiusLimit = n * this.engineConfig.lowerRadiusLimitRatio),
        (i.pinchPrecision = 200 / n),
        (i.upperRadiusLimit = n * this.engineConfig.upperRadiusLimitRatio),
        this.presetsParam &&
          (this.presetsParam.position &&
            i.setPosition(new a(this.presetsParam.position.x, this.presetsParam.position.y, this.presetsParam.position.z)),
          this.presetsParam.target &&
            i.setTarget(new a(this.presetsParam.target.x, this.presetsParam.target.y, this.presetsParam.target.z)))
    }
    ;(i.wheelDeltaPercentage = this.engineConfig.wheelDeltaPercentage),
      (i.pinchDeltaPercentage = this.engineConfig.pinchDeltaPercentage),
      this.updateCameraStorageData(),
      this.setEnablePanning(this.engineConfig.enablePanning),
      i.update(),
      this.transitionCamera
        ? this.playTransitionAnimationOptimize(() => {
            this.setStateParam()
          })
        : this.setStateParam()
  }
  setStateParam() {
    this.setEnableZoom(this.engineConfig.enableZoom),
      this.engineConfig.useAutoRotation &&
        ((this.camera.useAutoRotationBehavior = !0),
        this.camera.autoRotationBehavior &&
          (this.camera.autoRotationBehavior.idleRotationSpeed = this.engineConfig.idleRotationSpeed))
  }
  zoomCameraToMeshListBoundingInfo(e, t) {
    let i = new a(),
      r = new a(),
      n = this.globalState.rootMesh
    e.forEach((e) => {
      let { min: t, max: a } = e.getHierarchyBoundingVectors()
      i.minimizeInPlace(t), r.maximizeInPlace(a)
    }),
      (this.camera.useFramingBehavior = !0)
    let s = this.camera.framingBehavior
    if (s) {
      if (((s.framingTime = 500), (s.elevationReturnTime = -1), t)) s.zoomOnBoundingInfo(i.scale(1), r.scale(1))
      else if (n) {
        const e = this.getWorldExtends(n)
        s.zoomOnBoundingInfo(e.min, e.max)
      }
      ;(this.camera.lowerRadiusLimit = this.lowerRadiusLimit), (this.camera.upperRadiusLimit = this.upperRadiusLimit)
    }
  }
  playTransitionAnimation() {
    let e = this.camera.position.clone()
    let t = z.FromVector3(e),
      a = 0.5 * Math.PI,
      i = new z(6 * t.radius, t.theta, t.phi + a).toVector3(),
      r = new U("transitionAnimation", "position", 10, U.ANIMATIONTYPE_VECTOR3, U.ANIMATIONLOOPMODE_CYCLE)
    const n = []
    n.push({ frame: 0, value: i }),
      n.push({ frame: 10, value: e }),
      r.setKeys(n),
      (this.scene.beginDirectAnimation(this.camera, [r], 0, 10, !1, 1 / this.transitionTime).onAnimationEnd = () => {
        this.globalState.onCameraReadyComplete.notifyObservers(!0)
      })
  }
  playTransitionAnimationOptimize(e) {
    let t = this.camera.position.clone(),
      a = this.camera.target.clone(),
      i = t.subtract(a)
    let r = z.FromVector3(i),
      n = 0.5 * Math.PI,
      s = new z(6 * r.radius, r.theta, r.phi + n).toVector3()
    s.add(a)
    let o = new U("transitionAnimation", "position", 10, U.ANIMATIONTYPE_VECTOR3, U.ANIMATIONLOOPMODE_CYCLE)
    const l = []
    l.push({ frame: 0, value: s }),
      l.push({ frame: 10, value: t }),
      o.setKeys(l),
      (this.scene.beginDirectAnimation(this.camera, [o], 0, 10, !1, 1 / this.transitionTime).onAnimationEnd = () => {
        this.globalState.onCameraReadyComplete.notifyObservers(!0), e?.()
      })
  }
  atuoArcRotateCameraParam(e, t) {
    if (this.scene) {
      const a = this.getWorldExtends(t),
        i = a.max.subtract(a.min),
        r = a.min.add(i.scale(0.5))
      let n = 1.5 * i.length()
      isFinite(n) || ((n = 1), r.copyFromFloats(0, 0, 0)),
        (e.alpha = -Math.PI / 2),
        (e.beta = Math.PI / 2),
        e.position.copyFrom(r),
        (e.lowerRadiusLimit = 0.01 * n),
        (e.wheelPrecision = 100 / n),
        (e.minZ = n * this.nearRatio),
        (e.maxZ = 1e3 * n),
        (e.speed = 0.2 * n)
    }
  }
  setLowerRadiusLimitRatio(e) {
    this.engineConfig.lowerRadiusLimitRatio = e
  }
  setRadiusScale(e) {
    this.engineConfig.radiusScale = e
  }
  setUpperRadiusLimitRatio(e) {
    this.engineConfig.upperRadiusLimitRatio = e
  }
  setWheelDeltaPercentage(e) {
    this.engineConfig.wheelDeltaPercentage = e
  }
  setPinchDeltaPercentage(e) {
    this.engineConfig.pinchDeltaPercentage = e
  }
  setEnablePanning(e) {
    ;(this.globalState.engineConfig.enablePanning = e), (this.camera.panningSensibility = e ? this.panningSensibility : 0)
  }
  setEnableZoom(e) {
    ;(this.globalState.engineConfig.enableZoom = e),
      e
        ? ((this.camera.lowerRadiusLimit = this.lowerRadiusLimit), (this.camera.upperRadiusLimit = this.upperRadiusLimit))
        : ((this.camera.lowerRadiusLimit = this.camera.radius), (this.camera.upperRadiusLimit = this.camera.radius))
  }
  updateCameraStorageData() {
    ;(this.panningSensibility = this.camera.panningSensibility),
      (this.lowerRadiusLimit = this.camera.lowerRadiusLimit),
      (this.upperRadiusLimit = this.camera.upperRadiusLimit)
  }
  getWorldExtends(e) {
    return e.getHierarchyBoundingVectors(!0, (e) => e.isEnabled() && e.isVisible)
  }
  dispose() {
    this.scene = null
  }
}
const et = () => ({
    background: { enable: !0, bgType: "color", id: 1, color: "#dddddd" },
    environment: {
      enable: !0,
      id: {
        transitionCamera: !1,
        transitionTime: 1.3,
        HDRUrl: "",
        backgroundImageUrl: "",
        lowerRadiusLimitRatio: 0.01,
        upperRadiusLimitRatio: 8,
        enablePanning: !0,
        enableZoom: !0,
        wheelDeltaPercentage: 0.01,
        pinchDeltaPercentage: 0.01,
        radiusScale: 1,
        toneMappingEnable: !1,
        environmentId: 12,
        backgroundImageId: 1,
        toneMappingType: "Standard",
        bindWireframe: !0,
        imageProcessingEnabled: !1,
        useAutoRotation: !1,
        idleRotationSpeed: 0.05,
        noPreventDefault: !1,
        autoAdaptaDeviceRatio: !0,
        maxDeviceRation: 1.5,
        autoMobileDeviceRatio: !0,
        mobileMaxRatio: 1.6
      }.environmentId,
      intensity: 1,
      backgroundExposure: 1,
      rotation: 0,
      blur: 0.3,
      lightEnable: !0,
      lightIntensity: 2,
      shadowBias: 5e-5
    },
    camera: { fov: 45, nearDistance: 0.01 },
    wireframe: { enable: !1, color: "#000000", factor: 1 },
    shadowGround: { enable: !1, darkness: 0.4, height: 0, size: 3, shadowType: "shadowCaster" },
    postProcess: {
      enable: !0,
      bloom: { enable: !1, factor: 0.5, threshold: 0.2 },
      vignette: { enable: !1, vignetteWeight: 1.5, vignetteCameraFov: 0.8, vignetteColor: "#000000" },
      depthOfField: { enable: !1, lensSize: 50, fStop: 1.4 },
      grain: { enable: !1, intensity: 30, animated: !1 },
      sharpen: { enable: !1, edgeAmount: 0.3, colorAmount: 1 },
      ssao: { enable: !1, radius: 1e-4, factor: 0.8, area: 0.0075, fallOff: 1e-6, base: 0.5 },
      ssr: {
        enable: !1,
        factor: 1,
        reflectionSpecularFalloffExponent: 1,
        selfCollisionNumSkip: 1,
        thickness: 0.5,
        enableAutomaticThicknessComputation: !1,
        blurDispersionStrength: 0.02,
        attenuateFacingCamera: !1
      },
      fxaa: { enable: !1 },
      taa: { enable: !1, factor: 0.05, samples: 8 }
    },
    orientation: {}
  }),
  tt = et()
class at {
  constructor(e, t, a) {
    Object.defineProperty(this, "scene", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "light", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "_groundName", { enumerable: !0, configurable: !0, writable: !0, value: Se }),
      Object.defineProperty(this, "groundMesh", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "offsetY", { enumerable: !0, configurable: !0, writable: !0, value: 0.001 }),
      Object.defineProperty(this, "sizeFactor", { enumerable: !0, configurable: !0, writable: !0, value: 3 }),
      Object.defineProperty(this, "boxSize", { enumerable: !0, configurable: !0, writable: !0, value: 0 }),
      Object.defineProperty(this, "planeHeightRatio", { enumerable: !0, configurable: !0, writable: !0, value: 0 }),
      Object.defineProperty(this, "shadowGenerator", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "globalState", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      (this.scene = e),
      (this.light = t),
      (this.globalState = a),
      (this.shadowGenerator = new W(1024, this.light)),
      (this.shadowGenerator.useContactHardeningShadow = !0),
      (this.shadowGenerator.contactHardeningLightSizeUVRatio = 0.05)
    let i = tt.shadowGround
    ;(this.sizeFactor = i.size), this.shadowGenerator.setDarkness(i.darkness), this.init()
  }
  init() {
    this.groundMesh = e.CreateGround(this._groundName, { width: 1, height: 1 }, this.scene)
    let t = new q("groundMaterial", this.scene)
    this.groundMesh.material = t
  }
  addShadowObject(e) {
    this.loadAutoGround(e)
  }
  setShadowObjectEnableModify() {
    let e = this.globalState.rootMesh
    if (e) {
      e.getChildMeshes().forEach((e) => {
        e.name !== this._groundName &&
          e.name !== ye &&
          (e.material && e.material.disableLighting, (e.receiveShadows = !0), this.shadowGenerator.addShadowCaster(e))
      })
    }
  }
  loadAutoGround(e) {
    let t = { min: a.Zero(), max: a.Zero() }
    t = Ae(e)
    let i = new V(t.min, t.max)
    const r = Math.max(t.max.x - t.min.x, t.max.z - t.min.z)
    ;(this.boxSize = r), this.setPlaneSize(this.sizeFactor)
    const n = t.min.y
    ;(this.groundMesh.metadata = { objectBottomPosY: n, objectHeightSize: t.max.y - t.min.y }),
      this.groundMesh.position.set(i.center.x, n - this.offsetY, i.center.z),
      (this.groundMesh.receiveShadows = !1),
      (this.groundMesh.isPickable = !1)
    let s = new a().copyFrom(t.max).scaleInPlace(2)
    this.light.position.copyFrom(s), (this.light.autoUpdateExtends = !0), (this.light.autoCalcShadowZBounds = !1)
  }
  setDarkness(e = 0.5) {
    this.shadowGenerator.setDarkness(e)
  }
  setShadowEnable(e = !1) {
    if (this.groundMesh) {
      this.groundMesh.receiveShadows = e
      let t = this.shadowGenerator.getShadowMap()
      t && (t.renderList = []), e && this.setShadowObjectEnableModify()
    }
  }
  setPlaneHeight(e = 0) {
    if (
      this.groundMesh.metadata &&
      Ve(this.groundMesh.metadata.objectBottomPosY) &&
      Ve(this.groundMesh.metadata.objectHeightSize)
    ) {
      let t = this.groundMesh.metadata.objectBottomPosY,
        a = this.groundMesh.metadata.objectHeightSize
      this.planeHeightRatio = e
      const i = e * a
      this.groundMesh.position.y = t + i - this.offsetY
    }
  }
  setShadowBias(e) {
    this.shadowGenerator.bias = e
  }
  setShadowCasterParam(e, t) {
    if ("enable" == e && We(t)) this.setShadowEnable(t)
    else if (Ve(t))
      switch (e) {
        case "darkness":
          this.setDarkness(t)
          break
        case "height":
          this.setPlaneHeight(t)
          break
        case "size":
          this.setPlaneSize(t)
      }
  }
  setPlaneSize(e = 3) {
    const t = e * this.boxSize
    ;(this.sizeFactor = e), this.groundMesh.scaling.set(t, 1, t)
  }
  getShadowCasterInfo() {
    return {
      enable: this.groundMesh?.receiveShadows ?? !1,
      darkness: this.shadowGenerator.darkness,
      height: this.planeHeightRatio,
      size: this.sizeFactor
    }
  }
  getTransformShadowInfo() {
    return Ue(this.getShadowCasterInfo(), [
      {
        key: "darkness",
        describe: "darkness",
        valueType: "slider",
        slider: { min: 0, max: 1, step: 0.01 },
        setCallBackName: "LightShadowCaster-setDarkness"
      },
      {
        key: "height",
        describe: "height",
        valueType: "slider",
        slider: { min: -5, max: 5, step: 0.01 },
        setCallBackName: "LightShadowCaster-setPlaneHeight"
      },
      {
        key: "size",
        describe: "size",
        valueType: "slider",
        slider: { min: 0, max: 10, step: 0.01 },
        setCallBackName: "LightShadowCaster-setPlaneSize"
      }
    ])
  }
  dispose() {
    this.shadowGenerator.dispose(), this.groundMesh.dispose(!1, !0), (this.groundMesh = null)
  }
}
const it = et()
class rt {
  constructor(e, t) {
    Object.defineProperty(this, "scene", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "shadowType", { enumerable: !0, configurable: !0, writable: !0, value: "shadowCaster" }),
      Object.defineProperty(this, "light", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "shadowCaster", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "internalIntensity", { enumerable: !0, configurable: !0, writable: !0, value: 1 }),
      Object.defineProperty(this, "internalLightEnable", { enumerable: !0, configurable: !0, writable: !0, value: !0 }),
      Object.defineProperty(this, "globalState", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      (this.scene = e),
      (this.globalState = t),
      (this.light = new H("shadowLight", new a(-1, -2, -1), this.scene)),
      (this.light.position = new a(1, 1, 1))
    let i = it.environment
    this.updateLightStateInfo(i.lightEnable, i.lightIntensity),
      (this.shadowCaster = new at(this.scene, this.light, t)),
      this.init()
  }
  init() {
    this.globalState.onInternalSceneLoaded.add(({ loadMesh: e }) => {
      this.shadowCaster.addShadowObject(e),
        this.globalState.presetsInitParam && this.setShadowPresetsParam(this.globalState.presetsInitParam.shadowGround)
    })
  }
  setShadowPresetsParam(e) {
    for (const t in e)
      if (Object.prototype.hasOwnProperty.call(e, t)) {
        const a = e[t]
        this.setShadowGroundParam(t, a)
      }
  }
  setEnvironmentLightShadowPresetsParam(e) {
    for (const t in e)
      if (Object.prototype.hasOwnProperty.call(e, t)) {
        const a = e[t]
        this.setEnvironmentLightShadowParam(t, a)
      }
  }
  setDarkness(e) {
    this.shadowCaster.setDarkness(e)
  }
  setShadowEnable(e = !1) {
    "shadowCaster" == this.shadowType && this.shadowCaster.setShadowEnable(e)
  }
  setShadowGroundParam(e, t) {
    "shadowCaster" == this.shadowType && this.shadowCaster.setShadowCasterParam(e, t)
  }
  setEnvironmentLightShadowParam(e, t) {
    if ("lightEnable" == e && We(t)) {
      let e = this.globalState.rootMesh
      if ((this.updateLightStateInfo(t, this.internalIntensity), 1 == t)) {
        if (e) {
          e.getChildMeshes().forEach((e) => {
            e.receiveShadows = !0
          })
        }
      } else if (e) {
        e.getChildMeshes().forEach((e) => {
          e.receiveShadows = !0
        })
      }
    } else
      "lightIntensity" == e && Ve(t)
        ? this.updateLightStateInfo(this.internalLightEnable, t)
        : "shadowBias" == e && Ve(t) && "shadowCaster" == this.shadowType && this.shadowCaster.setShadowBias(t)
  }
  updateLightStateInfo(e, t) {
    ;(this.internalLightEnable = e),
      (this.internalIntensity = t),
      this.internalLightEnable ? (this.light.intensity = this.internalIntensity) : (this.light.intensity = 0)
  }
  getShadowInfo() {
    return "shadowCaster" == this.shadowType
      ? { ...this.shadowCaster.getShadowCasterInfo(), shadowType: this.shadowType }
      : { shadowType: "bakedAO", enable: !1, height: 0, darkness: 0.5, size: 1.5 }
  }
  getEnvironmentShadowInfo() {
    return {
      lightEnable: this.internalLightEnable,
      lightIntensity: this.internalIntensity,
      shadowBias: this.shadowCaster.shadowGenerator.bias
    }
  }
  dispose() {
    this.shadowCaster.dispose()
  }
}
var nt, st, ot
!(function (e) {
  ;(e.AlbedoMap = "AlbedoMap"),
    (e.MetallicMap = "MetallicMap"),
    (e.RoughnessMap = "RoughnessMap"),
    (e.OcclusionMap = "OcclusionMap"),
    (e.NormalMap = "NormalMap"),
    (e.EmissivelMap = "EmissivelMap"),
    (e.OpacityMap = "OpacityMap"),
    (e.SpecularMap = "SpecularMap"),
    (e.SpecularColorMap = "SpecularColorMap"),
    (e.SpecularGlossinessMap = "SpecularGlossinessMap")
})(nt || (nt = {})),
  (function (e) {
    ;(e[(e.OPAQUE = E.PBRMATERIAL_OPAQUE)] = "OPAQUE"),
      (e[(e.BLEND = E.PBRMATERIAL_ALPHABLEND)] = "BLEND"),
      (e[(e.ALPHATEST = E.PBRMATERIAL_ALPHATEST)] = "ALPHATEST"),
      (e[(e.ALPHATESTANDBLEND = E.PBRMATERIAL_ALPHATESTANDBLEND)] = "ALPHATESTANDBLEND")
  })(st || (st = {})),
  (function (e) {
    ;(e.Metallic = "Metallic"), (e.Specular = "Specular")
  })(ot || (ot = {}))
class lt {
  constructor(e) {
    Object.defineProperty(this, "scene", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), (this.scene = e)
  }
  transformMetallicRoughness(e) {
    e.getChildMeshes().forEach((e) => {
      if (e.material && e.material instanceof E) {
        let t = e.material
        t.metadata || (t.metadata = {}),
          (t.metadata = {
            ...t.metadata,
            microSurface: t.microSurface,
            reflectivityTexture: t.reflectivityTexture,
            workFlowType: ot.Metallic
          }),
          t.metadata &&
            ("number" == typeof t.metadata.roughness ? (t.roughness = t.metadata.roughness) : (t.roughness = 1),
            "number" == typeof t.metadata.metallic ? (t.metallic = t.metadata.metallic) : (t.metallic = 1),
            t.metadata.metallicTexture instanceof m
              ? (t.metallicTexture = t.metadata.metallicTexture)
              : (t.metallicTexture = null)),
          (t.reflectivityTexture = null)
      }
    })
  }
  transformSpecularGlossiness(e) {
    e.getChildMeshes().forEach((e) => {
      if (e.material && e.material instanceof E) {
        let t = e.material
        t.metadata || (t.metadata = {}),
          (t.metadata = {
            ...t.metadata,
            roughness: t.roughness,
            metallic: t.metallic,
            metallicTexture: t.metallicTexture,
            workFlowType: ot.Specular
          }),
          "number" == typeof t.roughness && ((t.microSurface = t.roughness), (t.roughness = null)),
          (t.metallicTexture = null),
          (t.metallic = null),
          t.metadata &&
            (t.metadata.reflectivityTexture instanceof m
              ? (t.reflectivityTexture = t.metadata.reflectivityTexture)
              : (t.reflectivityTexture = null))
      }
    })
  }
}
class ct {
  constructor(e) {
    Object.defineProperty(this, "textureOperate", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      (this.textureOperate = e)
  }
  getChannelInfoStore(e) {
    return {
      AlbedoMap: this.getChannelInfoByChannelName(e, nt.AlbedoMap),
      MetallicMap: this.getChannelInfoByChannelName(e, nt.MetallicMap),
      RoughnessMap: this.getChannelInfoByChannelName(e, nt.RoughnessMap),
      NormalMap: this.getChannelInfoByChannelName(e, nt.NormalMap),
      OcclusionMap: this.getChannelInfoByChannelName(e, nt.OcclusionMap),
      EmissivelMap: this.getChannelInfoByChannelName(e, nt.EmissivelMap),
      OpacityMap: this.getChannelInfoByChannelName(e, nt.OpacityMap),
      SpecularMap: this.getChannelInfoByChannelName(e, nt.SpecularMap),
      SpecularColorMap: this.getChannelInfoByChannelName(e, nt.SpecularColorMap),
      SpecularGlossinessMap: this.getChannelInfoByChannelName(e, nt.SpecularGlossinessMap)
    }
  }
  getChannelInfo(e) {
    return {
      AlbedoMap: this.getTextureInfoToServer(e.channels.AlbedoMap),
      MetallicMap: this.getTextureInfoToServer(e.channels.MetallicMap),
      RoughnessMap: this.getTextureInfoToServer(e.channels.RoughnessMap),
      OcclusionMap: this.getTextureInfoToServer(e.channels.OcclusionMap),
      NormalMap: this.getTextureInfoToServer(e.channels.NormalMap),
      EmissivelMap: this.getTextureInfoToServer(e.channels.EmissivelMap),
      OpacityMap: this.getTextureInfoToServer(e.channels.OpacityMap),
      SpecularMap: this.getTextureInfoToServer(e.channels.SpecularMap),
      SpecularColorMap: this.getTextureInfoToServer(e.channels.SpecularColorMap),
      SpecularGlossinessMap: this.getTextureInfoToServer(e.channels.SpecularGlossinessMap)
    }
  }
  getChannelInfoFromAlbedoMap(e) {
    let t = { enable: !1, factor: 1, sourceIndex: -1, textureId: -1 }
    return (
      e.albedoTexture instanceof m &&
        ((t.enable = !0), (t.factor = e.albedoTexture.level), (t.textureId = e.albedoTexture.uniqueId)),
      (t.color = e.albedoColor.asArray()),
      t
    )
  }
  getTextureInfoToServer(e) {
    let t = this.textureOperate.getTexture(e.textureId),
      a = { ...e }
    return t && ((a.uvtransforms = this.getUVTransformsInfo(t)), (a.texture = this.getTextureBaseInfo(t))), a
  }
  getChannelInfoByChannelName(e, t) {
    return t == nt.AlbedoMap
      ? this.getChannelInfoFromAlbedoMap(e)
      : t == nt.MetallicMap
        ? this.getChannelInfoFromMetallicMap(e)
        : t == nt.RoughnessMap
          ? this.getChannelInfoFromRoughnessMap(e)
          : t == nt.NormalMap
            ? this.getChannelInfoFromNormalMap(e)
            : t == nt.EmissivelMap
              ? this.getChannelInfoFromEmissivelMap(e)
              : t == nt.OcclusionMap
                ? this.getChannelInfoFromOcclusionMap(e)
                : t == nt.OpacityMap
                  ? this.getChannelInfoFromOpacityMap(e)
                  : t == nt.SpecularMap
                    ? this.getChannelInfoFromSpecularMap(e)
                    : t == nt.SpecularColorMap
                      ? this.getChannelInfoFromSpecularColorMap(e)
                      : t == nt.SpecularGlossinessMap
                        ? this.getChannelInfoFromSpecularGlossinessMap(e)
                        : void 0
  }
  getChannelInfoFromMetallicMap(e) {
    let t = { enable: !0, factor: 1, sourceIndex: -1, textureId: -1 }
    return (
      e.metadata &&
        (e.metadata.workFlowType == ot.Specular && (t.enable = !1),
        "number" == typeof e.metallic && (t.factor = e.metallic),
        e.metallicTexture instanceof m && (t.textureId = e.metallicTexture.uniqueId)),
      t
    )
  }
  getChannelInfoFromRoughnessMap(e) {
    let t = { enable: !0, factor: 1, sourceIndex: -1, textureId: -1 }
    return (
      e.metadata &&
        (e.metadata.workFlowType == ot.Specular && (t.enable = !1), "number" == typeof e.roughness && (t.factor = e.roughness)),
      e.metallicTexture instanceof m && (t.textureId = e.metallicTexture.uniqueId),
      t
    )
  }
  getChannelInfoFromOcclusionMap(e) {
    let t = { enable: !1, factor: 1, sourceIndex: -1, textureId: -1, specularOcclude: e.useRadianceOcclusion }
    return (
      (t.factor = e.ambientTextureStrength),
      e.ambientTexture instanceof m && ((t.enable = !0), (t.textureId = e.ambientTexture.uniqueId)),
      t
    )
  }
  getChannelInfoFromNormalMap(e) {
    let t = { enable: !1, factor: 1, sourceIndex: -1, textureId: -1, normalMapFlipGreen: e.invertNormalMapY }
    return (
      e.bumpTexture instanceof m && ((t.factor = e.bumpTexture.level), (t.enable = !0), (t.textureId = e.bumpTexture.uniqueId)), t
    )
  }
  getChannelInfoFromEmissivelMap(e) {
    let t = { enable: !1, factor: 1, sourceIndex: -1, textureId: -1 }
    return (
      (t.factor = e.emissiveIntensity),
      (t.color = e.emissiveColor.asArray()),
      e.emissiveTexture instanceof m && (t.textureId = e.emissiveTexture.uniqueId),
      (e.emissiveTexture instanceof m || !e.emissiveColor.equals(u.Black())) && (t.enable = !0),
      t
    )
  }
  getChannelInfoFromOpacityMap(e) {
    let t = { enable: !1, factor: 1, type: "Blend", sourceIndex: -1, textureId: -1, invertTransparent: !1 }
    return (
      (t.factor = e.alpha),
      e.opacityTexture instanceof m &&
        ((t.enable = !0), (t.textureId = e.opacityTexture.uniqueId), (t.factor = e.opacityTexture.level)),
      t
    )
  }
  getChannelInfoFromSpecularMap(e) {
    let t = { enable: !1, factor: 1, sourceIndex: -1, textureId: -1 }
    return (t.enable = !0), e.metallicReflectanceTexture instanceof m && (t.textureId = e.metallicReflectanceTexture.uniqueId), t
  }
  getChannelInfoFromSpecularColorMap(e) {
    let t = { enable: !1, factor: 1, sourceIndex: -1, textureId: -1 }
    return (
      (t.color = e.metallicReflectanceColor.asArray()),
      (t.enable = !0),
      e.reflectanceTexture instanceof m && (t.textureId = e.reflectanceTexture.uniqueId),
      t
    )
  }
  getChannelInfoFromSpecularGlossinessMap(e) {
    let t = { enable: !1, factor: 1, sourceIndex: -1, textureId: -1 }
    return (
      (t.factor = e.microSurface),
      (t.color = e.reflectivityColor.asArray()),
      (t.enable = !0),
      e.reflectivityTexture instanceof m && (t.textureId = e.reflectivityTexture.uniqueId),
      t
    )
  }
  getTransparencyMode(e) {
    let t = "OPAQUE"
    switch (e.transparencyMode) {
      case st.OPAQUE:
        t = "OPAQUE"
        break
      case st.BLEND:
        t = "BLEND"
        break
      case st.ALPHATEST:
        t = "ALPHATEST"
        break
      case st.ALPHATESTANDBLEND:
        t = "ALPHATESTANDBLEND"
    }
    return t
  }
  getTextureInfo(e) {
    return { uvtransforms: this.getUVTransformsInfo(e), texture: this.getTextureBaseInfo(e) }
  }
  getUVTransformsInfo(e) {
    return { scale: [e.uScale, e.vScale], offset: [e.uOffset, e.vOffset], rotation: 0 !== e.wAng ? -e.wAng : 0 }
  }
  getTextureBaseInfo(e) {
    let { minFilter: t, magFilter: a } = this.textureOperate.getFilteringInfo(e),
      { wrapU: i, wrapV: r } = this.textureOperate.getWrapInfo(e),
      n = this.textureOperate.getFormatInfo(e),
      s = this.textureOperate.getRequestId(e),
      o = this.textureOperate.getTextureIndexToGltf(e)
    return {
      magFilter: a,
      minFilter: t,
      wrapU: i,
      wrapV: r,
      texCoordUnit: e.coordinatesIndex,
      textureFormat: n,
      uid: e.uniqueId,
      id: s,
      sourceIndex: o
    }
  }
  getExtractTextureInfoToFrontEnd(e) {
    let { minFilter: t, magFilter: a } = this.textureOperate.getFilteringInfo(e),
      { wrapU: i, wrapV: r } = this.textureOperate.getWrapInfo(e),
      n = this.getUVTransformsInfo(e)
    return {
      id: e.uniqueId,
      filter: this.textureOperate.getFilterValue(t, a),
      wrapU: i,
      wrapV: r,
      texCoordUnit: e.coordinatesIndex,
      uvTransformOffsetX: n.offset[0],
      uvTransformOffsetY: n.offset[1],
      uvTransformScaleX: n.scale[0],
      uvTransformScaleY: n.scale[1],
      uvTransformRotation: b.ToDegrees(-n.rotation)
    }
  }
}
const ht = 128
class ut {
  constructor(e) {
    Object.defineProperty(this, "scene", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "textureMap", { enumerable: !0, configurable: !0, writable: !0, value: new Map() }),
      Object.defineProperty(this, "replaceUpdateIds", { enumerable: !0, configurable: !0, writable: !0, value: [] }),
      Object.defineProperty(this, "textureCorrelationMaterialInfos", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: new Map()
      }),
      Object.defineProperty(this, "replaceTextureFiles", { enumerable: !0, configurable: !0, writable: !0, value: new Map() }),
      Object.defineProperty(this, "requestTexture", { enumerable: !0, configurable: !0, writable: !0, value: new Map() }),
      Object.defineProperty(this, "previewTextureCanvasMap", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: new Map()
      }),
      (this.scene = e)
  }
  async loadFileTexture(e) {
    return new Promise((t) => {
      b.ReadFile(
        e,
        (a) => {
          let i = m.CreateFromBase64String(a, e.name, this.scene, !1, !1, m.TRILINEAR_SAMPLINGMODE, () => {
            ;(i.name = e.name),
              this.setTexture(i.uniqueId, i),
              this.writeTextureIndex(i),
              this.replaceTextureFiles.set(i.uniqueId, { file: e, requestId: " -1", uniqueId: i.uniqueId }),
              t(i)
          })
        },
        void 0,
        !0
      )
    })
  }
  collectTextureMap(e) {
    e.metallicTexture &&
      (this.textureMap.set(e.metallicTexture.uniqueId, e.metallicTexture),
      this.writeTextureIndex(e.metallicTexture),
      this.setTextureCorrelationMaterialInfo(e.metallicTexture.uniqueId, e, nt.MetallicMap),
      this.setTextureCorrelationMaterialInfo(e.metallicTexture.uniqueId, e, nt.RoughnessMap)),
      e.albedoTexture &&
        (this.textureMap.set(e.albedoTexture.uniqueId, e.albedoTexture),
        this.writeTextureIndex(e.albedoTexture),
        this.setTextureCorrelationMaterialInfo(e.albedoTexture.uniqueId, e, nt.AlbedoMap)),
      e.bumpTexture &&
        (this.textureMap.set(e.bumpTexture.uniqueId, e.bumpTexture),
        this.writeTextureIndex(e.bumpTexture),
        this.setTextureCorrelationMaterialInfo(e.bumpTexture.uniqueId, e, nt.NormalMap)),
      e.ambientTexture &&
        (this.textureMap.set(e.ambientTexture.uniqueId, e.ambientTexture),
        this.writeTextureIndex(e.ambientTexture),
        this.setTextureCorrelationMaterialInfo(e.ambientTexture.uniqueId, e, nt.OcclusionMap)),
      e.emissiveTexture &&
        (this.textureMap.set(e.emissiveTexture.uniqueId, e.emissiveTexture),
        this.writeTextureIndex(e.emissiveTexture),
        this.setTextureCorrelationMaterialInfo(e.emissiveTexture.uniqueId, e, nt.EmissivelMap)),
      e.opacityTexture &&
        (this.textureMap.set(e.opacityTexture.uniqueId, e.opacityTexture),
        this.writeTextureIndex(e.opacityTexture),
        this.setTextureCorrelationMaterialInfo(e.opacityTexture.uniqueId, e, nt.OpacityMap)),
      e.metallicReflectanceTexture &&
        (this.textureMap.set(e.metallicReflectanceTexture.uniqueId, e.metallicReflectanceTexture),
        this.writeTextureIndex(e.metallicReflectanceTexture),
        this.setTextureCorrelationMaterialInfo(e.metallicReflectanceTexture.uniqueId, e, nt.SpecularMap)),
      e.reflectanceTexture &&
        (this.textureMap.set(e.reflectanceTexture.uniqueId, e.reflectanceTexture),
        this.writeTextureIndex(e.reflectanceTexture),
        this.setTextureCorrelationMaterialInfo(e.reflectanceTexture.uniqueId, e, nt.SpecularColorMap)),
      e.reflectivityTexture &&
        (this.textureMap.set(e.reflectivityTexture.uniqueId, e.reflectivityTexture),
        this.writeTextureIndex(e.reflectivityTexture),
        this.setTextureCorrelationMaterialInfo(e.reflectivityTexture.uniqueId, e, nt.SpecularGlossinessMap))
  }
  writeTextureIndex(e) {
    let t = e.metadata,
      a = this.getTextureIndexFromGltf(e)
    ;(t = t ? { ...t, sourceIndex: a } : { sourceIndex: a }), (e.metadata = t)
  }
  getTextureIndexFromGltf(e) {
    let t = -1
    if (e._internalMetadata && e._internalMetadata.gltf && e._internalMetadata.gltf.pointers) {
      let a = e._internalMetadata.gltf.pointers[1]
      if (a) {
        const e = a.split("#"),
          i = e[e.length - 1]
        ze(i) || (t = Number(i))
      }
    }
    return t
  }
  getTextureIndexToGltf(e) {
    let t = -1
    return e.metadata && Ve(e.metadata.sourceIndex) && (t = e.metadata.sourceIndex), t
  }
  setTextureCorrelationMaterialInfo(e, t, a) {
    let i = this.textureCorrelationMaterialInfos.get(e)
    if (i) {
      let e = i.find((e) => e.materialId == t.uniqueId)
      if (e) {
        e.channelsNames.findIndex((e) => e == a) < 0 && e.channelsNames.push(a)
      } else {
        let e = { materialId: t.uniqueId, materialName: t.name, channelsNames: [a] }
        i.push(e)
      }
    } else {
      let i = []
      i.push({ materialId: t.uniqueId, materialName: t.name, channelsNames: [a] }), this.textureCorrelationMaterialInfos.set(e, i)
    }
  }
  removeTextureCorrelationMaterialInfo(e) {
    this.textureCorrelationMaterialInfos.delete(e)
  }
  getTextureCorrelationMaterialInfoById(e) {
    return this.textureCorrelationMaterialInfos.get(e)
  }
  getFilteringInfo(e) {
    let t = "LINEAR",
      a = "LINEAR_MIPMAP_LINEAR"
    switch (e.samplingMode) {
      case m.TRILINEAR_SAMPLINGMODE:
        ;(t = "LINEAR"), (a = "LINEAR_MIPMAP_LINEAR")
        break
      case m.BILINEAR_SAMPLINGMODE:
        ;(t = "LINEAR"), (a = "LINEAR")
        break
      case m.NEAREST_SAMPLINGMODE:
        ;(t = "Nearest"), (a = "Nearest")
    }
    return { magFilter: t, minFilter: a }
  }
  setTextureFilter(e, t) {
    switch (e) {
      case "Trilinear":
        t.updateSamplingMode(m.TRILINEAR_SAMPLINGMODE)
        break
      case "Bilinear":
        t.updateSamplingMode(m.BILINEAR_SAMPLINGMODE)
        break
      case "Nearest":
        t.updateSamplingMode(m.NEAREST_SAMPLINGMODE)
    }
  }
  setTextureFormat(e, t) {}
  setTextureWrapParam(e, t, a) {
    switch (t) {
      case "REPEAT":
        "wrapU" == e ? (a.wrapU = m.WRAP_ADDRESSMODE) : "wrapV" == e && (a.wrapV = m.WRAP_ADDRESSMODE)
        break
      case "CLAMP":
        "wrapU" == e ? (a.wrapU = m.CLAMP_ADDRESSMODE) : "wrapV" == e && (a.wrapV = m.CLAMP_ADDRESSMODE)
        break
      case "MIRROR":
        "wrapU" == e ? (a.wrapU = m.MIRROR_ADDRESSMODE) : "wrapV" == e && (a.wrapV = m.MIRROR_ADDRESSMODE)
    }
  }
  setUVTransformParam(e, t, a) {
    switch (e) {
      case "uvTransformScaleX":
        a.uScale = t
        break
      case "uvTransformScaleY":
        a.vScale = t
        break
      case "uvTransformRotation":
        a.wAng = b.ToRadians(t)
        break
      case "uvTransformOffsetX":
        a.uOffset = t
        break
      case "uvTransformOffsetY":
        a.vOffset = t
    }
  }
  getFilterValue(e, t) {
    let a = "Trilinear"
    return (
      "LINEAR_MIPMAP_LINEAR" == e && "LINEAR" == t
        ? (a = "Trilinear")
        : "LINEAR" == e && "LINEAR" == t
          ? (a = "Bilinear")
          : "Nearest" == e && "Nearest" == t && (a = "Nearest"),
      a
    )
  }
  getFilteringOptions() {
    return [
      { key: "Trilinear", value: "Trilinear" },
      { key: "Bilinear", value: "Bilinear" },
      { key: "Nearest", value: "Nearest" }
    ]
  }
  getWrapInfo(e) {
    let t = "REPEAT"
    switch (e.wrapU) {
      case m.WRAP_ADDRESSMODE:
        t = "REPEAT"
        break
      case m.CLAMP_ADDRESSMODE:
        t = "CLAMP"
        break
      case m.MIRROR_ADDRESSMODE:
        t = "MIRROR"
    }
    let a = "REPEAT"
    switch (e.wrapV) {
      case m.WRAP_ADDRESSMODE:
        a = "REPEAT"
        break
      case m.CLAMP_ADDRESSMODE:
        a = "CLAMP"
        break
      case m.MIRROR_ADDRESSMODE:
        a = "MIRROR"
    }
    return { wrapU: t, wrapV: a }
  }
  getWrapOptions() {
    return [
      { key: "REPEAT", value: "REPEAT" },
      { key: "CLAMP", value: "CLAMP" },
      { key: "MIRROR", value: "MIRROR" }
    ]
  }
  getFormatInfo(e) {
    let t = "RGBA"
    switch (e.textureFormat) {
      case l.TEXTUREFORMAT_ALPHA:
        t = "ALPHA"
        break
      case l.TEXTUREFORMAT_LUMINANCE:
        t = "LUMINANCE"
        break
      case l.TEXTUREFORMAT_RGBA:
        t = "RGB"
        break
      case l.TEXTUREFORMAT_RGB:
        t = "RGBA"
    }
    return t
  }
  getRequestId(e) {
    let t = "-1",
      a = this.replaceTextureFiles.get(e.uniqueId)
    return a && (t = a.requestId), t
  }
  getFormatOptions() {
    return [
      { key: "RGBA", value: "RGBA" },
      { key: "RGB", value: "RGB" },
      { key: "ALPHA", value: "ALPHA" },
      { key: "LUMINANCE", value: "LUMINANCE" }
    ]
  }
  setTexture(e, t) {
    this.textureMap.set(e, t), this.replaceUpdateIds.push(e)
  }
  setTextureCoordinatesIndex(e, t) {
    let a = this.textureMap.get(e)
    a && (a.coordinatesIndex = t)
  }
  async generatePrevewCanvas(e) {
    let t = document.createElement("canvas")
    ;(t.width = ht), (t.height = ht)
    const a = t.getContext("2d")
    if (a)
      if (e.isReady()) {
        const t = await $.GetTextureDataAsync(e, ht, ht)
        if (e.invertY || e.isCube) {
          const e = 512,
            a = 64
          for (let i = 0; i < a; i++)
            for (let a = 0; a < e; a++) {
              const r = a + i * e,
                n = a + (ht - i - 1) * e,
                s = t[r]
              ;(t[r] = t[n]), (t[n] = s)
            }
        }
        const i = a.createImageData(ht, ht)
        i.data.set(t), a.putImageData(i, 0, 0)
      } else console.log("未准备就绪")
    return t
  }
  async getTexturePreviewCanvasList() {
    let e = [],
      t = []
    for (const a of this.textureMap) {
      let i = a[0],
        r = await this.getTexturePriviewCanvasById(i)
      this.replaceTextureFiles.has(i) ? t.push(r) : e.push(r)
    }
    return t.reverse(), e.splice(0, 0, ...t), e
  }
  async getTexturePriviewCanvasById(e) {
    return new Promise(async (t) => {
      let a = this.getTexture(e)
      if (a) {
        let i = this.previewTextureCanvasMap.get(e)
        if (i) t({ uid: e, name: a.name, canvas: i })
        else {
          let i = await this.generatePrevewCanvas(a)
          this.previewTextureCanvasMap.set(e, i), t({ uid: e, name: a.name, canvas: i })
        }
      }
    })
  }
  deleteTexture(e) {
    let t = this.getTexture(e)
    if (t) {
      t.dispose(), this.textureMap.delete(e)
      let a = this.replaceUpdateIds.indexOf(e)
      a > -1 && this.replaceUpdateIds.splice(a, 1),
        this.replaceTextureFiles.delete(e),
        this.previewTextureCanvasMap.delete(e),
        this.textureCorrelationMaterialInfos.delete(e)
    }
  }
  updateTextureRequestId(e, t) {
    let a = this.replaceTextureFiles.get(e)
    a && (a.requestId = t)
  }
  getReplaceTextureFiles() {
    return this.replaceTextureFiles
  }
  getTexture(e) {
    return this.textureMap.get(e)
  }
  getTextureMap() {
    return this.textureMap
  }
  dispose() {
    this.textureMap.clear(), this.replaceTextureFiles.clear(), (this.replaceUpdateIds = [])
  }
}
class dt {
  constructor(e, t, a) {
    Object.defineProperty(this, "scene", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "globalState", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "transformPBRWorkFlow", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "channelExtraction", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "textureOperate", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "materialMap", { enumerable: !0, configurable: !0, writable: !0, value: new Map() }),
      Object.defineProperty(this, "materialInfoStore", { enumerable: !0, configurable: !0, writable: !0, value: new Map() }),
      Object.defineProperty(this, "materialCollectInfos", { enumerable: !0, configurable: !0, writable: !0, value: [] }),
      Object.defineProperty(this, "materialListInfosFromServer", { enumerable: !0, configurable: !0, writable: !0, value: [] }),
      Object.defineProperty(this, "materialChannelsInfoStore", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: new Map()
      }),
      Object.defineProperty(this, "selectedMeshs", { enumerable: !0, configurable: !0, writable: !0, value: [] }),
      Object.defineProperty(this, "outlineColor", { enumerable: !0, configurable: !0, writable: !0, value: u.Red() }),
      Object.defineProperty(this, "outlineEnable", { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
      Object.defineProperty(this, "outlineWidth", { enumerable: !0, configurable: !0, writable: !0, value: 0.01 }),
      Object.defineProperty(this, "selectMaterialId", { enumerable: !0, configurable: !0, writable: !0, value: -1 }),
      Object.defineProperty(this, "usedTextureCount", { enumerable: !0, configurable: !0, writable: !0, value: 0 }),
      Object.defineProperty(this, "modelOperate", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      (this.scene = e),
      (this.globalState = t),
      (this.modelOperate = a),
      (this.transformPBRWorkFlow = new lt(e)),
      (this.textureOperate = new ut(e)),
      (this.channelExtraction = new ct(this.textureOperate)),
      this.init()
  }
  init() {
    this.globalState.onPickMeshObservable.add(({ mesh: e }) => {
      e.material &&
        (this.setSelectMaterialId(e.material.uniqueId),
        this.globalState.onModelSelectEvent.notifyObservers({ meshId: e.uniqueId, materialId: e.material.uniqueId }))
    }),
      this.globalState.onInternalSceneLoaded.add(({ loadMesh: e }) => {
        this.initalMaterialPreparation(), (this.usedTextureCount = Le(e))
      })
  }
  initalMaterialPreparation() {
    this.collectMaterialsMap(),
      this.traverseFromMaterialMap((e) => {
        this.initialMaterialSetup(e),
          this.recordPBRWorkFlowType(e),
          this.collectTextureMap(e),
          this.collectMaterialInfoStore(e),
          this.collectMaterialChannelsInfoStore(e),
          this.recordTheOriginalMateriialIndex(e)
      }),
      this.syncMaterialInfosList(this.materialListInfosFromServer)
  }
  getTextureQuantityChange() {
    if (this.globalState.rootMesh) {
      let e = Le(this.globalState.rootMesh)
      return this.usedTextureCount !== e
    }
    return !1
  }
  collectMaterialsMap() {
    let e = this.globalState.rootMesh
    e &&
      Ce(e, (e) => {
        this.materialMap.set(e.uniqueId, e)
      })
  }
  syncMaterialInfosList(e) {
    e.forEach((e) => {
      this.traverseFromMaterialMap((t) => {
        let a = this.getOriginalMaterialIndexFromMetadataExtras(t)
        ;-1 !== a && e.materialIndex === a && this.synchronousMaterialInfo(t, e)
      })
    })
  }
  recordTheOriginalMateriialIndex(e) {
    if (e.metadata && e.metadata.gltf && Ve(e.metadata.gltf.extras.originMaterialIndex));
    else {
      let t = this.getMaterialsIndexFromGltf(e)
      this.setMetadataOriginMaterialIndexValue(e, t)
    }
  }
  setMetadataOriginMaterialIndexValue(e, t) {
    e.metadata
      ? e.metadata.gltf && e.metadata.gltf.extras
        ? (e.metadata.gltf.extras.originMaterialIndex = t)
        : (e.metadata.gltf = { extras: { originMaterialIndex: t } })
      : (e.metadata = { gltf: { extras: { originMaterialIndex: t } } })
  }
  readMaterialListFromServer(e) {
    this.materialListInfosFromServer = e
  }
  synchronousMaterialInfo(e, t) {
    for (const a in t)
      if (Object.prototype.hasOwnProperty.call(t, a)) {
        let i = a
        const r = t[i]
        switch (i) {
          case "needDepthPrePass":
            We(r) && (e.needDepthPrePass = r)
            break
          case "alpha":
            Ve(r) && (e.alpha = r)
            break
          case "f0":
            Ve(r) && (e.metallicF0Factor = r)
            break
          case "doubleSided":
            We(r) && (e.backFaceCulling = !r)
            break
          case "alphaCutOff":
            Ve(r) && (e.alphaCutOff = r)
            break
          case "transparencyMode":
            qe(r) && this.setMaterialTransparencyMode(e, r)
            break
          case "environmentIntensity":
            Ve(r) && (e.environmentIntensity = r)
            break
          case "useRadianceOverAlpha":
            We(r) && ((e.useRadianceOverAlpha = r), (e.useSpecularOverAlpha = r))
            break
          case "channels":
            let t = r
            for (const a in t)
              if (Object.prototype.hasOwnProperty.call(t, a)) {
                const i = t[a]
                i &&
                  (this.setChannelParam(e.uniqueId, { channelName: a, property: "factor", value: i.factor }),
                  this.setChannelParam(e.uniqueId, { channelName: a, property: "enable", value: i.enable }),
                  a == nt.NormalMap &&
                    We(i.normalMapFlipGreen) &&
                    this.setChannelParam(e.uniqueId, {
                      channelName: a,
                      property: "normalMapFlipGreen",
                      value: i.normalMapFlipGreen
                    }),
                  a == nt.OcclusionMap &&
                    We(i.specularOcclude) &&
                    this.setChannelParam(e.uniqueId, { channelName: a, property: "specularOcclude", value: i.specularOcclude }))
              }
        }
      }
  }
  recordPBRWorkFlowType(e) {
    e.isMetallicWorkflow()
      ? (e.metadata || (e.metadata = {}), (e.metadata = { ...e.metadata, workFlowType: ot.Metallic }))
      : (e.metadata || (e.metadata = {}), (e.metadata = { ...e.metadata, workFlowType: ot.Specular }))
  }
  collectTextureMap(e) {
    this.textureOperate.collectTextureMap(e)
  }
  collectMaterialInfoStore(e) {
    this.materialInfoStore.set(e.uniqueId, {
      emissiveIntensity: e.emissiveIntensity,
      emissiveColor: e.emissiveColor.clone(),
      emissiveTextureId: e.emissiveTexture ? e.emissiveTexture.uniqueId : null,
      bumpFactor: e.bumpTexture ? e.bumpTexture.level : 1,
      bumpTextureId: e.bumpTexture ? e.bumpTexture.uniqueId : null,
      ambientFactor: e.ambientTextureStrength,
      ambientTextureId: e.ambientTexture ? e.ambientTexture.uniqueId : null,
      opacityTextureId: e.opacityTexture ? e.opacityTexture.uniqueId : null,
      opacityFactor: e.opacityTexture ? e.opacityTexture.level : 1
    })
  }
  collectMaterialChannelsInfoStore(e) {
    if (e) {
      let t = this.channelExtraction.getChannelInfoStore(e),
        a = e.uniqueId
      this.materialChannelsInfoStore.set(a, { materialId: a, channels: t })
    }
  }
  initialMaterialSetup(e) {
    ;(e.useAlphaFromAlbedoTexture = !0),
      (e.useMetallnessFromMetallicTextureBlue = !0),
      (e.useRoughnessFromMetallicTextureGreen = !0),
      (e.useRoughnessFromMetallicTextureAlpha = !1),
      (e.useAmbientInGrayScale = !0),
      (e.useOnlyMetallicFromMetallicReflectanceTexture = !0),
      (e.useMicroSurfaceFromReflectivityMapAlpha = !0)
  }
  setMaterialInfoStoreParam(e, t, a) {
    let i = this.materialInfoStore.get(e)
    i && this.materialInfoStore.set(e, { ...i, [t]: a })
  }
  setSelectMaterialId(e) {
    let t = this.materialMap.get(e)
    t && ((this.selectMaterialId = e), (this.selectedMeshs = t.getBindedMeshes()), this.updateMeshOutline())
  }
  updateMeshOutline() {
    let e = this.globalState.rootMesh,
      t = []
    e && (t = e.getChildMeshes()),
      this.modelOperate.removeAllMeshes(),
      this.modelOperate.removeAllExcludedMesh(),
      this.selectedMeshs.forEach((e) => {
        e instanceof v && this.modelOperate.addHighlightMesh(e)
      }),
      t.forEach((e) => {
        ;-1 == this.selectedMeshs.findIndex((t) => t == e) && e instanceof v && this.modelOperate.addExcludedMesh(e)
      })
  }
  setOutlineEnable(e) {
    this.modelOperate.setHighlightEnable(e)
  }
  setOutlineColor(e) {
    this.modelOperate.setHighlightColor(e)
  }
  setOutlineWidth(e) {
    this.modelOperate.setHighlightWidth(e)
  }
  setChannelParam(e, t) {
    this.gainPBRMaterialToCallBack(e, (a) => {
      switch (t.channelName) {
        case nt.AlbedoMap:
          this.setAlbedoMapParam(a, t.property, t.value)
          break
        case nt.MetallicMap:
          this.setMetallicMapParam(a, t.property, t.value)
          break
        case nt.RoughnessMap:
          this.setRoughnessMapParam(a, t.property, t.value)
          break
        case nt.OcclusionMap:
          this.setOcclusionMapParam(a, t.property, t.value)
          break
        case nt.NormalMap:
          this.setNormalMapParam(a, t.property, t.value)
          break
        case nt.EmissivelMap:
          this.setEmissivelMapParam(a, t.property, t.value)
          break
        case nt.OpacityMap:
          this.setOpacityMapParam(a, t.property, t.value)
          break
        case nt.SpecularMap:
          this.setSpecularMapParam(a, t.property, t.value)
          break
        case nt.SpecularColorMap:
          this.setSpecularColorMapParam(a, t.property, t.value)
          break
        case nt.SpecularGlossinessMap:
          this.setSpecularGlossinessMapParam(a, t.property, t.value)
      }
      this.updateChannelInfoStorePropertyData(e, t)
    })
  }
  setChannelParamByMaterialName(e, t) {
    this.gainPBRMaterialByNameToCallBack(e, (e) => {
      e.forEach((e) => {
        this.setChannelParam(e.uniqueId, t)
      })
    })
  }
  setAlbedoMapParam(e, t, a) {
    switch (t) {
      case "factor":
        e.albedoTexture && Ve(a) && (e.albedoTexture.level = a)
        break
      case "color":
        qe(a) && e.albedoColor.copyFrom(u.FromHexString(a).toLinearSpace())
    }
  }
  setMetallicMapParam(e, t, a) {
    if (e.isMetallicWorkflow() && "factor" === t) e.metallic = a
  }
  setRoughnessMapParam(e, t, a) {
    if (e.isMetallicWorkflow() && "factor" === t) e.roughness = a
  }
  setOcclusionMapParam(e, t, a) {
    switch (t) {
      case "factor":
        Ve(a) && ((e.ambientTextureStrength = a), this.setMaterialInfoStoreParam(e.uniqueId, "ambientFactor", a))
        break
      case "enable":
        if (We(a))
          if (a) {
            let t = this.getMaterialInfoStoreValue(e.uniqueId)
            if (t && ((e.ambientTextureStrength = t.ambientFactor), Ve(t.ambientTextureId))) {
              let a = this.textureOperate.getTexture(t.ambientTextureId)
              a && (e.ambientTexture = a)
            }
          } else (e.ambientTexture = null), (e.ambientTextureStrength = 0)
        break
      case "specularOcclude":
        We(a) && (e.useRadianceOcclusion = a)
    }
  }
  setNormalMapParam(e, t, a) {
    switch (t) {
      case "factor":
        Ve(a) && (e.bumpTexture && (e.bumpTexture.level = a), this.setMaterialInfoStoreParam(e.uniqueId, "bumpFactor", a))
        break
      case "enable":
        if (We(a))
          if (a) {
            let t = this.getMaterialInfoStoreValue(e.uniqueId)
            if (t && Ve(t.bumpTextureId)) {
              let a = this.textureOperate.getTexture(t.bumpTextureId)
              a && ((e.bumpTexture = a), (e.bumpTexture.level = t.bumpFactor))
            }
          } else e.bumpTexture = null
        break
      case "normalMapFlipGreen":
        We(a) && (e.invertNormalMapY = a)
    }
  }
  setEmissivelMapParam(e, t, a) {
    switch (t) {
      case "factor":
        Ve(a) && ((e.emissiveIntensity = a), this.setMaterialInfoStoreParam(e.uniqueId, "emissiveIntensity", a))
        break
      case "color":
        qe(a) &&
          (e.emissiveColor.copyFrom(u.FromHexString(a).toLinearSpace()),
          this.setMaterialInfoStoreParam(e.uniqueId, "emissiveColor", e.emissiveColor.clone()))
        break
      case "enable":
        if (We(a))
          if (a) {
            let t = this.getMaterialInfoStoreValue(e.uniqueId)
            if (
              t &&
              (e.emissiveColor.copyFrom(t.emissiveColor), (e.emissiveIntensity = t.emissiveIntensity), Ve(t.emissiveTextureId))
            ) {
              let a = this.textureOperate.getTexture(t.emissiveTextureId)
              a && (e.emissiveTexture = a)
            }
          } else (e.emissiveTexture = null), e.emissiveColor.set(0, 0, 0), (e.emissiveIntensity = 0)
    }
  }
  setOpacityMapParam(e, t, a) {
    switch (t) {
      case "factor":
        Ve(a) &&
          (e.opacityTexture && (e.opacityTexture.level = a), this.setMaterialInfoStoreParam(e.uniqueId, "opacityFactor", a))
        break
      case "enable":
        if (We(a))
          if (a) {
            let t = this.getMaterialInfoStoreValue(e.uniqueId)
            if (t && Ve(t.opacityTextureId)) {
              let a = this.textureOperate.getTexture(t.opacityTextureId)
              a && ((e.opacityTexture = a), (e.opacityTexture.level = t.opacityFactor))
            }
          } else e.opacityTexture = null
    }
  }
  setSpecularMapParam(e, t, a) {}
  setSpecularColorMapParam(e, t, a) {
    if ("color" === t) qe(a) && e.metallicReflectanceColor.copyFrom(u.FromHexString(a).toLinearSpace())
  }
  setSpecularGlossinessMapParam(e, t, a) {
    switch (t) {
      case "factor":
        Ve(a) && (e.microSurface = a)
        break
      case "color":
        qe(a) && e.reflectivityColor.copyFrom(u.FromHexString(a).toLinearSpace())
    }
  }
  getCollectMaterialNameList() {
    let e = []
    return (
      this.materialMap.forEach((t, a) => {
        e.push({ name: t.name, id: a })
      }),
      e
    )
  }
  transformMetallicRoughness(e) {
    this.transformPBRWorkFlow.transformMetallicRoughness(e)
  }
  transformSpecularGlossiness(e) {
    this.transformPBRWorkFlow.transformSpecularGlossiness(e)
  }
  testTranformSpecularGlossiness(e) {
    e.getChildMeshes().forEach((e) => {
      if (e.material && e.material instanceof E) {
        let t = e.material
        if ("BottleMat_MR" == t.name) {
          const e = "/models/SpecGlossVsMetalRough/metalRough-blender/"
          let a = new m(e + "WaterBottle_specularGlossiness.png", this.scene, !1, !1)
          ;(t.reflectivityTexture = a),
            (t.useMicroSurfaceFromReflectivityMapAlpha = !0),
            (t.albedoTexture = new m(e + "WaterBottle_diffuse.png", this.scene, !1, !1)),
            t.roughness && ((t.microSurface = t.roughness), (t.roughness = null)),
            (t.metallicTexture = null),
            (t.metallic = null)
        }
      }
    })
  }
  getMaterialCollectInfo(e) {
    let t = this.materialMap.get(e),
      a = this.materialChannelsInfoStore.get(e)
    if (a && t instanceof E) {
      let e = this.channelExtraction.getChannelInfo(a)
      return {
        materialName: t.name,
        materialIndex: this.getOriginalMaterialIndexFromMetadataExtras(t),
        materialId: t.uniqueId,
        alphaMode: t.alphaMode,
        needDepthPrePass: t.needDepthPrePass,
        alpha: t.alpha,
        workFlowType: this.getPBRWorkFlow(t),
        transparencyMode: this.channelExtraction.getTransparencyMode(t),
        alphaCutOff: t.alphaCutOff,
        doubleSided: !t.backFaceCulling,
        channels: e,
        f0: t.metallicF0Factor,
        hasSpecularExtension: this.getIsSpecularExtensionToMaterial(t),
        environmentIntensity: t.environmentIntensity,
        useRadianceOverAlpha: t.useRadianceOverAlpha
      }
    }
  }
  getIsSpecularExtensionToMaterial(e) {
    return (
      (null != e.metallicF0Factor && 1 != e.metallicF0Factor) ||
      (null != e.metallicReflectanceColor && !e.metallicReflectanceColor.equalsFloats(1, 1, 1)) ||
      null != e.metallicReflectanceTexture ||
      null != e.reflectanceTexture
    )
  }
  setMaterialParam(e, t) {
    this.gainPBRMaterialToCallBack(e, (e) => {
      switch (t.property) {
        case "alpha":
          Ve(t.value) && (e.alpha = t.value)
          break
        case "doubleSided":
          We(t.value) && (e.backFaceCulling = !t.value)
          break
        case "alphaCutOff":
          Ve(t.value) && (e.alphaCutOff = t.value)
          break
        case "f0":
          Ve(t.value) && (e.metallicF0Factor = t.value)
          break
        case "needDepthPrePass":
          We(t.value) && (e.needDepthPrePass = t.value)
          break
        case "transparencyMode":
          qe(t.value) && this.setMaterialTransparencyMode(e, t.value)
          break
        case "environmentIntensity":
          Ve(t.value) && (e.environmentIntensity = t.value)
          break
        case "useRadianceOverAlpha":
          We(t.value) && ((e.useRadianceOverAlpha = t.value), (e.useSpecularOverAlpha = t.value))
      }
    })
  }
  setMaterialParamByName(e, t) {
    this.gainPBRMaterialByNameToCallBack(e, (e) => {
      e.forEach((e) => {
        this.setMaterialParam(e.uniqueId, t)
      })
    })
  }
  setMaterialEnvironmentIntensity(e, t) {
    this.gainPBRMaterialToCallBack(e, (e) => {
      "environmentIntensity" == t.property && Ve(t.value) && (e.environmentIntensity = t.value)
    })
  }
  setMaterialEnvironmentIntensityByName(e, t) {
    this.gainPBRMaterialByNameToCallBack(e, (e) => {
      e.forEach((e) => {
        this.setMaterialEnvironmentIntensity(e.uniqueId, t)
      })
    })
  }
  setTextureParam(e, t) {
    let a = this.textureOperate.getTexture(e)
    if (a) {
      let i = t.property
      switch (i) {
        case "filter":
          qe(t.value) && this.textureOperate.setTextureFilter(t.value, a)
          break
        case "wrapU":
          qe(t.value) && this.textureOperate.setTextureWrapParam("wrapU", t.value, a)
          break
        case "wrapV":
          qe(t.value) && this.textureOperate.setTextureWrapParam("wrapV", t.value, a)
          break
        case "texCoordUnit":
          Ve(t.value) && this.textureOperate.setTextureCoordinatesIndex(e, t.value)
      }
      Ve(t.value) && this.textureOperate.setUVTransformParam(i, t.value, a)
    }
  }
  getMaterialInfoToFrontEnd(e) {
    let t = this.materialMap.get(e),
      a = this.materialChannelsInfoStore.get(e)
    if (a && t instanceof E) {
      let e = this.channelExtraction.getChannelInfo(a),
        i = {}
      for (const t in e)
        if (Object.prototype.hasOwnProperty.call(e, t)) {
          let a = e[t]
          ;(i[t] = { enable: a.enable, factor: a.factor }),
            a.color && (i[t].color = u.FromArray(a.color).toGammaSpace().toHexString()),
            He(a.type) && (i[t].type = a.type),
            He(a.normalMapFlipGreen) && (i[t].normalMapFlipGreen = a.normalMapFlipGreen),
            He(a.invertTransparent) && (i[t].invertTransparent = a.invertTransparent),
            He(a.specularOcclude) && (i[t].specularOcclude = a.specularOcclude),
            a.texture &&
              a.uvtransforms &&
              (i[t].texture = {
                id: a.texture.uid,
                texCoordUnit: a.texture.texCoordUnit,
                filter: this.textureOperate.getFilterValue(a.texture.minFilter, a.texture.magFilter),
                wrapU: a.texture.wrapU,
                wrapV: a.texture.wrapV,
                uvTransformOffsetX: a.uvtransforms.offset[0],
                uvTransformOffsetY: a.uvtransforms.offset[1],
                uvTransformScaleX: a.uvtransforms.scale[0],
                uvTransformScaleY: a.uvtransforms.scale[1],
                uvTransformRotation: b.ToDegrees(a.uvtransforms.rotation)
              })
        }
      return {
        materialName: t.name,
        id: t.uniqueId,
        workFlowType: this.getPBRWorkFlow(t),
        transparencyMode: this.channelExtraction.getTransparencyMode(t),
        alpha: t.alpha,
        needDepthPrePass: t.needDepthPrePass,
        doubleSided: !t.backFaceCulling,
        channels: i,
        f0: t.metallicF0Factor,
        alphaCutOff: t.alphaCutOff,
        uvList: this.getMaterialUvList(t.uniqueId),
        hasSpecularExtension: this.getIsSpecularExtensionToMaterial(t),
        environmentIntensity: t.environmentIntensity,
        useRadianceOverAlpha: t.useRadianceOverAlpha
      }
    }
    console.error("材质不存在或者材质不是pbr材质,材质名称:", t?.name)
  }
  getTextureListInfoToFrontEnd() {
    let e = [],
      t = this.textureOperate.getTextureMap()
    for (const [, a] of t) {
      let t = this.channelExtraction.getExtractTextureInfoToFrontEnd(a)
      e.push(t)
    }
    return e
  }
  getTextureInfoByIdToFrontEnd(e) {
    let t = this.textureOperate.getTexture(e)
    if (t) {
      return this.channelExtraction.getExtractTextureInfoToFrontEnd(t)
    }
  }
  getMaterialCollectInfoToUI(e) {
    let t = this.materialMap.get(e),
      a = this.materialChannelsInfoStore.get(e)
    if (a && t instanceof E) {
      let e = this.channelExtraction.getChannelInfo(a)
      for (const t in e) {
        let a = e[t]
        for (const e in a)
          if (Object.prototype.hasOwnProperty.call(a, e)) {
            let t = e
            a[t] && ("factor" == t ? a[t] : "color" == t && u.FromArray(a[t]).toHexString())
          }
      }
    }
    return []
  }
  getMaterialUvList(e) {
    let t = new Set(),
      a = this.materialMap.get(e)
    if (a && a instanceof E) {
      a.getBindedMeshes().forEach((e) => {
        this.modelOperate.getMeshUvList(e.uniqueId).forEach((e) => {
          t.add(e)
        })
      })
    }
    return Array.from(t)
  }
  getMaterialUVSelectList(e) {
    let t = this.getMaterialUvList(e),
      a = []
    return (
      t.forEach((e) => {
        "UV1" == e
          ? a.push({ key: e, value: 0 })
          : "UV2" == e
            ? a.push({ key: e, value: 1 })
            : "UV3" == e
              ? a.push({ key: e, value: 2 })
              : "UV4" == e
                ? a.push({ key: e, value: 3 })
                : "UV5" == e
                  ? a.push({ key: e, value: 4 })
                  : "UV6" == e && a.push({ key: e, value: 5 })
      }),
      a
    )
  }
  setMaterialTransparencyMode(e, t) {
    switch (t) {
      case "OPAQUE":
        e.transparencyMode = st.OPAQUE
        break
      case "BLEND":
        ;(e.transparencyMode = st.BLEND), e.albedoTexture && ((e.albedoTexture.hasAlpha = !0), (e.useAlphaFromAlbedoTexture = !0))
        break
      case "ALPHATEST":
        ;(e.transparencyMode = st.ALPHATEST), e.albedoTexture && (e.albedoTexture.hasAlpha = !0)
        break
      case "ALPHATESTANDBLEND":
        e.transparencyMode = st.ALPHATESTANDBLEND
    }
  }
  enlargeSelectMaterial(e, t) {
    this.gainPBRMaterialToCallBack(e, (e) => {
      let a = e.getBindedMeshes()
      this.globalState.onZoomCameraToMeshBoundingInfoEvent.notifyObservers({ meshList: a, isZoom: t })
    })
  }
  getTextureToUI(e) {
    this.getFilteringOptions(), this.getFilteringOptions()
  }
  updateTextureRequestId(e, t) {
    this.textureOperate.updateTextureRequestId(e, t)
  }
  async uploadLocalTextureWithFile(e) {
    return new Promise((t) => {
      this.textureOperate.loadFileTexture(e).then((a) => {
        this.writeTextureMetadataImageFile(a, e), t(!0)
      })
    })
  }
  async updateChannelTexture(e, t, a) {
    return new Promise((i) => {
      this.textureOperate.loadFileTexture(a).then((r) => {
        this.writeTextureMetadataImageFile(r, a),
          this.gainPBRMaterialToCallBack(e, (a) => {
            switch (t) {
              case nt.AlbedoMap:
                a.albedoTexture = r
                break
              case nt.MetallicMap:
              case nt.RoughnessMap:
                a.metallicTexture = r
                break
              case nt.OcclusionMap:
                a.ambientTexture = r
                break
              case nt.NormalMap:
                a.bumpTexture = r
                break
              case nt.EmissivelMap:
                a.emissiveTexture = r
                break
              case nt.OpacityMap:
                a.opacityTexture = r
                break
              case nt.SpecularMap:
                a.metallicReflectanceTexture = r
                break
              case nt.SpecularColorMap:
                a.reflectanceTexture = r
                break
              case nt.SpecularGlossinessMap:
                a.reflectivityTexture = r
            }
            this.updateChannelInfoStoreSourceIndex(e, t, -1),
              this.textureOperate.setTextureCorrelationMaterialInfo(r.uniqueId, a, t),
              i(!0)
          })
      })
    })
  }
  updateChannelInfoStoreSourceIndex(e, t, a) {
    let i = (e) => {
        e.sourceIndex = a
      },
      r = this.materialChannelsInfoStore.get(e)
    if (r) {
      let e = r.channels[t]
      if ((e && i(e), t == nt.MetallicMap)) {
        let e = r.channels[nt.RoughnessMap]
        e && i(e)
      } else if (t == nt.RoughnessMap) {
        let e = r.channels[nt.MetallicMap]
        e && i(e)
      }
    }
  }
  updateChannelInfoStorePropertyData(e, t) {
    let a = this.materialChannelsInfoStore.get(e)
    if (a) {
      let e = a.channels[t.channelName]
      if (He(e) && Object.prototype.hasOwnProperty.call(e, t.property)) {
        let a = t.property
        switch (a) {
          case "factor":
            Ve(t.value) && (e[a] = t.value)
            break
          case "enable":
          case "normalMapFlipGreen":
          case "specularOcclude":
          case "invertTransparent":
            We(t.value) && (e[a] = t.value)
            break
          case "color":
            qe(t.value) && (e[a] = u.FromHexString(t.value).toLinearSpace().asArray())
            break
          case "type":
            qe(t.value) && (e[a] = t.value)
        }
      }
    }
  }
  updateChannelInfoStoreChannelMap(e, t) {
    this.gainPBRMaterialToCallBack(e, (a) => {
      let i = this.materialChannelsInfoStore.get(e)
      if (i) {
        let e = this.channelExtraction.getChannelInfoByChannelName(a, t)
        if ((e && (i.channels[t] = e), t == nt.MetallicMap)) {
          let e = this.channelExtraction.getChannelInfoByChannelName(a, nt.RoughnessMap)
          e && (i.channels[nt.RoughnessMap] = e)
        } else if (t == nt.RoughnessMap) {
          let e = this.channelExtraction.getChannelInfoByChannelName(a, nt.MetallicMap)
          e && (i.channels[nt.MetallicMap] = e)
        }
      }
    })
  }
  emptyChannelTexture(e, t) {
    this.gainPBRMaterialToCallBack(e, (a) => {
      let i = -1,
        r = (e) => {
          e && (i = e.uniqueId)
        }
      switch (t) {
        case "AlbedoMap":
          r(a.albedoTexture), (a.albedoTexture = null)
          break
        case "MetallicMap":
        case "RoughnessMap":
          r(a.metallicTexture), (a.metallicTexture = null)
          break
        case "OcclusionMap":
          r(a.ambientTexture), (a.ambientTexture = null)
          break
        case "NormalMap":
          r(a.bumpTexture), (a.bumpTexture = null)
          break
        case "EmissivelMap":
          r(a.emissiveTexture), (a.emissiveTexture = null)
          break
        case "OpacityMap":
          r(a.opacityTexture), (a.opacityTexture = null)
          break
        case nt.SpecularMap:
          r(a.metallicReflectanceTexture), (a.metallicReflectanceTexture = null)
          break
        case nt.SpecularColorMap:
          r(a.reflectanceTexture), (a.reflectanceTexture = null)
          break
        case nt.SpecularGlossinessMap:
          r(a.reflectivityTexture), (a.reflectivityTexture = null)
      }
      this.updateChannelInfoStoreChannelMap(e, t),
        this.updateChannelInfoStoreSourceIndex(e, t, -1),
        this.textureOperate.removeTextureCorrelationMaterialInfo(i)
    })
  }
  writeTextureMetadataImageFile(e, t) {
    e.metadata ? (e.metadata = { ...e.metadata, imgFile: t }) : (e.metadata = { imgFile: t })
  }
  gainPBRMaterialToCallBack(e, t) {
    let a = this.materialMap.get(e)
    a && a instanceof E && t?.(a)
  }
  gainPBRMaterialByNameToCallBack(e, t) {
    let a = []
    this.materialMap.forEach((t) => {
      t.name == e && t instanceof E && a.push(t)
    }),
      t?.(a)
  }
  traverseFromMaterialMap(e) {
    this.materialMap.forEach((t) => {
      t && t instanceof E && e?.(t)
    })
  }
  findTextureWithMaterialChannelInfoById(e) {
    return this.textureOperate.getTextureCorrelationMaterialInfoById(e)
  }
  deleteTextureById(e) {
    let t = this.textureOperate.getTexture(e),
      a = this.textureOperate.getTextureCorrelationMaterialInfoById(e)
    t &&
      a &&
      a.forEach((e) => {
        this.gainPBRMaterialToCallBack(e.materialId, (t) => {
          e.channelsNames.forEach((a) => {
            switch (a) {
              case nt.AlbedoMap:
                t.albedoTexture = null
                break
              case nt.MetallicMap:
              case nt.RoughnessMap:
                t.metallicTexture = null
                break
              case nt.NormalMap:
                t.bumpTexture = null
                break
              case nt.EmissivelMap:
                t.emissiveTexture = null
                break
              case nt.OcclusionMap:
                t.ambientTexture = null
                break
              case nt.OpacityMap:
                t.opacityTexture = null
                break
              case nt.SpecularMap:
                t.metallicReflectanceTexture = null
                break
              case nt.SpecularColorMap:
                t.reflectanceTexture = null
                break
              case nt.SpecularGlossinessMap:
                t.reflectivityTexture = null
            }
            let i = this.materialChannelsInfoStore.get(e.materialId)
            i && (i.channels[a].textureId = -1)
          })
        })
      }),
      this.textureOperate.deleteTexture(e)
  }
  deleteChannelTexture(e, t) {
    this.gainPBRMaterialToCallBack(e, (e) => {
      switch (t) {
        case nt.AlbedoMap:
          e.albedoTexture && this.textureOperate.deleteTexture(e.albedoTexture.uniqueId), (e.albedoTexture = null)
          break
        case nt.MetallicMap:
        case nt.RoughnessMap:
          e.metallicTexture && this.textureOperate.deleteTexture(e.metallicTexture.uniqueId), (e.metallicTexture = null)
          break
        case nt.OcclusionMap:
          e.ambientTexture && this.textureOperate.deleteTexture(e.ambientTexture.uniqueId), (e.ambientTexture = null)
          break
        case nt.NormalMap:
          e.bumpTexture && this.textureOperate.deleteTexture(e.bumpTexture.uniqueId), (e.bumpTexture = null)
          break
        case nt.EmissivelMap:
          e.emissiveTexture && this.textureOperate.deleteTexture(e.emissiveTexture.uniqueId), (e.emissiveTexture = null)
          break
        case nt.OpacityMap:
          e.opacityTexture && this.textureOperate.deleteTexture(e.opacityTexture.uniqueId), (e.opacityTexture = null)
          break
        case nt.SpecularMap:
          e.metallicReflectanceTexture && this.textureOperate.deleteTexture(e.metallicReflectanceTexture.uniqueId),
            (e.metallicReflectanceTexture = null)
          break
        case nt.SpecularColorMap:
          e.reflectanceTexture && this.textureOperate.deleteTexture(e.reflectanceTexture.uniqueId), (e.reflectanceTexture = null)
          break
        case nt.SpecularGlossinessMap:
          e.reflectivityTexture && this.textureOperate.deleteTexture(e.reflectivityTexture.uniqueId),
            (e.reflectivityTexture = null)
      }
    })
  }
  changeMaterialChannelTexture(e, t, a) {
    this.gainPBRMaterialToCallBack(e, (i) => {
      let r = this.textureOperate.getTexture(a)
      if (r) {
        let n = this.textureOperate.getTextureIndexToGltf(r)
        switch (t) {
          case nt.AlbedoMap:
            ;(r.hasAlpha = !0), (i.albedoTexture = r)
            break
          case nt.MetallicMap:
          case nt.RoughnessMap:
            i.metallicTexture = r
            break
          case nt.OcclusionMap:
            i.ambientTexture = r
            break
          case nt.NormalMap:
            i.bumpTexture = r
            break
          case nt.EmissivelMap:
            i.emissiveTexture = r
            break
          case nt.OpacityMap:
            i.opacityTexture = r
            break
          case nt.SpecularMap:
            i.metallicReflectanceTexture = r
            break
          case nt.SpecularColorMap:
            i.reflectanceTexture = r
            break
          case nt.SpecularGlossinessMap:
            ;(r.hasAlpha = !0), (i.reflectivityTexture = r)
        }
        this.updateChannelInfoStoreChannelMap(e, t),
          this.updateChannelInfoStoreSourceIndex(e, t, n),
          this.textureOperate.setTextureCorrelationMaterialInfo(a, i, t)
      }
    })
  }
  async getAllImagesList() {
    let e = [],
      t = this.textureOperate.getTextureMap()
    for (const a of t) {
      a[0]
      let t = a[1]
      const i = t.getSize(),
        r = i.width / i.height
      let n = Math.round(32 / r) || 1,
        s = document.createElement("canvas")
      ;(s.width = 32), (s.height = n)
      const o = s.getContext("2d")
      let l = ""
      if (o)
        if (t.isReady()) {
          const e = await $.GetTextureDataAsync(t, 32, n)
          l = X(t) ?? ""
          const a = o.createImageData(32, n)
          a.data.set(e), o.putImageData(a, 0, 0), (l = s.toDataURL())
        } else console.log("未准备就绪")
      let c = t.getBaseSize()
      e.push({ uid: t.uniqueId, name: t.name, images: { url: l, width: c.width, height: c.height } })
    }
    return e
  }
  async getAllImageCanvasList() {
    return this.textureOperate.getTexturePreviewCanvasList()
  }
  getMaterialsIndexFromGltf(e) {
    let t = -1
    if (e._internalMetadata && e._internalMetadata.gltf && e._internalMetadata.gltf.pointers) {
      const a = e._internalMetadata.gltf.pointers[0]
      if (a) {
        const e = a.split("/"),
          i = e[e.length - 1]
        ze(i) || (t = Number(i))
      }
    }
    return t
  }
  getOriginalMaterialIndexFromMetadataExtras(e) {
    let t = -1
    return (
      e.metadata &&
        e.metadata.gltf &&
        Ve(e.metadata.gltf.extras.originMaterialIndex) &&
        (t = e.metadata.gltf.extras.originMaterialIndex),
      t
    )
  }
  getFilteringOptions() {
    return this.textureOperate.getFilteringOptions()
  }
  getWrapOptions() {
    return this.textureOperate.getWrapOptions()
  }
  getFormatOptions() {
    return this.textureOperate.getFormatOptions()
  }
  getPBRWorkFlow(e) {
    let t = ot.Metallic
    return e.metadata && e.metadata.workFlowType === ot.Specular && (t = ot.Specular), t
  }
  getMaterialInfoStoreValue(e) {
    return this.materialInfoStore.get(e)
  }
  getInternalMaterialCollectInfos() {
    let e = []
    return (
      this.materialMap.forEach((t, a) => {
        let i = this.getMaterialCollectInfo(a)
        i && e.push(i)
      }),
      e
    )
  }
  findMaterialCollectInfoById(e, t) {
    let a = this.materialCollectInfos.find((t) => t.materialId == e)
    a && t?.(a)
  }
  getAllMaterialCollectInfo() {
    return this.getInternalMaterialCollectInfos()
  }
  getTransparentModeList() {
    return [
      { key: "不透明", value: "OPAQUE" },
      { key: "混合", value: "BLEND" },
      { key: "透明测试", value: "ALPHATEST" },
      { key: "透明测试和混合", value: "ALPHATESTANDBLEND" }
    ]
  }
  getTextureFileList() {
    let e = []
    return (
      this.textureOperate.getReplaceTextureFiles().forEach((t) => {
        e.push(t)
      }),
      e
    )
  }
  dispose() {
    this.materialChannelsInfoStore.clear(),
      this.materialMap.clear(),
      this.materialInfoStore.clear(),
      this.textureOperate.dispose()
  }
}
class mt {
  constructor(e, t) {
    Object.defineProperty(this, "scene", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "globalState", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "meshMaterialListMap", { enumerable: !0, configurable: !0, writable: !0, value: new Map() }),
      Object.defineProperty(this, "wireframeMaterial", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "wireframeColor", { enumerable: !0, configurable: !0, writable: !0, value: "#000000" }),
      Object.defineProperty(this, "wireframeThickness", { enumerable: !0, configurable: !0, writable: !0, value: 1 }),
      Object.defineProperty(this, "wireframeEnable", { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
      (this.scene = e),
      (this.globalState = t),
      (this.wireframeMaterial = new Y("wireframeMaterial")),
      (this.wireframeMaterial.wireframe = !0),
      (this.wireframeMaterial.disableLighting = !0),
      this.wireframeMaterial.emissiveColor.setHexString(this.wireframeColor),
      this.init()
  }
  init() {
    this.globalState.onInternalSceneLoaded.add(({ loadMesh: e }) => {
      this.reset(),
        e.getChildMeshes().forEach((e) => {
          if (this.globalState.engineConfig.bindWireframe)
            try {
              e instanceof v && (this.storeMeshRawMaterial(e), this.syncWireframeData())
            } catch (e) {
              console.error("wireframe error::", e)
            }
          e.refreshBoundingInfo(!0, !1)
        })
    })
  }
  storeMeshRawMaterial(e) {
    e.material instanceof E && this.meshMaterialListMap.set(e, e.material)
  }
  setPresetsParam(e) {
    for (const t in e)
      if (Object.prototype.hasOwnProperty.call(e, t)) {
        const a = e[t]
        this.setWireframeParam(t, a)
      }
  }
  getWireframeInfo() {
    return { enable: this.wireframeEnable, factor: this.wireframeThickness, color: this.wireframeColor }
  }
  setWireframeParam(e, t) {
    switch (e) {
      case "enable":
        We(t) &&
          ((this.wireframeEnable = t),
          this.wireframeEnable
            ? this.meshMaterialListMap.forEach((e, t) => {
                t.material = this.wireframeMaterial
              })
            : this.meshMaterialListMap.forEach((e, t) => {
                t.material = e
              }))
        break
      case "factor":
        Ve(t) && ((this.wireframeThickness = t), (this.wireframeMaterial.alpha = t))
        break
      case "color":
        qe(t) && ((this.wireframeColor = t), this.wireframeMaterial.emissiveColor.setHexString(t))
    }
  }
  syncWireframeData() {
    this.setWireframeParam("enable", this.wireframeEnable),
      this.setWireframeParam("factor", this.wireframeThickness),
      this.setWireframeParam("color", this.wireframeColor)
  }
  prepareDebugMode(e) {
    Re(e, (e) => {})
  }
  getMeshMaterialListMap() {
    return this.meshMaterialListMap
  }
  reset() {
    this.meshMaterialListMap.clear()
  }
  dispose() {
    this.meshMaterialListMap.clear(), this.wireframeMaterial.dispose()
  }
}
class pt {
  constructor(e) {
    Object.defineProperty(this, "scene", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "basicPipeline", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "camera", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "internalBloomEnable", { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
      Object.defineProperty(this, "isBloomCombineActive", { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
      Object.defineProperty(this, "internalVignetteEnable", { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
      Object.defineProperty(this, "isVignetteActive", { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
      Object.defineProperty(this, "internalDepthOfFieldEnable", { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
      Object.defineProperty(this, "isDepthOfFieldActive", { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
      Object.defineProperty(this, "imageProcessingPostProcess", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }),
      Object.defineProperty(this, "depthOfFieldEffect", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "grainPostProcess", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "internalGrainEnable", { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
      Object.defineProperty(this, "isGrainActive", { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
      Object.defineProperty(this, "internalSharpenEnable", { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
      Object.defineProperty(this, "isSharpenActive", { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
      Object.defineProperty(this, "internalFxaaEnable", { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
      Object.defineProperty(this, "isFxaaActive", { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
      Object.defineProperty(this, "sharpenPostProcess", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      (this.scene = e),
      (this.camera = this.scene.activeCamera),
      (this.basicPipeline = new Z("basicPipeline", !0, this.scene, [this.camera]))
    let t = et().postProcess.bloom
    ;(this.basicPipeline.bloomWeight = t.factor),
      (this.basicPipeline.bloomThreshold = t.threshold),
      (this.imageProcessingPostProcess = this.basicPipeline.imageProcessing),
      (this.depthOfFieldEffect = this.basicPipeline.depthOfField),
      (this.grainPostProcess = this.basicPipeline.grain),
      (this.sharpenPostProcess = this.basicPipeline.sharpen)
  }
  getBloomInfo() {
    return {
      enable: this.internalBloomEnable,
      factor: this.basicPipeline.bloomWeight,
      threshold: this.basicPipeline.bloomThreshold
    }
  }
  getVignetteInfo() {
    return {
      enable: this.internalVignetteEnable,
      vignetteWeight: this.imageProcessingPostProcess.vignetteWeight,
      vignetteCameraFov: this.imageProcessingPostProcess.vignetteCameraFov,
      vignetteColor: this.imageProcessingPostProcess.vignetteColor.toHexString()
    }
  }
  getDepthOfFieldInfo() {
    return {
      enable: this.internalDepthOfFieldEnable,
      lensSize: this.depthOfFieldEffect.lensSize,
      fStop: this.depthOfFieldEffect.fStop
    }
  }
  getGrainInfo() {
    return {
      enable: this.internalGrainEnable,
      intensity: this.grainPostProcess.intensity,
      animated: this.grainPostProcess.animated
    }
  }
  getSharpenInfo() {
    return {
      enable: this.internalSharpenEnable,
      edgeAmount: this.sharpenPostProcess.edgeAmount,
      colorAmount: this.sharpenPostProcess.colorAmount
    }
  }
  getFxaaInfo() {
    return { enable: this.internalFxaaEnable }
  }
  setBloomParam(e, t) {
    switch (e) {
      case "enable":
        We(t) && ((this.internalBloomEnable = t), (this.basicPipeline.bloomEnabled = t), (this.isBloomCombineActive = t))
        break
      case "factor":
        Ve(t) && (this.basicPipeline.bloomWeight = t)
        break
      case "threshold":
        Ve(t) && (this.basicPipeline.bloomThreshold = t)
    }
  }
  setVignetteParam(e, t) {
    switch (e) {
      case "enable":
        We(t) &&
          ((this.internalVignetteEnable = t),
          (this.imageProcessingPostProcess.vignetteEnabled = t),
          (this.isVignetteActive = t),
          this.updateImageProcessingEnableState())
        break
      case "vignetteWeight":
        Ve(t) && (this.imageProcessingPostProcess.vignetteWeight = t)
        break
      case "vignetteCameraFov":
        Ve(t) && (this.imageProcessingPostProcess.vignetteCameraFov = t)
        break
      case "vignetteColor":
        qe(t) && (this.imageProcessingPostProcess.vignetteColor = d.FromHexString(t))
    }
  }
  setDepthOfFieldParam(e, t) {
    switch (e) {
      case "enable":
        We(t) &&
          ((this.internalDepthOfFieldEnable = t),
          (this.basicPipeline.depthOfFieldEnabled = t),
          (this.isDepthOfFieldActive = t),
          this.scene.postProcessRenderPipelineManager.updateOperateDepthMapCount(t, this.scene))
        break
      case "fStop":
        Ve(t) && (this.depthOfFieldEffect.fStop = t)
        break
      case "lensSize":
        Ve(t) && (this.depthOfFieldEffect.lensSize = t)
    }
  }
  setGrainParam(e, t) {
    switch (e) {
      case "enable":
        We(t) && ((this.internalGrainEnable = t), (this.basicPipeline.grainEnabled = t), (this.isGrainActive = t))
        break
      case "intensity":
        Ve(t) && (this.grainPostProcess.intensity = t)
        break
      case "animated":
        We(t) && (this.grainPostProcess.animated = t)
    }
  }
  setSharpenParam(e, t) {
    switch (e) {
      case "enable":
        We(t) && ((this.internalSharpenEnable = t), (this.basicPipeline.sharpenEnabled = t), (this.isSharpenActive = t))
        break
      case "edgeAmount":
        Ve(t) && (this.sharpenPostProcess.edgeAmount = t)
        break
      case "colorAmount":
        Ve(t) && (this.sharpenPostProcess.colorAmount = t)
    }
  }
  setFxaaParam(e, t) {
    if ("enable" === e) We(t) && ((this.internalFxaaEnable = t), (this.isFxaaActive = t), (this.basicPipeline.fxaaEnabled = t))
  }
  setSWitchEnable(e) {
    e
      ? (this.internalBloomEnable &&
          0 == this.isBloomCombineActive &&
          ((this.basicPipeline.bloomEnabled = e), (this.isBloomCombineActive = !0)),
        this.internalVignetteEnable &&
          0 == this.isVignetteActive &&
          ((this.imageProcessingPostProcess.vignetteEnabled = e), (this.isVignetteActive = !0)),
        this.internalDepthOfFieldEnable &&
          0 == this.isDepthOfFieldActive &&
          ((this.basicPipeline.depthOfFieldEnabled = e),
          this.scene.postProcessRenderPipelineManager.updateOperateDepthMapCount(e, this.scene),
          (this.isDepthOfFieldActive = !0)),
        this.internalGrainEnable && 0 == this.isGrainActive && ((this.basicPipeline.grainEnabled = e), (this.isGrainActive = !0)),
        this.internalSharpenEnable &&
          0 == this.isSharpenActive &&
          ((this.basicPipeline.sharpenEnabled = e), (this.isSharpenActive = !0)),
        this.internalFxaaEnable && 0 == this.isFxaaActive && ((this.basicPipeline.fxaaEnabled = e), (this.isFxaaActive = !0)))
      : (this.isBloomCombineActive && ((this.basicPipeline.bloomEnabled = !1), (this.isBloomCombineActive = !1)),
        this.isVignetteActive && ((this.imageProcessingPostProcess.vignetteEnabled = !1), (this.isVignetteActive = !1)),
        this.internalDepthOfFieldEnable &&
          ((this.basicPipeline.depthOfFieldEnabled = !1),
          this.scene.postProcessRenderPipelineManager.updateOperateDepthMapCount(!1, this.scene),
          (this.isDepthOfFieldActive = !1)),
        this.internalGrainEnable && ((this.basicPipeline.grainEnabled = !1), (this.isGrainActive = !1)),
        this.internalSharpenEnable && ((this.basicPipeline.sharpenEnabled = !1), (this.isSharpenActive = !1)),
        this.internalFxaaEnable && ((this.basicPipeline.fxaaEnabled = !1), (this.isFxaaActive = !1))),
      this.updateImageProcessingEnableState()
  }
  updateImageProcessingEnableState() {
    let e = !1
    this.isVignetteActive && (e = !0), this.setImageProcessingEnabled(e)
  }
  setImageProcessingEnabled(e) {
    e !== this.basicPipeline.imageProcessingEnabled && this.updateSceneClearColor(e),
      (this.basicPipeline.imageProcessingEnabled = e)
  }
  updateSceneClearColor(e) {
    let t = this.scene.clearColor.clone()
    this.scene.clearColor = e ? t.toLinearSpace() : t.toGammaSpace()
  }
  dispose() {
    this.basicPipeline.dispose()
  }
}
const bt = "ssaopipeline"
class gt {
  constructor(e) {
    Object.defineProperty(this, "scene", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "ssaoRenderingPipeline", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "_enable", { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
      Object.defineProperty(this, "isCombineActive", { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
      Object.defineProperty(this, "camera", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      (this.scene = e),
      (this.camera = this.scene.activeCamera)
    let t = et()
    this.ssaoRenderingPipeline = new Q(bt, e, { ssaoRatio: 0.5, combineRatio: 1 }, [])
    let a = t.postProcess.ssao
    ;(this.ssaoRenderingPipeline.totalStrength = a.factor), (this.ssaoRenderingPipeline.radius = a.radius)
  }
  getSSAOInfo() {
    return {
      enable: this._enable,
      factor: this.ssaoRenderingPipeline.totalStrength,
      radius: this.ssaoRenderingPipeline.radius,
      base: this.ssaoRenderingPipeline.base,
      area: this.ssaoRenderingPipeline.area,
      fallOff: this.ssaoRenderingPipeline.fallOff
    }
  }
  setSSAOParam(e, t) {
    switch (e) {
      case "enable":
        We(t) &&
          (t
            ? (this.scene.postProcessRenderPipelineManager.attachCamerasToRenderPipeline(bt, this.camera),
              this.scene.postProcessRenderPipelineManager.updateOperateDepthMapCount(!0, this.scene))
            : (this.scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(bt, this.camera),
              this.scene.postProcessRenderPipelineManager.updateOperateDepthMapCount(!1, this.scene)),
          (this.isCombineActive = t),
          (this._enable = t))
        break
      case "factor":
        Ve(t) && (this.ssaoRenderingPipeline.totalStrength = t)
        break
      case "radius":
        Ve(t) && (this.ssaoRenderingPipeline.radius = t)
        break
      case "base":
        Ve(t) && (this.ssaoRenderingPipeline.base = t)
        break
      case "area":
        Ve(t) && (this.ssaoRenderingPipeline.area = t)
        break
      case "fallOff":
        Ve(t) && (this.ssaoRenderingPipeline.fallOff = t)
    }
  }
  setSWitchEnable(e) {
    e && this._enable
      ? 0 == this.isCombineActive &&
        ((this.isCombineActive = !0),
        this.scene.postProcessRenderPipelineManager.attachCamerasToRenderPipeline(bt, this.camera),
        this.scene.postProcessRenderPipelineManager.updateOperateDepthMapCount(!0, this.scene))
      : this.isCombineActive &&
        (this.scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(bt, this.camera),
        this.scene.postProcessRenderPipelineManager.updateOperateDepthMapCount(!1, this.scene),
        (this.isCombineActive = !1))
  }
  dispose() {
    this.ssaoRenderingPipeline.dispose(!0)
  }
}
class ft {
  constructor(e) {
    Object.defineProperty(this, "scene", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "camera", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "_enable", { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
      Object.defineProperty(this, "isCombineActive", { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
      Object.defineProperty(this, "ssrRenderingPipeline", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      (this.scene = e),
      (this.camera = this.scene.activeCamera),
      (this.ssrRenderingPipeline = new K("ssrpipeline", this.scene, [this.camera])),
      (this.ssrRenderingPipeline.isEnabled = this._enable)
    let t = et().postProcess.ssr
    this.ssrRenderingPipeline.strength = t.factor
  }
  getSSRInfo() {
    return {
      enable: this._enable,
      factor: this.ssrRenderingPipeline.strength,
      reflectionSpecularFalloffExponent: this.ssrRenderingPipeline.reflectionSpecularFalloffExponent,
      selfCollisionNumSkip: this.ssrRenderingPipeline.selfCollisionNumSkip,
      thickness: this.ssrRenderingPipeline.thickness,
      enableAutomaticThicknessComputation: this.ssrRenderingPipeline.enableAutomaticThicknessComputation,
      blurDispersionStrength: this.ssrRenderingPipeline.blurDispersionStrength,
      attenuateFacingCamera: this.ssrRenderingPipeline.attenuateFacingCamera
    }
  }
  setSSRParam(e, t) {
    switch (e) {
      case "enable":
        $e(t, "boolean", (e) => {
          ;(this.ssrRenderingPipeline.isEnabled = e), (this._enable = e), (this.isCombineActive = e)
        })
        break
      case "factor":
        $e(t, "number", (e) => {
          this.ssrRenderingPipeline.strength = e
        })
        break
      case "reflectionSpecularFalloffExponent":
        $e(t, "number", (e) => {
          this.ssrRenderingPipeline.reflectionSpecularFalloffExponent = e
        })
        break
      case "selfCollisionNumSkip":
        $e(t, "number", (e) => {
          this.ssrRenderingPipeline.selfCollisionNumSkip = e
        })
        break
      case "thickness":
        $e(t, "number", (e) => {
          this.ssrRenderingPipeline.thickness = e
        })
        break
      case "enableAutomaticThicknessComputation":
        $e(t, "boolean", (e) => {
          this.ssrRenderingPipeline.enableAutomaticThicknessComputation = e
        })
        break
      case "blurDispersionStrength":
        $e(t, "number", (e) => {
          this.ssrRenderingPipeline.blurDispersionStrength = e
        })
        break
      case "attenuateFacingCamera":
        $e(t, "boolean", (e) => {
          this.ssrRenderingPipeline.attenuateFacingCamera = e
        })
    }
  }
  setSWitchEnable(e) {
    e && this._enable
      ? 0 == this.isCombineActive && ((this.ssrRenderingPipeline.isEnabled = e), (this.isCombineActive = !0))
      : this.isCombineActive && ((this.ssrRenderingPipeline.isEnabled = e), (this.isCombineActive = !1))
  }
  dispose() {
    this.ssrRenderingPipeline.dispose(!0)
  }
}
class vt {
  constructor(e) {
    Object.defineProperty(this, "scene", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "camera", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "_enable", { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
      Object.defineProperty(this, "isCombineActive", { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
      Object.defineProperty(this, "taaRenderingPipeline", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      (this.scene = e),
      (this.camera = this.scene.activeCamera),
      (this.taaRenderingPipeline = new J("taapipeline", this.scene, [this.camera])),
      (this.taaRenderingPipeline.isEnabled = this._enable),
      et().postProcess.taa
  }
  getTAAInfo() {
    return { enable: this._enable, factor: this.taaRenderingPipeline.factor, samples: this.taaRenderingPipeline.samples }
  }
  setTAAParam(e, t) {
    switch (e) {
      case "enable":
        $e(t, "boolean", (e) => {
          ;(this.taaRenderingPipeline.isEnabled = e), (this._enable = e), (this.isCombineActive = e)
        })
        break
      case "factor":
        $e(t, "number", (e) => {
          this.taaRenderingPipeline.factor = e
        })
        break
      case "samples":
        $e(t, "number", (e) => {
          this.taaRenderingPipeline.samples = e
        })
    }
  }
  setSWitchEnable(e) {
    e && this._enable
      ? 0 == this.isCombineActive && ((this.taaRenderingPipeline.isEnabled = e), (this.isCombineActive = !0))
      : this.isCombineActive && ((this.taaRenderingPipeline.isEnabled = e), (this.isCombineActive = !1))
  }
  dispose() {
    this.taaRenderingPipeline.dispose()
  }
}
Object.defineProperty(ee.prototype, "postProcessStoreInfo", { value: { depthMapUseCount: 0 }, enumerable: !0, configurable: !0 }),
  (ee.prototype.updateOperateDepthMapCount = function (e, t) {
    let a = this
    e
      ? (a.postProcessStoreInfo.depthMapUseCount += 1)
      : (a.postProcessStoreInfo.depthMapUseCount > 0 && (a.postProcessStoreInfo.depthMapUseCount -= 1),
        0 == a.postProcessStoreInfo.depthMapUseCount && t.disableDepthRenderer())
  })
class Pt {
  constructor(e, t) {
    Object.defineProperty(this, "basicPostProcessing", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "ssaoPostProcessing", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "ssrPostProcessing", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "taaPostProcessing", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "enable", { enumerable: !0, configurable: !0, writable: !0, value: !0 }),
      Object.defineProperty(this, "globalState", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      (this.globalState = t),
      (this.basicPostProcessing = new pt(e)),
      (this.ssaoPostProcessing = new gt(e)),
      (this.ssrPostProcessing = new ft(e)),
      (this.taaPostProcessing = new vt(e)),
      this.basicPostProcessing.setImageProcessingEnabled(this.globalState.engineConfig.imageProcessingEnabled),
      (this.globalState.applyByPostProcess = e.imageProcessingConfiguration.applyByPostProcess)
    let a = et()
    this.enable = a.postProcess.enable
  }
  getPostProcessingInfo() {
    let e = this.basicPostProcessing.getBloomInfo(),
      t = this.basicPostProcessing.getVignetteInfo(),
      a = this.basicPostProcessing.getDepthOfFieldInfo(),
      i = this.basicPostProcessing.getGrainInfo(),
      r = this.basicPostProcessing.getSharpenInfo(),
      n = this.basicPostProcessing.getFxaaInfo(),
      s = this.taaPostProcessing.getTAAInfo()
    return {
      enable: this.enable,
      bloom: e,
      ssr: this.ssrPostProcessing.getSSRInfo(),
      ssao: this.ssaoPostProcessing.getSSAOInfo(),
      vignette: t,
      depthOfField: a,
      grain: i,
      sharpen: r,
      fxaa: n,
      taa: s
    }
  }
  setPostProcessTotalEnable(e) {
    ;(this.enable = e),
      this.basicPostProcessing.setSWitchEnable(e),
      this.ssaoPostProcessing.setSWitchEnable(e),
      this.ssrPostProcessing.setSWitchEnable(e),
      this.taaPostProcessing.setSWitchEnable(e)
  }
  setBloomParam(e, t) {
    this.basicPostProcessing.setBloomParam(e, t)
  }
  setSSAOParam(e, t) {
    this.ssaoPostProcessing.setSSAOParam(e, t)
  }
  setSSRParam(e, t) {
    this.ssrPostProcessing.setSSRParam(e, t)
  }
  setTAAParam(e, t) {
    this.taaPostProcessing.setTAAParam(e, t)
  }
  setVignetteParam(e, t) {
    this.basicPostProcessing.setVignetteParam(e, t)
  }
  setDepthOfFieldParam(e, t) {
    this.basicPostProcessing.setDepthOfFieldParam(e, t)
  }
  setGrainParam(e, t) {
    this.basicPostProcessing.setGrainParam(e, t)
  }
  setSharpenParam(e, t) {
    this.basicPostProcessing.setSharpenParam(e, t)
  }
  setFxaaParam(e, t) {
    this.basicPostProcessing.setFxaaParam(e, t)
  }
  setPresetsParam(e) {
    for (const t in e.bloom)
      if (Object.prototype.hasOwnProperty.call(e.bloom, t)) {
        const a = e.bloom[t]
        this.setBloomParam(t, a)
      }
    for (const t in e.vignette)
      if (Object.prototype.hasOwnProperty.call(e.vignette, t)) {
        const a = e.vignette[t]
        this.setVignetteParam(t, a)
      }
    for (const t in e.depthOfField)
      if (Object.prototype.hasOwnProperty.call(e.depthOfField, t)) {
        const a = e.depthOfField[t]
        this.setDepthOfFieldParam(t, a)
      }
    for (const t in e.grain)
      if (Object.prototype.hasOwnProperty.call(e.grain, t)) {
        const a = e.grain[t]
        this.setGrainParam(t, a)
      }
    for (const t in e.sharpen)
      if (Object.prototype.hasOwnProperty.call(e.sharpen, t)) {
        const a = e.sharpen[t]
        this.setSharpenParam(t, a)
      }
    for (const t in e.ssao)
      if (Object.prototype.hasOwnProperty.call(e.ssao, t)) {
        const a = e.ssao[t]
        this.setSSAOParam(t, a)
      }
    for (const t in e.ssr)
      if (Object.prototype.hasOwnProperty.call(e.ssr, t)) {
        const a = e.ssr[t]
        this.setSSRParam(t, a)
      }
    for (const t in e.fxaa)
      if (Object.prototype.hasOwnProperty.call(e.fxaa, t)) {
        const a = e.fxaa[t]
        this.setFxaaParam(t, a)
      }
    for (const t in e.taa) {
      let a = e.taa
      if (Object.prototype.hasOwnProperty.call(a, t)) {
        const e = a[t]
        this.setTAAParam(t, e)
      }
    }
    this.setPostProcessTotalEnable(e.enable)
  }
  dispose() {
    this.basicPostProcessing.dispose(), this.ssaoPostProcessing.dispose(), this.ssrPostProcessing.dispose()
  }
}
class xt {
  constructor(e, t) {
    Object.defineProperty(this, "scene", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "bottomGrid", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "bottomGridMaterial", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "offsetY", { enumerable: !0, configurable: !0, writable: !0, value: 0.001 }),
      Object.defineProperty(this, "gridScaleFactor", { enumerable: !0, configurable: !0, writable: !0, value: 1.5 }),
      Object.defineProperty(this, "globalState", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "gizmoManager", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "loadMesh", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "loadMetaNode", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "gizmoTransformNode", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "bottomGridEnable", { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
      Object.defineProperty(this, "isPickable", { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
      (this.scene = e),
      (this.globalState = t),
      this.initGizmoManager(),
      this.initBottomGrid(),
      this.initInteractionEvents()
  }
  initInteractionEvents() {
    this.scene.onPointerObservable.add((e) => {
      e.type == ae.POINTERPICK &&
        e.pickInfo &&
        e.pickInfo.pickedMesh &&
        this.globalState.onPickMeshObservable.notifyObservers({ mesh: e.pickInfo.pickedMesh })
    })
  }
  setIsPickable(e) {
    let t = this.globalState.rootMesh
    if (t) {
      t.getChildMeshes().forEach((t) => {
        t.isPickable = e
      }),
        (this.isPickable = e)
    }
  }
  initBottomGrid() {
    ;(this.bottomGrid = e.CreateGround(Oe, { width: 1, height: 1 }, this.scene)),
      (this.bottomGrid.isPickable = !1),
      this.bottomGrid.setEnabled(this.bottomGridEnable),
      (this.bottomGridMaterial = new ie("bottomGridMaterial", this.scene)),
      (this.bottomGridMaterial.backFaceCulling = !1),
      (this.bottomGridMaterial.majorUnitFrequency = 1),
      (this.bottomGridMaterial.gridRatio = 0.1),
      this.bottomGridMaterial.mainColor.set(1, 1, 1),
      this.bottomGridMaterial.lineColor.set(1, 1, 1),
      (this.bottomGridMaterial.opacity = 0.98),
      (this.bottomGridMaterial.minorUnitVisibility = 0),
      (this.bottomGridMaterial.useMaxLine = !0),
      (this.bottomGrid.material = this.bottomGridMaterial),
      this.globalState.onInternalSceneLoaded.add(({ loadMesh: e }) => {
        this.loadMesh = e
        let t = e.getChildTransformNodes(!0, (e) => e.name == we)[0]
        t && (this.loadMetaNode = t), this.setIsPickable(!1), this.adaptiveModelGrid(e)
      })
  }
  initGizmoManager() {
    ;(this.gizmoManager = new te(this.scene)),
      (this.gizmoManager.usePointerToAttachGizmos = !1),
      (this.gizmoManager.positionGizmoEnabled = !0),
      (this.gizmoManager.rotationGizmoEnabled = !0),
      (this.gizmoTransformNode = new R(Ie, this.scene)),
      this.gizmoManager.gizmos.positionGizmo &&
        ((this.gizmoManager.gizmos.positionGizmo.scaleRatio = 1.6),
        (this.gizmoManager.gizmos.positionGizmo.zGizmo.isEnabled = !1),
        (this.gizmoManager.gizmos.positionGizmo.xGizmo.isEnabled = !1),
        (this.gizmoManager.gizmos.positionGizmo.updateGizmoRotationToMatchAttachedMesh = !1)),
      this.gizmoManager.gizmos.rotationGizmo &&
        (this.gizmoManager.gizmos.rotationGizmo.updateGizmoRotationToMatchAttachedMesh = !1),
      this.gizmoManager.gizmos.positionGizmo?.onDragObservable.add(() => {
        this.gizmoTransformNode && this.bottomGrid.position.copyFrom(this.gizmoTransformNode.position)
      })
  }
  showSceneGizmo(e = !0) {
    this.bottomGridEnable !== e &&
      (this.bottomGrid.setEnabled(e),
      this.gizmoManager.gizmos.positionGizmo &&
        this.gizmoManager.gizmos.rotationGizmo &&
        (e
          ? (this.gizmoTransformNode && (this.gizmoManager.gizmos.positionGizmo.attachedNode = this.gizmoTransformNode),
            this.loadMetaNode && (this.gizmoManager.gizmos.rotationGizmo.attachedNode = this.loadMetaNode))
          : ((this.gizmoManager.gizmos.positionGizmo.attachedNode = null),
            (this.gizmoManager.gizmos.rotationGizmo.attachedNode = null))),
      (this.bottomGridEnable = e))
  }
  adaptiveModelGrid(e) {
    const t = Ae(e)
    let a = new V(t.min, t.max)
    const i = Math.max(t.max.x - t.min.x, t.max.z - t.min.z)
    let r = this.gridScaleFactor
    this.bottomGrid.scaling.set(i * r, 1, i * r)
    const n = t.min.y
    this.bottomGrid.position.copyFrom(a.centerWorld), (this.bottomGrid.position.y = n - this.offsetY)
  }
  dispose() {
    this.loadMesh?.dispose(!1, !0),
      this.gizmoManager.dispose(),
      this.gizmoTransformNode?.dispose(),
      this.loadMetaNode?.dispose(),
      (this.gizmoManager = null),
      (this.gizmoTransformNode = null),
      (this.loadMetaNode = null),
      (this.loadMesh = void 0),
      this.bottomGrid.dispose(!1, !0),
      (this.bottomGrid = null)
  }
}
D.ShadersStore.glowMapMergePixelShader =
  "\n    varying vec2 vUV;uniform sampler2D textureSampler;\n    #ifdef EMISSIVE\n    uniform sampler2D textureSampler2;\n    #endif\n    uniform float offset;\n    #define CUSTOM_FRAGMENT_DEFINITIONS\n    void main(void) {\n    #define CUSTOM_FRAGMENT_MAIN_BEGIN\n    vec4 baseColor=texture2D(textureSampler,vUV);\n    #ifdef EMISSIVE\n    baseColor+=texture2D(textureSampler2,vUV);baseColor*=offset;\n    #else\n    baseColor.a=min(1.0-baseColor.a, baseColor.a);\n    //baseColor.a=abs(offset-baseColor.a);\n    #ifdef STROKE\n    float alpha=smoothstep(.0,.1,baseColor.a);baseColor.a=alpha;baseColor.rgb=baseColor.rgb*alpha;\n    #endif\n    #endif\n    #if LDR\n    baseColor=clamp(baseColor,0.,1.0);\n    #endif\n    gl_FragColor=baseColor;\n    #define CUSTOM_FRAGMENT_MAIN_END\n}"
class Tt {
  constructor(e, t) {
    Object.defineProperty(this, "highlightLayer", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "scene", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "highlightColor", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: u.FromHexString("#FFA800")
      }),
      Object.defineProperty(this, "highlightWidth", { enumerable: !0, configurable: !0, writable: !0, value: 1 }),
      Object.defineProperty(this, "selectedMeshs", { enumerable: !0, configurable: !0, writable: !0, value: [] }),
      Object.defineProperty(this, "enable", { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
      Object.defineProperty(this, "mainTextureRatio", { enumerable: !0, configurable: !0, writable: !0, value: 0.5 }),
      Object.defineProperty(this, "isStroke", { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
      Object.defineProperty(this, "blurTextureSizeRatio", { enumerable: !0, configurable: !0, writable: !0, value: 0.5 }),
      Object.defineProperty(this, "blurHorizontalSize", { enumerable: !0, configurable: !0, writable: !0, value: 1 }),
      Object.defineProperty(this, "blurVerticalSize", { enumerable: !0, configurable: !0, writable: !0, value: 1 }),
      (this.scene = e),
      Ve(t?.mainTextureRatio) && (this.mainTextureRatio = t.mainTextureRatio),
      Ve(t?.blurTextureSizeRatio) && (this.blurTextureSizeRatio = t.blurTextureSizeRatio),
      Ve(t?.blurHorizontalSize) && (this.blurHorizontalSize = t.blurHorizontalSize),
      Ve(t?.blurVerticalSize) && (this.blurVerticalSize = t.blurVerticalSize),
      We(t?.isStroke) && (this.isStroke = t.isStroke),
      (this.highlightLayer = new re("highlightLayer", this.scene, {
        isStroke: this.isStroke,
        mainTextureRatio: this.mainTextureRatio,
        blurTextureSizeRatio: this.blurTextureSizeRatio,
        blurHorizontalSize: this.blurHorizontalSize,
        blurVerticalSize: this.blurVerticalSize
      })),
      (this.highlightLayer.isEnabled = this.enable),
      (this.highlightLayer.blurHorizontalSize = this.highlightWidth),
      (this.highlightLayer.blurVerticalSize = this.highlightWidth)
  }
  setHighlightEnable(e) {
    ;(this.enable = e), (this.highlightLayer.isEnabled = this.enable)
  }
  addHighlightMesh(e) {
    this.selectedMeshs.indexOf(e) < 0 && (this.selectedMeshs.push(e), this.highlightLayer.addMesh(e, this.highlightColor))
  }
  setHighlightWidth(e) {
    ;(this.highlightWidth = e),
      (this.highlightLayer.blurHorizontalSize = this.highlightWidth),
      (this.highlightLayer.blurVerticalSize = this.highlightWidth)
  }
  setHighlightColor(e) {
    this.highlightColor.setHexString(e),
      (this.selectedMeshs = []),
      this.highlightLayer.removeAllMeshes(),
      this.selectedMeshs.forEach((e) => {
        this.addHighlightMesh(e)
      })
  }
  removeAllMeshes() {
    ;(this.selectedMeshs = []), this.highlightLayer.removeAllMeshes()
  }
  addExcludedMesh(e) {
    this.highlightLayer.addExcludedMesh(e)
  }
  removeAllExcludedMesh() {
    let e = this.highlightLayer._excludedMeshes
    for (const t in e)
      if (Object.prototype.hasOwnProperty.call(e, t)) {
        const a = e[t]
        a && this.highlightLayer.removeExcludedMesh(a.mesh)
      }
  }
  dispose() {
    this.highlightLayer.dispose()
  }
}
class Mt {
  constructor(e) {
    Object.defineProperty(this, "scene", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "modelAdvancedInfoMap", { enumerable: !0, configurable: !0, writable: !0, value: new Map() }),
      Object.defineProperty(this, "highlightLayerOperate", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      (this.scene = e),
      (this.highlightLayerOperate = new Tt(this.scene, { isStroke: !0, mainTextureRatio: 1.8 })),
      this.highlightLayerOperate.setHighlightWidth(0.8)
  }
  initExtraction() {
    let e = this.scene.getRootMesh()
    if (e) {
      e.getChildMeshes().forEach((e) => {
        e.isVerticesDataPresent(x.UVKind), this.modelAdvancedInfoMap.set(e.uniqueId, { uvList: this.getExtractMeshuVListInfo(e) })
      })
    }
  }
  getExtractMeshuVListInfo(e) {
    let t = []
    return (
      e.isVerticesDataPresent(x.UVKind) && t.push("UV1"),
      e.isVerticesDataPresent(x.UV2Kind) && t.push("UV2"),
      e.isVerticesDataPresent(x.UV3Kind) && t.push("UV3"),
      e.isVerticesDataPresent(x.UV4Kind) && t.push("UV4"),
      e.isVerticesDataPresent(x.UV5Kind) && t.push("UV5"),
      e.isVerticesDataPresent(x.UV6Kind) && t.push("UV6"),
      t
    )
  }
  getMeshUvList(e) {
    return this.modelAdvancedInfoMap.get(e)?.uvList ?? []
  }
  setHighlightEnable(e) {
    this.highlightLayerOperate.setHighlightEnable(e)
  }
  addHighlightMesh(e) {
    this.highlightLayerOperate.addHighlightMesh(e)
  }
  addExcludedMesh(e) {
    this.highlightLayerOperate.addExcludedMesh(e)
  }
  removeAllExcludedMesh() {
    this.highlightLayerOperate.removeAllExcludedMesh()
  }
  setHighlightWidth(e) {
    this.highlightLayerOperate.setHighlightWidth(e)
  }
  setHighlightColor(e) {
    this.highlightLayerOperate.setHighlightColor(e)
  }
  removeAllMeshes() {
    this.highlightLayerOperate.removeAllMeshes()
  }
  dispose() {
    this.modelAdvancedInfoMap.clear(), this.highlightLayerOperate.dispose()
  }
}
class yt {
  constructor(e, t) {
    Object.defineProperty(this, "scene", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "from", { enumerable: !0, configurable: !0, writable: !0, value: 0 }),
      Object.defineProperty(this, "to", { enumerable: !0, configurable: !0, writable: !0, value: 0 }),
      Object.defineProperty(this, "loop", { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
      Object.defineProperty(this, "currentFrame", { enumerable: !0, configurable: !0, writable: !0, value: 0 }),
      Object.defineProperty(this, "isPlaying", { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
      Object.defineProperty(this, "currentAnimationGroup", { enumerable: !0, configurable: !0, writable: !0, value: null }),
      Object.defineProperty(this, "globalState", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "animationIndex", { enumerable: !0, configurable: !0, writable: !0, value: -1 }),
      Object.defineProperty(this, "animationListData", { enumerable: !0, configurable: !0, writable: !0, value: [] }),
      Object.defineProperty(this, "onAnimationObersve", { enumerable: !0, configurable: !0, writable: !0, value: new g() }),
      (this.scene = e),
      (this.globalState = t)
  }
  init() {
    this.globalState.onInternalSceneLoaded.add(() => {
      this.globalState.loadAnimationGroups.length > 0 &&
        ((this.animationIndex = 0),
        (this.currentAnimationGroup = this.globalState.loadAnimationGroups[this.animationIndex]),
        (this.loop = this.currentAnimationGroup.loopAnimation),
        (this.to = this.currentAnimationGroup.to),
        (this.isPlaying = this.currentAnimationGroup.isPlaying),
        (this.currentFrame = this.getCurrentFrame(this.currentAnimationGroup)),
        (this.animationListData = this.globalState.loadAnimationGroups.map((e) => ({ name: e.name, to: e.to }))))
    }),
      this.scene.onBeforeRenderObservable.add(() => {
        this.currentAnimationGroup &&
          ((this.currentFrame = this.getCurrentFrame(this.currentAnimationGroup)),
          this.onAnimationObersve.notifyObservers({ currentFrame: this.currentFrame }))
      })
  }
  setCurrentFrame(e) {
    this.currentAnimationGroup &&
      (this.isPlaying
        ? this.currentAnimationGroup.goToFrame(e)
        : (this.currentAnimationGroup.play(!0), this.currentAnimationGroup.goToFrame(e), this.currentAnimationGroup.pause())),
      (this.currentFrame = e)
  }
  setPlayAnimationByIndex(e) {
    if (e < this.globalState.loadAnimationGroups.length) {
      let t = this.globalState.loadAnimationGroups[e]
      t &&
        (this.currentAnimationGroup?.stop(),
        (this.animationIndex = e),
        (this.to = t.to),
        (this.currentAnimationGroup = t),
        this.currentAnimationGroup.play(!0),
        (this.isPlaying = !0))
    }
  }
  getCurrentFrame(e) {
    let t = 0
    const a = e.targetedAnimations
    if (a.length > 0) {
      const i = e.targetedAnimations[0].animation.runtimeAnimations.find((e) => e.target === a[0].target)
      i && (t = i.currentFrame)
    }
    return t
  }
  setAnimationParam(e, t) {
    switch (e) {
      case "isPlaying":
        We(t) &&
          (this.isPlaying !== t && (t ? this.currentAnimationGroup?.play(!0) : this.currentAnimationGroup?.pause()),
          (this.isPlaying = t))
        break
      case "currentFrame":
        Ve(t) && this.setCurrentFrame(t)
        break
      case "animationIndex":
        Ve(t) && this.setPlayAnimationByIndex(t)
    }
  }
  getAnimationInfo() {
    return {
      to: this.to,
      from: this.from,
      isPlaying: this.isPlaying,
      currentFrame: this.currentFrame,
      animationIndex: this.animationIndex,
      animationListData: this.animationListData
    }
  }
  addAnimationListen(e) {
    this.onAnimationObersve.add(e)
  }
  dispose() {
    ;(this.currentAnimationGroup = null), this.onAnimationObersve.clear()
  }
}
class St {
  constructor() {}
  static parseHDRFileToCubeTextureAndEquiRectangularTexture(e, t, a = St.EnvWidthSize, i = !1) {
    return new Promise((r) => {
      ce.FilesToLoad[e.name.toLowerCase()] = e
      let n = new ne("file:" + e.name, t, a, !1, !1, !1, void 0)
      n.onLoadObservable.addOnce(() => {
        let a
        i
          ? ((a = new m("file:" + e.name, t, !1, !1)),
            (a.coordinatesMode = m.EQUIRECTANGULAR_MODE),
            a.onLoadObservable.add(() => {
              r({ cubeTexture: n, equiRectangularTexture: a })
            }))
          : r({ cubeTexture: n, equiRectangularTexture: a })
      })
    })
  }
  static parseJPGFileToEquiRectangularCubeTexture(e, t, a = St.EnvWidthSize, i = !1) {
    return new Promise((r) => {
      ce.FilesToLoad[e.name.toLowerCase()] = e
      let n = new se("file:" + e.name, t, a, !1, !0, () => {
        let a
        i
          ? ((a = new m("file:" + e.name, t, !1, !1)),
            a.onLoadObservable.add(() => {
              r({ cubeTexture: n, equiRectangularTexture: a })
            }))
          : r({ cubeTexture: n, equiRectangularTexture: a })
      })
    })
  }
  static ConvertJPGToEnvTextureFile(e, t) {
    return new Promise((a) => {
      St.parseJPGFileToEquiRectangularCubeTexture(e, t, St.EnvWidthSize, !0).then((i) => {
        let r = i.cubeTexture,
          n = t.getEngine()
        new oe(n).prefilter(r, () => {
          ;(r.gammaSpace = !1),
            (r.lodGenerationScale = St.LodGenerationScale),
            le.CreateEnvTextureAsync(i.cubeTexture).then((t) => {
              let r = _e(new Uint8Array(t), `${De(e.name)}.env`),
                n = i.equiRectangularTexture,
                s = n.getBaseSize(),
                o = s.width,
                l = s.height
              $.GetTextureDataAsync(n, o, l).then((t) => {
                let i = document.createElement("canvas")
                ;(i.width = o), (i.height = l)
                const n = i.getContext("2d")
                if (n) {
                  const e = n.createImageData(o, l)
                  e.data.set(t), n.putImageData(e, 0, 0)
                }
                let s = i.toDataURL("image/jpeg", this.ImageQuality)
                delete ce.FilesToLoad[e.name.toLowerCase()], a({ envFile: r, previewImageBase64: s })
              })
            })
        })
      })
    })
  }
  static ConvertHDRToEnvTextureFile(e, t) {
    return new Promise((a) => {
      St.parseHDRFileToCubeTextureAndEquiRectangularTexture(e, t, St.EnvWidthSize, !0).then((t) => {
        le.CreateEnvTextureAsync(t.cubeTexture).then((i) => {
          let r = _e(new Uint8Array(i), `${De(e.name)}.env`),
            n = t.equiRectangularTexture,
            s = n.getBaseSize(),
            o = s.width,
            l = s.height
          $.GetTextureDataAsync(n, o, l).then((t) => {
            let i = document.createElement("canvas")
            ;(i.width = o), (i.height = l)
            const n = i.getContext("2d")
            if (n) {
              const e = n.createImageData(o, l)
              e.data.set(t), n.putImageData(e, 0, 0)
            }
            let s = i.toDataURL("image/jpeg", this.ImageQuality)
            delete ce.FilesToLoad[e.name.toLowerCase()], a({ envFile: r, previewImageBase64: s })
          })
        })
      })
    })
  }
}
Object.defineProperty(St, "EnvWidthSize", { enumerable: !0, configurable: !0, writable: !0, value: 256 }),
  Object.defineProperty(St, "LodGenerationScale", { enumerable: !0, configurable: !0, writable: !0, value: 0.8 }),
  Object.defineProperty(St, "PreviewImageWidth", { enumerable: !0, configurable: !0, writable: !0, value: 256 }),
  Object.defineProperty(St, "ImageQuality", { enumerable: !0, configurable: !0, writable: !0, value: 1 })
new TextEncoder()
const Ot = (e, t, a) => {
  const i = new DataView(e, 12).getUint32(0, !0),
    r = e.slice(0, i + 12 + 8)
  let n = je(r)
  const s = A.enc.Utf8.parse(t),
    o = A.enc.Utf8.parse(a)
  var l = Be(A.AES.encrypt(n, s, { iv: o, mode: A.mode.CBC, padding: A.pad.ZeroPadding }).ciphertext),
    c = new Uint8Array(l)
  let h = l.byteLength,
    u = new ArrayBuffer(12),
    d = new DataView(u)
  d.setUint32(0, ke, !0), d.setUint32(4, 1, !0), d.setUint32(8, h, !0)
  const m = new Uint8Array(u)
  let p = new Uint8Array(m.length + c.length)
  p.set(m, 0), p.set(c, m.length)
  let b = e.slice(r.byteLength, e.byteLength),
    g = new Uint8Array(p),
    f = new Uint8Array(b),
    v = new Uint8Array(g.length + f.length)
  return v.set(g, 0), v.set(f, g.length), v
}
class It {
  static EncryptionFromUrlModelToFileAsync(e, t, a) {
    return new Promise((i, r) => {
      fetch(e)
        .then((e) => e.arrayBuffer())
        .then((r) => {
          if (r instanceof ArrayBuffer) {
            let n = _e(Ot(r, t, a), `${De(e)}.mta`)
            i(n)
          } else console.error("错误glb文件", e)
        })
        .catch((e) => {
          console.error("enc失败,", e)
        })
    })
  }
  static EncryptionFromFileModelToFileAsync(e, t, a) {
    return new Promise((i, r) => {
      let n = new FileReader()
      ;(n.onload = () => {
        if (n.result instanceof ArrayBuffer)
          try {
            let r = _e(Ot(n.result, t, a), `${De(e.name)}.mta`)
            i(r)
          } catch (e) {
            console.error("enc文件错误", e)
          }
      }),
        (n.onerror = function () {
          r(n.error)
        }),
        n.readAsArrayBuffer(e)
    })
  }
  static DecryptFromUrlModelToFileAsync(e, t, a) {
    return new Promise((i, r) => {
      fetch(e)
        .then((e) => e.arrayBuffer())
        .then((r) => {
          if (r instanceof ArrayBuffer) {
            let n = Ge(r, t, a)
            if (n) {
              let t = _e(n, `${De(e)}.glb`)
              i(t)
            }
          }
        })
        .catch((e) => {
          console.error("enc失败,", e)
        })
    })
  }
}
class wt extends fe {
  constructor(e) {
    super(e),
      Object.defineProperty(this, "version", { enumerable: !0, configurable: !0, writable: !0, value: "0.03" }),
      Object.defineProperty(this, "loader", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "screenShot", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "cameraOperate", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "sceneOperate", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "lightOperate", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "materialOperate", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "wireframeOperate", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "postProcessOperate", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "modelInteractiveOperate", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "animationOperate", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "modelOperate", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "globalState", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "presetsInitParam", { enumerable: !0, configurable: !0, writable: !0, value: s({}, et()) }),
      Object.defineProperty(this, "hasBeenPresets", { enumerable: !0, configurable: !0, writable: !0, value: !1 }),
      Object.defineProperty(this, "onSceneLoaded", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "onSceneProgressed", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "onLoadedError", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      Object.defineProperty(this, "onContextLostEvent", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
      (this.globalState = new ve()),
      (this.onSceneLoaded = this.globalState.onSceneLoaded),
      (this.onSceneProgressed = this.globalState.onSceneProgressed),
      (this.onLoadedError = this.globalState.onLoadedError),
      (this.onContextLostEvent = this.globalState.onContextLostEvent),
      (this.globalState.onInternalWindowResizeEvent = this.onWindowResizeObservable),
      (this.globalState.presetsInitParam = this.presetsInitParam)
  }
  init(e) {
    e && (this.globalState.engineConfig = s({}, this.globalState.engineConfig, e)),
      super.init(this.globalState.engineConfig),
      this.renderSuccess &&
        this.scene &&
        ((this.globalState.currentScene = this.scene),
        (this.sceneOperate = new Qe(this.scene, this.globalState)),
        this.hasBeenPresets &&
          o(this.presetsInitParam.environment.id) &&
          this.sceneOperate.setPresetsEnvironmentId(this.presetsInitParam.environment.id),
        this.sceneOperate.init(),
        (this.cameraOperate = new Je(this.scene, this.globalState)),
        (this.lightOperate = new rt(this.scene, this.globalState)),
        (this.modelOperate = new Mt(this.scene)),
        (this.materialOperate = new dt(this.scene, this.globalState, this.modelOperate)),
        (this.wireframeOperate = new mt(this.scene, this.globalState)),
        (this.modelInteractiveOperate = new xt(this.scene, this.globalState)),
        (this.animationOperate = new yt(this.scene, this.globalState)),
        this.animationOperate.init(),
        (this.postProcessOperate = new Pt(this.scene, this.globalState)),
        (this.loader = new Ne(this.scene, this.globalState)),
        this.sceneOperate.initBindListener(),
        this.setPresetParam(this.presetsInitParam),
        this.engine?.onContextLostObservable.add(() => {
          this.onContextLostEvent.notifyObservers(!1)
        }))
  }
  showInspector() {}
  loadFile(e) {
    this.loader?.loadFile(e, () => {
      console.log("加载成功")
    })
  }
  loadModelUrl(e, t) {
    "string" == typeof e && e
      ? this.loader?.loadURL(
          e,
          () => {
            this.modelOperate?.initExtraction()
          },
          () => {},
          () => {},
          t
        )
      : console.error("非合法路径，请检查", e)
  }
  loadModelUrlByMTA(e, t, a) {
    "mta" ==
    (function (e) {
      const t = e.lastIndexOf(".")
      return -1 !== t && 0 !== t ? e.substring(t + 1) : ""
    })(e)
      ? this.loader?.loadURLByMTA(e, t, a)
      : console.error("格式后缀错误.")
  }
  dropLoadFiles(e) {
    this.loader?.dropLoadFiles(e)
  }
  setBackground(e, t) {
    this.sceneOperate?.setBackground(e, t)
  }
  setBackgroundImageByUrl(e) {
    this.sceneOperate?.setBackgroundImageByUrl(e)
  }
  setBackgroundEnable(e) {
    this.sceneOperate?.setBackgroundEnable(e)
  }
  setWireframeParam(e, t) {
    this.wireframeOperate?.setWireframeParam(e, t)
  }
  setShadowGroundParam(e, t) {
    this.lightOperate?.setShadowGroundParam(e, t)
  }
  setEnvironmentParam(e, t) {
    this.sceneOperate?.setEnvironmentParam(e, t), "enable" == e && this.setEnvironmentLightShadowParam("lightEnable", t)
  }
  setEnvironmentHDRId(e) {
    this.sceneOperate?.setEnvironmentHDRId(e)
  }
  setEnvironmentHDRURL(e, t) {
    this.sceneOperate?.setEnvironmentHDRURL(e, t)
  }
  setEnvironmentHDRByUrl(e) {
    this.sceneOperate?.setEnvironmentHDRByUrl(e)
  }
  setEnvironmentLightShadowParam(e, t) {
    this.lightOperate?.setEnvironmentLightShadowParam(e, t)
  }
  setCameraParam(e, t) {
    this.cameraOperate?.setCameraParam(e, t)
  }
  setAnimationParam(e, t) {
    this.animationOperate?.setAnimationParam(e, t)
  }
  async updateChannelTexture(e, t, a) {
    return this.materialOperate?.updateChannelTexture(e, t, a) ?? Promise.resolve(!0)
  }
  deleteChannelTexture(e, t) {
    this.materialOperate?.deleteChannelTexture(e, t)
  }
  setSelectMaterialId(e) {
    this.materialOperate?.setSelectMaterialId(e)
  }
  setOutlineEnable(e) {
    this.materialOperate?.setOutlineEnable(e)
  }
  setOutlineColor(e) {
    this.materialOperate?.setOutlineColor(e)
  }
  setOutlineWidth(e) {
    this.materialOperate?.setOutlineWidth(e)
  }
  setIsPickable(e) {
    this.modelInteractiveOperate?.setIsPickable(e)
  }
  pulicCalls(e, t) {
    if (t) {
      let a = t.split("-"),
        i = a[0],
        r = a[1]
      if (i && r)
        switch (i) {
          case "LightShadowCaster":
            ;(this.lightOperate?.shadowCaster[r])(e)
            break
          case "SceneEnvironment":
            ;(this.sceneOperate?.[r])(e)
        }
    }
  }
  setMaterialParam(e, t) {
    this.materialOperate?.setMaterialParam(e, t)
  }
  setMaterialParamByName(e, t) {
    this.materialOperate?.setMaterialParamByName(e, t)
  }
  setMaterialEnvironmentIntensityByName(e, t) {
    this.materialOperate?.setMaterialEnvironmentIntensityByName(e, t)
  }
  setChannelParam(e, t) {
    this.materialOperate?.setChannelParam(e, t)
  }
  setChannelParamByMaterialName(e, t) {
    this.materialOperate?.setChannelParamByMaterialName(e, t)
  }
  setTextureParam(e, t) {
    this.materialOperate?.setTextureParam(e, t)
  }
  changeMaterialChannelTexture(e, t, a) {
    this.materialOperate?.changeMaterialChannelTexture(e, t, a)
  }
  setPostProcessingTotalEnable(e) {
    this.postProcessOperate?.setPostProcessTotalEnable(e)
  }
  setBloomParam(e, t) {
    this.postProcessOperate?.setBloomParam(e, t)
  }
  setSSAOParam(e, t) {
    this.postProcessOperate?.setSSAOParam(e, t)
  }
  setSSRParam(e, t) {
    this.postProcessOperate?.setSSRParam(e, t)
  }
  setTAAParam(e, t) {
    this.postProcessOperate?.setTAAParam(e, t)
  }
  setVignetteParam(e, t) {
    this.postProcessOperate?.setVignetteParam(e, t)
  }
  setDepthOfFieldParam(e, t) {
    this.postProcessOperate?.setDepthOfFieldParam(e, t)
  }
  setGrainParam(e, t) {
    this.postProcessOperate?.setGrainParam(e, t)
  }
  setSharpenParam(e, t) {
    this.postProcessOperate?.setSharpenParam(e, t)
  }
  setFxaaParam(e, t) {
    this.postProcessOperate?.setFxaaParam(e, t)
  }
  presetsInitialParam(e) {
    ;(this.presetsInitParam = s({}, this.presetsInitParam, e)),
      (this.hasBeenPresets = !0),
      (this.globalState.hasBeenPresets = !0),
      (this.globalState.presetsInitParam = this.presetsInitParam)
  }
  setPresetParam(e) {
    this.sceneOperate?.setBackgroundPresetsParam(e.background),
      this.sceneOperate?.setEnvironmentPresetsParam(e.environment),
      this.cameraOperate?.setPresetsParam(e.camera),
      this.lightOperate?.setEnvironmentLightShadowPresetsParam(e.environment),
      this.wireframeOperate?.setPresetsParam(e.wireframe),
      this.postProcessOperate?.setPresetsParam(e.postProcess)
  }
  showSceneGizmo(e = !0) {
    this.modelInteractiveOperate?.showSceneGizmo(e)
  }
  enlargeSelectMaterial(e, t) {
    this.materialOperate?.enlargeSelectMaterial(e, t)
  }
  readMaterialListFromServer(e) {
    this.materialOperate?.readMaterialListFromServer(e)
  }
  convertHDRToEnvTextureFile(e) {
    if (this.scene) return St.ConvertHDRToEnvTextureFile(e, this.scene)
  }
  convertJPGToEnvTextureFile(e) {
    if (this.scene) return St.ConvertJPGToEnvTextureFile(e, this.scene)
  }
  addAnimationListen(e) {
    this.animationOperate?.addAnimationListen(e)
  }
  getTextureFileList() {
    return this.materialOperate?.getTextureFileList() ?? []
  }
  updateTextureRequestId(e, t) {
    this.materialOperate?.updateTextureRequestId(e, t)
  }
  async uploadLocalTextureWithFile(e) {
    return this.materialOperate?.uploadLocalTextureWithFile(e) ?? Promise.resolve(!0)
  }
  emptyChannelTexture(e, t) {
    this.materialOperate?.emptyChannelTexture(e, t)
  }
  deleteTextureById(e) {
    this.materialOperate?.deleteTextureById(e)
  }
  setLowerRadiusLimitRatio(e) {
    this.cameraOperate?.setLowerRadiusLimitRatio(e)
  }
  setRadiusScale(e) {
    this.cameraOperate?.setRadiusScale(e)
  }
  setUpperRadiusLimitRatio(e) {
    this.cameraOperate?.setUpperRadiusLimitRatio(e)
  }
  setWheelDeltaPercentage(e) {
    this.cameraOperate?.setWheelDeltaPercentage(e)
  }
  setPinchDeltaPercentage(e) {
    this.cameraOperate?.setPinchDeltaPercentage(e)
  }
  setEnablePanning(e) {
    this.cameraOperate?.setEnablePanning(e)
  }
  setEnableZoom(e) {
    this.cameraOperate?.setEnableZoom(e)
  }
  setToneMappingEnable(e) {
    this.sceneOperate?.setToneMappingEnable(e)
  }
  setToneMappingType(e) {
    this.sceneOperate?.setToneMappingType(e)
  }
  async getPreviewImage() {
    return this.screenShot?.getPreviewImage()
  }
  getSixViewsImage() {
    return this.screenShot?.getSixViewsImage()
  }
  getScreenshot(e = 960, t = 540, a = 0, i = 0, r = !1) {
    return this.sceneOperate?.getScreenshot2(e, t, a, i, r)
  }
  getModelInfo() {
    let e = this.globalState.rootMesh
    if (e && this.scene) return Ee(e, this.scene)
  }
  getCollectMaterialNameList() {
    return this.materialOperate?.getCollectMaterialNameList() ?? []
  }
  getMaterialCollectInfo(e) {
    return this.materialOperate?.getMaterialCollectInfo(e)
  }
  getMaterialInfoToFrontEnd(e) {
    return this.materialOperate?.getMaterialInfoToFrontEnd(e)
  }
  getTextureListInfoToFrontEnd() {
    return this.materialOperate?.getTextureListInfoToFrontEnd() ?? []
  }
  getTextureInfoByIdToFrontEnd(e) {
    return this.materialOperate?.getTextureInfoByIdToFrontEnd(e)
  }
  getMaterialUVSelectList(e) {
    return this.materialOperate?.getMaterialUVSelectList(e) ?? []
  }
  getAllImagesListAsync() {
    return this.materialOperate?.getAllImagesList() ?? Promise.resolve([])
  }
  getAllImageCanvasList() {
    return this.materialOperate?.getAllImageCanvasList() ?? Promise.resolve([])
  }
  getAllMaterialCollectInfo() {
    return this.materialOperate?.getAllMaterialCollectInfo() ?? []
  }
  getFilteringOptions() {
    return this.materialOperate?.getFilteringOptions() ?? []
  }
  getWrapOptions() {
    return this.materialOperate?.getWrapOptions() ?? []
  }
  getFormatOptions() {
    return this.materialOperate?.getFormatOptions() ?? []
  }
  getMaterial(e) {}
  getEditorSettingParamToFrontEnd() {
    if (this.renderSuccess) {
      return {
        background: this.sceneOperate.getBackgroundInfo(),
        wireframe: this.wireframeOperate.getWireframeInfo(),
        camera: this.cameraOperate.getCameraInfo(),
        shadowGround: this.lightOperate.getShadowInfo(),
        postProcess: this.postProcessOperate.getPostProcessingInfo(),
        environment: { ...this.sceneOperate.getEnvironmentInfo(), ...this.lightOperate.getEnvironmentShadowInfo() },
        orientation: this.sceneOperate.getModelOrientationInfo()
      }
    }
    return et()
  }
  getModelAnimationInfo() {
    return this.animationOperate?.getAnimationInfo()
  }
  static GetSceneBackgroundImageResourcesData() {
    return ((e) => {
      const t = `${e}/sceneBgImage`
      return [
        { id: 1, thumbnailUrl: `${t}/thumbnail/grayGradient.jpg`, url: `${t}/grayGradient.jpg`, name: "灰色线性渐变" },
        { id: 2, thumbnailUrl: `${t}/thumbnail/radialGradient.jpg`, url: `${t}/radialGradient.jpg`, name: "黑色线性渐变" },
        {
          id: 3,
          thumbnailUrl: `${t}/thumbnail/gradientFlowingLight.jpg`,
          url: `${t}/gradientFlowingLight.jpg`,
          name: "渐变流光"
        },
        { id: 4, thumbnailUrl: `${t}/thumbnail/easternFishbelly.jpg`, url: `${t}/easternFishbelly.jpg`, name: "东方鱼肚" },
        { id: 5, thumbnailUrl: `${t}/thumbnail/silentRipple.jpg`, url: `${t}/silentRipple.jpg`, name: "静谧波纹" },
        {
          id: 6,
          thumbnailUrl: `${t}/thumbnail/enjoySilkySmoothness.jpg`,
          url: `${t}/enjoySilkySmoothness.jpg`,
          name: "纵享丝滑"
        },
        { id: 7, thumbnailUrl: `${t}/thumbnail/yaoHuangYujian.jpg`, url: `${t}/yaoHuangYujian.jpg`, name: "姚黄玉简" },
        { id: 8, thumbnailUrl: `${t}/thumbnail/coldLightSmoke.jpg`, url: `${t}/coldLightSmoke.jpg`, name: "冷光烟雾" },
        { id: 9, thumbnailUrl: `${t}/thumbnail/blackWall.jpg`, url: `${t}/blackWall.jpg`, name: "黑色墙" }
      ]
    })(this.ServerResourceURL)
  }
  static GetSceneEnvironmentResourcesData() {
    return ((e = "") => [
      {
        name: "abandoned_hall_01_1k",
        thumbnailUrl: `${e}/images/environmentImage/abandoned_hall_01_1k.jpg`,
        id: 1,
        url: `${e}/environments/abandoned_hall_01_1k.env`
      },
      {
        name: "brown_photostudio_06_1k",
        thumbnailUrl: `${e}/images/environmentImage/brown_photostudio_06_1k.jpg`,
        id: 2,
        url: `${e}/environments/brown_photostudio_06_1k.env`
      },
      {
        name: "epping_forest_01_1k",
        thumbnailUrl: `${e}/images/environmentImage/epping_forest_01_1k.jpg`,
        id: 3,
        url: `${e}/environments/epping_forest_01_1k.env`
      },
      {
        name: "evening_road_01_puresky_1k",
        thumbnailUrl: `${e}/images/environmentImage/evening_road_01_puresky_1k.jpg`,
        id: 4,
        url: `${e}/environments/evening_road_01_puresky_1k.env`
      },
      {
        name: "lake_pier_1k",
        thumbnailUrl: `${e}/images/environmentImage/lake_pier_1k.jpg`,
        id: 5,
        url: `${e}/environments/lake_pier_1k.env`
      },
      {
        name: "metro_noord_1k",
        thumbnailUrl: `${e}/images/environmentImage/metro_noord_1k.jpg`,
        id: 6,
        url: `${e}/environments/metro_noord_1k.env`
      },
      {
        name: "modern_buildings_night_1k",
        thumbnailUrl: `${e}/images/environmentImage/modern_buildings_night_1k.jpg`,
        id: 7,
        url: `${e}/environments/modern_buildings_night_1k.env`
      },
      { name: "neutral", thumbnailUrl: `${e}/images/environmentImage/neutral.jpg`, id: 8, url: `${e}/environments/neutral.env` },
      {
        name: "neutral2",
        thumbnailUrl: `${e}/images/environmentImage/neutral2.jpg`,
        id: 9,
        url: `${e}/environments/neutral2.env`
      },
      {
        name: "overcast_soil_puresky_1k",
        thumbnailUrl: `${e}/images/environmentImage/overcast_soil_puresky_1k.jpg`,
        id: 10,
        url: `${e}/environments/overcast_soil_puresky_1k.env`
      },
      {
        name: "studio_small_08_1k",
        thumbnailUrl: `${e}/images/environmentImage/studio_small_08_1k.jpg`,
        id: 11,
        url: `${e}/environments/studio_small_08_1k.env`
      },
      {
        name: "studioSoftbox",
        thumbnailUrl: `${e}/images/environmentImage/studioSoftbox.jpg`,
        id: 12,
        url: `${e}/environments/studioSoftbox.env`
      },
      {
        name: "symmetrical_garden_02_1k",
        thumbnailUrl: `${e}/images/environmentImage/symmetrical_garden_02_1k.jpg`,
        id: 13,
        url: `${e}/environments/symmetrical_garden_02_1k.env`
      },
      {
        name: "trekker_monument_1k",
        thumbnailUrl: `${e}/images/environmentImage/trekker_monument_1k.jpg`,
        id: 14,
        url: `${e}/environments/trekker_monument_1k.env`
      },
      {
        name: "limpopo_golf_course_1k",
        thumbnailUrl: `${e}/images/environmentImage/limpopo_golf_course_1k.jpg`,
        id: 15,
        url: `${e}/environments/limpopo_golf_course_1k.env`
      }
    ])(`${this.ServerResourceURL}/3d-resource/textures`)
  }
  findTextureWithMaterialChannelInfoById(e) {
    return this.materialOperate?.findTextureWithMaterialChannelInfoById(e) ?? []
  }
  getTransparentModeList() {
    return this.materialOperate?.getTransparentModeList() ?? []
  }
  getTextureQuantityChange() {
    return this.materialOperate?.getTextureQuantityChange() ?? !1
  }
  async exportGLBAsync() {
    return new Promise((e, t) => {
      let a = this.wireframeOperate?.getWireframeInfo(),
        i = a?.enable ?? !1
      i && this.wireframeOperate?.setWireframeParam("enable", !1),
        this.sceneOperate
          ?.exportGLBAsync(this.scene)
          .then((t) => {
            i && this.wireframeOperate?.setWireframeParam("enable", i), e(t)
          })
          .catch(t)
    })
  }
  async exportMitaFileAsync(e, t, a = "") {
    return new Promise((i, r) => {
      this.exportGLBAsync().then((n) => {
        const s = new File([n], `${a || "exportScene"}.glb`)
        It.EncryptionFromFileModelToFileAsync(s, e, t)
          .then((e) => {
            i(e)
          })
          .catch(r)
      })
    })
  }
  dispose() {
    this.materialOperate?.dispose(),
      this.lightOperate?.dispose(),
      this.sceneOperate?.dispose(),
      this.animationOperate?.dispose(),
      this.postProcessOperate?.dispose(),
      this.wireframeOperate?.dispose(),
      this.modelInteractiveOperate?.dispose(),
      this.cameraOperate?.dispose(),
      this.modelOperate?.dispose(),
      this.loader?.dispose(),
      this.onContextLostEvent.clear(),
      (this.materialOperate = void 0),
      (this.lightOperate = void 0),
      (this.sceneOperate = void 0),
      (this.animationOperate = void 0),
      (this.postProcessOperate = void 0),
      (this.wireframeOperate = void 0),
      (this.modelInteractiveOperate = void 0),
      (this.cameraOperate = void 0),
      (this.modelOperate = void 0),
      (this.loader = void 0),
      (this.onContextLostEvent = null),
      (this.onSceneLoaded = null),
      (this.onSceneProgressed = null),
      (this.onLoadedError = null),
      (this.presetsInitParam = null),
      this.disposeGlobalState(),
      super.dispose(),
      (this.scene = void 0),
      (this.engine = void 0),
      (this.camera = void 0)
  }
  disposeGlobalState() {
    this.globalState.onInternalWindowResizeEvent.clear(),
      this.globalState.onSceneLoaded.clear(),
      this.globalState.onSceneProgressed.clear(),
      this.globalState.onLoadedError.clear(),
      this.globalState.onError.clear(),
      this.globalState.rootMesh?.dispose(!1, !0),
      (this.globalState.rootMesh = null),
      this.globalState.metaTransformNode?.dispose(!1, !0),
      (this.globalState.metaTransformNode = null),
      (this.globalState.currentScene = void 0),
      (this.globalState.onInternalWindowResizeEvent = null),
      (this.globalState.onSceneLoaded = null),
      (this.globalState.onSceneProgressed = null),
      (this.globalState.onLoadedError = null),
      (this.globalState.onError = null),
      (this.globalState = null)
  }
  initTest() {
    new t("light", new a(0, 1, 0), this.scene).intensity = 0.7
    e.CreateSphere("sphere", { diameter: 2, segments: 32 }, this.scene).position.y = 1
    ;(e.CreateGround("ground", { width: 6, height: 6 }, this.scene).name = "ground"),
      this.globalState.onSceneLoaded.notifyObservers({})
  }
  onRenderCallback(e) {
    this.scene?.onAfterRenderObservable.add(() => {
      e?.()
    })
  }
  onCameraReadyCompleteListen(e) {
    this.globalState.onCameraReadyComplete.add(e)
  }
  onModelSeclectListen(e) {
    this.globalState.onModelSelectEvent.add(e)
  }
  getEngineConfig() {
    return Object.assign({}, this.engineConfig)
  }
}
Object.defineProperty(wt, "ServerResourceURL", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: "https://mita-test.oss-cn-hangzhou.aliyuncs.com"
}),
  Object.defineProperty(wt, "TextureTransformEngine", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: class {
      constructor() {
        Object.defineProperty(this, "canvas", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
          Object.defineProperty(this, "engine", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
          Object.defineProperty(this, "scene", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
          (this.canvas = document.createElement("canvas")),
          (this.engine = new l(this.canvas)),
          (this.scene = new c(this.engine))
      }
      init() {}
      convertHDRToEnvTextureFile(e) {
        return St.ConvertHDRToEnvTextureFile(e, this.scene)
      }
      convertJPGToEnvTextureFile(e) {
        return St.ConvertJPGToEnvTextureFile(e, this.scene)
      }
      dispose() {
        this.scene.dispose(), this.engine.dispose()
      }
    }
  }),
  Object.defineProperty(wt, "GetEditorSettingParamDefaultData", { enumerable: !0, configurable: !0, writable: !0, value: et })
export { wt as default }
