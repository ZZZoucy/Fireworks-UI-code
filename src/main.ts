import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import Frank from './components/Frank.vue';
import { createWebHashHistory, createRouter } from "vue-router";

const history = createWebHashHistory();
const router = createRouter({
    history:history,
    routes:[
        {path:'/',component:Frank}
    ]
});

const app = createApp(App);
app.use(router);
app.mount("#app");