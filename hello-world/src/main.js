import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.use(VueResource)
Vue.use(VueRouter)

//创建组件
import HelloWorld from "./components/HelloWorld.vue";
import Home from "./components/Home.vue";
import Content from "./components/Content.vue";


//配置路由
const routes = [
  { path: "/home", component: Home },
  { path: "/helloworld", component: HelloWorld },
  { path: "/content", component: Content },
  { path: "/content/:aid", component: Content },
  { path: "*", redirect: "/home" }
]

//实例化vue
const router = new VueRouter({
  routes //相当于routes:routes
})

// export default router


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
