<template>
  <textarea
    class="r-textarea"
    v-model="model"
    :placeholder="placeholder"
    :disabled="disabled"
    :readonly="readonly"
    :rows="rows"
    :cols="cols"
  />
</template>
<script lang="ts">
import { computed, defineComponent, PropType, WritableComputedRef } from "vue";
/**
 * @displayName Textarea 文本框
 */
export default defineComponent({
  name: "r-textarea",
  props: {
    /**
     * 文本框的值
     * @model
     */
    modelValue: {
      type: [String, Number, Array] as PropType<string | number | string[]>,
    },
    /** 占位 */
    placeholder: { type: String },
    /** 是否禁用 */
    disabled: { type: Boolean, default: false },
    /** 是否只读 */
    readonly: { type: Boolean, default: false },
    /** 可见行数 */
    rows: { type: Number },
    /** 可见列数 */
    cols: { type: Number },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const model: WritableComputedRef<string | number | string[]> = computed({
      get() {
        return props.modelValue;
      },
      set(val) {
        emit("update:modelValue", val);
      },
    });
    return { model };
  },
});
</script>
<style lang="stylus">
@import '../../css/variables.styl'

.r-textarea {
  padding $common-padding
  border $common-border
  transition 0.3s
  font-size 16px

  &:focus {
    outline none
    border-color var(--color-primary-7)

    &:not(:read-only) {
      box-shadow $common-shadow
    }
  }

  &:disabled {
    background var(--color-gray-2)
  }
}
</style>
