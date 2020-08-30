import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/widgets",
    name: "Widgets",
    //ihtiyacın olduğunda yükleme yöntemi.
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //webpackChunkName = networkte hangi isimde çağırcağını gösterir.
    component: () =>
      import(/* webpackChunkName: "Widgets" */ "../views/widgets/Widget"),
    children: [
      {
        path: "",
        name: "module",
        component: () =>
          import(/* webpackChunkName: "Widgets" */ "../views/widgets/Module"),
      },
      {
        path: "data",
        name: "WidgetData",
        component: () =>
          import(/* webpackChunkName: "Widgets" */ "../views/widgets/Data"),
      },
      {
        path: "file",
        name: "WidgetFile",
        component: () =>
          import(/* webpackChunkName: "Widgets" */ "../views/widgets/File"),
      },
    ],
  },
  {
    path: "/notifications",
    name: "Notification",
    component: () =>
      import(
        /* webpackChunkName: "Element" */ "../views/notification/Notification"
      ),
  },
  {
    path: "/documentation",
    name: "Documentation",
    component: () =>
      import(
        /* webpackChunkName: "Document" */ "../views/documentation/Document"
      ),
  },
  {
    path: "/form",
    name: "Form",
    component: () =>
      import(/* webpackChunkName: "Form" */ "../views/form/Form"),
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "About" */ "../views/about/About"),
  },
  {
    path: "/settings",
    name: "Setting",
    component: () =>
      import(/* webpackChunkName: "About" */ "../views/Settings/Settings"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
