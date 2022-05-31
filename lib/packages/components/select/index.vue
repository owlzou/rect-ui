<template>
  <select class="r-select" v-model="model">
    <option v-for="(op, index) in options" :key="index" :value="op.value">
      {{ op.text }}
    </option>
  </select>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ISelectOption } from "./types";
/**
 * @displayName 下拉菜单 Select
 */
export default defineComponent({
  name: "r-select",
  props: {
    /** 选项 */
    options: { type: Array as PropType<ISelectOption[]> },
    /**
     * 选中项目的 `value`
     * @model
     */
    modelValue: { type: String },
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

.r-select {
    padding $common-padding
    padding-right: 24px;
    margin $common-margin
    border $common-border
    transition 0.3s
    background var(--color-bg)
    /* 自定义下拉三角形 */
    appearance none
    background-image url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,2 L10,2 L5,8 Z'/%3E%3C/svg%3E")
    background-repeat no-repeat
    background-size 24px 12px
    background-position right center

    &:hover {
        cursor pointer
    }

    &:focus {
        box-shadow $common-shadow
        border-color var(--color-primary-7)
    }
}
</style>
