<template>
    <div>
        <h1>Input 组件示例</h1>
        <div class="grey">
            <h2>何时使用</h2>
            <p>通过鼠标或键盘输入内容，是最基础的表单域的包装，<span>需要用户输入表单域内容时</span>使用。</p>
        </div>
        <div class="code grey">
            <h2>代码演示</h2>
            <div>
                <h3>一、最简单的用法</h3>
                <Demo :component="Input1Demo" />
            </div>
            <div>
                <h3>二、支持密码类型</h3>
                <Demo :component="Input2Demo" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Demo from './Demo.vue';
import Input1Demo from './Input1.demo.vue';
import Input2Demo from './Input2.demo.vue';
export default {
    components: { Demo },
    setup(){
        return { Input1Demo,Input2Demo }
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