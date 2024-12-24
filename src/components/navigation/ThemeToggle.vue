<script setup lang="ts">
import { useTheme } from '../../composables/useTheme';

const { isDark, toggleTheme } = useTheme();
</script>

<template>
  <button
    @click="toggleTheme"
    class="p-2 rounded-lg transition-colors duration-200 hover:bg-elegant-100 dark:hover:bg-elegant-800"
    :aria-label="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
  >
    <!-- Sun icon -->
    <svg
      v-if="!isDark"
      class="w-5 h-5 text-elegant-600 hover:text-elegant-800"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
    <!-- Moon icon -->
    <svg
      v-else
      class="w-5 h-5 text-elegant-200 hover:text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  </button>
</template>