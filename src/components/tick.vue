<template>
  <div class="tick">
    <img :src="value == 1? unselect: selected" alt="" class="img">
  </div>
</template>

<script>
import selected from '@imgs/tick@2x.png';
import unselect from '@imgs/unchecked@2x.png';
export default {
    props: {
        value: {
            default: 1
        }
    },
    data() {
        return {
            selected,
            unselect
        }
    }
};
</script>

<style lang="scss" scoped>
@import "~@css/mixin.scss";
.tick{
    font-size: 0;
    // @include flex(center);
    width: rem(18);
    height: rem(18);
    border-radius: 50%;
    overflow: hidden;
}
</style>
