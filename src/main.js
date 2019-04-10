import Vue from "vue";
import App from "./App";
import router from "./router";
import vm from "./global";
import * as fun from "./global/functions";
import Container from "@com/container";
Vue.prototype.global = vm;
// 方法全部注册在原型上
Object.keys(fun).forEach(key => {
  Vue.prototype[key] = fun[key];
});
Vue.config.productionTip = false;
// 小程序兼容组件
Vue.component("container", Container);

if (process.env._ENV == "h5") {
  //   const router = require("./router");
  require("babel-polyfill");
  require("es6-promise").polyfill();
  // 在头部插入meta标签
  let meta = document.createElement("meta");
  meta.name = "viewport";
  meta.content =
    "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0";
  document.querySelector("head").appendChild(meta);

  // 使用rem单位 经过测试小程序的1rem = 16逻辑像素
  (function(doc, win) {
    let docEl = doc.documentElement;
    let resizes =
      "orientationchange" in window ? "orientationchange" : "resize";
    let resizeEv = function() {
      let clientwidth = docEl.clientWidth;

      if (!clientwidth) return;
      docEl.style.fontSize = 16 * (clientwidth / 375) + "px";
    };
    if (!doc.addEventListener) return;
    win.addEventListener(resizes, resizeEv, false);
    doc.addEventListener("DOMContentLoaded", resizeEv, false);
  })(document, window);

  // h5增加fastclick
  const FastClick = require("fastclick");
  if ("addEventListener" in document) {
    document.addEventListener(
      "DOMContentLoaded",
      function() {
        FastClick.attach(document.body);
      },
      false
    );
  }

  // 引入默认样式
  require("@css/index.scss");

  require("./initH5");
  new Vue({
    el: "#app",
    router,
    // store,
    components: { App },
    template: "<App/>"
  });
} else {
  App.mpType = "app";
  const app = new Vue(App);
  app.$mount();
}
