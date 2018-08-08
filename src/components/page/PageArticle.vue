<template>
    <article :class="$options.name">
      <img :src="image" :alt="title"/>
      <BaseURL v-bind:src="url"/>
      <h1>{{title}}</h1>
      <p>{{description}}</p>
      <aside>by {{author}}</aside>
  </article>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import BaseURL from '../BaseURL';

export default {
  name: `PageArticle`,
  computed: {
    ...mapGetters({
      status: 'getArticleStatus',
      article: 'getCurrentArticle'
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
    ...mapActions(['getCurrentArticle'])
  },
  created: function() {
    console.log(
      `[Attempting to load article... ${decodeURIComponent(this.$route.path)}]`
    );

    this.getCurrentArticle(this.$route.params);
  },
  components: {
    BaseURL
  }
};
</script>
