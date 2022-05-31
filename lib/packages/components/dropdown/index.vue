<template>
  <div
    @mouseover="() => trigger === 'hover' && (visible = true)"
    @mouseleave="() => trigger === 'hover' && (visible = false)"
    @click="() => trigger === 'click' && (visible = true)"
    class="r-dropdown"
  >
    <!--@slot 触发下拉菜单的组件-->
    <slot></slot>
    <ul
      class="r-dropdown__menu"
      :style="width ? `width:${width}px` : null"
      v-show="visible"
      ref="menu"
    >
      <!--@slot 下拉菜单的内容-->
      <slot name="items"></slot>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref, provide } from "vue";
import { IColor } from "../../utils/types";
import { IDropdownTrigger } from "./types";
/**
 * @displayName 下拉菜单 Dropdown
 * @requires ./dropdown-item.vue
 */
export default defineComponent({
  name: "r-dropdown",
  props: {
    /**
     * 按钮的颜色，详见 [色彩](/basic/color.html)。
     */
    color: { type: String as PropType<IColor>, default: "primary" },
    /**
     * 触发下拉菜单的方式
     * @values hover,click
     */
    trigger: { type: String as PropType<IDropdownTrigger>, default: "click" },
    /** 下拉菜单的宽度 */
    width: { type: Number },
  },
  setup(props) {
    const visible = ref(false);
    provide("dropdown-color", props.color);
    return { visible };
  },
  methods: {
    clickOtherArea: function () {
      // 仔细想想点击其他地方那么也肯定不 hover 在元素上了
      document.addEventListener("click", (e) => {
        if (
          !this.$el.contains(e.target) ||
          this.$refs.menu.contains(e.target)
        ) {
          this.visible = false;
        }
      });
    },
  },
  mounted() {
    this.clickOtherArea();
  },
});
</script>
<style lang="stylus">
@import '../../css/variables.styl'

.r-dropdown {
    position relative
    display inline

    &__menu {
        background var(--color-bg)
        border $common-border
        box-shadow $common-shadow
        left 0
        margin 0
        min-width 100px
        padding 0
        position absolute
        z-index 800
    }
}
</style>
