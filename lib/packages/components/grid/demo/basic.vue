<template>
  <div class="demo demo-grid">
    <r-row>
      <r-col class="demo-block" :span="8">col</r-col>
      <r-col class="demo-block" :span="8">col</r-col>
      <r-col class="demo-block" :span="8">col</r-col>
    </r-row>
    <r-row :space="2" nowrap>
      <r-col class="demo-block" :span="8">col</r-col>
      <r-col class="demo-block" :span="8">col</r-col>
      <r-col class="demo-block" :span="8">col</r-col>
    </r-row>
    <r-row>
      <r-col class="demo-block" :span="4">col-4</r-col>
      <r-col class="demo-block" :span="8">col-8</r-col>
      <r-col class="demo-block" :span="12">col-12</r-col>
    </r-row>
  </div>
</template>
<script setup>
import { RRow, RCol } from "../..";
</script>
