// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'

Vue.config.productionTip = false;
Vue.prototype.$ajax = config => {
    return Axios(config)
};


new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
});
