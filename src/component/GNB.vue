<template>
    <div class="gnb_container">
        <div class="condition_left">
            (car) < 24.5℃ > (seat)
        </div>
        <div class="gnb_icon">
            gnb1 | gnb2 | gnb3 | gnb4
        </div>
        <div class="condition_right">
            (front) (rear) < 24.5℃ > (seat)
        </div>
    </div>
</template>

<script setup lang="ts"></script>

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

.condition_left
.gnb_icon
.condition_right {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    bottom: 0;

    max-width: 100%;
    max-height: 100%;
    object-fit: cover;    /* contain? */
}
</style>