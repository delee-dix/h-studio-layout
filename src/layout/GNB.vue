<script setup lang="ts">
import { ref } from 'vue';

import Modal from '@/component/CommonModal.vue';

import AppsIcon from '@/component/icon/AppsIcon.vue';
import GnbIcon from '@/component/icon/GnbIcon.vue';
import ArrowLeftIcon from '@/component/icon/ArrowLeftIcon.vue';
import ArrowRightIcon from '@/component/icon/ArrowRightIcon.vue';

const showModal = ref(false);
</script>

<template>
  <div class="gnb-container">
    <div class="condition-left">
      <GnbIcon :iconName="'car'" />
      <div class="temp">
        <ArrowLeftIcon />
        24.5°
        <ArrowRightIcon />
      </div>
      <GnbIcon :iconName="'aircon'" />
      <GnbIcon :iconName="'heater_right'" />
    </div>
    <div class="gnb-icon">
      <div class="gnb-icon-left">
        <AppsIcon :iconName="'navi'" />
        <AppsIcon :iconName="'media'" />
        <AppsIcon :iconName="'bluetooth'" />
        <AppsIcon :iconName="'phone'" />
        <AppsIcon :iconName="'menu'" @click="showModal = true" />
      </div>
      <div class="vertical"></div>
      <div class="gnb-icon-right">
        <AppsIcon :iconName="'ott'" />
        <AppsIcon :iconName="'routines'" />
      </div>
    </div>
    <div class="condition-right">
      <GnbIcon :iconName="'front'" />
      <GnbIcon :iconName="'rear'" />
      <div class="temp">
        <ArrowLeftIcon />
        24.5°
        <ArrowRightIcon />
      </div>
      <GnbIcon :iconName="'heater_left'" />
    </div>
  </div>
  <Modal v-if="showModal" @close="showModal = false">
    <template #page-1>
      <h2>Page 1</h2>
      <p>This is the first page</p>
    </template>
    <template #page-2>
      <h2>Page 2</h2>
      <p>This is the second page</p>
    </template>
    <template #page-3>
      <h2>Page 3</h2>
      <p>This is the third page</p>
    </template>
  </Modal>
</template>

<style scoped>
.gnb-container {
  display: flex;
  padding: 37px 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-left: 310px;
  padding-right: 360px;
  background-color: white;
  color: black;

  .gnb-icon {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 36px;

    .gnb-icon-left {
      display: flex;
      flex-direction: row;
      gap: 42px;
    }

    .gnb-icon-right {
      display: flex;
      flex-direction: row;
      gap: 42px;
    }

    .vertical {
      height: 41px;
      border: 2.47px solid #e5e5e5;
      border-radius: 100px;
    }
  }

  .condition-left,
  .condition-right {
    display: flex;
    flex-direction: row;
    gap: 40px;

    .temp {
      font-size: 40px;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 24px;
    }
  }
}
</style>
