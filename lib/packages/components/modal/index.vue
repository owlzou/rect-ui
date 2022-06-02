<template>
  <div class="r-modal__wrapper">
    <div class="r-modal" :style="`width:${width}`" v-show="visible">
      <div :class="titleClasses">
        <!--@slot 标题-->
        <slot name="title" />
        <div class="r-svg-button" v-if="closable" @click="$emit('close')">
          <X />
        </div>
      </div>
      <div class="r-modal__content">
        <!--@slot 内容-->
        <slot />
      </div>
      <div class="r-modal__footer" v-if="$slots.footer">
        <!--@slot 底部-->
        <slot name="footer" />
      </div>
    </div>
    <div class="r-modal__mask" v-show="visible"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { X } from "lucide-vue-next";
import { IColor } from "../../utils/types";
/**
 * @displayName 对话框 Modal
 */
export default defineComponent({
  name: "r-modal",
  emits: {
    /** 点击内置关闭按钮时发出 */
    close: () => true,
  },
  props: {
    /**
     * 对话框的主题色，详见 [色彩](/basic/color.html)。
     * */
    color: { type: String as PropType<IColor> },
    /** 对话框的宽度 */
    width: { type: String, default: "600px" },
    /** 可见 */
    visible: { type: Boolean },
    /** 右上角的关闭图标 */
    closable: { type: Boolean, default: false },
  },
  components: { X },
  computed: {
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

.r-modal {
  border $common-border
  box-shadow $common-shadow
  display:flex
  flex-direction: column;
  position fixed
  top: 50vh;
  left: 50vw;
  transform: translate(-50%,-50%);
  background var(--color-bg)
  z-index 999

  &__title {
    border-bottom $common-border
    padding $common-padding $common-padding * 2
    font-weight bold
    display flex
    justify-content space-between
  }

  &__content {
    padding: $common-padding * 2
  }

  &__footer {
    padding: $common-padding * 2
  }

  &__mask {
    z-index 998
    background-color var(--color-light-7)
    position fixed
    width 100vw
    height 100vh
    top 0
    left 0
    opacity 0.3
  }
}
</style>
