<script setup lang="ts">
import { defineProps, computed } from 'vue';

type IconName = 'search' | 'bell' | 'bluetooth' | 'wifi' | '5g';

const props = defineProps<{
  iconName: IconName;
}>();

const iconPath = computed(() => `/src/asset/img/ic_status_bar_${props.iconName}.svg`);
const iconAlt = computed(() => `${props.iconName} icon`);
</script>

<template>
  <img :src="iconPath" :alt="iconAlt" />
</template>
