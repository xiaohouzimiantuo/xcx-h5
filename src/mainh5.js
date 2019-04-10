import Vue from "vue";
import App from "./h5";
import router from "./router";
import "babel-polyfill";
require("es6-promise").polyfill();
import global from "./global";

// 在头部插入meta标签
let meta = document.createElement("meta");
meta.name = "viewport";
meta.content =
  "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0";
document.querySelector("head").appendChild(meta);

// 使用rem单位 经过测试小程序的1rem = 18.75逻辑像素
(function(doc, win) {
  let docEl = doc.documentElement;
  let resizes = "orientationchange" in window ? "orientationchange" : "resize";
  let resizeEv = function() {
    let clientwidth = docEl.clientWidth;

    if (!clientwidth) return;
    docEl.style.fontSize = 18.75 * (clientwidth / 375) + "px";
  };
  if (!doc.addEventListener) return;
  win.addEventListener(resizes, resizeEv, false);
  doc.addEventListener("DOMContentLoaded", resizeEv, false);
})(document, window);

// 引入默认样式
import "@css/index.scss";

import "./initH5";
Vue.config.productionTip = false;
Vue.prototype._global = global;
window.vm = new Vue({
  el: "#app",
  router,
  // store,
  components: { App },
  template: "<App/>"
});
