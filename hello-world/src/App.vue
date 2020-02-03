<template>
  <div id="app">
    <br />
    <button @click="getData()">获取数据</button>
    <br />
    <i style="font-size:40px" class="el-icon-setting"></i>
     <el-rate v-model="value1"></el-rate>
    <br/>
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
      class="list"
    >
      <li v-for="(item,key) in body" :key="key">
        <router-link :to="'/content/'+item.aid">{{item.title}}</router-link>
      </li>
    </ul>
    <br />
    <input type="text" v-model="todo" @keydown="doAdd($event)" />
    <button @click="doAdd">+add</button>
    <br />
    <button @click="getList">get list</button>
    <br />
    <button @click="goContent">go content</button>
    <br />
    <h2>进行中</h2>
    <ul>
      <template v-for="(item,key1) in list">
        <li :key="key1" v-if="!item.checked">
          <input type="checkbox" v-model="item.checked" @change="saveList()" />
          {{item.title}} ---
          <router-link to="/content/1">{{item}}</router-link>

          <router-link :to="'/content/' +key1">{{item}}</router-link>
          <router-link :to="'/content?aid=' +item.title">{{item}}</router-link>

          <button @click="removeData(key1)">删除</button>
        </li>
      </template>
    </ul>
    <h2>已完成</h2>
    <ul>
      <template v-for="(item,key2) in list">
        <li :key="key2" v-if="item.checked">
          <input type="checkbox" v-model="item.checked" @change="saveList()" />
          {{item.title}} ---
          <button @click="removeData(key2)">删除</button>
        </li>
      </template>
    </ul>

    <br />
    <h3>{{msg}}{{obj.name}}</h3>
    <br />
    <input type="text" v-model="msg" />
    <br />
    <button v-on:click="getMsg()">getMsg</button>
    <button v-on:click="setMsg()">setMsg</button>
    <br />
    <div v-bind:class="{'red':flag}">我是一个变色的div</div>
    <br />
    <input type="text" ref="userinfo" />
    <div ref="box">box</div>
    <button v-on:click="getInputValue()">ref</button>
    <br />
    <ul>
      <li v-for="(item,index) in list" :key="index">{{item}}</li>
    </ul>
    <br />
    <button @click="ok=!ok">挂载or卸载</button>
    <br />
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld v-if="ok" msg="Welcome to Your Vue.js App" /> -->

    <!-- <Home/> -->
    <router-link to="/home">home</router-link>
    <router-link to="/helloworld">hello world</router-link>
    <router-link to="/user">用户</router-link>
    <hr />
    <router-view v-if="ok" :msg="msg"></router-view>
  </div>
</template>

<script>
import storage from "./model/localStorage.js";

export default {
  data() {
    return {
      ok: true,
      msg: "hello ",
      todo: "",
      value1: null,
      obj: {
        name: "ldd"
      },
      page: 1,
      loading: false,
      list: [
        {
          title: "111",
          checked: true
        },
        {
          title: "222",
          checked: true
        },
        {
          title: "333",
          checked: false
        }
      ],
      flag: true,
      body: []
    };
  },
  name: "app",
  components: {
    // HelloWorld,
    // Home
  },
  methods: {
    loadMore() {
      this.getData();
    },
    getMsg() {
      alert(this.msg);
    },
    setMsg() {
      this.msg = "changed";
    },
    goContent() {
      this.$router.push({ path: "/content/2", params: {} });
    },
    getInputValue() {
      this.$refs.box.style.background = "red";
      this.$refs.userinfo.value = "a";
    },
    doAdd(event) {
      // alert("add")
      console.log(event);
      console.log(event.keyCode);
      if (event.keyCode == 13 || event.keyCode == undefined) {
        this.list.push({
          title: this.todo,
          checked: false
        });
        this.todo = "";

        storage.set("list", this.list);
      }
    },
    removeData(key) {
      this.list.splice(key, 1);
      storage.set("list", this.list);
    },
    getList() {
      console.log(this.list);
    },
    saveList() {
      console.log("savelist");
      storage.set("list", this.list);
    },
    getData() {
      // GET /someUrl
      this.loading = true;
      this.$http
        .jsonp(
          "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=" +
            this.page
        )
        .then(
          response => {
            // get body data
            console.log(response);
            console.log(response.body);
            console.log(response.body);
            this.body = this.body.concat(response.body.result);
            ++this.page;
            if(response.body.result.length==20){
              this.loading = false;
            }
          },
          response => {
            // error callback
            console.log(response);
          }
        );
    }
  },
  // mounted: {
  mounted() {
    console.log("mounted");
    var list = storage.get("list");
    console.log(list);
    if (list) {
      this.list = list;
    }
    this.getData();
  }
  // }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.red {
  color: red;
}
</style>
