<template>
    <h1>Tabs 示例</h1>
    <Demo :component="Tabs1Demo" />
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
</style>