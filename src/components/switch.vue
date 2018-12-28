<template>
  <div class="switch">
      <van-switch v-if="env == 'h5'" v-model="checked" size="24px" active-color="#0088FF"/>
      <switch @change="changeSwitch" :checked="checked" color="#0088FF"/>
  </div>
</template>

<script>

export default {
  props: {
    value: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
        env: process.env._ENV,
        checked: true
    }
  },
  created() {
    this.checked = this.value;
  },
  methods: {
    changeSwitch() {
      this.checked = !this.checked;
    }
  },
  watch: {
    checked(value) {
      this.$emit('change', value);
    }
  }
  
}
</script>

<style lang="scss" scoped>
// @import '~@css/mixin.scss';
.switch{
  flex-shrink: 0;
}
</style>
