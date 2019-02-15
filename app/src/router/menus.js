import layout from '../views/layout/layout'

export default [
    {
        path: '/',
        name: 'home',
        alias: '首页模块管理',
        component: layout,
        children: [
            //案例管理
            {
                path: 'case',
                name: 'case',
                alias: '案例管理',
                meta: {
                    title: '案例管理'
                }
            }
        ]
    }
]