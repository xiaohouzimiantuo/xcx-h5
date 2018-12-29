import Vue from 'vue';
import myLoading from './loading.vue';

const MyLoadingConstructor = Vue.extend(myLoading);

let loading = new Object;

loading.start = () => {
    if (!window.loadingInstance) {
        window.loadingInstance = new MyLoadingConstructor({
            el: document.createElement('div')
        });
        document.body.appendChild(loadingInstance.$el);
    } else {
        loadingInstance.$data.visible = true;
    }
};

loading.stop = () => {
    loadingInstance.$data.visible = false;
};

export default loading;