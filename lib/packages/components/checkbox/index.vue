<template>
  <label :class="classes">
    <input
      type="checkbox"
      v-model="model"
      :disabled="disabled"
      :value="value"
      @change="onChange"
    /><span></span
    ><span>
      <!-- @slot 提示文字-->
      <slot />
    </span>
  </label>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
import { getParent } from "../../utils/helpers";
/**
 * @displayName 多选框 Checkcbox
 * @requires ./checkbox-group.vue
 */
export default defineComponent({
  name: "r-checkbox",
  props: {
    /**
     * 是否被选中
     * @model
     */
    modelValue: { type: Boolean, default: false },
    /** `value` 属性 */
    value: { type: [String, Number] as PropType<String | Number> },
    /** 是否被禁用 */
    disabled: { type: Boolean, default: false },
    /** inline 模式 */
    inline: { type: Boolean, defalut: false },
  },
  emits: {
    "update:modelValue": null,
    /**
     * 当值变化的时候
     *
     * @property {Boolean} val 新的值
     * */
    change: (val: boolean) => true,
  },
  computed: {
    model: {
      get() {
        const parent = getParent(this, "r-checkbox-group");
        return parent ? parent.modelValue : this.modelValue;
      },
      set(val) {
        const parent = getParent(this, "r-checkbox-group");
        if (parent) {
          parent.$emit("update:modelValue", val);
        } else {
          this.$emit("update:modelValue", val);
        }
      },
    },
  },
  setup(props, { emit }) {
    const classes = computed(() => ({
      "r-checkbox": true,
      "r-inline": props.inline,
    }));

    const onChange = (e: Event) => {
      emit("change", (e.target as HTMLInputElement).checked);
    };

    return { classes, onChange };
  },
});
</script>
<style lang="stylus">
@import '../../css/variables.styl'
$cb-width = 20px

.r-checkbox {
  margin 4px
  background transparent !important
  display flex
  align-items center

  &:hover {
    span {
      cursor pointer
    }

    & input + span {
      background-color var(--color-primary-2)
      border-color var(--color-primary-9)
    }
  }

  input {
    display none

    &+span {
      width $cb-width
      height $cb-width
      border $common-border
      margin-right 8px
    }

    &:disabled + span {
      border-color var(--color-gray-6)
      background var(--color-gray-4)

      &:after {
        border-color var(--color-gray-8) !important
      }
    }
  }
}

.r-checkbox {
  input[type=checkbox] {
    &:checked + span:after {
      /* 画一个勾 */
      content ' '
      display block
      width $cb-width
      height: $cb-width * 0.5
      border-left 4px solid var(--color-primary-6)
      border-bottom @border-left
      transform rotate(-45deg)
      position relative
    }
  }
}
</style>
