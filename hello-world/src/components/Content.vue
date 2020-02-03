<template>
  <div id="content">
    content
    <h2>{{list.title}}</h2>
    <div v-html="list.content"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "content",
      list: []
    };
  },
  methods: {
    requestData(aid) {
      console.log("aid:");
      console.log(aid);
      var api =
        "http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid=" + aid;
      this.$http.jsonp(api).then(
        function(response) {
          console.log(response);
          this.list = response.body.result[0];
        },
        function(err) {
          console.log(err);
        }
      );
    }
  },
  mounted() {
    console.log("path:");
    console.log(this.$route.params);
    console.log("query:");
    console.log(this.$route.query);
    var aid = this.$route.params.aid;
    this.requestData(aid);
  }
};
</script>