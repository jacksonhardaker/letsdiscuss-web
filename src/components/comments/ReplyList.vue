<template>
    <ul class="replyList">
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

</style>
