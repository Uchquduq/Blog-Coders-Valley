<template>
  <div>
    <mcv-loading v-if="isLoading" />
    <mcv-error-message v-if="error" />

    <div class="sidebar" v-if="popularTags">
      <p>Popular Tags</p>
      <div class="tag-list">
        <router-link
          v-for="popularTag in popularTags"
          :key="popularTag"
          :to="{ name: 'tag', params: { slug: popularTag } }"
          class="tag-default tag-pill"
        >
          {{ popularTag }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { actionTypes } from "@/store/modules/popularTags";
import { mapState } from "vuex";
import McvLoading from "@/components/Loading";
import McvErrorMessage from "@/components/ErrorMessage";
export default {
  name: "McvPopularTags",
  components: {
    McvLoading,
    McvErrorMessage,
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.popularTags.isLoading,
      error: (state) => state.popularTags.error,
      popularTags: (state) => state.popularTags.data,
    }),
  },
  mounted() {
    this.$store.dispatch(actionTypes.getPopularTags);
  },
};
</script>
