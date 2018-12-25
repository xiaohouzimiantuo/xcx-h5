<template>
  <div class="banner">
      <van-switch v-if="env == 'h5'" v-model="checked" />
      <switch v-model="checked" />
  </div>
</template>

<script>

export default {
  data () {
    return {
        env: process.env._ENV,
        checked: true
    }
  },
  created() {
      
  }
  
}
</script>

<style lang="scss" scoped>
@import '~@css/mixin.scss';

</style>
