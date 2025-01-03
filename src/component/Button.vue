<template>
    <div class="button" @click="$emit('click')">
        {{ label }}
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue';

defineProps({
    label: {
        type: String,
        required: true,
    },
});

defineEmits(['click']);

// const buttonPosition = ref({ top: "67%", left: "26%" });

// const updateButtonPosition = (index1: number) => {
//     if (index1 === 4) {
//         buttonPosition.value = { top: "40%", left: "27%" };
//     } else if (index1 === 6) {
//         buttonPosition.value = { top: "35%", left: "26%" };
//     } else {
//         buttonPosition.value = { top: "67%", left: "26%" };
//     }
//     console.log("Button position updated:", buttonPosition.value);
// };
</script>

<style scoped>
.button {
    position: absolute;
    width: 360px;
    height: 70px;
    /* top: 68.7%;
    left: 32.1%; */
    transform: translate(-25%, 425%);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 23px 140px;
    font-size: 20px;
    cursor: pointer;
    /* background-color: rgba(31, 90, 235, 1); */
    background-color: lightcoral;
    color: white;
    border-radius: 10px;
    border: none;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
}

.button:hover {
    background-color: rgba(31, 90, 255, 0.9);
}
</style>