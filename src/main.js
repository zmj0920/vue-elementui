import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuex from 'vuex'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.config.productionTip = false
    //注册路由
Vue.use(router);
//注册UI库
Vue.use(ElementUI);
//注册Vuex
Vue.use(Vuex);
Vue.use(VueAxios, axios);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')