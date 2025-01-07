<script setup lang="ts">
const imagePath = new URL('@/asset/img/img_gear_bar.png', import.meta.url).href;
</script>

<template>
  <img :src="imagePath" alt="Left Car Model" class="image" />
</template>

<style scoped>
.image {
  width: 120px !important;
  height: 800px !important;
}
</style>
