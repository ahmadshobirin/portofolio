<script setup lang="ts">
import { computed } from 'vue';
import { projects } from '../data/portfolio';
import { useRoute } from 'vue-router';

const route = useRoute();
const projectId = computed(() => route.params.id as string);

const project = computed(() => 
  projects.find(p => p.id === projectId.value)
);
</script>

<template>
  <div v-if="project" class="min-h-screen bg-gray-50 pt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Header -->
      <div class="mb-12">
        <div class="flex items-center gap-4 mb-6">
          <a href="#/portfolio" class="text-secondary hover:text-secondary/80">
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
          <!-- Overview -->
          <section>
            <h2 class="text-2xl font-bold mb-4">Project Overview</h2>
            <p class="text-gray-700">{{ project.details?.overview }}</p>
          </section>

          <!-- Challenges & Solutions -->
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

          <!-- Results -->
          <section>
            <h2 class="text-2xl font-bold mb-4">Key Results</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div v-for="result in project.details?.results" :key="result"
                class="bg-white p-4 rounded-lg shadow">
                <p class="text-gray-700">{{ result }}</p>
              </div>
            </div>
          </section>

          <!-- Features -->
          <section>
            <h2 class="text-2xl font-bold mb-4">Key Features</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div v-for="feature in project.details?.features" :key="feature"
                class="bg-white p-4 rounded-lg shadow">
                <p class="text-gray-700">{{ feature }}</p>
              </div>
            </div>
          </section>
        </div>

        <!-- Sidebar -->
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
      </div>
    </div>
  </div>
</template>