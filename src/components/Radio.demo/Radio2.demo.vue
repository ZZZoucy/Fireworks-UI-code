<demo>
单选组合
</demo>

<template>
  <Radio label="A" v-model:value="labelVal">A</Radio>
  <Radio label="B" v-model:value="labelVal">B</Radio>
  <Radio label="C" v-model:value="labelVal">C</Radio>
  <Radio label="D" v-model:value="labelVal">D</Radio>
</template>
  
  <script lang="ts">
import { ref } from 'vue'
import Radio from "../../lib/Radio.vue"
import RadioGroup from "../../lib/RadioGroup.vue"
export default {
  components: {
    Radio,RadioGroup
  },
  setup() {
    const labelVal = ref('A')
    return { labelVal }
  }
}
</script>

<style lang="scss" scoped>
.picked {
  padding: 10px 0;
}
</style>
