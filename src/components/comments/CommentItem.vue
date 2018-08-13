<template>
    <section class="commentItem">
        <div class="commentItem--content flex--row-ss">
            <person-avatar class="commentItem--avatar" :picture="picture" :name="name"/>
            <p class="commentItem--body">{{comment.body}}</p>
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
    computed: {
        picture() {
            return this.comment && this.comment.alias ? this.comment.alias.pictureUrl : '';
        },
        name() {
            return this.comment && this.comment.alias ? this.comment.alias.name : '';
        }
    },
    components: {
        ReplyList,
        PersonAvatar
    }
}
</script>

<style lang="scss" scoped>
@import '../../styles/scss/colors.scss';

.commentItem {
    background-color: $blue-lighter;
    margin: 10px 0;
}
</style>
