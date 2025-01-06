<template>
  <img :src="imagePath" alt="Left Car Model" class="image" />
</template>

<script setup lang="ts">
const imagePath = new URL('@/asset/img-gear-bar.png', import.meta.url).href;
</script>

<style scoped>
.image {
  width: 120px !important;
  height: 800px !important;
}
</style>