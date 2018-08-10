<template>
    <section class="replyItem">
        <div class="replyItem--content flex--row-ss">
            <person-avatar :picture="reply.alias.pictureUrl" :name="reply.alias.name"/>
            <p>{{reply.body}}</p>
        </div>
    </section>
</template>

<script>
import PersonAvatar from '../icons/PersonAvatar.vue';

export default {
    name: 'ReplyItem',
    props: ['reply'],
    components: {
        PersonAvatar
    }
}
</script>

<style lang="scss" scoped>

</style>
