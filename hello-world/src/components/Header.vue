<template>
  <div>
    <h2>this is a header 组件--{{title}}--{{msg}}</h2>
    <button @click="getParentData()">get parent data</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      child: "child"
    };
  },
  methods: {
    run(data) {
      alert("header:" + data);
    },
    getParentData() {
      alert(this.$parent.msg);
      this.$parent.run();
    }
  },
  props: ["title", "msg"]
};
</script>