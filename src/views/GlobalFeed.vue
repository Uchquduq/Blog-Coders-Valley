<template>
  <div class="home-page container">
    BANNER
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <mcv-feed :api-url="apiUrl"></mcv-feed>
        </div>
        <div class="col-md-3">
          <mcv-popular-tags />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import McvPopularTags from "@/components/PopularTags";
import McvFeed from "@/components/Feed";
export default {
  name: "McvGlobalFeed",
  components: {
    McvFeed,
    McvPopularTags,
  },
  data() {
    return {
      apiUrl: "/articles",
    };
  },
};
</script>
