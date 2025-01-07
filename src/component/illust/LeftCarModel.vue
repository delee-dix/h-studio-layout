<template>
  <img :src="imagePath" alt="Left Car Model" class="image" />
</template>

<script setup lang="ts">
const imagePath = new URL('@/asset/img-left-car-model.png', import.meta.url).href;
</script>

<style scoped>
.image {
  height: 625px !important;
}
</style>