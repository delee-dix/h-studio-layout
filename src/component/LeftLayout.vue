<template>
    <div class="leftLayout">
        <div v-if="isOtt" class="ottScreen">
            <img :src="imagePath" alt="Sample Image" />
        </div>
        <div v-else class="dataScreen">
            <div class="title">
                Data Analysis
            </div>
            <div class="imageContainer">
                <div class="leftInfo">
                    <img :src="leftImage" class="leftImage" alt="1" />
                    <img :src="leftChart" class="leftChart" alt="2" />
                </div>
                <div class="rightInfo">
                    <img :src="rightImage" class="rightImage" alt="3" />
                    <img :src="rightChart" class="rightChart" alt="4" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface IProps {
    imagePath?: string | undefined;
    leftImage?: string | undefined;
    leftChart?: string | undefined;
    rightImage?: string | undefined;
    rightChart?: string | undefined;
    isOtt: boolean;
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

    .imageContainer {
        display: flex;
        gap: 20px;
    }

    .leftInfo,
    .rightInfo {
        display: flex;
        flex-direction: column;
    }
}
</style>
