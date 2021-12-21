<template>
    <div class="layout">
        <Topnav toggleMenuButtonVisible class="nav" />
        <div class="content">
            <aside v-if="asideVisible">
                <h3>文档</h3>
                <ol>
                    <li>
                        <router-link to="/doc/intro">介绍</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/install">安装</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/get-started">开始使用</router-link>
                    </li>
                </ol>
                <h3>组件列表</h3>
                <ol>
                    <li><router-link to="/doc/switch">Switch 组件</router-link></li>
                    <li><router-link to="/doc/button">Button 组件</router-link></li>
                    <li><router-link to="/doc/dialog">Dialog 组件</router-link></li>
                    <li><router-link to="/doc/tabs">Tabs 组件</router-link></li>
                    <li><router-link to="/doc/input">Input 组件</router-link></li>
                    <li><router-link to="/doc/radio">Radio 组件</router-link></li>
                    <li><router-link to="/doc/update">更多组件</router-link></li>
                </ol>
                <h3>其他项目</h3>
                <ol>
                    <li><router-link to="/doc/blog">我的博客</router-link></li>
                    <li><router-link to="/doc/bookkeeping">学学记账</router-link></li>
                    <li><router-link to="/doc/notes">Daily-notes</router-link></li>
                    <li><router-link to="/doc/daping">大屏可视化项目</router-link></li>
                </ol>
            </aside>
            <main>
                <router-view />
            </main>
        </div>
    </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
import { Ref, inject } from "vue";

export default {
    components: { Topnav },
    setup() {
        const asideVisible = inject<Ref<boolean>>("asideVisible"); // get
        return { asideVisible };
    },
};
</script>

<style lang="scss" scoped>
$aside-index: 10;
$lightbgc: #fff9f9;
$deepbgc: #e18ca1;
$text: #ae82aa;
.layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
    > .nav {
        /* 高度变化时不收缩 */
        flex-shrink: 0;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
    }
    > .content {
        display: flex;
        padding-top: 60px;
        padding-left: 265px;
        main {
            height: 100vh;
            overflow: auto;
            flex-grow: 1;
            padding: 60px;
        }
        @media (max-width: 500px) {
            padding-left: 0;
            main {
                height: 90vh;
                overflow: auto;
                /* 高度变化时,占据剩余空间 */
                flex-grow: 1;
                padding: 32px;
                margin-top: 2px;
            }
        }

        aside {
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0px;
            width: 256px;
            height: auto;
            margin-top: 62px;
            padding-bottom: 32px;
            background: #fff;
            box-shadow: 4px 0 4px rgba(#333, 0.1);
            z-index: 1;
            transition: all 0.4s cubic-bezier(0.68, 0.18, 0.53, 0.18) 0.1s;
            overflow: hidden scroll;
            > h3 {
                font-size: 22px;
                margin-bottom: 4px;
                margin-top: 16px;
                padding: 0 16px;
                color: #5a5860;
            }
            > ol {
                line-height: 40px;
                > li {
                    > a {
                        position: relative;
                        /* height: 40px; */
                        color: $text;
                        display: block;
                        padding: 4px 32px;
                        text-decoration: none;
                        &:hover {
                            /* color: #fff; */
                            background: $lightbgc;
                            border-bottom: none;
                        }
                    }
                    .router-link-active {
                        background: $lightbgc;
                        /* color: #fff; */
                        border-right: 3px solid $deepbgc;
                        @media (min-width: 500px) {
                            border-right: none;
                            &::after {
                                content: "";
                                display: block;
                                animation: bdrolate 0.8s;
                                position: absolute;
                                top: 0;
                                right: 0;
                                width: 3px;
                                height: 48px;
                                background-color: $deepbgc;
                            }
                        }
                    }
                }
            }
            @keyframes bdrolate {
                0% {
                    transform: rotateX(90deg);
                }
                100% {
                    transform: rotateX(0deg);
                }
            }
        }
    }
}
</style>
