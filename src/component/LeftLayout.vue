<template>
    <div class="leftLayout">
        <img :src="imagePath" alt="Sample Image" />
    </div>
</template>

<script setup lang="ts">
const imagePath = new URL('@/asset/left.png', import.meta.url).href;
</script>

<style scoped></style>
