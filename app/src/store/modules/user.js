import Axios from 'axios'

const user = {
    namespaced: true,
    state: {
        userInfo: {}, //登录用户信息
    },
    mutations: {
        /**
         * 更新登录用户信息
         * @param state
         * @param data
         */
        updateUserInfo(state, data) {
            state.userInfo = data
        }
    },
    actions: {
        /**
         * 获取登录用户信息
         * @param context
         */
        getUserInfo(context) {
            Axios({
                url: '/api/user/info',
            }).then(res => {
                if (res.data && res.data.success) {
                    context.commit('updateUserInfo', res.data.data)
                }
            }).catch(err => {
                console.log(`获取用户登录信息失败*******${err.message || err}`);
                context.commit('updateUserInfo', {})
            })
        }
    }
}
export default user