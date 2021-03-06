import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$ajax = config => {
    return Axios(config).then(res => {
        return res.data
    }).catch(err => {
        return Promise.reject(err)
    })
};

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App},
    mounted() {
        this.$store.commit('updateMenuList')
    }
});
