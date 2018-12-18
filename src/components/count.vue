<template>
  <div class="count">
    <p class="minus cannot">-</p>
    <p class="num">1</p>
    <p class="plus">+</p>
  </div>
</template>

<script>
export default {
  
};
</script>

<style lang="scss" scoped>
@import "~@css/mixin.scss";
.count{
    width: rem(102);
    height: rem(26);
    font-size: rem(14);
    @include flex(space-between);
    .minus,.plus {
        flex-shrink: 0;
        width: rem(32);
        border: rem(1) solid #666;
        border-radius: rem(2);
        text-align: center;
        @include lh(rem(26));
    }
    .num{
        width: 100%;
        text-align: center;
        @include lh(rem(26));
    }
    .cannot{
        color: #CCCCCC;
        border: rem(1) solid #CCCCCC;
    }
}

</style>
