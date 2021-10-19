<template>
    <div>
        <div>
            <h1>Switch 组件示例 </h1>
        </div>
        <div class="grey">
            <h2>何时使用</h2>
            <p>需要表示<span>开关状态/两种状态</span>之间的切换时。</p>
        </div>
        <div class="code grey">
            <h2>代码演示</h2>
            <div>
                <h3>一、最简单的用法</h3>
                <Demo :component="Switch1Demo" />
            </div>
            <div>
                <h3>二、Switch 失效状态</h3>
                <Demo :component="Switch2Demo" />
            </div>
            <div>
                <h3>三、加载中</h3>
                <Demo :component="Switch3Demo" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Switch1Demo from './Switch1.demo.vue';
import Switch2Demo from './Switch2.demo.vue';
import Switch3Demo from './Switch3.demo.vue';
import Demo from './Demo.vue';
export default {
    components:{ Demo },
    setup(){
        return { Switch1Demo,Switch2Demo,Switch3Demo }
    }
}
</script>

<style lang="scss" scoped>
    $border-color: #d9d9d9;
    span{
        color: red;
    }
    .grey{
        color: #5a5860;;
    }
    h1,p{
        margin-bottom: 30px;
    }
    h2{
        margin-bottom: 10px;
    }
    .code{
        margin-bottom: 10px;
    }
    .demo {
        border: 1px solid $border-color;
        border-radius: 8px;
        margin: 16px 0 32px;
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
        }
        &-code {
            padding: 8px 16px;
            border-top: 1px dashed $border-color;
            >pre {
                line-height: 1.1;
                font-family: Consolas, 'Courier New', Courier, monospace;
                margin: 0;
            }
        }
    }
</style>