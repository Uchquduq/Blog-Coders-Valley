<template>
  <div class="home-page container">
    <mcv-banner />
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <mcv-feed-toggler />
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
import McvBanner from "@/components/Banner";
import McvFeedToggler from "@/components/FeedToggler";
export default {
  name: "McvGlobalFeed",
  components: {
    McvFeed,
    McvPopularTags,
    McvBanner,
    McvFeedToggler,
  },
  data() {
    return {
      apiUrl: "/articles",
    };
  },
};
</script>
