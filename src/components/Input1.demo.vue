<demo>
常规使用
</demo>

<template>
  <Input placeholder="请输入内容" type="text" v-model:value="text"/>
</template>

<script lang="ts">
import Input from '../lib/Input.vue';

export default {
  components: {Input},
};
</script>
