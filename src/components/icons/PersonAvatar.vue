<template>
    <figure class="personAvatar">
        <img class="personAvatar--picture" :src="picture" :title="name" :alt="name"/>
    </figure>
</template>

<script>
export default {
  name: 'PersonAvatar',
  props: ['picture', 'name']
};
</script>


<style lang="scss" scoped>
.personAvatar {
  width: 44px;
  height: 44px;
  overflow: hidden;
  margin: 0;
  padding: 8px;
}

.personAvatar--picture {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
</style>

