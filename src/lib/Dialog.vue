<template> 
    <template v-if="visible"> 
        <teleport to="body">
            <!-- 第一个 div 是用来做背景暗灰的效果的 -->
            <div class="gulu-dialog-overlay" @click="closeOnClickOverlay"></div>
            <!-- 第二个 div 是做对话框的 -->
            <div class="gulu-dialog-wrapper">
                <div class="gulu-dialog">
                    <header>
                        <slot name="title"/>
                        <span @click="close" class="gulu-dialog-close"></span>
                    </header>
                    <main>
                        <slot name="content"/>
                    </main>
                    <footer>
                        <Button level="main" @click="ok">OK</Button>
                        <Button @click="cancel">Cancel</Button>
                    </footer>
                </div>
            </div>
        </teleport>
    </template>
</template> 

<script lang="ts">
import Button from "./Button.vue"
export default {
    props:{
        visible:{
            type: Boolean,
            default: false
        },
        closeOnClickOverlay:{
            type: Boolean,
            default: true
        },
        ok:{
            type:Function
        },
        cancel:{
            type:Function
        },
    },
    components: { Button },
    setup(props,context){
        const close = () => {
            context.emit('update:visible',false)
        }
        const closeOnClickOverlay = () => {
            if(props.closeOnClickOverlay){
                close()
            }
        }
        const ok = () => {
            if(props.ok && props.ok() !== false){
                close()
            }
        }
        const cancel = () => {
            props.cancel?.()
            close()
        }
        return { close,closeOnClickOverlay,ok,cancel }
    }
}
</script>

<style lang="scss">
    $radius: 4px;
    $border-color: #d9d9d9;
    .gulu-dialog {
        background: white;
        border-radius: $radius;
        box-shadow: 0 0 3px fade_out(black, 0.5);
        min-width: 15em;
        max-width: 90%;
        &-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: fade_out(black, 0.5);
            z-index: 10;
        }
        &-wrapper {
            position: fixed;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: 11;
        }
        >header {
            padding: 12px 16px;
            border-bottom: 1px solid $border-color;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 20px;
        }
        >main {
            padding: 12px 16px;
            div{
                color: red;
            }
        }
        >footer {
            border-top: 1px solid $border-color;
            padding: 12px 16px;
            text-align: right;
        }
        &-close {
            position: relative;
            display: inline-block;
            width: 16px;
            height: 16px;
            cursor: pointer;
            &::before,
            &::after {
                content: '';
                position: absolute;
                height: 1px;
                background: black;
                width: 100%;
                top: 50%;
                left: 50%;
            }
            &::before {
                transform: translate(-50%, -50%) rotate(-45deg);
            }
            &::after {
                transform: translate(-50%, -50%) rotate(45deg);
            }
        }
    }
</style>