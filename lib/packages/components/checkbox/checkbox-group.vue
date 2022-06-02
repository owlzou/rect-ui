<template>
  <div class="r-checkbox-group"><slot></slot></div>
</template>
<script lang="ts">
import { defineComponent, PropType, watch } from "vue";
/**
 * @displayName 多选框组 Checkbox Group
 */
export default defineComponent({
  name: "r-checkbox-group",
  emits: {
    "update:modelValue": null,
    /**
     * 当值变化的时候
     *
     * @property {Boolean} val 新的值
     * */
    change: (val: string[] | number[]) => true,
  },
  props: {
    /** @model */
    modelValue: { type: Array as PropType<String[] | Number[]> },
  },
  setup(props, { emit }) {
    watch(
      () => props.modelValue,
      (nv: string[] | number[], _ov) => {
        emit("change", nv);
      }
    );
  },
});
</script>
