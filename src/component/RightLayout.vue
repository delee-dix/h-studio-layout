<template>
    <div class="rightLayout">
        <!-- right -->
        <img :src="imagePath" alt="Sample Image" />
    </div>
</template>

<script setup lang="ts">
const imagePath = new URL('@/asset/right.png', import.meta.url).href;
</script>

<style scoped>
.rightLayout {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover; /* contain? */
}
</style>
