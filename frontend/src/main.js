import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import './assets/scss/main.scss';

Vue.config.productionTip = false;

const uagent = navigator.userAgent.toLowerCase();
// evita uso fora de um dispositivo mobile
if (uagent.search('iphone') > -1 || uagent.search('android') > -1) {
  new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
  }).$mount('#app');
}
