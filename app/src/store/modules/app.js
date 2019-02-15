const app = {
    state: {
        currentCrumb: [], //当前路由的面包屑
    },
    mutations: {
        /**
         * 更新头部面包屑
         * @param state
         * @param currentCrumb 当前路由面包屑
         */
        updateCurrentCrumb(state, currentCrumb) {
            state.currentCrumb = currentCrumb;
        },
    },
    actions: {}
}
export default app