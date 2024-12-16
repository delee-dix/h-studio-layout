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
    height: 68vh; /* 전체 화면 : 100vh, 축소 화면 : 68vh */
}

.main-content {
    display: flex;
    flex: 1;
    width: 100%;
}

.left {
    flex: 2;    /* 화면 비율 조정 가능 */
    border: 5px solid;
    border-radius: 10px;
}

.middle {
    flex: 3;    /* 화면 비율 조정 가능 */
    border: 5px solid;
    border-radius: 10px;
}

.right {
    flex: 1;    /* 화면 비율 조정 가능 */
    border: 5px solid;
    border-radius: 10px;
}

.gnb {
    width: 100%;
    height: 5vh;
    background-color: black;
    color: white;
    border: 1px solid;
    border-radius: 10px;
}
</style>