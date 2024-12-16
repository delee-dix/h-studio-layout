<template>
    <div class="leftLayout">
        <!-- left -->
        <img :src="imagePath" alt="Sample Image" />
    </div>
</template>

<script setup lang="ts">
const imagePath = new URL('@/asset/left_full.png', import.meta.url).href;
</script>

<style scoped>
.leftLayout {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover; /* contain? */
}
</style>
