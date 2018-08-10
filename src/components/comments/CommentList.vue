<template>
    <ul class="commentsList">
        <li class="commentsList--item" v-for="comment in comments" :key="comment.id">
            <comment-item :comment="comment"/>
        </li>
    </ul>
</template>

<script>
import CommentItem from './CommentItem';

export default {
    name: 'CommentsList',
    props: ['comments'],
    components: {
        CommentItem
    }
}
</script>

<style lang="scss" scoped>

</style>
