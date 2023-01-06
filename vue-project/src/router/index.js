import { createRouter, createWebHashHistory } from "vue-router";
// 1. 定义路由组件.
// 也可以从其他文件导入
import Index from "../views/Index.vue";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import User from "../views/User.vue";
import NotFound from "../views/NotFound.vue";
import News from "../views/News.vue";
import StyleOne from "../views/StyleOne.vue";
import StyleTwo from "../views/StyleTwo.vue";
import Deatil from "../views/Detail.vue";
// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  {
    path: "/",
    component: Index,
  },
  {
    path: "/home",
    component: Home,
    children: [
      {
        path: "styleone",
        component: StyleOne,
      },
      {
        path: "styletwo",
        component: StyleTwo,
      },
    ],
  },
  {
    path: "/detail",
    component: Deatil,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/user/:id",
    component: User,
  },
  {
    //匹配数字（正则表达式）
    path: "/news/:id(\\d+)",
    component: News,
  },
  {
    // 正则表达式
    // NotFound
    path: "/:path(.*)",
    component: NotFound,
  },
];

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});
export default router;
