import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import PPT from './components/PPTtemplate.vue'
Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', component: Home },
        { path: "/pptt", component: PPT }
    ]
})