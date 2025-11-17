<script setup lang="ts">
const collaborationTypes = [
  'Backend Development & API Design',
  'System Architecture & Scalability',
  'Technical Consulting & Code Reviews',
  'Performance Optimization'
];
</script>

<template>
  <div class="text-center max-w-3xl mx-auto mb-12">
    <h2 class="text-3xl font-bold text-elegant-800 dark:text-elegant-100 mb-4">Let's Build Something Amazing Together</h2>
    <p class="text-elegant-600 dark:text-elegant-300 mb-6">
      I specialize in creating robust, scalable backend solutions that power modern applications.
      Whether you need API development, system architecture, or technical consultation,
      I'm here to help turn your vision into reality.
    </p>
    <div class="grid grid-cols-2 gap-4">
      <div v-for="type in collaborationTypes" :key="type" 
        class="bg-elegant-50 dark:bg-elegant-800 p-4 rounded-lg border border-elegant-100 dark:border-elegant-700">
        <span class="text-elegant-700 dark:text-elegant-200">{{ type }}</span>
      </div>
    </div>
  </div>
</template>