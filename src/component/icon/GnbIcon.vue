<script setup lang="ts">
import { defineProps, computed } from 'vue';

type IconName = 'car' | 'aircon' | 'heater_right' | 'heater_left' | 'front' | 'rear';

const props = defineProps<{
  iconName: IconName;
}>();

const iconPath = computed(() => `/src/asset/img/ic_gnb_${props.iconName}.svg`);
</script>

<template>
  <img :src="iconPath" alt="" width="64" height="64" />
</template>
