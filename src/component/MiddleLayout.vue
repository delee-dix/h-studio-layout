<template>
    <div class="middleLayout">
        <img :src="imagePath" alt="Sample Image" ref="mapImage" class="map" />
        <RouteModal />
        <div class="points">
            <button v-for="point in points" :key="point.id" :style="getButtonStyle(point)" @click="handleClick('Point')">
                ★
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import RouteModal from './routeModal.vue';

import { ref, type Ref } from 'vue';

interface Point {
    id: number;
    x: number;
    y: number;
}

const points = ref<Point[]>([
    { id: 1, x: 1580, y: 160 },
    { id: 2, x: 1760, y: 175 },
    { id: 3, x: 1560, y: 630 },
]);

const mapImage: Ref<HTMLImageElement | null> = ref(null);
const scale = ref(1.2);

const getButtonStyle = (point: Point) => {
    return {
        position: 'absolute',
        top: `${point.y}px`,
        left: `${point.x}px`,
        transform: `scale(${scale.value})`,
    } as Record<string, string>;
};

const handleClick = (point: string) => {
    alert(`${point} clicked`);
};

interface IProps {
    imagePath?: string | undefined;
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
