<script setup lang="ts">
import { ref } from 'vue';
const showRouteModal = ref(true);

const handleClick = (image: string) => {
  alert(`${image} clicked`);
};
</script>

<template>
  <div>
    <div v-if="showRouteModal" class="modal">
      <div class="modalContent">
        <div class="searchArea">
          <img src="@/asset/img/img_search.png" />
        </div>
        <div class="iconArea">
          <img src="@/asset/img/ic_icon.png" />
        </div>
        <div class="buttonArea">
          <img
            src="@/asset/img/ic_button_1.png"
            alt="Sample Image"
            @click="handleClick('Image 1')"
          />
          <img
            src="@/asset/img/ic_button_2.png"
            alt="Sample Image"
            @click="handleClick('Image 2')"
          />
          <img
            src="@/asset/img/ic_button_3.png"
            alt="Sample Image"
            @click="handleClick('Image 3')"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: absolute;
  top: -10%;
  left: -9%;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modalContent {
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 450px;
  height: 600px;
}

.searchArea {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

.iconArea {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

.buttonArea {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 100%;
}
</style>
