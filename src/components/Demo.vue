<template>
    <div class="demo">
        <h2>{{component.__sourceCodeTitle}}</h2>
        <div class="demo-component">
            <component :is="component" />
        </div>
        <div class="demo-actions">
            <div @click="toggleCode" v-if="codeVisible">隐藏代码</div>
            <div @click="toggleCode" v-else>查看代码</div>
        </div>
        <div class="demo-code" v-if="codeVisible">
            <pre class="language-html" v-html="html" />
        </div>
    </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
import 'prismjs';
import '../assets/style/prism.css';
import { computed, ref } from 'vue';
const Prism = (window as any).Prism;
export default {
    components:{ Button },
    props:{ 
        component: Object
    },
    setup(props){
        const html = computed(() => {
            return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html')
        })
        const toggleCode = () => codeVisible.value = !codeVisible.value
        const codeVisible = ref(false)
        return { Prism,html,codeVisible,toggleCode }
    }
}
</script>

<style lang="scss" scoped>
    $border-color: #d9d9d9;
    .demo {
        border: 1px solid $border-color;
        margin: 16px 0 32px;
        &:hover {
            box-shadow: 0 0 8px 0 rgba(232, 237, 250, .6), 0 2px 4px 0 rgba(232, 237, 250, .5);
        }
        >h2 {
            font-size: 20px;
            padding: 8px 16px;
            border-bottom: 1px solid $border-color;
        }
        &-component {
            padding: 16px;
        }
        &-actions {
            padding: 8px 16px;
            border-top: 1px dashed $border-color;
            cursor: pointer;
            text-align: center;
            color: #999;
            &:hover {
                color: #4d86af;
                background-color: #f9fafc;
            }
        }
        &-code {
            padding: 16px;
            border-top: 1px dashed $border-color;
            overflow-x: auto;
            >pre {
                line-height: 1.2;
                font-family: Consolas, 'Courier New', Courier, monospace;
                margin: 0;
            }
        }
    }
</style>