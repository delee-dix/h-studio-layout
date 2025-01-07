<script setup lang="ts">
import LeftLayout from '@/component/LeftLayout.vue';
import MiddleLayout from '@/component/MiddleLayout.vue';
import RightLayout from '@/component/RightLayout.vue';
import GNB from '@/component/GNB.vue';

const leftImagePath = new URL('@/asset/route_left.png', import.meta.url).href;
const middleImagePath = new URL('@/asset/route_middle.png', import.meta.url).href;
const rightImagePath = new URL('@/asset/route_right.png', import.meta.url).href;
</script>

<template>
    <div class="container">
        <div class="content">
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
    height: 50vh;
}

.content {
    display: flex;
    flex: 1;
    width: 100%;
}

.gnb {
    width: 100%;
}
</style>