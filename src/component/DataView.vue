<script setup lang="ts">
import { ref } from 'vue';

import CommonCluster from '@/component/CommonCluster.vue';
import CommonForecast from '@/component/CommonForecast.vue';
import GNB from '@/layout/GNB.vue';

const leftImage = new URL('@/asset/img/img_left_image.png', import.meta.url).href;
const leftChart = new URL('@/asset/img/img_left_chart.png', import.meta.url).href;
const rightImage = new URL('@/asset/img/img_right_image.png', import.meta.url).href;
const rightChart = new URL('@/asset/img/img_right_chart.png', import.meta.url).href;
const rightData = new URL('@/asset/img/img_data_qr.png', import.meta.url).href;
const leftImagePath = new URL('@/asset/img/img_left_ott.png', import.meta.url).href;
const rightImagePath = new URL('@/asset/img/img_right_full.png', import.meta.url).href;

const isData = ref(false);
</script>

<template>
  <div class="container">
    <div class="main-content">
      <div class="left">
        <template v-if="isData">
          <CommonCluster
            :left-image="leftImage"
            :left-chart="leftChart"
            :right-image="rightImage"
            :right-chart="rightChart"
            :is-data="isData"
          />
        </template>
        <template v-else>
          <CommonCluster :image-path="leftImagePath" :is-data="isData" />
        </template>
      </div>
      <div class="right">
        <template v-if="isData">
          <CommonForecast :image-path="rightData" />
        </template>
        <template v-else>
          <CommonForecast :image-path="rightImagePath" />
        </template>
      </div>
    </div>
    <div class="gnb" v-if="isData">
      <GNB />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 68vh;
}

.main-content {
  display: flex;
  flex: 1;
  width: 100%;
}

.left {
  flex: 5;
}

.right {
  flex: 1;
}

.gnb {
  width: 100%;
}
</style>
