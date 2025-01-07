<script setup lang="ts">
import BellIcon from '@/component/icon/BellIcon.vue';
import BluetoothIcon from '@/component/icon/BluetoothIcon.vue';
import LteIcon from '@/component/icon/LteIcon.vue';
import SearchIcon from '@/component/icon/SearchIcon.vue';
import WifiIcon from '@/component/icon/WifiIcon.vue';
</script>

<template>
  <div class="status-bar">
    <div class="content">
      <SearchIcon />
      <BellIcon />
      <BluetoothIcon />
      <WifiIcon />
      <LteIcon />
      <div class="time">오후 2:01</div>
    </div>
  </div>
</template>

<style scoped>
.status-bar {
  display: flex;
  width: 100%;
  padding: 12px 24px;
  height: 88px;
  align-items: center;

  .content {
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    gap: 22px;
    width: 100%;
    height: 64px;
    background-color: white;

    .time {
      font-size: 28px;
      font-weight: 500;
      color: #1c1c1d;
    }
  }
}
</style>
