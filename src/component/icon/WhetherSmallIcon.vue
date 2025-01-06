<script setup lang="ts">
import { defineProps, computed } from 'vue';


type IconName = 'sun' | 'sunset' | 'moon';

const props = defineProps<{
  iconName: IconName;
}>();

const iconPath = computed(() => `/src/asset/ic-whether-${props.iconName}.svg`);
</script>

<template>
  <img :src="iconPath" alt="" width="32" height="32" />
</template>