# 色彩 Color

均为 CSS 变量，方便覆盖（形为`var(--color-blue-0)`，`primary`默认是`indigo`）。

<div v-for="(color, j) in ['gray', 'blue', 'indigo', 'violet', 'pink', 'red', 'orange', 'yellow', 'lime', 'green', 'teal', 'cyan', 'light']" :key="j" class="color-group">
    <div v-for="i in [0,1,2,3,4,5,6,7,8,9]" :key="i" >
        <div v-if="i<6" :style="`background:var(--color-${color}-${i})`" class="color-box" >
            {{color}}-{{i}}
        </div>
        <div v-else :style="`background:var(--color-${color}-${i});color:#fff;`" class="color-box">
            {{color}}-{{i}}
        </div>
    </div>
</div>

