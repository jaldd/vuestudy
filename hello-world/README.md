# hello-world

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

---
从0开始学习vue
---
# vue基础

---

## vue-cli

---

sudo npm install -g cnpm --registry=https://registry.npm.taobao.org

sudo cnpm install -g @vue/cli

sudo cnpm install -g @vue/cli-service-global

vue create hello-world
cd hello-world

vue ui
sudo cnpm install  webpack -g
sudo cnpm install  webpack-cli -g
开发运行项目：npm run serve

---

## vue插件

---

### vue-resource

---

1. 官方http插件

2. cnpm install vue-resource --save

   --save会将插件写入package.json

3. main.js中添加

   import VueResource from 'vue-resource'

4. 

---

### axios

1. 第三方http插件

2. cnpm install axios --save

3. 在需要使用的地方引入

   import Axios from "axios"

4. 
---
### vue-router

1. 官方路由插件

2. cnpm install vue-router --save

3. main.js中添加

   import VueRouter from 'vue-router'
4. 
    ```js
    //创建组件
    import HelloWorld from "./components/HelloWorld.vue";
    import Home from "./components/Home.vue";
    //配置路由
    const routes = [
    { path: "/home", component: Home }, 
    { path: "/helloworld", component: HelloWorld },
    { path: "*", redirect: "/home" }
    ]
    //实例化vue
    const router=new VueRouter({
    routes //相当于routes:routes
    })
    // export default router
    Vue.config.productionTip = false
    new Vue({
    router,
    render: h => h(App),
    }).$mount('#app')
    ```
5. 动态路由
    ```js
    { path: "/content", component: Content },
    { path: "/content/:aid", component: Content }

    <router-link :to="'/content/' +key1">{{item}}</router-link>
    <router-link :to="'/content?aid=' +item.title">{{item}}</router-link>

    this.$route.params
    this.$route.query
    ```

---

## vue示例项目包含的功能

---
1. 组件
2. 组件之间传递数据和调用方法
   1. 父组件和子组件（Helloworld组件和Header组件）
   2. 非父子组件（Helloworld组件和Home组件）
3. 
---
## mintui

1. Main.js中

    ```js
    import Mint from 'mint-ui';
    import 'mint-ui/lib/style.css';
    Vue.use(Mint);
    ```
---
## element-ui

1. yarn config set registry https://registry.npm.taobao.org -g
   yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g
2. vue add element















