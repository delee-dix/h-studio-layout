<template>
    <div class="gnb_container">
        <div class="condition_left">
            (car) < 24.5℃> (seat)
        </div>
        <div class="gnb_icon">
            <button @click="showModal = true">Home</button>
            <Modal v-if="showModal" @close="showModal = false">
                <template #page-1>
                    <h2>Page 1</h2>
                    <p>This is the first page</p>
                </template>
                <template #page-2>
                    <h2>Page 2</h2>
                    <p>This is the second page</p>
                </template>
                <template #page-3>
                    <h2>Page 3</h2>
                    <p>This is the third page</p>
                </template>
            </Modal>
            | gnb2 gnb3 gnb4
        </div>
        <div class="condition_right">
            (front) (rear) < 24.5℃> (seat)
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Modal from './Modal.vue';

const showModal = ref(false);
</script>

<style scoped>
.gnb_container {
    display: flex;
    padding: 10px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;

    height: 5vh;
    background-color: black;
    color: white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

.condition_left .gnb_icon .condition_right {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    bottom: 0;

    max-width: 100%;
    max-height: 100%;
}
</style>