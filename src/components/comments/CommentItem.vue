<template>
    <section class="commentItem">
        <div class="commentItem--content flex--row-ss">
            <person-avatar class="commentItem--avatar" :picture="picture" :name="name" size="small"/>
            <p class="commentItem--body">{{comment.body}}</p>
        </div>
        <reply-list class="commentItem--replies" :replies="comment.replies"/>
        <button v-if="!showReplyInput" v-on:click="showReply()" class="btn btn--small commentItem--replyButton">Reply</button>
        <comment-input v-if="showReplyInput" class="commentItem--replyInput" :alias="currentAlias" :comment="comment"/>
    </section>
</template>

<script>
import ReplyList from './ReplyList';
import PersonAvatar from '../icons/PersonAvatar.vue';
import CommentInput from '../input/CommentInput';

export default {
  name: 'CommentItem',
  props: ['comment', 'currentAlias'],
  data: function() {
    return {
      showReplyInput: false
    };
  },
  computed: {
    alias() {
      return this.comment ? this.comment.alias : null;
    },
    picture() {
      return this.comment && this.comment.alias
        ? this.comment.alias.pictureUrl
        : '';
    },
    name() {
      return this.comment && this.comment.alias ? this.comment.alias.name : '';
    }
  },
  methods: {
    showReply() {
        this.showReplyInput = !this.showReplyInput;
    }
  },
  components: {
    ReplyList,
    PersonAvatar,
    CommentInput
  }
};
</script>

<style lang="scss" scoped>
@import '../../styles/scss/colors.scss';

.commentItem {
  background-color: $blue-lighter;
  margin: 10px 0;
}

.commentItem--replyButton {
  margin-left: 36px;
}

.commentItem--replyInput {
  margin-left: 18px;
  padding-left: 18px;
}
</style>
