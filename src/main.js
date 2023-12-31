import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import routers from './router/index.js';

// 공통스타일
import ResetStyle from '@/assets/css/reset.css';
import CommonStyle from '@/assets/css/common.css';

// 공통 js
import CommonJS from '@/assets/js/common.js';

const app = createApp(App)
app.config.globalProperties.$axios = axios
app.use(routers)
app.mount('#app')
