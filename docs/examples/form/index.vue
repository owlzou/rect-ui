<template>
  <r-card class="demo demo-form">
    <r-row>
      <r-col :span="4">用户名</r-col>
      <r-input placeholder="username" v-model="username" />
    </r-row>
    <r-row>
      <r-col :span="4">密码</r-col>
      <r-row align="center" :space="1">
        <r-input
          placeholder="password"
          :password="!showPassword"
          v-model="password"
        />
        <r-button
          type="text"
          color="primary"
          @click="showPassword = !showPassword"
          ><template #icon>
            <Eye v-if="!showPassword"/>
            <EyeOff v-else
          /></template>
        </r-button>
      </r-row>
    </r-row>
    <r-row>
      <r-col :span="4">用户类型</r-col>
      <r-radio-group v-model="userType">
        <r-radio value="admin">管理员</r-radio>
        <r-radio value="user">用户</r-radio>
        <r-radio value="guest">游客</r-radio>
      </r-radio-group>
    </r-row>
    <r-row>
      <r-col :span="4">用户组</r-col>
      <r-select :options="userGroupOps" v-model="userGroup" />
    </r-row>
    <r-row>
      <r-col :span="4">用户权限</r-col>
      <r-col>
        <r-checkbox-group>
          <r-checkbox>添加文章</r-checkbox>
          <r-checkbox>删除文章</r-checkbox>
          <r-checkbox>添加用户</r-checkbox>
          <r-checkbox>删除用户</r-checkbox>
        </r-checkbox-group>
      </r-col>
    </r-row>
    <r-row justify="center">
      <r-button flat color="primary">提交</r-button>
    </r-row>
  </r-card>
</template>
<script setup>
import { ref } from "vue";
import {
  RInput,
  RCard,
  RRow,
  RCol,
  RSelect,
  RCheckbox,
  RRadio,
  RRadioGroup,
  RCheckboxGroup,
  RButton,
} from "@";
import { Eye, EyeOff } from "lucide-vue-next";
const userType = ref("admin");
const userGroup = ref("news");
const userGroupOps = [
  { value: "news", text: "新闻" },
  { value: "game", text: "游戏" },
  { value: "novel", text: "小说" },
];
const showPassword = ref(false);

const userName = ref("");
const password = ref("");
</script>
<style>
.demo-form .r-row {
  margin-bottom: 8px;
}
</style>
