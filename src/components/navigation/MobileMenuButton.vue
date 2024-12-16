<script setup lang="ts">
defineProps<{
  isOpen: boolean;
  onClick: () => void;
}>();
</script>

<template>
  <div class="md:hidden flex items-center">
    <button @click="onClick"
      class="text-elegant-700 hover:text-accent-600 focus:outline-none">
      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16" />
        <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
</template>