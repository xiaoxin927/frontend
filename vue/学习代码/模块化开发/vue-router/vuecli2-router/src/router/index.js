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
    meta: {
      title: "首页"
    },
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
    component: About,
    meta: {
      title: "关于"
    }
  },
  {
    path: "/user/:abc",
    component: User,
    meta: {
      title: "用户"
    }
  },
  {
    path: "/profile",
    component: Profile,
    meta: {
      title: "档案"
    }
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title;
  console.log(to);
  next();
});

export default router;
