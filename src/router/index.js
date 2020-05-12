import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'

Vue.use(Router)

export default new Router({
    mode:'history',
    routes: [
        {path: '/', redirect: '/login'},
        {
            path: '/login',
            name: 'login',
            component:  () => import('@/components/login')
        },
        // {
      //   path: '/login',
      //   name: '登录页',
      //   component: login,
      //   invisible: true
      // },
      // {
      //     path: '/exception',
      //     name: '异常页',
      //     icon: 'warning',
      //     component: RouteView,
      //     invisible: true,
      //     children: [
      //         {
      //             path: '/exception/404',
      //             name: '404',
      //             icon: 'none',
      //             component: () => import('@/view/exception/404')
      //         },
      //         {
      //             path: '/exception/403',
      //             name: '403',
      //             icon: 'none',
      //             component: () => import('@/view/exception/403')
      //         },
      //         {
      //             path: '/exception/500',
      //             name: '500',
      //             icon: 'none',
      //             component: () => import('@/view/exception/500')
      //         }
      //     ]
      // },
    ]
})
