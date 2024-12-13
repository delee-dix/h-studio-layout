<script setup lang="ts">
import LeftLayout from '@/component/LeftLayout.vue';
import RightLayout from '@/component/RightLayout.vue';
import GNB from '@/component/GNB.vue';
</script>

<template>

    <body>
        <div class="container">
            <div class="main-content">
                <div class="left">
                    <LeftLayout />
                </div>
                <div class="right">
                    <RightLayout />
                </div>
            </div>
            <div class="gnb">
                <GNB />
            </div>
        </div>
    </body>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 75vh;
}

.main-content {
    display: flex;
    flex: 1;
    width: 100%;
}

.left {
    flex: 1; /* 화면 비율 조정 가능 */
    border: 5px solid;
    border-radius: 10px;
    justify-content: center;

    align-items: center;
}

.right {
    flex: 2; /* 화면 비율 조정 가능 */
    border: 5px solid;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
}

.gnb {
    display: flex;
    width: 100%;
    height: 5vh;
    background-color: black;
    color: white;
    border: 1px solid;
    border-radius: 10px;
}
</style>