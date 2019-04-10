import Vue from "vue";

// 将需要放入到全局的变量放在vm实例里面
let vm = new Vue({
  data: {
    //环境判断
    env: process.env._ENV,
    // 请提示状态
    toast: {
      show: false,
      mask: false,
      message: ""
    }
  }
});
export default vm;
