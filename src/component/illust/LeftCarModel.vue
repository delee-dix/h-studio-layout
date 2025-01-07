<template>
  <img :src="imagePath" alt="Left Car Model" class="image" />
</template>

<script setup lang="ts">
const imagePath = new URL('@/asset/img/img_left_car_model.png', import.meta.url).href;
</script>

<style scoped>
.image {
  height: 625px !important;
}
</style>
