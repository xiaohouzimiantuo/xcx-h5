<template>
  <div v-if="env == 'h5'">
    <transition name="router">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      env: process.env._ENV
    };
  },
  // 操蛋的写法
  created() {
    wx.redirectTo({
      url: "/pages/login/main"
    });
  }
};
</script>

<style>
</style>
