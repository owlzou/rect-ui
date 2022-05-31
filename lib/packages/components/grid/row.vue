<template>
  <div :class="classes">
    <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IJustifyContent, IAlignItems } from "./types";

export default defineComponent({
  name: "r-col",
  props: {
    /** 间隔 */
    space: { type: Number },
    /** 水平布局上的参数，详见 [justify-content](https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content) */
    justify: { type: String as PropType<IJustifyContent> },
    /** 详见 [align-items](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items)*/
    align: { type: String as PropType<IAlignItems> },
    /** 强制不换行 */
    nowrap: { type: Boolean, default: false },
  },
  computed: {
    classes() {
      return {
        "r-row": true,
        [`r-space-${this.space}`]: this.space,
        [`r-row-justify-${this.justify}`]: this.justify,
        [`r-row-align-${this.align}`]: this.align,
        [`r-row-nowrap`]: this.nowrap,
      };
    },
  },
});
</script>
<style lang="stylus">
.r-row {
  display flex
  flex-direction row
  flex-wrap wrap

  for $i in 0 .. 8 {
    &.r-space-{$i} > *:not(:last-child) {
      margin-right: $i * 8px
    }
  }

  $justify-content = 'center', 'start', 'end', 'flex-start', 'flex-end', 'left', 'right', 'baseline', 'space-between', 'space-around', 'space-evenly', 'stretch', 'inherit', 'initial', 'unset'

  for $i in $justify-content {
    &.r-row-justify-{$i} {
      justify-content unquote($i)
    }
  }

  $align-item = 'normal', 'stretch' , 'center' , 'start' , 'end' , 'flex-start' , 'flex-end' , 'self-start' , 'self-end' , 'baseline' , 'first baseline' , 'last baseline' , 'safe center' , 'unsafe center' , 'inherit' , 'initial' , 'unset'

  for $j in $align-item {
    &.r-row-align-{$j} {
      align-items unquote($j)
    }
  }

  &.r-row-nowrap{
    flex-wrap:nowrap;
  }
}
</style>
