import Vue from "vue";
import VueRouter from "vue-router";
import { beforeEach, afterEach } from "./interceptor";
import Layout from "@/views/layout";
const webview = [
  {
    path: "/home",
    name: "home",
    meta: { title: "home" },
    component: Layout,
    redirect: "/home/map",
    children: [
      {
        path: "map",
        name: "map",
        meta: { title: "map" },
        component: () => import("@/views/home")
      },
      {
        path: "forum",
        name: "forum",
        meta: { title: "posts" },
        component: () => import("@/views/forum")
      },
      {
        path: "search",
        name: "search",
        meta: { title: "search" },
        component: () => import("@/views/search")
      },
      {
        path: "active",
        name: "active",
        meta: { title: "active" },
        component: () => import("@/views/active")
      },
      {
        path: "person",
        name: "person",
        meta: { title: "person" },
        component: () => import("@/views/person")
      },
    ]
  },
  {
    path: "/postInfo",
    name: "postInfo",
    meta: { title: "post info" },
    component: () => import("@/views/postInfo")
  },
  {
    path: "/share",
    name: "share",
    meta: { title: "share" },
    component: () => import("@/views/share")
  },
  {
    path: "/report",
    name: "report",
    meta: { title: "report" },
    component: () => import("@/views/report")
  },
  {
    path: "/activeInfo",
    name: "activeInfo",
    meta: { title: "active info" },
    component: () => import("@/views/activeInfo")
  },
  {
    path: "/myposts",
    name: "myposts",
    meta: { title: "my posts" },
    component: () => import("@/views/forum")
  },
  {
    path: "/mycomment",
    name: "mycomment",
    meta: { title: "my comment" },
    component: () => import("@/views/mycomment")
  },
  {
    path: "/myactive",
    name: "myactive",
    meta: { title: "my active" },
    component: () => import("@/views/active")
  },
  {
    path: "/myroute",
    name: "myroute",
    meta: { title: "my route" },
    component: () => import("@/views/myroute")
  },
  {
    path: "/userList",
    name: "userList",
    meta: { title: "user list" },
    component: () => import("@/views/userList")
  },
  {
    path: "/addUser",
    name: "addUser",
    meta: { title: "add user" },
    component: () => import("@/views/addUser")
  },
  {
    path: "/userInfo",
    name: "userInfo",
    meta: { title: "user info" },
    component: () => import("@/views/userInfo")
  },
  {
    path: "/post",
    name: "post",
    meta: { title: "post" },
    component: () => import("@/views/post")
  },
  {
    path: "/addActive",
    name: "addActive",
    meta: { title: "add active" },
    component: () => import("@/views/addActive")
  },
  {
    path: "/editActive",
    name: "editActive",
    meta: { title: "edit active" },
    component: () => import("@/views/addActive")
  },
  {
    path: "/postEdit",
    name: "postEdit",
    meta: { title: "post edit" },
    component: () => import("@/views/post")
  },
  {
    path: "/ranking",
    name: "ranking",
    meta: { title: "ranking" },
    component: () => import("@/views/ranking")
  },
  {
    path: "/login",
    name: "login",
    meta: { title: "login" },
    component: () => import("@/views/login")
  },
  {
    path: "/register",
    name: "register",
    meta: { title: "register" },
    component: () => import("@/views/register")
  }
];
const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    ...webview,
    {
      path: "*",
      redirect: "/home"
    }
  ]
});
Vue.use(VueRouter);
router.beforeEach(beforeEach);
router.afterEach(afterEach);
export default router;
