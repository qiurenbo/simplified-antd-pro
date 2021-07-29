export default [
  {
    path: '/',
    component: '@/layouts/BlankLayout',
    routes: [
      {
        path: '/',
        component: '@/layouts/BasicLayout',
        routes: [
          {
            path: '/',
            redirect: '/resources/picture',
          },
          {
            path: '/resources',
            name: '资源管理',
            icon: 'tool',
            routes: [
              {
                path: '/resources/picture',
                name: '图片资源',
                component: '@/pages/Picture',
              },
            ],
          },
        ],
      },
    ],
  },
];
