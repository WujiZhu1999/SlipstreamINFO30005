const autoprefixer = require("autoprefixer")
const pxtorem = require("postcss-pxtorem")

module.exports = {
  productionSourceMap: false,
  publicPath: "",
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ["*"],
            // 该项仅在使用 Circle 组件时需要
            // 原因参见 https://github.com/youzan/vant/issues/1948
            selectorBlackList: ["van-circle__layer"]
          })
        ]
      }
    }
  },
  devServer: {
    port: "8977",
    proxy: {
      "/": {
        target:"http://localhost:5000/",//"https://limitless-fortress-54520.herokuapp.com/",
        ws: false,
        changeOrigin: true
      }
    }
  }
}
