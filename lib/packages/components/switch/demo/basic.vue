<template>
  <div class="demo">
    <r-switch v-model="model">{{ model }}</r-switch>
    <br/>
    <r-switch disabled>禁用</r-switch>
  </div>
</template>
<script lang="ts" setup>
import { RSwitch } from "../..";
import { ref } from "vue";
const model = ref(false);
</script>
