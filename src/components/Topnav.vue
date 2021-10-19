<template>
    <div class="topnav">
        <router-link to="/" class="logo">
            <svg class="icon">
                <use xlink:href="#icon-yanhua"></use>
            </svg>
        </router-link>
        <ul class="menu">
            <li>
                <router-link to="/doc">文档</router-link>
            </li>
        </ul>
        <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleAside">
            <use xlink:href="#icon-menu"></use>
        </svg>
    </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'
export default {
    props:{
        toggleMenuButtonVisible:{
            type: Boolean,
            default: false
        }
    },
    setup(){
        const asideVisible = inject<Ref<boolean>>('asideVisible') // get
        const toggleAside = ()=>{
            asideVisible.value = !asideVisible.value;
        }
        return {toggleAside}
    }
}
</script>

<style lang="scss" scoped>
$color: #5a5860;
;
.topnav {
    color: $color;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 5px 5px rgba(#333, 0.1);
    display: flex;
    padding: 8px;
    z-index: 10;
    color: $color;
    justify-content: center;
    align-items: center;
    > .logo {
        max-width: 6em;
        margin-right: auto;
        > a {
            text-decoration: none;
        }
        svg {
            width: 32px;
            height: 32px;
            margin: 6px 1em;
        }
    }
    > .menu {
        display: flex;
        flex-direction: row;
        white-space: nowrap;
        flex-wrap: nowrap;
        > li {
            margin: 10px 1em;
            > a {
                text-decoration: none;
                &:hover {
                    border-bottom: none;
                }
            }
        }
    }
    > .toggleAside {
        display: none;
        width: 32px;
        height: 32px;
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
        overflow: hidden;
    }
    @media (max-width: 500px) {
        > .menu {
            display: none;
        }
        > .logo {
            margin: 0 auto;
        }
        > .toggleAside {
            display: inline-block;
        }
    }
}
</style> 