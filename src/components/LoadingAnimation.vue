<template>
    <aside class="loading" v-bind:class=" { 'loading--animate': animate }">
        <em class="loading-symbol">#</em>
        <em class="loading-symbol">*</em>
        <em class="loading-symbol">@</em>
        <em class="loading-symbol">$</em>
        <em class="loading-symbol">!*</em>
        <em class="loading-symbol">?</em>
        <em class="loading-symbol">#</em>
        <em class="loading-symbol">$</em>
        <em class="loading-symbol">@</em>
        <em class="loading-symbol">*</em>
        <em class="loading-symbol">?!</em>
        <em class="loading-symbol">*</em>
        <em class="loading-symbol">!!</em>
    </aside>
</template>

<script>
export default {
  name: 'LoadingAnimation',
  props: {
      animate: Boolean
  }
};
</script>

<style lang="scss" scoped>
@import '../styles/scss/colors.scss';

$animation-increment: 0.3;

$scale-small--loading: scale(0.001);
$scale-large--loading: scale(8);

.loading {
    width: 100px;
    height: 100px;
    position: relative;
    border: 60px solid transparent;
    display: none;
}

.loading--animate {
    display: block;
}

.loading--animate > .loading-symbol {
    animation: explode 2s ease-in-out infinite;
}

.loading-symbol {
    position: absolute;
    opacity: 0;

    &:nth-child(1) {
        left: 5px;
        top: 5px;
        animation-delay: (0 * $animation-increment) + s;
    }
    &:nth-child(2) {
        left: 20px;
        top: 25px;
        animation-delay: (1 * $animation-increment) + s;
    }
    &:nth-child(3) {
        right: 8px;
        top: 14px;
        animation-delay: (2 * $animation-increment) + s;
    }
    &:nth-child(4) {
        left: 45px;
        top: 30px;
        animation-delay: (3 * $animation-increment) + s;
    }
    &:nth-child(5) {
        right: 12px;
        bottom: 11px;
        animation-delay: (4 * $animation-increment) + s;
    }
    &:nth-child(6) {
        left: 7px;
        bottom: 2px;
        animation-delay: (5 * $animation-increment) + s;
    }
    &:nth-child(7) {
        left: 23px;
        bottom: 18px;
        animation-delay: (6 * $animation-increment) + s;
    }
    &:nth-child(8) {
        right: 30px;
        top: 50px;
        animation-delay: (7 * $animation-increment) + s;
    }
    &:nth-child(9) {
        left: 18px;
        bottom: 2px;
        animation-delay: (8 * $animation-increment) + s;
    }
    &:nth-child(10) {
        left: 47px;
        bottom: 2px;
        animation-delay: (9 * $animation-increment) + s;
    }
    &:nth-child(11) {
        right: 0px;
        bottom: 0px;
        animation-delay: (10 * $animation-increment) + s;
    }
    &:nth-child(12) {
        left: 45px;
        top: 11px;
        animation-delay: (11 * $animation-increment) + s;
    }
    &:nth-child(13) {
        left:50px;
        top: 50px;
        animation-delay: (12 * $animation-increment) + s;
    }
}

@keyframes explode {
    0% {
        opacity: 0;
        transform: $scale-small--loading;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: $scale-large--loading;
    }
}
</style>

