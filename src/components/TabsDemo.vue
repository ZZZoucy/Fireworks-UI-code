<template>
    <div>
        <h1>Tabs 组件示例</h1>
    </div>
    <div class="grey">
        <h2>何时使用</h2>
        <ol>
            <li><span>选项卡切换</span>。</li>
            <li>提供平级的区域将大块内容进行收纳和展现，保持界面整洁。</li>
        </ol>
    </div>
    <div class="code grey">
        <h2>代码演示</h2>
        <div>
            <Demo :component="Tabs1Demo" />
            <Demo :component="Tabs2Demo" />
        </div>
    </div>
</template>

<script lang="ts">
import Demo from './Demo.vue'
import Tabs1Demo from './Tabs1.demo.vue'
import Tabs2Demo from './Tabs2.demo.vue'
export default {
    components:{ Demo },
    setup(){
        return { Tabs1Demo,Tabs2Demo }
    }
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