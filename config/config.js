export default {
    singular: true,
    dva: {},
    antd: {},
    routes: [{
        path: '/',
        component: '../layout',
        routes: [
          {
            path: '/helloworld',
            component: 'HelloWorld'
          },
          {
            path: 'puzzlecards',
            component: './puzzlecards'
          },
          {
              path: '/dashboard',
              routes: [
                  {path: '/dashboard/analysis', component: 'Dashboard/Analysis'},
                  {path:'/dashboard/monitor', component: 'Dashboard/Monitor'},
                  {path: '/dashboard/workplace', component: 'Dashboard/workplace'},
              ]
          },
    
        ],
    
      }],
      proxy:{
        '/dev': {
          target: "http://jsonplaceholder.typicode.com",

          changeOrigin: true,
    
          pathRewrite: { "^/dev": "" } // 把 dev 重写掉
    
        }
      },
};
