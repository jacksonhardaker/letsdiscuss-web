<template>
  <article class="pageArticle flex--col-cc">
    <article-card v-bind:image="image" v-bind:title="title" v-bind:description="description" v-bind:url="url" v-bind:author="author"/>
    <comment-list :comments="articleComments" :current-alias="alias"/>
    <comment-input class="pageArticle--commentInput" :article="article" :alias="alias"/>
  </article>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import ArticleCard from '../cards/ArticleCard';
import CommentInput from '../input/CommentInput';
import CommentList from '../comments/CommentList';

export default {
  name: `PageArticle`,
  computed: {
    ...mapGetters({
      status: 'getArticleStatus',
      article: 'getArticle',
      alias: 'currentAlias',
      articleComments: 'articleComments'
    }),
    image() {
      return this.article
        ? this.article.image
        : 'https://picsum.photos/200/300';
    },
    title() {
      return this.article ? this.article.title : '';
    },
    url() {
      return this.article ? this.article.url : '';
    },
    description() {
      return this.article ? this.article.description : '';
    },
    author() {
      return this.article ? this.article.author : '';
    }
  },
  methods: {
    ...mapActions(['getArticle'])
  },
  created: async function() {
    console.log(
      `[Attempting to load article... ${decodeURIComponent(this.$route.path)}]`
    );

    let article = await this.getArticle(this.$route.params);
  },
  components: {
    ArticleCard,
    CommentInput,
    CommentList
  }
};
</script>

<style lang="scss" scoped>
@import '../../styles/scss/colors.scss';

.pageArticle--commentInput {
  padding-top: 10px;
  border-top: 3px dashed $green;
  width: 500px;
  justify-content: center;
}
</style>
