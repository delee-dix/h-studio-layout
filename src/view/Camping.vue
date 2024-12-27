<script setup lang="ts">
import { ref, onMounted, onUnmounted, toValue } from 'vue';
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
const isPaused = ref(false);
const showButton = ref(false);

let index1 = 0;
let index2 = 0;
let interval: number | null = null;

const switchImages = () => {
    if (isPaused.value) return;

    if (index1 < leftImagePath.length - 1) {
        index1++;
    }
    if (index2 < rightImagePath.length - 1) {
        index2++;
    }

    currentImageLeft.value = leftImagePath[index1];
    currentImageRight.value = rightImagePath[index2];

    if (index1 === 1 || index1 === 4) {
        stopImageSwitch();
        showButton.value = true;
        return;
    }
};

const startImageSwitch = () => {
    if (!interval) {
        isPaused.value = false;
        showButton.value = false;
        interval = window.setInterval(switchImages, 5000);
    }
};

const stopImageSwitch = () => {
    if (interval) {
        clearInterval(interval);
        interval = null;
    }
    isPaused.value = true;
};

onMounted(() => { startImageSwitch(); });

onUnmounted(() => { stopImageSwitch(); });
</script>

<template>
    <div class="container">
        <div class="main-content">
            <div class="left">
                <LeftLayout :style="{ backgroundImage: `url(${currentImageLeft})` }" />
            </div>
            <div class="right">
                <RightLayout :style="{ backgroundImage: `url(${currentImageRight})` }" />
                <div class="control-button" v-if="showButton">
                    <button @click="startImageSwitch">시작하기</button>
                </div>
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

.control-button {
    position: absolute;
    top: 68%;
    left: 27.8%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        border: none;
        border-radius: 5px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
    }

    button:hover {
        background-color: rgba(0, 0, 0, 0.8);
    }
}

.gnb {
    width: 100%;
}
</style>