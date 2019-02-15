import layout from '../views/layout/layout'
import login from '../components/login'

export default [
    {
        path: '/index',
        name: 'index',
        component: layout,
        redirect: {
            name: 'home'
        }
    },
    {
        path: '/login',
        name: 'login',
        component: login
    }
]