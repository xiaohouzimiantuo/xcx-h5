import config from "./config";
import { _toast, _store, _router } from "../global/functions";

export default function(requestConfig) {
  // 获取到token
  const token = _store.get("token");
  // 设置默认方法post
  if (!requestConfig.method) {
    requestConfig.method = config.defaultRequestMethod;
  }
  //   拼接url路径
  requestConfig.url = config.url + requestConfig.url.replace(/^\/api/, "");
  // header默认配置
  const defaultHeaderConfig = {};
  defaultHeaderConfig["Content-Type"] = config.contentType;
  defaultHeaderConfig.token = token ? token : "";
  // 没有header的情况
  if (!requestConfig.header) {
    //   没有header配置项的时候增加默认
    requestConfig.header = defaultHeaderConfig;
  } else {
    //   有header配置项的时候
    requestConfig.header = { ...defaultHeaderConfig, ...requestConfig.header };
  }

  // 公共参数
  requestConfig.data = { ...config.commonData, ...requestConfig.data };
  //   console.log(requestConfig);
  return new Promise((resolve, reject) => {
    const success = res => {
      const data = res.data;
      if (data.result) {
        resolve(data);
      } else {
        console.log(data);
        reject(res);
      }
    };
    const fail = err => {
      _toast(err);
      reject(err);
    };
    const complete = result => {
      // if (!result.data.result) {
      //   _store.remove("token");
      //   _toast("请求失败");
      //   _router.replace(`/pages/index/main?redrect=${_router.getFullPath()}`);
      // }
    };
    requestConfig = Object.assign(requestConfig, { success, fail, complete });
    wx.request(requestConfig);
  });
}
