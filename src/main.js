import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';

import 'vfonts/Lato.css'

// 等宽字体
import 'vfonts/FiraCode.css'

//通用字体
import 'vfonts/FiraCode.css'

import { registerSW } from 'virtual:pwa-register'

const updateSW = registerSW({ //注册service worker
    onNeedRefresh() {
        // show a prompt to user
    },
    onOfflineReady() {
        // show a ready to work offline to user
    },
})

createApp(App).use(router).use(store).mount('#app')