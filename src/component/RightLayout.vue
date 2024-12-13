<template>
    <div class="rightLayout">
        <img :src="imagePath" alt="Sample Image" />
    </div>
</template>

<script setup lang="ts">
const imagePath = new URL('@/asset/right.png', import.meta.url).href;
</script>

<style scoped></style>
