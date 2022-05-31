<template>
  <div class="demo demo-grid">
    <span>center</span>
    <r-row justify="center">
      <r-col class="demo-block" :span="2">col-2</r-col>
      <r-col class="demo-block" :span="2">col-2</r-col>
      <r-col class="demo-block" :span="2">col-2</r-col>
    </r-row>
    <span>flex-end</span>
    <r-row justify="flex-end">
      <r-col class="demo-block" :span="2">col-2</r-col>
      <r-col class="demo-block" :span="2">col-2</r-col>
      <r-col class="demo-block" :span="2">col-2</r-col>
    </r-row>
  </div>
</template>
<script setup>
import { RRow, RCol } from "../..";
</script>