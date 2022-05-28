<template>
  <div class="home-page container">
    <mcv-banner />
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
import McvBanner from "@/components/Banner";
export default {
  name: "McvTagFeed",
  components: {
    McvFeed,
    McvPopularTags,
    McvBanner,
  },
  computed: {
    apiUrl() {
      const tagName = this.$route.params.slug;
      console.log("tagName", tagName);
      return `/articles?tag=${tagName}`;
    },
  },
};
</script>
