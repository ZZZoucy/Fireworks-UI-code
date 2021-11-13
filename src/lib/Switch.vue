<template>
    <button :disabled="loading ? true : disabled" class="gulu-switch"  @click="toggle" :class="{'gulu-checked':value}">
        <span><span class="gulu-switch-loading" v-if="loading"></span></span>
    </button>
</template>

<script lang="ts">
export default {
    props:{
        value:Boolean,
        disabled:{
            type: Boolean,
            default: false,
        },
        loading: {
            type: Boolean,
            default: false,
        },
    },
    setup(props,context){
        // props.value 返回 true or false 表示 开关的 开和关 状态
        const toggle = () => {
            context.emit('update:value',!props.value)
        }
        return {toggle};
    }
}
</script>

<style lang="scss">
    $h: 22px;
    $h2: $h - 4px;
    .gulu-switch{
        position: relative;
        display: inline-block;
        width: $h * 2;
        height: $h;
        line-height: $h;
        vertical-align: middle;
        border: none;
        padding: 0;
        margin: 5px;
        background-color: #bfbfbf; //#1890ff
        border-radius: $h/2;
        outline: none;
        cursor: pointer;
        transition: all 0.25s ease-in-out;
        &[disabled] {
            pointer-events: none;
        }
        &:focus {
            box-shadow: 0 0 5px rgba(191, 191, 191, 0.5);
            &:hover {
                box-shadow: none;
            }
        }
        > span {
            position: absolute;
            top: 2px;
            left: 2px;
            width: $h2;
            height: $h2;
            border: none;
            border-radius: $h/2;
            background-color: #fff;
            transition: all 0.25s ease-in-out;
            > .gulu-switch-loading {
                width: 14px;
                height: 14px;
                display: inline-block;
                // margin-right: 4px;
                border-radius: 8px;
                border-color: lighten(#8486ab, 20%) lighten(#8486ab, 10%) #8486ab
                    transparent;
                border-style: solid;
                border-width: 2px;
                animation: gulu-spin 1s infinite linear;
            }
        }
        &:active {
            > span {
                width: $h + 2px;
            }
        }
        &.gulu-checked {
            background-color: #1890ff;
            > span {
                left: calc(100% - #{$h2} - 2px);
            }
            &:focus {
                box-shadow: 0 0 5px rgba(24, 144, 255, 0.5);
                &:hover {
                    box-shadow: none;
                }
            }
            &:active {
                > span {
                    width: $h + 2px;
                    margin-left: -6px;
                }
            }
        }

        @keyframes gulu-spin {
            0%{
                transform: rotate(0deg);
            }
            100%{
                transform: rotate(360deg);
            }
        }
    }

</style>