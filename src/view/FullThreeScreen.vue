<script setup lang="ts">
import LeftLayout from '@/component/LeftLayout.vue';
import MiddleLayout from '@/component/MiddleLayout.vue';
import RightLayout from '@/component/RightLayout.vue';
import GNB from '@/component/GNB.vue';

const leftImagePath = new URL('@/asset/left_full.png', import.meta.url).href;
const middleImagePath = new URL('@/asset/middle_full.png', import.meta.url).href;
const rightImagePath = new URL('@/asset/right_full.png', import.meta.url).href;
</script>

<template>
    <div class="container">
        <div class="main-content">
            <div class="left">
                <LeftLayout :image-path="leftImagePath" />
            </div>
            <div class="middle">
                <MiddleLayout :image-path="middleImagePath" />
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
    height: 68vh;
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
    width: 192.5%;
}
</style>