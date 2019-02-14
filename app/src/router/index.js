import Vue from 'vue'
import VueRouter from 'vue-router'
import Axios from 'axios'

import menus from './menus'
import pages from './pages'

Vue.use(VueRouter)

const routerConfig = {
    routes: [...menus, ...pages]
}

const router = new VueRouter(routerConfig)

/**
 * 所有页面都需要登录校验
 */
router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
        next()
    } else {
        Axios({
            url: '/api/user/login/check',
            method: 'post'
        }).then(res => {
            if (res.data.success) {
                next()
            } else {
                next('/login')
            }
        }).catch(error => {
            console.log(`登录校验时发生异常---->${error}`);
            next('/login')
        })
    }
})

export default router
