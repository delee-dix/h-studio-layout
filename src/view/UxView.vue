<script setup lang="ts">
import GNB from '@/layout/GNB.vue';
import StatusBar from '@/layout/StatusBar.vue';

import CommonCluster from '@/component/CommonCluster.vue';
import CommonNavigation from '@/component/CommonNavigation.vue';
import CommonForecast from '@/component/CommonForecast.vue';

const middleImagePath = new URL('@/asset/img/img_middle_full.png', import.meta.url).href;
</script>

<template>
  <div class="container">
    <div class="header">
      <StatusBar />
    </div>
    <div class="main-content">
      <div class="left">
        <CommonCluster />
      </div>
      <div class="middle">
        <CommonNavigation :image-path="middleImagePath" />
      </div>
      <div class="right">
        <CommonForecast />
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
  height: 100%;
  border: 10px solid #5c5c5c;
  overflow: hidden;
  border-radius: 24px;
}

.main-content {
  display: flex;
  flex: 1;
  width: 100%;
}

.left {
  flex: 2;
}

.middle {
  flex: 3;
}

.right {
  flex: 1;
}

.gnb {
  width: 100%;
}
</style>
