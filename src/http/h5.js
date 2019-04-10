import axios from "axios";
import config from "./config";
import { _toast, _store, _router } from "../global/functions";

if (process.env.NODE_ENV !== "development") {
  axios.defaults.baseURL = window.location.origin;
}

axios.interceptors.request.use(
  config => {
    // 检查token是否存在，在请求的时候将token携带在每一个请求的头部
    // if (GLOBAL.getToken()) {
    //     config.headers.token = GLOBAL.getToken();
    // }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

/* 反应 response 拦截器 */
axios.interceptors.response.use(
  response => {
    if (response.data.code == 400) {
    }
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);
export default function(requestConfig) {
  // 获取到token
  const token = _store.get("token");
  // 设置默认方法post
  if (!requestConfig.method) {
    requestConfig.method = config.defaultRequestMethod;
  }
  // header默认配置
  const defaultHeaderConfig = {};
  defaultHeaderConfig["Content-Type"] = config.contentType;
  //   defaultHeaderConfig["Content-Type"] = "application/json";
  defaultHeaderConfig.token = token ? token : "";
  // 没有header的情况
  if (!requestConfig.header) {
    //   没有header配置项的时候增加默认
    requestConfig.headers = defaultHeaderConfig;
  } else {
    //   有header配置项的时候
    requestConfig.headers = { ...defaultHeaderConfig, ...requestConfig.header };
    delete requestConfig.header;
    requestConfig.params = { ...requestConfig.data };
    delete requestConfig.data;
  }

  // 公共参数
  requestConfig.data = { ...config.commonData, ...requestConfig.data };
  //   console.log(requestConfig);
  return new Promise((resolve, reject) => {
    axios(requestConfig)
      .catch(ex => {
        reject(ex);
      })
      .then(
        res => {
          resolve(res);
        },
        err => {
          console.log("请求错误1！", err);
          reject(err);
        }
      );
  });
}
