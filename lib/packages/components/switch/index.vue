<template>
  <label class="r-switch">
    <input type="checkbox" v-model="model" :disabled="disabled" role="switch" :aria-checked="model"/>
    <span></span>
    <span><slot /></span>
  </label>
</template>
<script lang="ts">
import { defineComponent } from "vue";
/**
 * @displayName 开关 Switch
 */
export default defineComponent({
  name: "r-switch",
  props: {
    /** @model */
    modelValue: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
  },
  computed: {
    model: {
      get() {
        return this.modelValue;
      },
      set(val) {
        this.$emit("update:modelValue", val);
      },
    },
  },
});
</script>
<style lang="stylus">
@import "../../css/variables.styl"

$width = 36px
$padding = 2px
$border = 2px
$rectWidth = 12px
.r-switch {
    margin $common-margin
    display inline-flex
    align-items center
    background transparent !important

    input[type=checkbox] {
        display none

        &+span {
            width $width
            display inline-block
            background #fff
            height $rectWidth + 2*$border + 2*$padding
            margin-right 12px
            border $border solid $border-color
            cursor pointer
            transition 0.3s

            &:after {
                content ' '
                display block
                width $rectWidth
                height $rectWidth
                background #fff
                border @border
                position relative
                left $padding
                top $padding
                transition 0.3s
            }
        }

        &:checked + span {
            background var(--color-primary-5)

            &:after {
                left $width - $border*2 - $padding -  $rectWidth
            }
        }

        &:disabled + span {
            background var(--color-gray-8)
            border-color var(--color-gray-6)

            &:after {
                background var(--color-gray-4)
                border-color @border-color
            }
        }
    }
}
</style>
