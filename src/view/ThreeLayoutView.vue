<script setup lang="ts">
import Cluster from '@/component/Cluster.vue';
import Navigation from '@/component/Navigation.vue';
import Forecast from '@/component/Forecast.vue';
import GNB from '@/component/GNB.vue';

const leftImagePath = new URL('@/asset/left_full.png', import.meta.url).href;
const middleImagePath = new URL('@/asset/middle_full.png', import.meta.url).href;
const rightImagePath = new URL('@/asset/right_full.png', import.meta.url).href;
</script>

<template>
    <div class="container">
        <div class="main-content">
            <div class="left">
                <Cluster :image-path="leftImagePath" />
            </div>
            <div class="middle">
                <Navigation :image-path="middleImagePath" />
            </div>
            <div class="right">
                <Forecast :image-path="rightImagePath" />
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
    height: 100%;
    border: 10px solid #5C5C5C;
    overflow: hidden;
    border-radius: 24px;
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
    width: 100%;
}
</style>