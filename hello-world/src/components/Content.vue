<template>
  <div id="content">content</div>
</template>
<script>
export default {
  data() {
    return {
      msg: "content"
    };
  },
  mounted() {
    console.log("path:");
    console.log(this.$route.params);
    console.log("query:");
    console.log(this.$route.query);
  }
};
</script>