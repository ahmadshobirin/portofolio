<script setup lang="ts">
import type { Project } from '../../../types';

defineProps<{
  project: Project;
}>();
</script>

<template>
  <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <h2 class="text-2xl font-bold mb-4">Challenges</h2>
      <ul class="space-y-2">
        <li v-for="challenge in project.details?.challenges" :key="challenge"
          class="flex items-start gap-2">
          <span class="text-secondary mt-1">•</span>
          <span class="text-gray-700">{{ challenge }}</span>
        </li>
      </ul>
    </div>
    <div>
      <h2 class="text-2xl font-bold mb-4">Solutions</h2>
      <ul class="space-y-2">
        <li v-for="solution in project.details?.solutions" :key="solution"
          class="flex items-start gap-2">
          <span class="text-secondary mt-1">•</span>
          <span class="text-gray-700">{{ solution }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>