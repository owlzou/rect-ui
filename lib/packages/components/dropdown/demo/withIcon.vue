<template>
  <div class="demo">
    <r-dropdown>
      <r-button>
        <template #icon><ChevronDown/></template>
        打开下拉菜单
      </r-button>
      <template #items>
        <r-dropdown-item><template #icon><Bookmark/></template>选项一</r-dropdown-item>
        <r-dropdown-item><template #icon><Brush/></template>选项二</r-dropdown-item>
        <r-dropdown-item><template #icon><Camera/></template>选项三</r-dropdown-item>
      </template>
    </r-dropdown>
  </div>
</template>
<script setup>
import { RDropdown, RDropdownItem, RButton } from "../..";
import { ChevronDown, Bookmark, Brush, Camera } from "lucide-vue-next";
</script>
