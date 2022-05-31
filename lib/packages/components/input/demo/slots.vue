<template>
  <div class="demo">
    <r-fieldset title="图标">
      <r-input placeholder="这是输入框">
        <template #before><Search /></template>
      </r-input>
      &nbsp;
      <r-input placeholder="这是输入框" flat>
        <template #after><Search /></template>
      </r-input>
    </r-fieldset>
    <r-fieldset title="文字">
      <r-input placeholder="输入搜索内容"><template #before>搜索：</template></r-input>
      &nbsp;
      <r-input placeholder="admin"><template #after>@example.com</template></r-input>
    </r-fieldset>
  </div>
</template>
<script setup>
import { RInput, RFieldset } from "../..";
import { Search } from "lucide-vue-next";
</script>
