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

const app = new Vue({
  el: "#app",
  data: {
    message: "Hello Webpack",
  },
});
