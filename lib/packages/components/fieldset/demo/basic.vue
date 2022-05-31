<template>
  <div class="demo">
    <r-fieldset title="分组标题">
      <r-row align="center" :space="2">
        <r-input placeholder="输入用户名" />
        <r-button flat >确认</r-button>
      </r-row>
    </r-fieldset>
  </div>
</template>
<script setup>
import { RFieldset, RButton, RInput, RRow } from "../..";
</script>
