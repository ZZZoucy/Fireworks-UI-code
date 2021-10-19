<template>
    <div>
        <h1>Dialog 组件示例</h1>
        <div class="grey">
            <h2>何时使用</h2>
            <p>需要用户<span>处理事务，但不跳转页面</span>以致打断工作流程时，可以使用 Dialog 在当前页面正中打开一个浮层，承载相应的操作。</p>
        </div>
    </div>
    <div class="code grey">
        <h2>代码演示</h2>
        <div>
            <h3>一、最简单的用法</h3>
            <Demo :component="Dialog1Demo" />
        </div>
        <div>
            <h3>二、函数式调用对话框</h3>
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
    border-radius: 8px;
}
h1,p{
    margin-bottom: 30px;
}
.code{
    margin-bottom: 10px;
}
.grey{
    color: #5a5860;;
}
span{
    color: red;
}
h2{
    margin-bottom: 10px;
}
</style>