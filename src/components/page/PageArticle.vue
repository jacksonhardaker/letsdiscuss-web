<template>
    <div :class="$options.name">
    <h1>About</h1>

    <p>{{ article }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: `PageArticle`,
  computed: {
    ...mapGetters({
      status: 'getArticleStatus',
      article: 'getCurrentArticle'
    })
  },
  methods: {
    ...mapActions([
      'getCurrentArticle'
    ])
  },
  created: function() {
    console.log(
      `[Attempting to load article... ${decodeURIComponent(this.$route.path)}]`
    );

    this.getCurrentArticle(this.$route.params);
  }
};
</script>
