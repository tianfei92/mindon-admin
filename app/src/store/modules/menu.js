import menuRouter from '../../router/menus'

const menu = {
    state: {
        menuList: [], //左侧菜单集合
    },
    mutations: {
        /**
         * 更新侧边栏导航数据
         * @param state
         */
        updateMenuList(state) {
            state.menuList = menuRouter;
        },
    },
    actions: {}
}
export default menu