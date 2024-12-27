<template>
    <div class="rightLayout">
        <!-- <img :src="imagePath" alt="Sample Image" /> -->
         <!-- if, camping-->
         <div :style="{ backgroundImage: backgroundImage }"></div>
    </div>
</template>

<script setup lang="ts">
interface IProps {
    imagePath?: string | undefined;
    backgroundImage?: string;
}
defineProps<IProps>();
</script>

<style scoped>
.rightLayout {
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
    background-repeat: no-repeat;

    img {
        width: 100%;
        height: 100%;
    }
}
</style>
