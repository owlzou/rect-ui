<template>
  <span class="r-slider">
    <input type="range" :min="min" :max="max" :step="step" v-model.number="model" />
    <span v-show="!hidevalue">{{ model }}</span>
  </span>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
/**
 * @displayName 滑块 Slider
 */
export default defineComponent({
  name: "r-slider",
  props: {
    /** 步长 */
    step: { type: Number, default: 1 },
    /** 最小值 */
    min: { type: Number, default: 0 },
    /** 最大值 */
    max: { type: Number, default: 100 },
    /** @model */
    modelValue: { type: Number, default: 0 },
    /** 隐藏滑块后的数值显示 */
    hidevalue: { type: Boolean, default: false },
  },
  setup(props, { emit }) {
    const model = computed({
      get() {
        return props.modelValue;
      },
      set(val) {
        emit("update:modelValue", val);
      },
    });
    return { model };
  },
});
</script>
<style lang="stylus">
@import '../../css/variables.styl'

/* 滑动轨道 */
slider-track() {
    &::-moz-range-track {
        {block}
    }

    &::-webkit-slider-runnable-track {
        {block}
    }
}

/* 滑动指示器 */
slider-thumb() {
    &::-moz-range-thumb {
        {block}
    }

    &::-webkit-slider-thumb {
        {block}
    }
}

.r-slider input[type='range'] {
    flex-grow: 1;
    width:inherit;
    
    +slider-track() {
        border $common-border
        background-color var(--color-bg)
    }

    +slider-thumb() {
        border $common-border
        border-radius 0
        background-color var(--color-bg)
        width 8px
        height 16px
    }
}

.r-slider {
    display inline-flex

    span {
        margin-left 8px
    }
}
</style>
