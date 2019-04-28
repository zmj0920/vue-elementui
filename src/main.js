import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuex from 'vuex'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
//注册路由
Vue.use(router);  
//注册UI库
Vue.use(ElementUI);
//注册Vuex
Vue.use(Vuex);

//0.3:创建store
// var store = new Vuex.Store({
//   //状态
//   state:{
//       //类似data
//     count:0  //count全局共享数据
//   },
//   mutations:{
//       //类似methods
//       increment(state){  //全局操作共享数据方法
//                 state.count++
//       },
//       subsract(state){
//                               //全局操作共享数据方法
//           state -=1
//       }
//   },
//   getters:{
//            optCount:(state)=>{ //#获取数据方法
//                   return '#'+state.count;


//            }

//   }
// })




//将 vuex 创建的 store 挂载到 VM 实例上， 只要挂载到了 vm 上，任何组件
//都能使用 store 来存取数据
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')




