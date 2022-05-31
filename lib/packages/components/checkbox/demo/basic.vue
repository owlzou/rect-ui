<template>
  <div class="demo">
    <r-checkbox v-model="a">{{ a }}</r-checkbox>
    <r-checkbox v-model="b">{{ b }}</r-checkbox>
    <r-checkbox v-model="c" disabled>禁用并未选中</r-checkbox>
    <r-checkbox v-model="d" disabled>禁用并选中</r-checkbox>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import RCheckbox from "../index.vue";
const a = ref(false);
const b = ref(true);
const c = ref(false);
const d = ref(true);
</script>
