//使用commonjs的模块化规范
const { add, mul } = require("./js/mathUtil.js");

console.log(add(20, 30));
console.log(mul(20, 30));

// 使用ES6的模块化规范

import { name, age, height } from "./js/info.js";

console.log(name);
console.log(age);
console.log(height);

//引入css文件
require("./css/normal.css");
// 引入less文件也是这样

//使用vue进行开发

import Vue from "vue";
// import App from "./vue/app.js";
import App from "./vue/App.vue";

new Vue({
  el: "#app",
  // 这个template会直接将挂载index.html里面的id=app的div全部替换
  template: "<App/>",
  components: {
    App,
  },
});

document.writeln("<span>xiaojingang</span>");

//node的核心引擎V8可以直接运行 js
//js 运行需要先转变成字节码再变成二进制代码  而V8直接将其变成二进制代码运行
