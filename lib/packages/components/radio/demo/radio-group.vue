<template>
  <div class="demo">
    <r-radio-group v-model="picked">
      <r-radio value="1">选项一</r-radio>
      <r-radio value="2">选项二</r-radio>
      <r-radio value="3">选项三</r-radio>
      <r-radio value="4" disabled>选项四</r-radio>
    </r-radio-group>
    选中项：{{ picked }}
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { RRadio, RRadioGroup } from "../..";
const picked = ref("2");
</script>
