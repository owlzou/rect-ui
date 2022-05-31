<template>
  <span :class="classes">
    <span class="r-input__before" v-if="$slots.before">
      <!-- @slot 输入框前图标插槽 -->
      <slot name="before" />
    </span>
    <input
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :value="modelValue"
      :type="password ? `password` : null"
      :autocomplete="autocomplete ? `on` : null"
      @input="onInput"
      @focus="onFocus(true)"
      @blur="onFocus(false)"
    />
    <span class="r-input__after" v-if="$slots.after">
      <!-- @slot 输入框后图标插槽 -->
      <slot name="after" />
    </span>
  </span>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from "vue";
/** @displayName 输入框 Input */
export default defineComponent({
  name: "r-input",
  props: {
    /**
     * 输入框的值
     * @model
     */
    modelValue: { type: String },
    /** 占位 */
    placeholder: { type: String },
    /** 是否禁用 */
    disabled: { type: Boolean, default: false },
    /** 是否只读 */
    readonly: { type: Boolean, default: false },
    /** 密码框 */
    password: { type: Boolean, default: false },
    /** 开启自动完成 */
    autocomplete: { type: Boolean },
    /** 扁平模式 */
    flat: { type: Boolean, default: false },
  },
  emits: ["update:modelValue"],
  setup(props, { emit, slots }) {
    const focus = ref(false);

    const classes = computed(() => ({
      "r-input": true,
      "r-flat": props.flat,
      "r-slot-before": slots.before,
      "r-slot-after": slots.after,
      "r-disabled": props.disabled,
      "r-focus": focus.value && !props.readonly,
    }));

    const onInput = (event: InputEvent) => {
      emit("update:modelValue", (event.target as HTMLInputElement).value);
    };

    const onFocus = (val) => (focus.value = val);

    return { classes, onInput, onFocus };
  },
});
</script>
<style lang="stylus">
@import '../../css/variables.styl'

.r-input {
    position relative
    border $common-border
    padding $common-padding
    display inline-flex
    align-items center
    height 20px
    transition 0.3s

    input {
        padding 0
        margin 0
        border none
        height 20px
        flex-grow 1
        font-size 16px
        width 100%

        &:focus {
            border none
            outline none
        }

        &:disabled {
            background var(--color-gray-2)
        }
    }

    &.r-focus {
        outline none
        border-color var(--color-primary-7)

        &:not(.r-flat) {
            box-shadow $common-shadow
        }
    }

    &.r-disabled {
        background var(--color-gray-2)
    }

    &.r-flat {
        border-top-color transparent
        border-right none
        border-left none

        &:focus {
            box-shadow none
        }
    }
}

/* * 图标居中 */
.r-input__before, .r-input__after {
    flex-shrink:0;
    .lucide {
        vertical-align middle
    }
}

.r-input__before {
    margin-right 8px
}

.r-input__after {
    margin-left 8px
}
</style>
