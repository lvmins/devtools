import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            title: "首页"
        }
    },
    {
        path: "/JsonFormat",
        name: "JsonFormat",
        meta: {
            title: "JSON格式化"
        },
        component: () =>
            import ("../views/unauth/JsonFormat.vue")
    },
    {
        path: "/QRcodeCreate",
        name: "QRcodeCreate",
        meta: {
            title: "二维码生成"
        },
        component: () =>
            import ("../views/unauth/QRcodeCreate.vue")
    },
    {
        path: "/ColorTransfer",
        name: "ColorTransfer",
        meta: {
            title: "颜色代码转换"
        },
        component: () =>
            import ("../views/unauth/ColorTransfer.vue")
    },
    {
        path: "/DoglickingDiary",
        name: "DoglickingDiary",
        meta: {
            title: "舔狗日记"
        },
        component: () =>
            import ("../views/unauth/DoglickingDiary.vue")
    }

];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;