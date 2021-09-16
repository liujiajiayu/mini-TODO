import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';

import 'vfonts/Lato.css'

// 等宽字体
import 'vfonts/FiraCode.css'

//通用字体
import 'vfonts/FiraCode.css'

createApp(App).use(router).use(store).mount('#app')