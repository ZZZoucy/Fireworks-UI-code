<template>
    <div>
        <h1>Button 组件示例</h1>
        <div class="grey">
            <h2>何时使用</h2>
            <ol>
                <li>按钮用于<span>开始一个即时操作</span>。</li>
                <li>标记了一个（或封装一组）操作命令，<span>响应用户点击行为，触发相应的业务逻辑</span>。</li>
            </ol>
        </div>
        <div class="code grey">
            <h2>代码演示</h2>
            <div>
                <Demo :component="Button1Demo" />
                <Demo :component="Button2Demo" />
                <Demo :component="Button3Demo" />
                <Demo :component="Button4Demo" />
                <Demo :component="Button5Demo" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Demo from './Demo.vue';
import Button1Demo from './Button1.demo.vue';
import Button2Demo from './Button2.demo.vue';
import Button3Demo from './Button3.demo.vue';
import Button4Demo from './Button4.demo.vue';
import Button5Demo from './Button5.demo.vue';
export default {
    components:{ Demo },
    setup(){
        return { Button1Demo,Button2Demo,Button3Demo,Button4Demo,Button5Demo }
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