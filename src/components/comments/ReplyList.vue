<template>
    <ul class="replyList list--noBullet">
        <li class="replyList--item" v-for="reply in replies" :key="reply.id">
            <reply-item :reply="reply"/>
        </li>
    </ul>
</template>

<script>
import ReplyItem from './ReplyItem';

export default {
    name: 'ReplyList',
    props: ['replies'],
    components: {
        ReplyItem
    }
}
</script>

<style lang="scss" scoped>
@import '../../styles/scss/colors.scss';

.replyList {
    padding-left: 18px;
    margin-left: 18px;
    border-left: 1px solid $black-t4;
}
</style>
