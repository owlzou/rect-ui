<template>
  <div class="demo demo-button">
    <r-row :space="1">
      <RButton disabled color="primary">Default</RButton>
      <RButton disabled type="primary" color="primary">Primary</RButton>
      <RButton disabled type="outline" color="primary">Outline</RButton>
      <RButton disabled type="text" color="primary">Text</RButton>
    </r-row>
  </div>
</template>
<script setup>
import { RButton, RRow } from "../..";
</script>
