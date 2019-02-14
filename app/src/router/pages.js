import layout from '../views/layout/layout'

import index from '../views/index'
import login from '../components/login'

export default [
    {
        path: '/',
        name: 'index',
        component: layout
    },
    {
        path: '/login',
        name: 'login',
        component: login
    }
]