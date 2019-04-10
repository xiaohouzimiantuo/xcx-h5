<template>
  <section class="container">
    <van-toast id="van-toast" :show="toast.show" :mask="toast.mask" :message="toast.message"/>
  </section>
</template>

<script>
export default {
  data() {
    return {
      toast: this.global.$data.toast
    };
  }
};
</script>
