import Vue from 'vue';
import myToast from './toast.vue';

const MyToastConstructor = Vue.extend(myToast);


let toast = (msg) => {
    if (!window.toastInstance) {
        window.toastInstance = new MyToastConstructor({
            el: document.createElement('div'),
            data: {msg}
        });
        document.body.appendChild(toastInstance.$el);
    } else {
        toastInstance.$data.msg = msg;
    }
};


export default toast;