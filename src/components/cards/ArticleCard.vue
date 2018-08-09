<template>
<section class="articleCard flex--col-cc">
    <a class="articleCard--link" target="_blank" :href="url">
        <img class="articleCard--image" :src="image" :alt="title"/>
        <base-url class="font-caption" v-bind:src="url"/>
    </a>
    <h1 class="font-h5">{{title}}</h1>
    <aside class="font-overline">by {{author}}</aside>
    <hr/>
    <p class="articleCard--desc font-body-2">{{description}}</p>
    </section>
</template>

<script>
import BaseUrl from '../BaseUrl';

export default {
  name: 'ArticleCard',
  props: ['image', 'title', 'description', 'author', 'url'],
  components: { BaseUrl }
};
</script>

<style lang="scss" scoped>
@import '../../styles/scss/colors.scss';

.articleCard {
  width: 700px;
  max-width: 100%;
}

.articleCard--link {
    text-decoration: none;
    color: $black;
    text-align: center;
}

.articleCard--image {
    width: 100%;
    object-fit: contain;
}

.articleCard--desc {
    max-width: 66%;
    text-align: center;
}
</style>

