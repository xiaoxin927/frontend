const path = require("path");
// const { VueLoaderPlugin } = require('vue-loader');

const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  // 这个是打包的入口文件
  entry: "./src/main.js",
  // 这个是打包的出口文件
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "dist/", //这一行的代码作用： 只要涉及url的路径，打包时都会加上这个
  },

  plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin(),
  ],
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
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
    ],
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js",
      // 这里牵扯到两种解释vue的版本
      // 1.runtime-only 代码中不允许有任何的template
      // 2.runtime-compiler 代码中可以有template 因为有compiler 可以用于编译template
      // 挂载id='app' 的那个div相当于vue的template
    },
  },
};
