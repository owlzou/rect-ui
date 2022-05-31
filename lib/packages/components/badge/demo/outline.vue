<template>
  <div class="demo">
    <r-badge :color="i" v-for="i in colors" outline></r-badge>
    <br/>
    <r-badge :color="i" :text="i" v-for="i in colors" outline></r-badge>
  </div>
</template>
<script setup>
import { RBadge } from "../..";
const colors = [
  "gray",
  "blue",
  "indigo",
  "violet",
  "pink",
  "red",
  "orange",
  "yellow",
  "lime",
  "green",
  "teal",
  "cyan",
  "primary",
  "light",
];
</script>
