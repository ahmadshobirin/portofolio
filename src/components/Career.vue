<script setup lang="ts">
import { careerPositions } from '../data/portfolio';
</script>

<template>
  <section id="career" class="bg-white dark:bg-elegant-900 pt-16">
    <div class="section-container">
      <h2 class="section-title">Career Journey</h2>
      <!-- <div class="flex justify-end mb-6">
        <a href="/CV Ahmad Shobirin 2023.pdf" target="_blank" rel="noopener noreferrer" class="btn-secondary">
          Download CV (PDF)
        </a>
      </div> -->
      <div class="relative space-y-12 pl-12">
        <div class="absolute left-0 top-0 bottom-0 border-l-2 border-elegant-300 dark:border-elegant-700"></div>
        <div v-for="(position, index) in careerPositions" :key="index"
          class="relative pb-8 last:pb-0">
          <div class="absolute w-8 h-8 rounded-full left-0 -translate-x-1/2 top-3 z-0 
                      bg-gradient-to-r from-accent-200 via-accent-400 to-accent-500 opacity-60 dark:opacity-50 
                      saturate-150 brightness-110"></div>
          <div class="relative space-y-2 z-10">
            <div class="flex justify-between items-center">
              <div class="relative">
                <h3 class="relative z-10 text-xl font-semibold leading-tight text-elegant-800 dark:text-elegant-100">{{ position.title }}</h3>
                <p class="relative z-10 mt-0.5 text-elegant-600 dark:text-elegant-300">{{ position.company }}</p>
              </div>
              <span class="text-sm text-elegant-500 dark:text-elegant-400">{{ position.period }}</span>
            </div>
            <p class="text-elegant-700 dark:text-elegant-200">{{ position.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in position.technologies" :key="tech"
                class="px-2 py-1 bg-elegant-100 dark:bg-elegant-800 text-elegant-700 dark:text-elegant-200 rounded-md text-sm">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>