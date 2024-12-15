<script setup lang="ts">
import type { Project } from '../../types';

defineProps<{
  project: Project;
}>();
</script>

<template>
  <div class="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
    <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover" />
    <div class="p-6 space-y-4">
      <span class="text-sm text-accent-600 font-medium">{{ project.category }}</span>
      <h3 class="text-xl font-semibold text-elegant-800">{{ project.title }}</h3>
      <p class="text-elegant-600">{{ project.description }}</p>
      <div class="flex flex-wrap gap-2">
        <span v-for="tech in project.technologies" :key="tech" class="tag">
          {{ tech }}
        </span>
      </div>
      <div class="pt-4">
        <a :href="`#/portfolio/${project.id}`"
          class="btn-primary inline-block">
          View Details
        </a>
      </div>
    </div>
  </div>
</template>