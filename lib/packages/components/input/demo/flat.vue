<template>
  <div class="demo">
    <r-row :space="1">
      <r-input flat placeholder="这是输入框" />
      <r-input flat disabled placeholder="禁用" />
      <r-input flat readonly placeholder="只读" />
    </r-row>
  </div>
</template>
<script setup>
import { RInput, RRow } from "../..";
</script>
