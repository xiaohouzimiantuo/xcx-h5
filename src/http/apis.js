import fetch from "./fetch";

// 注册
export function _register(data, method = "POST", header = {}) {
  return fetch({
    url: "/api/user/public/register",
    method,
    data,
    header
  });
}
// 登陆
export function _login(data = {}, method = "POST", header = {}) {
  return fetch({ url: "/api/user/public/login", method, data, header });
}
// 短信验证码
export function _sendCode(data = {}, method = "POST", header = {}) {
  return fetch({ url: "/api/user/sms/send", method, data, header });
}
// 商城首页
export function _shopIndex(data = {}, method = "POST", header = {}) {
  return fetch({ url: "/api/shop/index/index", method, data, header });
}
