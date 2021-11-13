<demo>
确认对话框
</demo>

<template>
<div>
  <Button @click="showConfirm">Confirm</Button>
</div>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue';
import { openDialog } from '../../lib/openDialog'
import { ref,h } from 'vue';
export default {
  components:{ Button },
  setup(){
    const showConfirm = () => {
      openDialog({
        title: h('h3',{},'Do you Want to delete these items?'),
        content: h('div',{},'Some descriptions'),
        ok(){console.log('ok')},
        cancel(){console.log('cancel')}
      })
    }
    return { showConfirm }
  }
}
</script>
