// import { pages } from '../app.json';

let routes = new Array;

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
        path: '',
        redirect: '/index'
    },
    {
        path: '/index',
        component: () => import('@pages/index')
    },
    {
        path: '/search',
        component: () => import('@pages/search')
    },
    {
        path: '/goods-detail',
        component: () => import('@pages/goods-detail')
    },
    {
        path: '/cart',
        component: () => import('@pages/cart')
    },
    {
        path: '/mine',
        component: () => import('@pages/mine')
    },
    {
        path: '/cashier',
        component: () => import('@pages/cashier')
    },
    {
        path: '/login',
        component: () => import('@pages/login')
    },
    {
        path: '/order',
        component: () => import('@pages/order')
    },
    {
        path: '/recharge',
        component: () => import('@pages/recharge')
    },
    {
        path: '/register',
        component: () => import('@pages/register')
    },
]