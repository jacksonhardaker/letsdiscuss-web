<template>
    <section class="commentItem">
        <div class="commentItem--content">
            <person-avatar :picture="comment.alias.pictureUrl" :name="comment.alias.name"/>
            <p>{{comment.body}}</p>
        </div>
        <reply-list class="commentItem--replies" :replies="comment.replies"/>
    </section>
</template>

<script>
import ReplyList from './ReplyList';
import PersonAvatar from '../icons/PersonAvatar.vue';

export default {
    name: 'CommentItem',
    props: ['comment'],
    components: {
        ReplyList,
        PersonAvatar
    }
}
</script>

<style lang="scss" scoped>

</style>
