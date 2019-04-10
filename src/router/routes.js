// import { pages } from '../app.json';

let routes = new Array();

// pages.forEach(path => {
//     let item = new Object;
//     const str = '@/' + path.slice(0, -5);
//     console.log(str);
//     const component = '';
//     // const component = () => import(str);

//     // path = path.slice(0, -5).slice(5);
//     item = {
//         component: () => import('@pages/index'),
//         path
//     }
//     // routes.push(item);
// });

// console.log(routes);

export default [
  {
    path: "",
    redirect: "/shop"
  },
  {
    path: "/shop",
    component: () => import("@pages/shop")
  },
  {
    path: "/search",
    component: () => import("@pages/search")
  },
  {
    path: "/goods-detail",
    component: () => import("@pages/goods-detail")
  },
  {
    path: "/cart",
    component: () => import("@pages/cart")
  },
  {
    path: "/mine",
    component: () => import("@pages/mine")
  },
  {
    path: "/cashier",
    component: () => import("@pages/cashier")
  },
  {
    path: "/index",
    component: () => import("@pages/index")
  },
  {
    path: "/order",
    component: () => import("@pages/order")
  },
  {
    path: "/recharge",
    component: () => import("@pages/recharge")
  },
  {
    path: "/register",
    component: () => import("@pages/register")
  },
  {
    path: "/firm-order",
    component: () => import("@pages/firm-order")
  },
  {
    path: "/address",
    component: () => import("@pages/address")
  },
  {
    path: "/new-address",
    component: () => import("@pages/new-address")
  },
  {
    path: "/choose-address",
    component: () => import("@pages/choose-address")
  },
  {
    path: "/pay-result",
    component: () => import("@pages/pay-result")
  },
  {
    path: "/bank",
    component: () => import("@pages/bank")
  },
  {
    path: "/add-bank",
    component: () => import("@pages/add-bank")
  },
  {
    path: "/cash",
    component: () => import("@pages/cash")
  },
  {
    path: "/invoice",
    component: () => import("@pages/invoice")
  },
  {
    path: "/rise",
    component: () => import("@pages/rise")
  },
  {
    path: "/draw-bill",
    component: () => import("@pages/draw-bill")
  },
  {
    path: "/more",
    component: () => import("@pages/more")
  }
];
