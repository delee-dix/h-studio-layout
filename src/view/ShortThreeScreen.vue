<script setup lang="ts">
import LeftLayout from '@/component/LeftLayout.vue';
import MiddleLayout from '@/component/MiddleLayout.vue';
import RightLayout from '@/component/RightLayout.vue';
import GNB from '@/component/GNB.vue';
</script>

<template>
    <div class="container">
        <div class="main-content">
            <div class="left">
                <LeftLayout />
            </div>
            <div class="middle">
                <MiddleLayout />
            </div>
            <div class="right">
                <RightLayout />
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
    height: 50%;    /* 전체 화면 : 68vh, 축소 화면 : 50% */
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