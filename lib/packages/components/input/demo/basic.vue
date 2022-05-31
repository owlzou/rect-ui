<template>
  <div class="demo">
    <r-row :space="1">
      <r-input placeholder="这是输入框" />
      <r-input disabled placeholder="禁用" />
      <r-input readonly placeholder="只读" />
    </r-row>
  </div>
</template>
<script setup>
import { RInput, RRow } from "../..";
</script>
