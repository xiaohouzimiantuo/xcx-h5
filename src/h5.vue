<template>
  <div>
    <transition name="router">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
// import citys from '@/assets/js/citys';
// let o = {}
// citys.forEach(p => {
//   o[p.name] = {};
//   p.city.forEach(c => {
//     o[p.name][c.name] = c.area;
//   })
// });
// console.log(o)
// console.log(JSON.stringify(o));

// import city from '@/assets/js/cities';
// console.log(city)
export default {
  created() {
    wx.redirectTo({
      url: "/pages/login/main"
    });
  },
  created() {}
  // watch: {
  //   $route({query}) {
  //     window.query = query;
  //   }
  // }
};
</script>
