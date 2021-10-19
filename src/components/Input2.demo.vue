<demo>
支持密码类型
</demo>

<template>
  <Input placeholder="请输入密码" type="password" v-model:value="password"/>
</template>

<script lang="ts">
import Input from '../lib/Input.vue';

export default {
  components: {Input},
};
</script>
