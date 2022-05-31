<template>
  <div class="demo">
    <r-checkbox-group v-model="picked">
      <r-checkbox value="1">A</r-checkbox>
      <r-checkbox value="2">B</r-checkbox>
      <r-checkbox value="3">C</r-checkbox>
      <r-checkbox value="4">D</r-checkbox>
    </r-checkbox-group>
    选中项：{{ picked }}
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import RCheckbox from "../index.vue";
import RCheckboxGroup from "../checkbox-group.vue";
const picked = ref(["2"]);
</script>
