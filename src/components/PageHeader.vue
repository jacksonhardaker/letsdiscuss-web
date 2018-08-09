<template>
    <header class="pageHeader shadow-1">
      <person-avatar :picture="currentPerson.picture" :name="currentPerson.name"/></header>
</template>

<script>
import { mapGetters } from 'vuex';

import PersonAvatar from './icons/PersonAvatar';

export default {
  name: 'PageHeader',
  computed: {
    ...mapGetters(['currentPerson'])
  },
  components: {
    PersonAvatar
  }
};
</script>

<style lang="scss">
.pageHeader {
  height: 60px;
  width: 100%;
}
</style>
