import Vue from "vue";
import router from "./router";

// 使用小程序的方式
window.wx = new Object();
// 路由跳转
wx.navigateTo = ({ url }) => {
  url = url.slice(6);
  const prefix = url.split("?")[0].slice(0, -5);
  const suffix = url.split("?")[1] ? url.split("?")[1] : "";
  router.push(prefix + "?" + suffix);
};
wx.redirectTo = ({ url }) => {
  url = url.slice(6);
  const prefix = url.split("?")[0].slice(0, -5);
  const suffix = url.split("?")[1] ? url.split("?")[1] : "";
  router.replace(prefix + "?" + suffix);
};
wx.navigateBack = ({ delta }) => {
  router.back(delta);
};
// 同步存储数据
wx.getStorageSync = ({ key }) => {
  window.localStorage.getItem(key);
};
wx.removeStorageSync = ({ key }) => {
  window.localStorage.removeItem(key);
};
wx.setStorageSync = ({ key, data }) => {
  window.localStorage.setItem(key, data);
};
// 注册全局组件
import { Button, Swipe, SwipeItem, Switch, Picker, Toast } from "vant";

Vue.use(Swipe).use(SwipeItem);
Vue.use(Switch);
Vue.use(Picker);
Vue.use(Toast);
Vue.use(Button);

wx.showToast = ({ title }) => {
  // Toast({
  //     mask: true,
  //     message: title
  // });
  Toast(title);
};

// 自定义组件
import loading from "@com/loading";

wx.showLoading = loading.start;
wx.hideLoading = loading.stop;
