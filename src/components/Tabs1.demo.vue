<demo>
常规使用
</demo>

<template>
<Tabs v-model:selected="x">
  <Tab title="早上">早上</Tab>
  <Tab title="中午">中午</Tab>
  <Tab title="晚上">晚上</Tab>
</Tabs>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue';
import Tab from '../lib/Tab.vue'
import { ref } from 'vue';
export default {
  components:{ Tabs, Tab },
  setup(){
    const x = ref('早上')
    return { x }
  }
}
</script>