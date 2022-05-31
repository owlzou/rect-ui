<template>
  <div class="demo">
    <r-tabs v-model="current">
      <r-tab-item label="标签一" value="1">标签一的内容</r-tab-item>
      <r-tab-item label="标签二" value="2">标签二的内容</r-tab-item>
      <r-tab-item label="标签三" value="3">标签三的内容</r-tab-item>
    </r-tabs>
  </div>
</template>
<script lang="ts" setup>
import { RTabs,RTabItem } from "../..";
import { ref } from "vue";
const current = ref("1");
</script>
