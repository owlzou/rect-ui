<template>
  <div class="r-radio-group"><slot /></div>
</template>
<script lang="ts">
import { defineComponent, PropType, watch } from "vue";
/** @displayName 单选组 Radio Group */
export default defineComponent({
  name: "r-radio-group",
  emits: ["update:modelValue", "change"],
  props: {
    /** @model */
    modelValue: { type: [String, Number] as PropType<String | Number> },
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
