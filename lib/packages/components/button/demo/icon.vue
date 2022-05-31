<template>
  <div class="demo demo-button">
    <r-row :space="1">
    <RButton color="primary" type="primary"><template #icon><Check /></template>确定</RButton>
    <RButton color="blue"><template #icon><Edit /></template>编辑</RButton>    
    <RButton color="red" type="outline"><template #icon><Trash2 /></template>删除</RButton>
    <RButton color="yellow" type="text"><template #icon><AlertTriangle /></template>警告</RButton>
    </r-row>
    <r-row :space="1">
      <RButton flat color="primary" type="primary"><template #icon><Check /></template></RButton>
      <RButton color="blue"><template #icon><Edit /></template></RButton>
      <RButton flat color="red" type="outline"><template #icon><Trash2 /></template></RButton>
      <RButton color="yellow" type="text"><template #icon><AlertTriangle /></template></RButton>
    </r-row>
  </div>
</template>
<script setup>
import { RButton,RRow } from "../..";
import { Edit, Check, Trash2, Info, AlertTriangle } from "lucide-vue-next";
</script>
