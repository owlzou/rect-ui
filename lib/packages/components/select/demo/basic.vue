<template>
  <div class="demo">
    <r-select :options="ops" v-model="model" />
    <p>已选中：{{ model }}</p>
  </div>
</template>
<script lang="ts" setup>
import RSelect from "../index.vue";
import { ref } from "vue";
const model = ref("A");
const ops = [
  { value: "A", text: "Option A" },
  { value: "B", text: "Option B" },
  { value: "C", text: "Option C" },
];
</script>
