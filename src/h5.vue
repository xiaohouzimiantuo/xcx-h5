<template>
  <div>
    <transition name="router">
        <router-view></router-view>
      </transition>
  </div>
</template>

<script>
export default {
  created() {
    wx.redirectTo({
      url: '/pages/login/main'
    });
  },
  // watch: {
  //   $route({query}) {
  //     window.query = query;
  //   }
  // }
};
</script>
