<template>
  <div class="showcase">
    <r-card color="yellow" dialog>
      <template #title>
        <r-row :space="1"><Disc /><span>音乐播放器</span></r-row>
      </template>
      <r-row :space="2">
        <r-col>
          <div class="cover"></div>
        </r-col>
        <r-col style="flex-grow:1">
          <div class="title">Music Title - Artist</div>
          <div style="font-size: 12px;">Album</div>
          <r-row nowrap :space="1" align="center" style="margin-top:8px;">
            <r-slider
              hidevalue
              style="width:100%;"
              v-model="currentTimeSecond"
              :min="0"
              :max="totalTimeSecond"
            />
            <span style="font-size:12px;flex-shrink: 0;"
              >{{ currentTime }} / {{ totalTime }}</span
            >
          </r-row>
          <r-row style="margin-top:8px;" justify="center" align="center">
            <r-button>
              <template #icon><SkipBack /></template>
            </r-button>
            <r-button>
              <template #icon><Rewind /></template>
            </r-button>
            <r-button>
              <template #icon><Play /></template>
            </r-button>
            <r-button>
              <template #icon><Pause /></template>
            </r-button>
            <r-button>
              <template #icon><FastForward /></template>
            </r-button>
            <r-button>
              <template #icon><SkipForward /></template>
            </r-button>
            <div style="flex-grow:1"></div>
            <r-row :space="1">
              <Volume2 />
              <r-slider hidevalue style="width:100px" />
            </r-row>
          </r-row>
        </r-col>
      </r-row>
    </r-card>
  </div>
</template>
<script setup>
import { RCard, RRow, RCol, RSlider, RButton } from "@";
import {
  Disc,
  Play,
  Pause,
  SkipBack,
  Rewind,
  SkipForward,
  FastForward,
  Volume2,
} from "lucide-vue-next";
import { ref, computed } from "vue";

const totalTimeSecond = 180;
const currentTimeSecond = ref(0);

const totalTime = formatTime(totalTimeSecond);
const currentTime = computed(() => formatTime(currentTimeSecond.value));

function formatTime(sec) {
  const m = Math.ceil(sec / 60)
    .toString()
    .padStart(2, "0");
  const s = (sec % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}
</script>
<style>
.cover {
  width: 120px;
  height: 120px;
  background-color: var(--color-gray-2);
}
.title {
  font-weight: 800;
}
</style>
