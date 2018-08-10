<template>
    <figure class="personAvatar">
        <img v-if="!missing" class="personAvatar--picture" :src="picture" :title="name" :alt="name"/>
        <div v-if="missing" class="personAvatar--missing flex--col-cc">
            <span class="font-h5">?</span>
        </div>
    </figure>
</template>

<script>
export default {
  name: 'PersonAvatar',
  props: ['picture', 'name'],
  computed: {
    missing() {
      return !(!!this.picture && !!this.name);
    }
  }
};
</script>


<style lang="scss" scoped>
@import '../../styles/scss/colors.scss';

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

.personAvatar--missing {
    background-color: $black-t3;
    height: 100%;
    width: 100%;
    border-radius: 50%;
}
</style>

