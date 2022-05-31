<template>
  <button :class="btnClasses" :disabled="disabled">
    <span class="r-button__icon" v-if="$slots.icon">
      <!-- @slot 图标插槽-->
      <slot name="icon" />
    </span>
    <!-- @slot 按钮的内容 -->
    <slot />
  </button>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IColor } from "../../utils/types";
import { IButtonType } from "./types";
/**
 * @displayName 按钮 Button
 */

export default defineComponent({
  name: "r-button",
  props: {
    /**
     * 按钮的类型
     * @values primary,normal,outline,text
     */
    type: { type: String as PropType<IButtonType>, default: "normal" },
    /** 是否为扁平按钮 */
    flat: { type: Boolean, default: false },
    /** 按钮的颜色，详见 [色彩](/basic/color.html)。*/
    color: { type: String as PropType<IColor>, default: "light" },
    /** 是否禁用 */
    disabled: { type: Boolean, default: false },
  },
  setup(props, { slots }) {
    const btnClasses = {
      "r-button": true,
      "r-flat": props.flat || props.type === "text",
      [`r-${props.type}`]: true,
      [`r-color-${props.color}`]: true,
      "r-icon-btn": !slots.default && slots.icon,
    };

    return { btnClasses };
  },
});
</script>
<style lang="stylus">
@import "./style.styl"
</style>
