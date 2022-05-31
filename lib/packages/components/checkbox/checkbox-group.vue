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
  emits: ["update:modelValue", "change"],
  props: {
    /** @model */
    modelValue: { type: Array as PropType<String[] | Number[]> },
  },
  setup(props, { emit }) {
    watch(
      () => props.modelValue,
      (nv, _ov) => {
        emit("change", nv);
      }
    );
  },
});
</script>
