<template>
  <section class="container" :class="{show: global.$data.env == 'wx'}">
    <my-toast/>
  </section>
</template>

<script>
import MyToast from "@/wxGlobalCompontents/toast";
export default {
  created() {},
  components: {
    MyToast
  }
};
</script>

<style lang="scss" scoped>
@import "~@css/mixin.scss";
.show {
  display: none;
}
</style>
