<script setup lang="ts">
import { ref } from 'vue';
import RouteModal from './RouteModal.vue';

const isZoomed = ref(false); // 확대 여부 상태
const zoomScale = ref(1); // 확대 배율 상태
const transformOrigin = ref('center center'); // 확대 기준 좌표

const toggleZoom = (event: MouseEvent) => {
  isZoomed.value = !isZoomed.value;
  zoomScale.value = isZoomed.value ? 3 : 1; // 확대 시 2배, 축소 시 원래 크기

  // 클릭한 좌표를 기준으로 transform-origin 계산
  const rect = (event.target as HTMLElement).getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 100;
  const y = ((event.clientY - rect.top) / rect.height) * 100;
  transformOrigin.value = `${x}% ${y}%`; // 좌표를 퍼센트로 변환
};

interface IProps {
  imagePath?: string | undefined;
}
defineProps<IProps>();
</script>

<template>
  <div class="middle-layout">
    <!-- <RouteModal /> -->
    <div class="image-container" @click="toggleZoom">
      <img
        :style="{
          transform: `scale(${zoomScale})`,
          transformOrigin: transformOrigin,
        }"
        :src="imagePath"
        alt="Zoomable Image"
      />
    </div>
  </div>
</template>

<style scoped>
.middle-layout {
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

.image-container {
  position: relative;
  display: inline-block;
  overflow: hidden;
}

img {
  width: 100%;
  height: auto;
  cursor: pointer;
  transition: transform 0.3s ease;
}
</style>
