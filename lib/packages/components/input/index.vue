<template>
  <span :class="classes">
    <span class="r-input__before" v-if="$slots.before">
      <!-- @slot 输入框前的插槽 -->
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
      @focus="onFocus"
      @blur="onBlur"
      @change="onChange"
      @compositionstart="onCompositionStart"
      @compositionend="onCompositionEnd"
      @compositionupdate="onCompositionUpdate"
      ref="inputRef"
    />
    <span class="r-input__after" v-if="$slots.after">
      <!-- @slot 输入框后的插槽 -->
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
  emits: {
    "update:modelValue": null,
    /**
     *  获得焦点时触发
     *
     *  @property {Event} event Event
     * */
    focus: (event: Event) => true,
    /**
     *  失去焦点时触发
     *
     *  @property {Event} event Event
     * */
    blur: (event: Event) => true,
    /**
     * 失去焦点并且内容改变触发
     *
     * @property { string | number } value 新的值
     * */
    change: (value: string | number) => true,
    /**
     * 输入时，内容改变则触发
     *
     *  @property { string | number } value 新的值
     * */
    input: (value: string | number) => true,
    /**
     * 利用 IME 开始输入时，[参见](https://developer.mozilla.org/zh-CN/docs/web/api/element/compositionstart_event)。
     *
     * @property {CompositionEvent} event Event
     */
    compositionstart: (event: CompositionEvent) => true,
    /**
     * 利用 IME 输入完毕时（选字上屏后），[参见](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/compositionend_event)。
     *
     * @property {CompositionEvent} event Event
     */
    compositionend: (event: CompositionEvent) => true,
    /**
     * 利用 IME 输入更新时，[参见](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/compositionupdate_event)。
     *
     * @property {CompositionEvent} event Event
     */
    compositionupdate: (event: CompositionEvent) => true,
  },
  setup(props, { emit, slots }) {
    const isFocus = ref(false);
    const inputRef = ref<InstanceType<typeof HTMLInputElement>>();

    const classes = computed(() => ({
      "r-input": true,
      "r-flat": props.flat,
      "r-slot-before": slots.before,
      "r-slot-after": slots.after,
      "r-disabled": props.disabled,
      "r-focus": isFocus.value && !props.readonly,
    }));

    const onInput = (e: InputEvent) => {
      emit("update:modelValue", (e.target as HTMLInputElement).value);
      emit("input", (e.target as HTMLInputElement).value);
    };

    const onFocus = (e: Event) => {
      isFocus.value = true;
      emit("focus", e);
    };

    const onBlur = (e: Event) => {
      isFocus.value = false;
      emit("blur", e);
    };

    const onChange = (e: Event) => {
      emit("change", (e.target as HTMLInputElement).value);
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
      isFocus.value = true;
      inputRef.value?.focus();
    }

    /**
     * 失去焦点
     *
     * @public
     */
    function blur() {
      isFocus.value = false;
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
      classes,
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
@import "./style.styl"
</style>
