/**
 * fetch方法说明：
 * 接收参数：requestConfig: {url,method,data,header,success}
 * 将小程序的request转成promise形式
 */

import axiosH5 from "./h5";
import wxRequest from "./wx";

export default function(requestConfig) {
  if (process.env._ENV != "wx") {
    return axiosH5(requestConfig);
  } else {
    return wxRequest(requestConfig);
  }
}
