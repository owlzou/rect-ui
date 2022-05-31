<template>
  <div class="demo demo-button">
    <r-row :space="1">
      <RButton flat type="primary" color="yellow">Primary</RButton>
      <RButton flat color="yellow">Normal</RButton>
      <RButton flat type="outline" color="yellow">Outline</RButton>
      <RButton flat type="text" color="yellow">Text</RButton>
    </r-row>
  </div>
</template>
<script setup>
import { RButton, RRow } from "../..";
</script>
