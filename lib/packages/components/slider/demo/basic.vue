<template>
  <div class="demo">
    <r-slider v-model="model" /> 
  </div>
</template>
<script lang="ts" setup>
import { RSlider } from "../..";
import { ref } from "vue";
const model = ref(0);
</script>
