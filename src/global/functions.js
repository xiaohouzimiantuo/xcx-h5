// 微信的全局方法必须依赖于container组件，需要引用
import vm from "./index";
import router from "../router";
import { isEmptyObject } from "../utils/";
const env = process.env._ENV;

// if (env == "wx") {
//   window.getCurrentPages = () => null;
// }

// 轻提示定时器
let toastTimer = null;
// 轻提示方法
export const _toast = (message = "提示", mask = false, timeout = 1700) => {
  if (env == "wx") {
    const toast = vm.$data.toast;
    clearTimeout(toastTimer);
    toast.message = message;
    toast.mask = mask;
    toast.show = true;
    toastTimer = setTimeout(() => {
      toast.show = false;
      toast.mask = false;
      toast.message = "";
    }, timeout);
  }
};

// 路由对象
const __router = new Object();
__router.push = url => {
  if (env == "wx") {
    wx.navigateTo({ url });
  } else {
    url = url.slice(6);
    const prefix = url.split("?")[0].slice(0, -5);
    const suffix = url.split("?")[1] ? url.split("?")[1] : "";
    router.push(prefix + "?" + suffix);
  }
};
__router.replace = url => {
  if (env == "wx") {
    wx.redirectTo({ url });
  } else {
    url = url.slice(6);
    const prefix = url.split("?")[0].slice(0, -5);
    const suffix = url.split("?")[1] ? url.split("?")[1] : "";
    router.replace(prefix + "?" + suffix);
  }
};
__router.back = delta => {
  if (env == "wx") {
    wx.navigateBack({
      delta
    });
  } else {
    router.back(delta);
  }
};
__router.getPath = () => {
  if (env == "wx") {
    const pages = getCurrentPages();
    const currentPage = pages[pages.length - 1];
    return "/" + currentPage.route;
  } else {
    return "/pages/" + location.pathname + "/main";
  }
};
__router.getFullPath = () => {
  const params = __router.getQuery();
  let path;
  if (!isEmptyObject(params)) {
    let queryStr = "?";
    Object.keys(params).forEach(key => {
      queryStr += `${encodeURIComponent(key)}=${encodeURIComponent(
        params[key]
      )}&`;
    });
    queryStr = queryStr.slice(0, -1);
    path = __router.getPath() + queryStr;
  } else {
    path = __router.getPath();
  }
  return path;
};
__router.getQuery = () => {
  if (env == "wx") {
    // 小程序在页面初始化的时候才能调用此方法。所以请在mounted以后调用
    const pages = getCurrentPages();
    const currentPage = pages[pages.length - 1];
    return currentPage.options;
  } else {
    const queryString = decodeURIComponent(location.search.slice(1));
    let result = {};
    if (queryString) {
      const queryArray = queryString.split("&");
      queryArray.forEach(item => {
        const valueArray = item.split("=");
        if (valueArray[1]) {
          result[valueArray[0]] = valueArray[1];
        }
      });
    }
    return result;
  }
};

export const _router = __router;

// 同步存储数据
const __store = new Object();

__store.get = key => {
  if (env == "wx") {
    try {
      return wx.getStorageSync(key);
    } catch (e) {
      throw e;
    }
  } else {
    return localStorage.getItem(key);
  }
};
__store.set = (key, value) => {
  if (env == "wx") {
    try {
      wx.setStorageSync(key, value);
    } catch (e) {
      throw e;
    }
  } else {
    return localStorage.setItem(key, value);
  }
};

__store.remove = key => {
  if (env == "wx") {
    try {
      wx.removeStorageSync(key);
    } catch (e) {
      throw e;
    }
  } else {
    return localStorage.removeItem(key);
  }
};

export const _store = __store;
