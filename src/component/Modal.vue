<script setup lang="ts">
import { ref, defineEmits } from 'vue';

const currentPage = ref(0);
const pages = [1, 2, 3];

const startX = ref(0);
const diffX = ref(0);
const minSwipeDistance = 50;

const emit = defineEmits(['close']);
const close = () => {
    console.log("closeModal emitted");
    emit("close");
};

function onTouchStart(event: TouchEvent) {
    startX.value = event.touches[0].clientX;
    diffX.value = 0;
}

function onTouchMove(event: TouchEvent) {
    const moveX = event.touches[0].clientX;
    diffX.value = moveX - startX.value;
}

function onTouchEnd() {
    if (diffX.value > minSwipeDistance) {
        currentPage.value =
            (currentPage.value - 1 + pages.length) % pages.length;
    } else if (diffX.value < -minSwipeDistance) {
        currentPage.value = (currentPage.value + 1) % pages.length;
    }
    startX.value = 0;
    diffX.value = 0;
}
</script>

<template>
    <div class="modal-overlay" @click.self="close">
        <div class="modal" @click.stop>
            <div class="slider-container" :style="{ transform: `translateX(-${currentPage * 100}%)` }"
                @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd">
                <div v-for="(page, index) in pages" :key="index" class="page">
                    <slot :name="`page-${index + 1}`"></slot>
                </div>
            </div>
            <div class="dots-container">
                <span v-for="(page, index) in pages" :key="index" class="dot" :class="{ active: currentPage === index }"
                    @click="currentPage = index"></span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.modal-overlay {
    position: absolute;
    top: 0;
    right: 16%;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal {
    background: rgba(0, 0, 0, 0.5);;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    width: 100%;
    max-width: 500px;
    overflow: hidden;
}

.slider-container {
    display: flex;
    transition: transform 1s ease-in-out;
    width: 100%;
}

.page {
    flex: 0 0 100%;
    /* 각 페이지는 100% 너비를 차지 */
    padding: 20px;
    text-align: center;
    box-sizing: border-box;
}

.dots-container {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}

.dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: grey;
    margin: 0 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.dot.active {
    background-color: white;
}
</style>
