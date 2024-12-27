<script setup lang="ts">
import { ref } from 'vue';
import LeftLayout from '@/component/LeftLayout.vue';
import RightLayout from '@/component/RightLayout.vue';
import GNB from '@/component/GNB.vue';


const leftImage = new URL('@/asset/left_image.png', import.meta.url).href;
const leftChart = new URL('@/asset/left_chart.png', import.meta.url).href;
const rightImage = new URL('@/asset/right_image.png', import.meta.url).href;
const rightChart = new URL('@/asset/right_chart.png', import.meta.url).href;
const rightData = new URL('@/asset/data_QR.png', import.meta.url).href;

const leftImagePath = new URL('@/asset/left_ott.png', import.meta.url).href;
const rightImagePath = new URL('@/asset/right_full.png', import.meta.url).href;

const isData = ref(false);

</script>

<template>
    <div class="container">
        <div class="main-content">
            <div class="left">
                <template v-if="isData">
                    <LeftLayout :left-image="leftImage" :left-chart="leftChart" :right-image="rightImage"
                        :right-chart="rightChart" :is-data="isData" />
                </template>
                <template v-else>
                    <LeftLayout :image-path="leftImagePath" :is-data="isData"/>
                </template>
            </div>
            <div class="right">
                <template v-if="isData">
                    <RightLayout :image-path="rightData" />
                </template>
                <template v-else>
                    <RightLayout :image-path="rightImagePath" />
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