<template>
  <div :class="tabbarClasses" role="tablist">
    <a
      v-for="i in tabList"
      :key="i.value"
      :class="itemClasses(i.value)"
      @click="update(i.value)"
      role="tab"
      :aria-selected="i.value == modelValue"
    >
      <span>{{ i.label }}</span>
    </a>
  </div>
  <div class="r-tab-content">
    <slot />
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, PropType, provide, reactive } from "vue";
import { ITabStyle } from "./types";
/**
 *  @displayName 标签页 Tabs
 *  @requires ./tab-item.vue
 */
export default defineComponent({
  name: "r-tabs",
  props: {
    /**
     * 当前被选中的标签页
     * @model
     */
    modelValue: {
      type: [String, Number] as PropType<String | Number>,
      required: true,
    },
    /** 标签样式
     * @values card, label
     */
    type: { type: String as PropType<ITabStyle>, default: "card" },
  },
  setup(props, { emit }) {
    const tabList: { [x: string]: { label: string; value: string } } = reactive(
      {}
    );

    const tabbarClasses = computed(() => {
      return { ["r-tab-bar"]: true };
    });

    const itemClasses = (value: string | number) => {
      return {
        ["r-tab"]: true,
        ["r-tab-label"]: props.type == "label",
        ["r-selected"]: value == props.modelValue,
      };
    };

    const register = (label: string, value: string) => {
      tabList[value] = { label, value };
    };

    provide("tab-item-register", register);

    const update = (val) => {
      emit("update:modelValue", val);
    };

    return { update, tabList, itemClasses, tabbarClasses };
  },
});
</script>

<style lang="stylus">
$tab-border-width = 2px
$tab-border-color = var(--color-gray-9)
$tab-border-color-light = var(--color-gray-6)

.r-tab-bar {
  display flex
  margin-left 8px

  // border-bottom $tab-border-width solid $tab-border-color
  .r-tab {
    position relative
    padding 4px 8px
    padding-bottom @padding - $tab-border-width
    color $tab-border-color-light
    text-decoration none
    cursor pointer
    border $tab-border-width solid @color
    border-bottom none
    margin-right 4px

    &:hover {
      color var(--color-primary-7) !important
    }

    &.r-selected {
      color $tab-border-color
      border-color $tab-border-color
      z-index 700

      /* 挡住下面的边框的白条 */
      span::after {
        content ' '
        display block
        background var(--color-bg)
        width calc(100% + 16px)
        height $tab-border-width
        left -8px
        position relative
        bottom - 4px
      }

      &::before, &::after {
        border-color $tab-border-color
      }
    }

    &.r-tab-label {
      border-color transparent

      &::after {
        content ''
        display block
        margin-right 8px
        height 100%
        width 100%
        top -2px
        left 0
        position absolute
        border $tab-border-width solid $tab-border-color-light
        border-bottom none
        transform perspective(32px) rotateX(10deg)
        z-index -1
      }

      &.r-selected {
        span::after {
          width calc(100% + 22px)
          left -9px
        }

        &::after {
          border-color $tab-border-color
        }
      }
    }
  }
}

/* * 标签内容页 */
.r-tab-content {
  padding 16px 8px
  border $tab-border-width solid $tab-border-color
}
</style>
