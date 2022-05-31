<template>
  <div class="r-badge">
    <!-- @slot 附加徽标的组件 -->
    <slot></slot>
    <label :class="classes">{{ text }}</label>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IColor } from "../../utils/types";
/**
 * @displayName 徽标 Badge
 */
export default defineComponent({
  name: "r-badge",
  props: {
    /**
     * 颜色，详见 [色彩](/basic/color.html)。
     */
    color: { type: String as PropType<IColor>, default: "primary" },
    /** 内容 */
    text: { type: String },
    outline: { type: Boolean, default: false },
  },
  computed: {
    classes() {
      return {
        ["r-badge__label"]: this.text,
        ["r-attach"]: this.$slots.default,
        ["r-badge__empty"]: !this.text,
        ["r-outline"]: this.outline,
        [`r-color-${this.color}`]: true,
      };
    },
  },
});
</script>
<style lang="stylus">
@import "./style.styl"
</style>
