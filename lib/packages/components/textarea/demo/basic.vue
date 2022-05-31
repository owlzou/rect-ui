<template>
  <div class="demo">
    <r-textarea placeholder="普通的文本输入框" :rows="5" :cols="30"/>
    <br/>
    <r-textarea placeholder="只读的文本输入框" readonly :rows="5" :cols="30"/>
    <br/>
    <r-textarea placeholder="禁用的文本输入框" disabled :rows="5" :cols="30"/>
  </div>
</template>
<script setup>
import { RTextarea } from "../..";
</script>
