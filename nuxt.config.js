export default {
  router: {
    linkActiveClass: "active",
    //自定义路由规则
    extendRoutes(routes, resolve) {
      routes.splice(0);
      routes.push(
        ...[
          {
            path: "/",
            component: resolve(__dirname, "pages/Layout/"),
            children: [
              {
                name: "home",
                path: "/home", //默认子路由
                component: resolve(__dirname, "pages/Home/"),
              },
              {
                name: "login",
                path: "/login",
                component: resolve(__dirname, "pages/Login/"),
              },
              {
                name: "register",
                path: "/register",
                component: resolve(__dirname, "pages/Login/"),
              },
              {
                name: "profile",
                path: "/profile/:username",
                component: resolve(__dirname, "pages/Profile/"),
              },
              {
                name: "settings",
                path: "/setting",
                component: resolve(__dirname, "pages/Settings/"),
              },
              {
                name: "editor",
                path: "",
                component: resolve(__dirname, "pages/Editor/"),
              },
              {
                name: "article",
                path: "/article/:slug",
                component: resolve(__dirname, "pages/Article/"),
              },
            ],
          },
        ]
      );
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  plugins:[
    '~/plugins/request.js',
    '~/plugins/dayjs.js',
  ]
};
