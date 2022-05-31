<template>
  <div :class="classes">
    <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "r-col",
  props: {
    xs: { type: Number },
    sm: { type: Number },
    md: { type: Number },
    lg: { type: Number },
    xl: { type: Number },
    /** 所占宽度，取值从1到24 */
    span: { type: Number },
  },
  computed: {
    classes() {
      return {
        "r-col": true,
        [`r-col-${this.span}`]: this.span,
        [`r-col-xs-${this.xs}`]:this.xs,
        [`r-col-sm-${this.sm}`]:this.sm,
        [`r-col-md-${this.md}`]:this.md,
        [`r-col-lg-${this.lg}`]:this.lg,
        [`r-col-xl-${this.xl}`]:this.xl,
      };
    },
  },
});
</script>
<style lang="stylus">
.r-row {
  for $i in 0 .. 24 {
    .r-col-{$i} {
      width '%s%' % ($i * 4.1667)
    }
  }

  /* 手机 xs*/
  @media only screen and (max-device-width 480px) {
    for $i in 1..24 {
      .r-col-xs-{$i}{
        width '%s%' % ($i * 4.1667)
      }
    }
  }

  /* 平板 sm*/
  @media only screen and (min-device-width 481px) and (max-device-width 768px) {
    for $i in 1..24 {
      .r-col-sm-{$i}{
        width '%s%' % ($i * 4.1667)
      }
    }
  }

  /* 笔记本 md*/
  @media only screen and (min-device-width 769px) and (max-device-width 1024px) {
    for $i in 1..24 {
      .r-col-md-{$i}{
        width '%s%' % ($i * 4.1667)
      }
    }
  }

  /* 大屏幕 lg*/
  @media only screen and (min-device-width 1025px) and (max-device-width 1200px) {
    for $i in 1..24 {
      .r-col-lg-{$i}{
        width '%s%' % ($i * 4.1667)
      }
    }
  }

  /* 超大屏幕 xl*/
  @media only screen and (min-device-width 1201px) {
    for $i in 1..24 {
      .r-col-xl-{$i}{
        width '%s%' % ($i * 4.1667)
      }
    }
  }
}
</style>