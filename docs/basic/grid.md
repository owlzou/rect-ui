## 栅格 Grid

传统的、在大部分 UI 框架里都可以见到的行列设计。

### 基础 Basic

`span` 控制宽度，取值从 1 到 24。

`space` 控制间隔，取值从 1 到 8。

<Basic/>

::: details 显示代码
<<< @/../lib/packages/components/grid/demo/basic.vue
:::

### Justify

相当于 `justify-content`，详见 [justify-content (MDN)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content)。

<Justify/>

::: details 显示代码
<<< @/../lib/packages/components/grid/demo/justify.vue
:::

### Align

相当于 `align-items`，详见 [align-items (MDN)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items)。

<Align/>

::: details 显示代码
<<< @/../lib/packages/components/grid/demo/align.vue
:::

### 断点 BreakPoint

断点分为 `xs`,`sm`,`md`,`lg`,`xl`

| 标识 | 最小 px | 最大 px |
| ---- | ------- | ------- |
| xs   | -       | 480     |
| sm   | 481     | 768     |
| md   | 769     | 1024    |
| lg   | 1025    | 1200    |
| xl   | 1201    | -       |

<Breakpoint/>

::: details 显示代码
<<< @/../lib/packages/components/grid/demo/breakpoint.vue
:::

<script setup>
import Basic from '@/grid/demo/basic.vue'
import Justify from '@/grid/demo/justify.vue'
import Align from '@/grid/demo/align.vue'
import Breakpoint from "@/grid/demo/breakpoint.vue"
</script>
