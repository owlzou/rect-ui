<template>
  <div :class="classes">
    <h3 v-if="!dialog">
      <!-- @slot 卡片标题 -->
      <slot name="title" />
    </h3>
    <div :class="titleClasses" v-else>
      <slot name="title" />
    </div>
    <div class="r-card__content">
      <!-- @slot 卡片内容 -->
      <slot />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IColor } from "../../utils/types";
/**
 * @displayName 卡片 Card
 */
export default defineComponent({
  name: "r-card",
  props: {
    /** 是否双线边框 */
    double: { type: Boolean, default: false },
    /** 是否扁平（没有阴影）*/
    flat: { type: Boolean, default: false },
    /** 对话框皮肤 */
    dialog: { type: Boolean, default: false },
    /**
     * 对话框皮肤的主题色，详见 [色彩](/basic/color.html)。
     * */
    color: { type: String as PropType<IColor> },
  },
  computed: {
    classes() {
      return {
        ["r-card"]: true,
        ["r-double"]: this.double,
        ["r-flat"]: this.flat,
        ["r-dialog"]: this.dialog,
      };
    },
    titleClasses() {
      return {
        ["r-modal__title"]: true,
        [`r-${this.color}`]: this.color,
      };
    },
  },
});
</script>
<style lang="stylus">
@import '../../css/variables.styl'

.r-card {
  card()
  background-color var(--color-bg)

  h3 {
    margin-top 0
    margin-bottom $common-padding
  }

  &.r-flat {
    box-shadow none
  }

  &.r-double {
    border 6px double $border-color
  }

  &.r-dialog {
    padding 0

    .r-card__content {
      padding: $common-padding * 2
    }
  }
}
</style>
