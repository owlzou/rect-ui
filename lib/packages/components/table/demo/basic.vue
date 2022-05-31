<template>
  <div class="demo">
    <r-table :headers="headers" :data="data"></r-table>
  </div>
</template>
<script lang="ts" setup>
import { RTable } from "../..";
import { ITableData, ITableHeader } from "../../../utils/types";
const headers: ITableHeader[] = [
  { key: "id", text: "ID", width: 80 },
  { key: "user", text: "用户名" },
  { key: "lastLoginTime", text: "最后登录时间" },
];
const data: ITableData[] = [
  { id: 1, user: "竺清晖", lastLoginTime: "2020-05-28" },
  { id: 2, user: "微生阳焱", lastLoginTime: "2020-09-05" },
  { id: 3, user: "歧初瑶", lastLoginTime: "2021-04-03" },
  { id: 4, user: "泰素怀", lastLoginTime: "2021-12-26" },
  { id: 5, user: "历柔惠", lastLoginTime: "2022-12-22" },
];
</script>
