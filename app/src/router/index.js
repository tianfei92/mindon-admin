import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index'
import login from '../components/login'
import Axios from 'axios'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/login',
            name: 'login',
            component: login
        }
    ]
})

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
