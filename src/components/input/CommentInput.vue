<template>
    <div class="commentInput flex--row-sc">
        <person-avatar :picture="aliasPicture" :name="aliasName" size="small"/>
        <input v-model="commentText" type="text"/>
        <button v-on:click="submit()" class="btn">Comment</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

import PersonAvatar from '../icons/PersonAvatar';

export default {
  name: 'CommentInput',
  props: ['article', 'alias', 'comment'],
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
      leaveComment: 'leaveComment',
      replyToComment: 'replyToComment'
    }),
    submit() {
      if (this.comment) {
        
        // Reply to a comment
        this.replyToComment({
          comment: this.comment,
          commentText: this.commentText
        }).then(() => {
          this.commentText = '';
        });
      } else {

        this.leaveComment({
          article: this.article,
          commentText: this.commentText
        }).then(() => {
          this.commentText = '';
        });
      }
    }
  },
  components: {
    PersonAvatar
  }
};
</script>

<style lang="scss" scoped>
</style>
