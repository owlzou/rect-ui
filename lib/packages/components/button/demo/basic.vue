<template>
  <div class="demo demo-button">
    <r-row :space="1">
      <RButton type="primary">Primary</RButton>
      <RButton>Normal</RButton>
      <RButton type="outline">Outline</RButton>
      <RButton type="text">Text</RButton>
    </r-row>
    <r-row :space="1">
      <RButton type="primary" color="primary">Primary</RButton>
      <RButton color="primary">Normal</RButton>
      <RButton type="outline" color="primary">Outline</RButton>
      <RButton type="text" color="primary">Text</RButton>
    </r-row>
  </div>
</template>
<script setup>
import { RButton, RRow } from "../..";
</script>
