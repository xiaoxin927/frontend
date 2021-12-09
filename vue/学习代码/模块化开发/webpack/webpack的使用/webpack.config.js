const path = require("path");

module.exports = {
  // 这个是打包的入口文件
  entry: "./src/main.js",
  // 这个是打包的出口文件
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "dist/", //这一行的代码作用： 只要涉及url的路径，打包时都会加上这个
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        //css-loader只负责将css文件进行加载
        // style-loader 负责将样式添加到DOM中
        // 加载顺序是从右往左哦
        use: ["style-loader", "css-loader"],
        // css加载是这样处理的，less文件亦是如此，npm install --save-dev less-loader@4.1.0 less@3.9.0
        // 安装完成后去官网按照css的配置方式  一样的 配置方法
      },
    ],
  },
};
