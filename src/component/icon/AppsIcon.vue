<script setup lang="ts">
import { defineProps, computed } from 'vue';

type IconName = 'navi' | 'media' | 'bluetooth' | 'phone' | 'menu' | 'ott' | 'routines';

const props = defineProps<{
  iconName: IconName;
}>();

const iconPath = computed(() => `/src/asset/img/ic_apps_${props.iconName}.svg`);
</script>

<template>
  <img :src="iconPath" alt="app icons" width="64" height="64" />
</template>
