<template>
    <div>
        <div>
            <h1>Radio 组件示例 </h1>
        </div>
        <div class="grey">
            <h2>何时使用</h2>
            <ol>
                <li>用于在<span>多个备选项中选中单个状态</span>。</li>
                <li>和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。</li>
            </ol>
        </div>
        <div class="code grey">
            <h2>代码演示</h2>
            <div>
                <Demo :component="Radio1Demo"/>
                <Demo :component="Radio2Demo"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Radio1Demo from './Radio.demo/Radio1.demo.vue';
import Radio2Demo from './Radio.demo/Radio2.demo.vue';
import Demo from './Demo.vue';
export default {
    components:{ Demo },
    setup(){
        return { Radio1Demo,Radio2Demo }
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