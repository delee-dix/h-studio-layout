<template>
    <div class="leftLayout">
        <img :src="imagePath" alt="Sample Image" />
    </div>
</template>

<script setup lang="ts">
interface IProps {
    imagePath: string;
}
defineProps<IProps>();
</script>

<style scoped>
.leftLayout {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    max-width: 100%;
    max-height: 100%;
    height: 100%;
    object-fit: cover;
    border: 5px solid;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    img {
        width: 100%;
        height: 100%;
    }

    .ottScreen {
        background-color: black;
        display: flex;
        justify-items: center;
        align-items: center;
        object-fit: contain;
        height: 65vh;
    }

    .dataScreen {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 5vh;
    }

    .title {
        font-size: 50px;
        color: blue;
        padding: 20px;
    }

    .image-container {
        display: flex;
        gap: 20px;
    }

    .leftInfo,
    .rightInfo {
        display: flex;
        flex-direction: column;
    }

    img {
        width: 100%;
        height: auto;
        /* max-width: 200px; */
    }

}
</style>
