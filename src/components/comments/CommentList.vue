<template>
    <ul class="commentList list--noBullet">
        <li class="commentList--item" v-for="comment in comments" :key="comment.id">
            <comment-item :comment="comment" :current-alias="currentAlias"/>
        </li>
    </ul>
</template>

<script>
import CommentItem from './CommentItem';

export default {
    name: 'CommentList',
    props: ['comments', 'currentAlias'],
    components: {
        CommentItem
    }
}
</script>

<style lang="scss" scoped>
.commentList {
  width: 500px;
  max-width: 100%;
}
</style>
