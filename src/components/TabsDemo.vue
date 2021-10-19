<template>
    <div>
        <h1>Tabs 组件示例</h1>
    </div>
    <div class="grey">
        <h2>何时使用</h2>
        <p><span>选项卡切换</span>，提供平级的区域将大块内容进行收纳和展现，保持界面整洁。</p>
    </div>
    <div class="code grey">
        <h2>代码演示</h2>
        <div>
            <h3>一、最简单的用法</h3>
            <Demo :component="Tabs1Demo" />
        </div>
    </div>
</template>

<script lang="ts">
import Demo from './Demo.vue'
import Tabs1Demo from './Tabs1.demo.vue'
export default {
    components:{ Demo },
    setup(){
        return { Tabs1Demo }
    }
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