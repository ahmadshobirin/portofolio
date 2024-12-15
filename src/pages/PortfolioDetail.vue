<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { projects } from '../data/portfolio';
import ProjectOverview from '../components/Portfolio/Detail/ProjectOverview.vue';
import ProjectChallenges from '../components/Portfolio/Detail/ProjectChallenges.vue';
import ProjectResults from '../components/Portfolio/Detail/ProjectResults.vue';
import ProjectFeatures from '../components/Portfolio/Detail/ProjectFeatures.vue';
import ProjectSidebar from '../components/Portfolio/Detail/ProjectSidebar.vue';

const route = useRoute();
const projectId = computed(() => route.params.id as string);
const project = computed(() => projects.find(p => p.id === projectId.value));
</script>

<template>
  <div v-if="project" class="min-h-screen bg-gray-50 pt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Header -->
      <div class="mb-12">
        <div class="flex items-center gap-4 mb-6">
          <a href="#/" class="text-secondary hover:text-secondary/80">
            ← Back to Portfolio
          </a>
          <span class="text-sm px-3 py-1 bg-secondary/10 text-secondary rounded-full">
            {{ project.category }}
          </span>
        </div>
        <h1 class="text-4xl font-bold text-gray-900 mb-4">{{ project.title }}</h1>
        <p class="text-xl text-gray-600">{{ project.description }}</p>
      </div>

      <!-- Project Image -->
      <div class="mb-12">
        <img :src="project.image" :alt="project.title" class="w-full h-96 object-cover rounded-lg shadow-lg" />
      </div>

      <!-- Project Details -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <!-- Main Content -->
        <div class="lg:col-span-2 space-y-12">
          <ProjectOverview :project="project" />
          <ProjectChallenges :project="project" />
          <ProjectResults :project="project" />
          <ProjectFeatures :project="project" />
        </div>

        <!-- Sidebar -->
        <ProjectSidebar :project="project" />
      </div>
    </div>
  </div>
</template>