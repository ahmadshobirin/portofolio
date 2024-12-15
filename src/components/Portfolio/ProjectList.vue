<script setup lang="ts">
import ProjectCard from './ProjectCard.vue';
import type { Project } from '../../types';

defineProps<{
  projects: Project[];
  category: string;
}>();
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <ProjectCard 
      v-for="project in projects" 
      :key="project.id" 
      :project="project" 
    />
  </div>
</template>