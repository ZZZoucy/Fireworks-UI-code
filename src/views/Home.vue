<template>
    <div>
        <div class="TopnavAndBanner">
            <Topnav/>
            <div class="banner">
                <h1>Fireworks UI</h1>
                <h2>一个面向学习者的 UI 框架</h2>
                <p class="actions">
                    <a href="https://github.com">Github</a>
                    <router-link to="/doc">开始</router-link>
                </p>
            </div>
        </div>
    </div>
    <div class="features">
        <ul>
            <li>
                <svg>
                    <use xlink:href="#icon-Vue"></use>
                </svg>
                <h3>基于 Vue 3</h3>
                <p>使用了 Vue 3 Composition API</p>
            </li>
            <li>
                <svg>
                    <use xlink:href="#icon-ts"></use>
                </svg>
                <h3>基于 TypeScript </h3>
                <p>源代码采用 TypeScript 书写</p>
            </li>
            <li>
                <svg>
                    <use xlink:href="#icon-light"></use>
                </svg>
                <h3>代码易读</h3>
                <p>每个组件的源代码都极其简洁</p>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default {
    components:{Topnav}
}
</script>

<style lang="scss" scoped>
$pink: #ed96ac;
$border-radius: 16px;
$color: #5a5860;
.TopnavAndBanner{
    background: rgb(255,200,202);
    background: linear-gradient(38deg, rgba(255,200,202,1) 0%, rgba(255,192,196,1) 20%, rgba(239,219,224,1) 40%, rgba(221,235,242,1) 60%, rgba(206,246,255,1) 80%, rgba(197,253,255,1) 100%);       
    clip-path: ellipse(80% 60% at 50% 40%);
}
.features {
    margin: 64px auto;
    padding: 0 16px;
    @media (min-width: 800px) {
        width: 800px;
        >ul{
            >li{
                width: 50%;
            }
        }
    }
    @media (min-width: 1200px) {
        width: 1200px;
        >ul{
            >li{
                width: 33.3333%;
            }
        }
    }
    >ul {
        display: flex;
        flex-wrap: wrap;
        >li {
            margin: 16px 0;
            display: grid;
            justify-content: start;
            align-content: space-between;
            grid-template-areas:
                "icon title"
                "icon text";
            grid-template-columns: 80px auto;
            grid-template-rows: 1fr auto;
            >svg {
                grid-area: icon;
                width: 64px;
                height: 64px;
            }
            >h3 {
                grid-area: title;
                font-size: 28px;
            }
            >p {
                grid-area: text;
            }
        }
    }
}
.banner{
    color: $color;
    padding: 130px 0 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    > .actions{
        padding: 8px 0;
        a {
            margin: 0 8px;
            background: $pink;
            color: white;
            display: inline-block;
            $h: 24px;
            border-radius: $border-radius;
            padding: 8px 24px;
            &:hover{
                text-decoration: none;
                box-shadow: 0 2px;
            }
        }
    }
}
</style>