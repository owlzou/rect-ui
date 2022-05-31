<template>
  <div class="r-fieldset">
    <label for="" class="r-fieldset-label">{{ title }}</label>
    <!-- @slot 内容 -->
    <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
/**
 * @displayName 字段集 Fieldset
 */

export default defineComponent({
  name: "r-fieldset",
  props: {
    /** 显示分组的标题 */
    title: { type: String },
  },
});
</script>
<style lang="stylus">
.r-fieldset {
    border 2px solid var(--color-gray-4)
    position relative
    padding 24px 16px
    margin 16px 8px

    &-label {
        background var(--color-bg)
        position absolute
        padding 0 8px
        left 32px
        top 0
        translate 0 -50%
    }
}
</style>
