<template>
    <figure class="personAvatar" v-bind:class="{ 'small': size === 'small' }">
        <img v-if="!missing" class="personAvatar--picture" :src="picture" :title="name" :alt="name"/>
        <div v-if="missing" class="personAvatar--missing flex--col-cc">
            <span class="font-h5">?</span>
        </div>
    </figure>
</template>

<script>
export default {
  name: 'PersonAvatar',
  props: ['picture', 'name', 'size'],
  computed: {
    missing() {
      return !(!!this.picture && !!this.name);
    }
  }
};
</script>


<style lang="scss" scoped>
@import '../../styles/scss/colors.scss';

$personAvatar-size: 44px;
$personAvatar-size-small: 30px;

.personAvatar {
  width: $personAvatar-size;
  height: $personAvatar-size;
  min-width: $personAvatar-size;
  min-height: $personAvatar-size;
  overflow: hidden;
  margin: 0;
  padding: $personAvatar-size / 5.5;
}
.personAvatar.small {
  width: $personAvatar-size-small;
  height: $personAvatar-size-small;
  min-width: $personAvatar-size-small;
  min-height: $personAvatar-size-small;
  padding: $personAvatar-size-small / 5.5;
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

