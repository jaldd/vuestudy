<template>
  <div id="home">和helloworld平级的home</div>
</template>
<script>
import VueEvent from "../model/VueEvent.js";
export default {
  data() {
    return {
      msg: "home"
    };
  },
  mounted() {
    VueEvent.$on("to-home", function(data) {
      console.log(data);
      alert("home:" + data);
    });
  }
};
</script>
