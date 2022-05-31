<template>
  <div class="demo">
    <r-button @click="visible = true">点击打开</r-button>
    <r-modal color="yellow" :visible="visible" width="300px">
      <template #title>对话框标题</template>
      对话框的内容
      <template #footer>
        <r-row justify="flex-end" :space="1">
          <r-col>
            <r-button flat color="yellow" @click="close">确定</r-button>
          </r-col>
          <r-col>
            <r-button flat @click="close">取消</r-button>
          </r-col>
        </r-row>
      </template>
    </r-modal>
  </div>
</template>
<script setup>
import { RModal, RButton, RRow, RCol } from "../..";
import { ref } from "vue";
const visible = ref(false);
const close = () => (visible.value = false);
</script>
