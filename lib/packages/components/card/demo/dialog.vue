<template>
  <div class="demo">
    <r-card dialog color="blue">
      <template #title>卡片标题</template>
      卡片的内容
    </r-card>
    <r-card dialog double color="blue">
      <template #title>卡片标题</template>
      卡片的内容
    </r-card>
    <r-card dialog flat color="blue">
      <template #title>卡片标题</template>
      卡片的内容
    </r-card>
  </div>
</template>
<script lang="ts" setup>
import { RCard } from "../..";
</script>
