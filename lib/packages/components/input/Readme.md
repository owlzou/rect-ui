## 示例 Examples

### 基础 Basic

<Basic/>

::: details 显示代码
<<< @/../lib/packages/components/input/demo/basic.vue
:::

### 扁平 Flat

<Flat/>

:::details 显示代码
<<< @/../lib/packages/components/input/demo/flat.vue
:::

### 插槽 Slots

可以在输入框的前后加入其它内容。

<Slots/>

:::details 显示代码
<<< @/../lib/packages/components/input/demo/slots.vue
:::

### 方法 Method

使用自带的方法控制输入框的焦点等。

<Method/>

:::details 显示代码
<<< @/../lib/packages/components/input/demo/method.vue
:::

| 方法名 | 说明     |
| ------ | -------- |
| focus  | 获取焦点 |
| blur   | 失去焦点 |
| select | 选中文字 |

<script setup>
import Basic from '@/input/demo/basic.vue'
import Flat from '@/input/demo/flat.vue'
import Method from '@/input/demo/method.vue'
import Slots from '@/input/demo/slots.vue'
</script>>
