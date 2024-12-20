<script setup lang="ts">
import LeftLayout from '@/component/LeftLayout.vue';
import RightLayout from '@/component/RightLayout.vue';
import GNB from '@/component/GNB.vue';
import { ref } from 'vue';

const leftImage = new URL('@/asset/left_image.png', import.meta.url).href;
const leftChart = new URL('@/asset/left_chart.png', import.meta.url).href;
const rightImage = new URL('@/asset/right_image.png', import.meta.url).href;
const rightChart = new URL('@/asset/right_chart.png', import.meta.url).href;

const leftImagePath = new URL('@/asset/left_full.png', import.meta.url).href;
const rightImagePath = new URL('@/asset/data_QR.png', import.meta.url).href;

const isOTT = ref(false);
</script>

<template>
    <div class="container">
        <div class="main-content">
            <div class="left">
                <div v-if="isOTT">
                    <LeftLayout :image-path="leftImagePath" />
                </div>
                <div v-else>
                    <LeftLayout :left-image="leftImage" :left-chart="leftChart" :right-image="rightImage"
                        :right-chart="rightChart" />
                </div>
            </div>
            <div class="right">
                <RightLayout :image-path="rightImagePath" />
            </div>
        </div>
        <div class="gnb" v-if="isOTT">
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