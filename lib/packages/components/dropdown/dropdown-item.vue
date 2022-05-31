<template>
  <li
    :class="itemClasses"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <span class="r-dropdown-item__icon" v-if="$slots.icon">
      <!--@slot 图标插槽-->
      <slot name="icon"></slot>
    </span>
    <!--@slot 内容插槽-->
    <slot></slot>
  </li>
</template>
<script lang="ts">
import { defineComponent, inject, computed, ref } from "vue";
/**
 * @displayName 下拉菜单物品 Dropdown Item
 */
export default defineComponent({
  name: "r-dropdown-item",
  setup() {
    const hover = ref(false);
    const color = inject("dropdown-color");
    const itemClasses = computed(() => ({
      "r-dropdown-item": true,
      [`r-bg-${color}`]: hover.value,
    }));
    return { itemClasses, hover };
  },
});
</script>
<style lang="stylus">
@import '../../css/variables.styl'

.r-dropdown-item {
  display flex
  align-items center
  list-style-type none
  padding 4px 8px
  user-select none

  &:hover {
    cursor pointer
    color #fff
  }

  &__icon {
    margin-right 8px
    height 24px
  }
}
</style>
