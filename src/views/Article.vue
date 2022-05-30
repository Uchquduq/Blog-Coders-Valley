<template>
  <div class="article-page">
    <div class="banner">
      <div class="container" v-if="article">
        <h1>{{ article.title }}</h1>
        <router-link
          :to="{
            name: 'userProfile',
            params: { slug: article.author.username },
          }"
        >
          <img :src="article.author.image" alt="" />
        </router-link>
        <div class="info">
          <router-link
            :to="{
              name: 'userProfile',
              params: { slug: article.author.username },
            }"
          >
            {{ article.author.username }}
          </router-link>
          <span class="date">{{ article.createdAt }}</span>
        </div>
        <span v-if="isAuthor">
          <router-link
            :to="{ name: 'editArticle', params: { slug: article.slug } }"
            class="btn btn-outline-secondary btn-sm"
          >
            <i class="ion-edt" />
            Edit article</router-link
          >
          <button class="btn btn-outline-danger btn-sm" @click="deleteArticle">
            <i class="ion-trash-a" />Delete article
          </button>
        </span>
      </div>
    </div>
    <div class="container page">
      <mcv-loading v-if="isLoading" />
      <mcv-error-message v-if="isLoading" :message="error" />
      <div class="row article-count" v-if="article">
        <div class="col-xs-12">
          <div>
            <p>{{ article.body }}</p>
          </div>
          <mcv-tag-list :tags="article.tagList" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import McvLoading from "@/components/Loading";
import McvErrorMessage from "@/components/ErrorMessage";
import { actionTypes as articleActionTypes } from "@/store/modules/article";
import { getterTypes as authGetterTypes } from "@/store/modules/auth";
import { mapState, mapGetters } from "vuex";
import McvTagList from "@/components/TagList";

export default {
  name: "McvArticle",
  components: {
    McvLoading,
    McvErrorMessage,
    McvTagList,
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.article.isLoading,
      error: (state) => state.article.error,
      article: (state) => state.article.data,
    }),
    ...mapGetters({
      currentUser: authGetterTypes.currentUser,
    }),
    isAuthor() {
      if (!this.currentUser || !this.article) {
        return false;
      }
      return this.currentUser.username === this.article.author.username;
    },
  },
  mounted() {
    this.$store.dispatch(articleActionTypes.getArticle, {
      slug: this.$route.params.slug,
    });
  },
  methods: {
    deleteArticle() {
      this.$store
        .dispatch(articleActionTypes.deleteArticle, {
          slug: this.$route.params.slug,
        })
        .then(() => {
          this.$router.push({ name: "globalFeed" });
        });
    },
  },
};
</script>
<style lang=""></style>
