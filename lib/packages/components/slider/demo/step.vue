<template>
  <div class="demo">
    <r-slider v-model="model" :step="20"/> 
  </div>
</template>
<script lang="ts" setup>
import { RSlider } from "../..";
import { ref } from "vue";
const model = ref(0);
</script>
