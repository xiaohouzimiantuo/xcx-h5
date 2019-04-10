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
<<<<<<< HEAD
=======
  },
  // 操蛋的写法
  created() {
    wx.redirectTo({
      url: "/pages/login/main"
    });
>>>>>>> 5eb31341db85e7e77f763aeee07210b3de5279d2
  }
};
</script>

<style>
</style>
