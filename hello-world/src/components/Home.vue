<template>
  <div id="home">
    和helloworld平级的home
    <br />
    <mt-button type="default">default</mt-button>
    <mt-button type="primary">primary</mt-button>
    <mt-button type="danger">danger</mt-button>
    <mt-button size="small">small</mt-button>
    <mt-button size="large">large</mt-button>
    <mt-button size="normal">normal</mt-button>
    <mt-button disabled>disabled</mt-button>
    <mt-button plain>plain</mt-button>
    <mt-button icon="back">back</mt-button>
    <mt-button icon="more">更多</mt-button>
  </div>
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
