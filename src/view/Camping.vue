<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import LeftLayout from '@/component/LeftLayout.vue';
import RightLayout from '@/component/RightLayout.vue';
import GNB from '@/component/GNB.vue';

const leftImagePath = [
    new URL('@/asset/camping_left_1.png', import.meta.url).href,
    new URL('@/asset/camping_left_2.png', import.meta.url).href,
    new URL('@/asset/camping_left_3.png', import.meta.url).href,
    new URL('@/asset/camping_left_4.png', import.meta.url).href,
    new URL('@/asset/camping_left_4.png', import.meta.url).href,
    new URL('@/asset/camping_left_4.png', import.meta.url).href,
];
const rightImagePath = [
    new URL('@/asset/camping_right_1.png', import.meta.url).href,
    new URL('@/asset/camping_right_2.png', import.meta.url).href,
    new URL('@/asset/camping_right_3.png', import.meta.url).href,
    new URL('@/asset/camping_right_4.png', import.meta.url).href,
    new URL('@/asset/camping_right_5.png', import.meta.url).href,
    new URL('@/asset/camping_right_6.png', import.meta.url).href,
];

const currentImageLeft = ref(leftImagePath[0]);
const currentImageRight = ref(rightImagePath[0]);

let index1 = 0;
let index2 = 0;
let interval: number;

const switchImages = () => {
    if (index1 < leftImagePath.length - 1) {
        index1++;
        currentImageLeft.value = leftImagePath[index1];
    }
    if (index2 < rightImagePath.length - 1) {
        index2++;
        currentImageRight.value = rightImagePath[index2];
    }
};

onMounted(() => {
    interval = window.setInterval(() => {
        switchImages();
        if (index1 === leftImagePath.length - 1 && index2 === rightImagePath.length - 1) {
            clearInterval(interval);
            console.log("Images have stopped switching.");
        }
    }, 5000);
});
</script>

<template>
    <div class="container">
        <div class="main-content">
            <div class="left">
                <LeftLayout :style="{ backgroundImage: `url(${currentImageLeft})` }" />
                <!-- <LeftLayout :backgroundImage="`url(${currentImageLeft})`" /> -->
            </div>
            <div class="right">
                <RightLayout :style="{ backgroundImage: `url(${currentImageRight})` }" />
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
    width: 73%;
    height: 77%;
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