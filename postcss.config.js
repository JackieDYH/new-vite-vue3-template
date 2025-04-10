export default {
  plugins: {
    autoprefixer: {},
    "postcss-pxtorem": {
      rootValue({ file }) {
        return file.indexOf("vant") !== -1 ? 40 : 100
      },
      propList: ["*"] // 指定转换的属性列表
    }
  }
}
