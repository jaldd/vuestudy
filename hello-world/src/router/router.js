import Vue from 'vue'

import HelloWorld from "../components/HelloWorld.vue";
import Home from "../components/Home.vue";
import Content from "../components/Content.vue";
import User from "../components/User.vue";
import UserAdd from "../components/User/UserAdd.vue";
import UserList from "../components/User/UserList.vue";
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//配置路由
const routes = [
    { path: "/home", component: Home },
    { path: "/helloworld", component: HelloWorld },
    { path: "/user", component: User ,children:[
      {path:"userAdd" ,component:UserAdd},
      {path:"userList" ,component:UserList}
    ]},
    { path: "/content", component: Content },
    { path: "/content/:aid", component: Content },
    { path: "*", redirect: "/home" }
  ]
  
  //实例化vue
  const router = new VueRouter({
    routes //相当于routes:routes
  })
  
  export default router