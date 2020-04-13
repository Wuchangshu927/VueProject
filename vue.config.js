module.exports = {
  lintOnSave: false,
  publicPath: "./",
  devServer: {
    open: true, //-----------------------浏览器自动打开页面
    host: "0.0.0.0", //------------------如果是真机测试，就使用这个IP
    port: 80, //-------------------------代理端口
    https: false,
    hotOnly: false, //-------------------热更新（webpack已实现了，这里false即可）
    proxy: { //------------------------------------------配置跨域
      '/api': { //-------------------------------------代理api
        target: "http://11.11.11.11:1111", //--------代理服务器api地址
        ws: true, //---------------------------------proxy启用websockets
        changOrigin: true, //------------------------是否跨域
        pathRewrite: { //----------------------------重写路径
          '^/api': '/'
        }
      }
    }
  }
}
