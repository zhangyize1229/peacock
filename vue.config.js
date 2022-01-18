module.exports = {
  // 修改 src 为 examples
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html",
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule("js")
      .include.add("/packages")
      .end()
      .use("babel")
      .loader("babel-loader");
  },
  devServer: {
    port: 8080,
    proxy: {
      "/api": {
        //本地服务接口地址
        target: "http://192.168.1.40:32002",
        // target: "http://192.168.3.117",
        ws: true,
        pathRewrite: {
          "^/api": "/",
        },
      },
    },
  },
};
