import * as VueRouter from "vue-router";
import Main_v from "../views/main.vue";
import Archive_v from "../views/Archive.vue"
export default VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),//定义路由
    routes: [
        {
            path: "/",
            name: "main",
            component: Main_v,
        },
        {
            path: "/Archive",
            name: "Archive",
            component: Archive_v,
        }
    ]
})