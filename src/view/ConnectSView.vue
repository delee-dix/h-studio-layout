<script setup lang="ts">
import CommonCluster from '@/component/CommonCluster.vue';
import CommonForecast from '@/component/CommonForecast.vue';
import GNB from '@/layout/GNB.vue';

const leftImagePath = new URL('@/asset/img/ic_left_1.png', import.meta.url).href;
const rightImagePath = new URL('@/asset/img/ic_right_1.png', import.meta.url).href;
</script>

<template>
  <div class="container">
    <div class="main-content">
      <div class="left">
        <CommonCluster :image-path="leftImagePath" />
      </div>
      <div class="right">
        <CommonForecast :image-path="rightImagePath" />
      </div>
    </div>
    <div class="gnb">
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
  flex: 1;
}

.right {
  flex: 2;
}

.gnb {
  width: 100%;
}
</style>
