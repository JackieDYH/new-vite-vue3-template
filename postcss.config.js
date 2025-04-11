export default {
  plugins: {
    autoprefixer: {},
    // "postcss-pxtorem": {
    //   rootValue({ file }) {
    //     return file.indexOf("vant") !== -1 ? 40 : 100
    //   },
    //   propList: ["*"] // 指定转换的属性列表
    // }
    "postcss-pxtorem": {
      rootValue: 37.5, // 设计稿宽度 / 10（如设计稿375px → 37.5）
      propList: ["*"],
      selectorBlackList: ["no-rem", "el-", "van-"]
    }
  }
}
