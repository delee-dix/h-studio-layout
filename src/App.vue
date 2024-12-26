<script setup lang="ts">
import FullThreeScreen from './view/FullThreeScreen.vue';
import ShortThreeScreen from './view/ShortThreeScreen.vue';
import FullTwoScreen from './view/FullTwoScreen.vue';
import ShortTwoScreen from './view/ShortTwoScreen.vue';
import DataScreen from './view/DataScreen.vue';
</script>

<template>
  <!-- <FullTwoScreen /> -->
  <!-- <ShortTwoScreen /> -->
  <!-- <FullThreeScreen /> -->
  <ShortThreeScreen />
  <!-- <DataScreen /> -->
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
