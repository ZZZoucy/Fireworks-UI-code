<template>
    <div>
        <h1>Button 组件示例</h1>
        <div class="grey">
            <h2>何时使用</h2>
            <p>标记了一个（或封装一组）操作命令，<span>响应用户点击行为，触发相应的业务逻辑</span>。</p>
        </div>
        <div class="code grey">
            <h2>代码演示</h2>
            <div>
                <h3>一、最简单的用法</h3>
                <Demo :component="Button1Demo" />
            </div>
            <div>
                <h3>二、不同按钮尺寸用法</h3>
                <Demo :component="Button2Demo" />
            </div>
            <div>
                <h3>三、不同按钮类型用法</h3>
                <Demo :component="Button3Demo" />
            </div>
            <div>
                <h3>四、按钮不可用状态</h3>
                <Demo :component="Button4Demo" />
            </div>
            <div>
                <h3>五、按钮加载中状态</h3>
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