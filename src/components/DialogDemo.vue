<template>
    <div>
        DialogDemo 
    </div>
    <h1>示例1</h1>
    <Button @click="toggle">toggle</Button>
    <Dialog v-model:visible="x" :closeOnClickOverlay="false"
            :ok="f1" :cancel="f2">
        <template v-slot:content>
            <h1>hi</h1>
            <h1>hi2</h1>
        </template>
        <template v-slot:title>
            <strong>加粗的标题</strong>
        </template>
    </Dialog>
    <h1>示例2</h1>
    <Button @click="showDialog">show</Button>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import { ref,h } from 'vue';
import {openDialog} from '../lib/openDialog'
export default {
    components: { Dialog ,Button },
    setup(){
        const x = ref(false)
        const toggle = () => {
            x.value = !x.value
        }
        const f1 = () => {
            console.log('1')
            return false
        }
        const f2 = () => {
            console.log('2')
        }
        const showDialog = () => {
            openDialog({
                title: h('strong',{},'标题'),
                content: '你好',
                ok(){console.log('ok')},
                cancel(){console.log('cancel')}
            })
        }
        return { x, toggle, f1, f2, showDialog }
    },
}
</script>