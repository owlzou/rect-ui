<template>
  <div class="demo demo-grid">
    <r-row>
      <r-col class="demo-block" :xs="3" :span="8">xs-3</r-col>
      <r-col class="demo-block" :xs="3" :span="8">xs-3</r-col>
      <r-col class="demo-block" :xs="3" :span="8">xs-3</r-col>
    </r-row>
    <r-row>
      <r-col class="demo-block" :sm="3" :span="8">sm-3</r-col>
      <r-col class="demo-block" :sm="3" :span="8">sm-3</r-col>
      <r-col class="demo-block" :sm="3" :span="8">sm-3</r-col>
    </r-row>
    <r-row>
      <r-col class="demo-block" :md="3" :span="8">md-3</r-col>
      <r-col class="demo-block" :md="3" :span="8">md-3</r-col>
      <r-col class="demo-block" :md="3" :span="8">md-3</r-col>
    </r-row>
    <r-row>
      <r-col class="demo-block" :lg="3" :span="8">lg-3</r-col>
      <r-col class="demo-block" :lg="3" :span="8">lg-3</r-col>
      <r-col class="demo-block" :lg="3" :span="8">lg-3</r-col>
    </r-row>
    <r-row>
      <r-col class="demo-block" :xl="3" :span="8">xl-3</r-col>
      <r-col class="demo-block" :xl="3" :span="8">xl-3</r-col>
      <r-col class="demo-block" :xl="3" :span="8">xl-3</r-col>
    </r-row>
  </div>
</template>
<script setup>
import { RRow, RCol } from "../..";
</script>
