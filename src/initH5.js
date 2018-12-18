import Vue from 'vue';
import router from './router';


// 使用小程序的方式
window.wx = new Object;
wx.navigateTo = ({url}) => {
    url = url.slice(6);
    const prefix = url.split('?')[0].slice(0, -5);
    const suffix = url.split('?')[1]? url.split('?')[1] : '';
    router.push(prefix + '?' + suffix);
}
wx.redirectTo = ({url}) => {
    url = url.slice(6);
    const prefix = url.split('?')[0].slice(0, -5);
    const suffix = url.split('?')[1]? url.split('?')[1] : '';
    router.replace(prefix + '?' +suffix);
}
wx.navigateBack = ({delta}) => {
    router.back(delta);
}


// 注册全局组件
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe).use(SwipeItem);