<script setup lang="ts">
import { careerPositions } from '../data/portfolio';
</script>

<template>
  <section id="career" class="bg-white pt-16">
    <div class="section-container">
      <h2 class="section-title">Career Journey</h2>
      <div class="space-y-12">
        <div v-for="(position, index) in careerPositions" :key="index"
          class="relative pl-8 border-l-2 border-secondary/30 pb-8 last:pb-0">
          <div class="absolute w-4 h-4 bg-secondary rounded-full -left-[9px] top-0"></div>
          <div class="space-y-3">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-xl font-semibold">{{ position.title }}</h3>
                <p class="text-gray-600">{{ position.company }}</p>
              </div>
              <span class="text-sm text-gray-500">{{ position.period }}</span>
            </div>
            <p class="text-gray-700">{{ position.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in position.technologies" :key="tech"
                class="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-sm">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>