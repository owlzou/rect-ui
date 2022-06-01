<template>
  <div class="demo">
    <r-row :space="1">
      <r-input v-model="text" ref="inputRef"/>
      <r-button @click="getFocus">获取焦点</r-button>
      <r-button @click="selectAll">全选</r-button>
    </r-row>
  </div>
</template>
<script setup>
import { RInput, RRow, RButton } from "../..";
import { ref } from "vue";

const inputRef = ref();

const text = ref("文字内容");

function getFocus() {
  inputRef.value?.focus();
}

function selectAll() {
  inputRef.value?.select();
}
</script>
