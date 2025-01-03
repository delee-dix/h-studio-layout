<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import LeftLayout from '@/component/LeftLayout.vue';
import RightLayout from '@/component/RightLayout.vue';
import GNB from '@/component/GNB.vue';
import Button from '@/component/Button.vue';

const leftImagePath = [
    new URL('@/asset/camping_left_1.png', import.meta.url).href,
    new URL('@/asset/camping_left_2.png', import.meta.url).href,
    new URL('@/asset/camping_left_3.png', import.meta.url).href,
    new URL('@/asset/camping_left_4.png', import.meta.url).href,
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
    new URL('@/asset/camping_right_7.png', import.meta.url).href,
];
const fullImagePath = new URL('@/asset/camping_full.png', import.meta.url).href;

const currentImageLeft = ref(leftImagePath[0]);
const currentImageRight = ref(rightImagePath[0]);
const isPaused = ref(false);
const showButton = ref(false);

const buttonStyle = ref({ top: "67%", left: "29%", width: "360px", height: "70px", position: "absolute" });

// const updateButtonPosition = (index1: number) => {
//     if (index1 === 4) {
//         buttonPosition.value = { top: "40%", left: "27%", padding: "24px 24px" };
//     } else if (index1 === 6) {
//         buttonPosition.value = { top: "37%", left: "32%", padding: "0px 0px" };
//     } else {
//         buttonPosition.value = { top: "67%", left: "29%", padding: "20px 148px" };
//     }
//     console.log("Button position updated:", buttonPosition.value);
// };

const updateButtonStyle = (index1: number) => {
    if (index1 === 4) {
        buttonStyle.value = {
            ...buttonStyle.value,
            top: "21%",
            left: "27%",
            width: "80px",
            height: "80px",
        };
    } else if (index1 === 6) {
        buttonStyle.value = {
            ...buttonStyle.value,
            top: "15.5%",
            left: "28.5%",
            width: "360px",
            height: "70px",
        };
    } else {
        buttonStyle.value = {
            ...buttonStyle.value,
            top: "47%",
            left: "29%",
            width: "360px",
            height: "70px",
        };
    }
    console.log("Button style updated:", buttonStyle.value);
};

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

    if (index1 === 1 || index1 === 4 || index1 === 6) {
        stopImageSwitch();
        showButton.value = true;
        updateButtonStyle(index1);
        return;
    }
};

const startImageSwitch = () => {
    if (!interval) {
        isPaused.value = false;
        showButton.value = false;
        interval = window.setInterval(switchImages, 1000); // 5000
    }
};

const stopImageSwitch = () => {
    if (interval) {
        clearInterval(interval);
        interval = null;
    }
    isPaused.value = true;
};

// const divideScreen = ref(true);

onMounted(() => { startImageSwitch(); });

onUnmounted(() => { stopImageSwitch(); });
</script>

<template>
    <div class="container">
        <div class="main-content"> <!-- v-if="divideScreen" -->
            <div class="left">
                <LeftLayout :style="{ backgroundImage: `url(${currentImageLeft})` }" />
            </div>
            <div class="right">
                <RightLayout :style="{ backgroundImage: `url(${currentImageRight})` }" />
                <div class="control-button" v-if="showButton" :style="buttonStyle">
                    <!-- <button @click="startImageSwitch">시작하기</button> -->
                    <Button label="Start" @click="startImageSwitch" />
                </div>
            </div>
        </div>
        <!-- <div v-else>
            <div class="full">
                <FullLayout :image-path="fullImagePath" />
            </div>
        </div> -->
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