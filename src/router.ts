import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import SwitchDemo from "./components/SwitchDemo.vue";
import ButtonDemo from "./components/ButtonDemo.vue";
import DialogDemo from "./components/DialogDemo.vue";
import InputDemo from "./components/InputDemo.vue";
import TabsDemo from "./components/TabsDemo.vue";
import RadioDemo from "./components/RadioDemo.vue";
import UpdateDemo from "./components/UpdateDemo.vue";
import { h } from "vue";
import Markdown from "./components/Markdown.vue";
import intro from "./markdown/intro.md";
import getStarted from "./markdown/get-started.md";
import install from "./markdown/install.md";
import blog from "./markdown/blog.md";
import bookkeeping from "./markdown/bookkeeping.md";
import notes from "./markdown/notes.md";
import daping from "./markdown/daping.md";

const history = createWebHashHistory();
const md = (string) => h(Markdown, { content: string, key: string });
export const router = createRouter({
    history: history,
    routes: [
        { path: "/", component: Home },
        {
            path: "/doc",
            component: Doc,
            children: [
                { path: "", redirect: "/doc/intro" },
                { path: "intro", component: md(intro) },
                { path: "get-started", component: md(getStarted) },
                { path: "install", component: md(install) },
                { path: "blog", component: md(blog) },
                { path: "bookkeeping", component: md(bookkeeping) },
                { path: "notes", component: md(notes) },
                { path: "daping", component: md(daping) },
                { path: "switch", component: SwitchDemo },
                { path: "button", component: ButtonDemo },
                { path: "dialog", component: DialogDemo },
                { path: "tabs", component: TabsDemo },
                { path: "input", component: InputDemo },
                { path: "radio", component: RadioDemo },
                { path: "update", component: UpdateDemo },
            ],
        },
    ],
});
router.afterEach(() => {});
