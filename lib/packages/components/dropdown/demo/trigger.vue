<template>
  <div class="demo">
    <r-dropdown color="yellow">
      <r-button>
        <template #icon><ChevronDown /></template>
        点击按钮打开
      </r-button>
      <template #items>
        <r-dropdown-item>选项一</r-dropdown-item>
        <r-dropdown-item>选项二</r-dropdown-item>
        <r-dropdown-item>选项三</r-dropdown-item>
      </template>
    </r-dropdown>
    &nbsp;
    <r-dropdown color="blue" trigger="hover">
      <r-button>
        <template #icon><ChevronDown /></template>
        移动到按钮打开
      </r-button>
      <template #items>
        <r-dropdown-item>选项一</r-dropdown-item>
        <r-dropdown-item>选项二</r-dropdown-item>
        <r-dropdown-item>选项三</r-dropdown-item>
      </template>
    </r-dropdown>
  </div>
</template>
<script setup>
import { RDropdown, RDropdownItem, RButton } from "../..";
import { ChevronDown } from "lucide-vue-next";
</script>
