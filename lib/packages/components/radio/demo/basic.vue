<template>
  <div class="demo">
    <r-radio name="1" value="1">选项一</r-radio>
    <r-radio name="1" value="2">选项二</r-radio>
    <r-radio name="2" value="1" disabled>禁用</r-radio>
    <r-radio name="2" value="2" disabled v-model="selected">禁用并选中</r-radio>
  </div>
</template>
<script setup>
import { RRadio } from "../..";
const selected = "2";
</script>
