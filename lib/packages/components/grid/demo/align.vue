<template>
  <div class="demo demo-grid">
    <span>center</span>
    <r-row align="center">
      <r-col class="demo-block" style="height: 100px" :span="2">100</r-col>
      <r-col class="demo-block" style="height: 60px" :span="2">60</r-col>
      <r-col class="demo-block" style="height: 30px" :span="2">30</r-col>
    </r-row>
    <span>end</span>
    <r-row align="end">
      <r-col class="demo-block" style="height: 100px" :span="2">100</r-col>
      <r-col class="demo-block" style="height: 60px" :span="2">60</r-col>
      <r-col class="demo-block" style="height: 30px" :span="2">30</r-col>
    </r-row>
  </div>
</template>
<script setup>
import { RRow, RCol } from "../..";
</script>