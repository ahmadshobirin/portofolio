<script setup lang="ts">
import { careerPositions } from '../data/portfolio';
</script>

<template>
  <section id="career" class="bg-white dark:bg-elegant-900 pt-16">
    <div class="section-container">
      <h2 class="section-title">Career Journey</h2>
      <div class="space-y-12">
        <div v-for="(position, index) in careerPositions" :key="index"
          class="relative pl-8 border-l-2 border-secondary/30 pb-8 last:pb-0">
          <div class="absolute w-4 h-4 bg-secondary rounded-full -left-[9px] top-0"></div>
          <div class="space-y-3">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-xl font-semibold text-elegant-800 dark:text-elegant-100">{{ position.title }}</h3>
                <p class="text-elegant-600 dark:text-elegant-300">{{ position.company }}</p>
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