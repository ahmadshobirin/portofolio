<script setup lang="ts">
import type { Project } from '../../../types';

defineProps<{
  project: Project;
}>();
</script>

<template>
  <section>
    <h2 class="text-2xl font-bold mb-4">Project Overview</h2>
    <p class="text-gray-700">{{ project.details?.overview }}</p>
  </section>
</template>