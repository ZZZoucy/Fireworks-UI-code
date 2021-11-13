<template>
    <div>
        <div>
            <h1>Switch 组件示例 </h1>
        </div>
        <div class="grey">
            <h2>何时使用</h2>
            <ol>
                <li>需要表示<span>开关状态/两种状态</span>之间的切换时。</li>
                <li>和 checkbox 的区别是，<span>切换 switch 会直接触发状态改变</span>，而 checkbox 一般用于状态标记，需要和提交操作配合。</li>
            </ol>
        </div>
        <div class="code grey">
            <h2>代码演示</h2>
            <div>
                <Demo :component="Switch1Demo" />
                <Demo :component="Switch2Demo" />
                <Demo :component="Switch3Demo" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Switch1Demo from './Switch.demo/Switch1.demo.vue';
import Switch2Demo from './Switch.demo/Switch2.demo.vue';
import Switch3Demo from './Switch.demo/Switch3.demo.vue';
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
    h1,p,h2,ol{
        margin-bottom: 30px;
    }
    li{
        list-style: circle;
        line-height: 35px;
        margin-left: 40px;
    }
    .code{
        margin-bottom: 10px;
    }
    .demo {
        border: 1px solid $border-color;
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