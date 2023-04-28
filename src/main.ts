import App from './App.vue';
import router from '@/router';
import store from '@/store';
import i18n from './locales/index';
import 'amfe-flexible';
import 'vant/lib/index.css';
import '@/styles/index.less';

const app = createApp(App);

app.use(router);
app.use(store);
app.use(i18n);
app.mount('#app');
