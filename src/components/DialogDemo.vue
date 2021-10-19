<template>
    <h1>Dialog 示例</h1>
    <Demo :component="Dialog1Demo" />
    <Demo :component="Dialog2Demo" />
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
</style>