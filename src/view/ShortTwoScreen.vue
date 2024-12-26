<script setup lang="ts">
import LeftLayout from '@/component/LeftLayout.vue';
import RightLayout from '@/component/RightLayout.vue';
import GNB from '@/component/GNB.vue';

const leftImagePath = new URL('@/asset/left_2.png', import.meta.url).href;
const rightImagePath = new URL('@/asset/right_2.png', import.meta.url).href;
</script>

<template>
    <div class="container">
        <div class="main-content">
            <div class="left">
                <LeftLayout :image-path="leftImagePath" />
            </div>
            <div class="right">
                <RightLayout :image-path="rightImagePath" />
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
    height: 50vh;
}

.main-content {
    display: flex;
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