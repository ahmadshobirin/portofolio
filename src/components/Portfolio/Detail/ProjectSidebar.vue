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
      <h2 class="text-2xl font-bold mb-4 text-elegant-800">Technologies Used</h2>
      <div class="flex flex-wrap gap-2">
        <span v-for="tech in project.technologies" :key="tech" class="tag">
          {{ tech }}
        </span>
      </div>
    </section>

    <!-- Technical Details -->
    <section>
      <h2 class="text-2xl font-bold mb-4 text-elegant-800">Technical Details</h2>
      <ul class="space-y-2">
        <li v-for="detail in project.details?.technicalDetails" :key="detail"
          class="flex items-start gap-2">
          <span class="text-accent-600 mt-1">•</span>
          <span class="text-elegant-700">{{ detail }}</span>
        </li>
      </ul>
    </section>

    <!-- Links -->
    <section v-if="project.details?.demoUrl || project.details?.githubUrl">
      <h2 class="text-2xl font-bold mb-4 text-elegant-800">Project Links</h2>
      <div class="space-y-3">
        <a v-if="project.details?.demoUrl"
          :href="project.details.demoUrl"
          target="_blank"
          class="btn-primary block w-full text-center">
          View Live Demo
        </a>
        <a v-if="project.details?.githubUrl"
          :href="project.details.githubUrl"
          target="_blank"
          class="btn-secondary block w-full text-center">
          View on GitHub
        </a>
      </div>
    </section>
  </div>
</template>