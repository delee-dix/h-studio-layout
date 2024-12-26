<template>
    <div class="middleLayout">
        <img :src="imagePath" alt="Sample Image" />
    </div>
</template>

<script setup lang="ts">
interface IProps {
    imagePath: string;
}
defineProps<IProps>();
</script>

<style scoped>
.middleLayout {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    max-width: 100%;
    max-height: 100%;
    height: 100%;
    border: 5px solid;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    img {
        width: 100%;
        height: 100%;
    }
}
</style>
