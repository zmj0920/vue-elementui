import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import PPT from './components/PPTtemplate.vue'
import Images from './components/ImageTemplate.vue'
import Index from './components/Index.vue'
import ImgUpload from './components/ImgUpload.vue'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', component: Home },
        { path: "/pptt", component: PPT },
        { path: "/sucai", component: Images },
        { path: "/index", component: Index },
        { path: "/img", component: ImgUpload }
    ]
})