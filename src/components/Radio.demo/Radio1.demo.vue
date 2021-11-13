<demo>
常规使用
</demo>

<template>
  <Radio label="Radio" v-model:value="labelVal">Radio</Radio>
</template>
  
  <script lang="ts">
import { ref } from 'vue'
import Radio from "../../lib/Radio.vue"
export default {
  components: {
    Radio,
  },
  setup() {
    const labelVal = ref('Radio')
    return { labelVal }
  }
}
</script>

<style lang="scss" scoped>
.picked {
  padding: 10px 0;
}
</style>
