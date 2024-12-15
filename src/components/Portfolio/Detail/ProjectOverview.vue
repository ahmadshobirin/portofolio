<script setup lang="ts">
import type { Project } from '../../../types';

defineProps<{
  project: Project;
}>();
</script>

<template>
  <section>
    <h2 class="text-2xl font-bold mb-4 text-elegant-800">Project Overview</h2>
    <p class="text-elegant-700 leading-relaxed">{{ project.details?.overview }}</p>
  </section>
</template>