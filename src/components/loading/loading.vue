<template>
  <div class="loading" v-if="visible">
    <section class="wrap">
      <van-loading type="spinner" color="white" />
    </section>
  </div>
</template>

<script>
import { Loading } from 'vant';
export default {
  data() {
    return {
      visible: true
    };
  },
  components: {
    'van-loading': Loading
  }
};
</script>

<style lang="scss" scoped>
@import "~@css/mixin.scss";
.loading{
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  @include flex(center);
  .wrap{
    padding: rem(20);
    border-radius: rem(10);
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>
