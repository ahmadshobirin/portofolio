<script setup lang="ts">
import type { NavigationItem } from '../../types';

defineProps<{
  isOpen: boolean;
  navigation: NavigationItem[];
  onNavClick: (href: string) => void;
}>();
</script>

<template>
  <div v-show="isOpen" class="md:hidden">
    <div class="px-2 pt-2 pb-3 space-y-1">
      <button v-for="item in navigation" 
        :key="item.name"
        @click="onNavClick(item.href)"
        class="block w-full text-left px-3 py-2 text-base font-medium text-elegant-700 hover:text-accent-600 hover:bg-elegant-50">
        {{ item.name }}
      </button>
    </div>
  </div>
</template>