<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="bg-elegant-50 dark:bg-elegant-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="text-center">
        <div class="text-elegant-700 dark:text-elegant-200 text-sm">
          © {{ currentYear }} Ahmad Shobirin. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
</template>
