<<<<<<< HEAD
// import * as api from "./apis";

// export default api;
=======
import axios from "axios";
let http = function(config) {
  if (process.env._ENV == "h5") {
    return axios(config)
      .catch(ex => {
        console.log("axios is fail");
        config.fail && config.fail(ex);
      })
      .then(res => {
        config.success && config.success(res);
      });
  } else {
    Object.assign(config, { url: "https://..." });
    return wx.request(config);
  }
};
// let fetch = function(config) {
//   console.log(config);
//   if (process.env._ENV == "h5") {
//     return new Promise((resolve, reject) => {
//       axios(config)
//         .catch(ex => {
//           console.log("请求错误", ex);
//           reject(ex);
//         })
//         .then(
//           res => {
//             resolve(res);
//           },
//           err => {
//             console.log("请求错误1！", err);
//             reject(err);
//           }
//         );
//     });
//   } else {
//     return new Promise((resolve, reject) => {
//       const success = res => {
//         resolve(res);
//       };
//       const fail = err => {
//         console.log(err);
//         reject(err);
//       };
//       config = Object.assign(config, { success, fail, url: `` });
//       wx.request(config);
//     });
//   }
// };

export function test(config) {
  // return fetch(config);
  return http(config);
}
>>>>>>> 5eb31341db85e7e77f763aeee07210b3de5279d2
