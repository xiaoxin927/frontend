import Vue from "vue";
import VueRouter from "vue-router";

// import Home from "../components/Home";
// import About from "../components/About";
// import User from "../components/User";

const Home = () => import("../components/Home");
const About = () => import("../components/About");
const User = () => import("../components/User");
// 这是路由的懒加载，即用到某个组件时就向服务器发送请求，动态加载
// 一个组件对应打包后的dist文件夹里面的一个js

const HomeNews = () => import("../components/HomeNews");
const HomeMessages = () => import("../components/HomeMessage");
const Profile = () => import("../components/Profile");

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home,
    children: [
      {
        path: "",
        redirect: "news"
      },
      {
        path: "news",
        component: HomeNews
      },
      {
        path: "message",
        component: HomeMessages
      }
    ]
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/user/:abc",
    component: User
  },
  {
    path: "/profile",
    component: Profile
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
