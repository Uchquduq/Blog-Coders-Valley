<template>
  <div class="home-page container">
    BANNER
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <mcv-feed :api-url="apiUrl"></mcv-feed>
        </div>
        <div class="col-md-3">
          POPULAR TAGS
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import McvFeed from "@/components/Feed";
export default {
  name: "McvGlobalFeed",
  components: {
    McvFeed,
  },
  data() {
    return {
      apiUrl: "/articles",
    };
  },
};
</script>
