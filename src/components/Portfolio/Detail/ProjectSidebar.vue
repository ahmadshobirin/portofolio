<script setup lang="ts">
import type { Project } from '../../../types';

defineProps<{
  project: Project;
}>();
</script>

<template>
  <div class="space-y-8">
    <!-- Technologies -->
    <section>
      <h2 class="text-2xl font-bold mb-4">Technologies Used</h2>
      <div class="flex flex-wrap gap-2">
        <span v-for="tech in project.technologies" :key="tech"
          class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
          {{ tech }}
        </span>
      </div>
    </section>

    <!-- Technical Details -->
    <section>
      <h2 class="text-2xl font-bold mb-4">Technical Details</h2>
      <ul class="space-y-2">
        <li v-for="detail in project.details?.technicalDetails" :key="detail"
          class="flex items-start gap-2">
          <span class="text-secondary mt-1">•</span>
          <span class="text-gray-700">{{ detail }}</span>
        </li>
      </ul>
    </section>

    <!-- Links -->
    <section v-if="project.details?.demoUrl || project.details?.githubUrl">
      <h2 class="text-2xl font-bold mb-4">Project Links</h2>
      <div class="space-y-3">
        <a v-if="project.details?.demoUrl"
          :href="project.details.demoUrl"
          target="_blank"
          class="block w-full text-center bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary/90 transition-colors">
          View Live Demo
        </a>
        <a v-if="project.details?.githubUrl"
          :href="project.details.githubUrl"
          target="_blank"
          class="block w-full text-center border-2 border-secondary text-secondary px-4 py-2 rounded-md hover:bg-secondary/10 transition-colors">
          View on GitHub
        </a>
      </div>
    </section>
  </div>
</template>