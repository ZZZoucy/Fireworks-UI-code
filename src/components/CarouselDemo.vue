<template>
    <h1>Carousel 示例</h1>
    <Demo :component="Carousel1Demo" />
</template>

<script lang="ts">
import Demo from './Demo.vue';
import Carousel1Demo from './Carousel1.demo.vue';
export default {
    components: { Demo },
    setup(){
        return { Carousel1Demo }
    },
}
</script>

<style lang="scss">

</style>