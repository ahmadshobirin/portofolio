<script setup lang="ts">
import type { NavigationItem } from '../../types';

defineProps<{
  navigation: NavigationItem[];
  onNavClick: (href: string) => void;
}>();
</script>

<template>
  <div class="hidden md:flex items-center space-x-8">
    <button v-for="item in navigation" 
      :key="item.name"
      @click="onNavClick(item.href)"
      class="text-elegant-700 hover:text-accent-600 px-3 py-2 text-sm font-medium">
      {{ item.name }}
    </button>
  </div>
</template>