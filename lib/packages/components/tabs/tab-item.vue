<template>
  <div v-show="selected" role="tabpanel" :aria-hidden="selected">
    <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent, inject, PropType } from "vue";
import { getParent } from "../../utils/helpers";

/** @displayName 标签页物品 Tab Item */
export default defineComponent({
  name: "r-tab-item",
  props: {
    /** 标签标题 */
    label: { type: String },
    /** 标签页的识别值 */
    value: {
      type: [String, Number] as PropType<String | Number>,
      required: true,
    },
  },
  setup(props) {
    const register: Function = inject("tab-item-register");
    register(props.label, props.value);
  },
  computed: {
    selected() {
      const parent = getParent(this, "r-tabs");
      return parent ? parent.$props.modelValue == this.value : false;
    },
  },
});
</script>