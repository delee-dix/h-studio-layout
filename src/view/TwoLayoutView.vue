<script setup lang="ts">
import Cluster from '@/component/Cluster.vue';
import Forecast from '@/component/Forecast.vue';
import GNB from '@/component/GNB.vue';

const leftImagePath = new URL('@/asset/img/ic_left_1.png', import.meta.url).href;
const rightImagePath = new URL('@/asset/img/ic_right_1.png', import.meta.url).href;
</script>

<template>
  <div class="container">
    <div class="main-content">
      <div class="left">
        <Cluster :image-path="leftImagePath" />
      </div>
      <div class="right">
        <Forecast :image-path="rightImagePath" />
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
