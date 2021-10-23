<template>
    <div>
        <h1>Dialog 组件示例</h1>
        <div class="grey">
            <h2>何时使用</h2>
            <ol>
                <li>模拟对话框。</li>
                <li>需要用户<span>处理事务，但不跳转页面</span>以致打断工作流程时，可以使用 Dialog 在当前页面正中打开一个浮层，承载相应的操作。</li>
            </ol>
        </div>
    </div>
    <div class="code grey">
        <h2>代码演示</h2>
        <div>
            <Demo :component="Dialog1Demo" />
            <Demo :component="Dialog2Demo" />
        </div>
    </div>
</template>

<script lang="ts">
import Demo from './Demo.vue';
import Dialog1Demo from './Dialog1.demo.vue';
import Dialog2Demo from './Dialog2.demo.vue';
export default {
    components: { Demo },
    setup(){
        return { Dialog1Demo,Dialog2Demo }
    },
}
</script>

<style lang="scss" scoped>
    $border-color: #d9d9d9;
    .demo{
        border: 1px solid $border-color;
    }
    .code{
        margin-bottom: 10px;
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
    span{
        color: red;
    }
</style>