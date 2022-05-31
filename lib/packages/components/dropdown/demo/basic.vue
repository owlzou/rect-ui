<template>
  <div class="demo">
    <r-dropdown>
      <r-button>
        <template #icon><ChevronDown/></template>
        打开下拉菜单
      </r-button>
      <template #items>
        <r-dropdown-item @click="()=>clicked=`选项一`">选项一</r-dropdown-item>
        <r-dropdown-item @click="()=>clicked=`选项二`">选项二</r-dropdown-item>
        <r-dropdown-item @click="()=>clicked=`选项三`">选项三</r-dropdown-item>
      </template>
    </r-dropdown>
    <p>刚刚点击了：{{clicked}}</p>
  </div>
</template>
<script setup>
import { RDropdown, RDropdownItem, RButton } from "../..";
import { ChevronDown } from "lucide-vue-next";
import {ref} from "vue";

const clicked = ref("");
</script>
