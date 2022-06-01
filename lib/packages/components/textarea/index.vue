<template>
  <textarea
    class="r-textarea"
    v-model="model"
    :placeholder="placeholder"
    :disabled="disabled"
    :readonly="readonly"
    :rows="rows"
    :cols="cols"
    ref="inputRef"
  />
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  PropType,
  ref,
  WritableComputedRef,
} from "vue";
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
    rows: { type: Number, default: 5 },
    /** 可见列数 */
    cols: { type: Number, default: 20 },
  },
  emits: {
    "update:modelValue": null,
    /**
     *  获得焦点时触发
     *
     *  @property {Event} event Event
     * */
    focus: (e: Event) => true,
    /**
     *  失去焦点时触发
     *
     *  @property {Event} event Event
     * */
    blur: (e: Event) => true,
    /**
     * 失去焦点并且内容改变触发
     *
     * @property {string | number } value 新的值
     * */
    change: (e: string | number) => true,
    /**
     * 输入时，内容改变则触发
     *
     *  @property {string | number} value 新的值
     * */
    input: (e: string | number) => true,
    /**
     * 利用 IME 开始输入时，[参见](https://developer.mozilla.org/zh-CN/docs/web/api/element/compositionstart_event)。
     *
     * @property {CompositionEvent} event Event
     */
    compositionstart: (e: CompositionEvent) => true,
    /**
     * 利用 IME 输入完毕时（选字上屏后），[参见](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/compositionend_event)。
     *
     * @property {CompositionEvent} event Event
     */
    compositionend: (e: CompositionEvent) => true,
    /**
     * 利用 IME 输入更新时，[参见](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/compositionupdate_event)。
     *
     * @property {CompositionEvent} event Event
     */
    compositionupdate: (e: CompositionEvent) => true,
  },
  setup(props, { emit }) {
    const inputRef = ref<InstanceType<typeof HTMLTextAreaElement>>();

    const model: WritableComputedRef<string | number | string[]> = computed({
      get() {
        return props.modelValue;
      },
      set(val) {
        emit("update:modelValue", val);
      },
    });

    const onInput = (e: InputEvent) => {
      emit("input", (e.target as HTMLTextAreaElement).value);
    };

    const onFocus = (e: Event) => {
      emit("focus", e);
    };

    const onBlur = (e: Event) => {
      emit("blur", e);
    };

    const onChange = (e: Event) => {
      emit("change", (e.target as HTMLTextAreaElement).value);
    };

    const onCompositionStart = (e: CompositionEvent) => {
      emit("compositionstart", e);
    };

    const onCompositionEnd = (e: CompositionEvent) => {
      emit("compositionend", e);
    };

    const onCompositionUpdate = (e: CompositionEvent) => {
      emit("compositionupdate", e);
    };

    /**
     * 获取焦点
     *
     * @public
     */
    function focus() {
      inputRef.value?.focus();
    }

    /**
     * 失去焦点
     *
     * @public
     */
    function blur() {
      inputRef.value?.blur();
    }

    /**
     * 全选文字内容
     *
     * @public
     */
    function select() {
      inputRef.value?.select();
    }

    return {
      inputRef,
      model,
      onInput,
      onFocus,
      onBlur,
      onChange,
      onCompositionStart,
      onCompositionEnd,
      onCompositionUpdate,
      focus,
      blur,
      select,
    };
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
