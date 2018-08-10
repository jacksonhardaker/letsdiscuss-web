<template>
    <div class="commentInput flex--row-sc">
        <person-avatar :picture="aliasPicture" :name="aliasName"/>
        <input v-model="commentText" type="text"/>
        <button v-on:click="submit()" class="btn">Comment</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

import PersonAvatar from '../icons/PersonAvatar';

export default {
  name: 'CommentInput',
  props: ['article', 'alias'],
  data: function() {
    return {
      commentText: ''
    };
  },
  computed: {
    aliasPicture() {
      return this.alias ? this.alias.pictureUrl : '';
    },
    aliasName() {
      return this.alias ? this.alias.name : '';
    }
  },
  methods: {
    ...mapActions({
      leaveComment: 'leaveComment'
    }),
    submit () {
        this.leaveComment({article: this.article, commentText: this.commentText});
    }
  },
  components: {
    PersonAvatar
  }
};
</script>

<style lang="scss" scoped>
</style>
