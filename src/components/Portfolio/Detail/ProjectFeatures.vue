<script setup lang="ts">
import type { Project } from '../../../types';

defineProps<{
  project: Project;
}>();
</script>

<template>
  <section>
    <h2 class="text-2xl font-bold mb-4">Key Features</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div v-for="feature in project.details?.features" :key="feature"
        class="bg-white p-4 rounded-lg shadow">
        <p class="text-gray-700">{{ feature }}</p>
      </div>
    </div>
  </section>
</template>