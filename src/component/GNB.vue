<template>
    <div class="gnb_container">
        <div class="condition_left">
            <img src="@/asset/car_front.png" @click="toggleRoutine"/>
            < 24.5℃>
                <img src="@/asset/seat.png" @click="toggleSeatModal"/>
        </div>
        <div class="gnb_icon">
            <img @click="toggleSwipeModal" src="@/asset/menu.png" />
            <!-- if, 해당 시나리오일 때 조건 필요! -->
            <Modal v-if="swipeModal" @close="toggleSwipeModal">
                <template #page-1>
                    <h2>Page 1</h2>
                    <p>This is the first page</p>
                    <button @click="toggleSwipeModal">Next</button>
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
            | <img src="@/asset/mobile.png">
            <img src="@/asset/routine.png">
            <img src="@/asset/wavve.png">
            <img src="@/asset/settings.png" />
        </div>
        <div class="condition_right">
            <img src="@/asset/rear.png" @click="toggleACModal"/>
            < 24.5℃>
                <img src="@/asset/seat.png" @click="toggleSeatModal"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Modal from './Modal.vue';

// Apps
const swipeModal = ref(false);
const toggleSwipeModal = () => {
    swipeModal.value = !swipeModal.value;
};

// Select Routine
const toggleRoutine = () => {
    // routineModal.value = !routineModal.value;
}

const toggleSeatModal = () => {
    // seatModal.value = !seatModal.value;
}

const toggleACModal = () => {
    // ACModal.value = ACModal.value;
}
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

.condition_left {
    display: flex;
    align-items: center;
    gap: 40px;
}

.condition_right {
    display: flex;
    align-items: center;
    gap: 40px;
}

.gnb_icon {
    display: flex;
    align-items: center;
    gap: 40px;
}

img {
    width: 40px;
    height: 40px;
}
</style>