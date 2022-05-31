<template>
  <label :class="classes">
    <input
      type="radio"
      :name="name"
      :value="value"
      :disabled="disabled"
      v-model="model"
    /><span></span><span><!-- @slot 提示文字--><slot /></span>
  </label>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { getParent } from "../../utils/helpers";
/**
 * @displayName 单选框 Radio
 * @requires ./radio-group.vue
 */
export default defineComponent({
  name: "r-radio",
  props: {
    /** 对应的 `value` */
    value: { type: [String, Number] as PropType<String | Number> },
    /** 对应的 `name` */
    name: { type: String },
    /** 是否被禁用 */
    disabled: { type: Boolean, default: false },
    /**
     * 是否被选中
     * @model
     */
    modelValue: { type: Boolean, default: false },
    /** inline 模式 */
    inline: { type: Boolean, defalut: false },
  },
  computed: {
    model: {
      get() {
        const parent = getParent(this, "r-radio-group");
        return parent ? parent.modelValue : this.modelValue;
      },
      set(val) {
        const parent = getParent(this, "r-radio-group");
        if (parent) {
          parent.$emit("update:modelValue", val);
        } else {
          this.$emit("update:modelValue", val);
        }
      },
    },
    classes() {
      return {
        "r-radio": true,
        "r-inline": this.inline,
      };
    },
  },
});
</script>
<style lang="stylus">
@import '../../css/variables.styl'
$rd-width = 20px

.r-radio {
  margin 4px
  background transparent !important
  display flex
  align-items center
  cursor pointer

  &:hover {
    & input + span {
      background-color var(--color-primary-2)
      border-color var(--color-primary-9)
    }
  }

  input {
    display none

    &+span {
      width $rd-width
      height @width
      border $common-border
      margin-right 8px
    }

    &:disabled + span {
      border-color var(--color-gray-6)
      background var(--color-gray-4)

      &:after {
        background-color var(--color-gray-8) !important
      }
    }
  }
}

.r-radio {
  input[type=radio] {
    &:checked + span:after {
      /* 画一个正方形 */
      content ''
      display block
      width 12px
      height @width
      background-color var(--color-primary-6)
      position relative
      left ($rd-width - @width) * 0.5
      top @left
    }
  }
}
</style>
