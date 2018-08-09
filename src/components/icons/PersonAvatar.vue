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
  border-radius: 50%;
  width: 60px;
  height: 60px;
  overflow: hidden;
  margin: 0;
}

.personAvatar--picture {
    object-fit: cover;
    width: 100%;
    height: 100%;
}
</style>

