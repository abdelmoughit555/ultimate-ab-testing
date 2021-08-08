require('./bootstrap');
import Vue from 'vue';
import router from './router';
import store from './store';
import App from './app.vue';

// Don't warn about using the dev version of Vue in development.
Vue.config.productionTip = process.env.NODE_ENV === 'production';
Vue.config.devtools = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');

/* setTimeout(function () {
    window.location.reload(1);
}, 5000); */
