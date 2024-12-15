<script setup lang="ts">
import { ref, computed } from 'vue';
import { projects } from '../data/portfolio';
import CategoryFilter from './Portfolio/CategoryFilter.vue';
import ProjectList from './Portfolio/ProjectList.vue';

const categories = ['All', 'Backend', 'Full Stack', 'Web'];
const selectedCategory = ref('All');

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All') {
    return projects;
  }
  return projects.filter(project => project.category === selectedCategory.value);
});
</script>

<template>
  <section id="portfolio" class="bg-gray-50">
    <div class="section-container">
      <h2 class="section-title">Portfolio</h2>
      <CategoryFilter 
        :categories="categories" 
        :selectedCategory="selectedCategory"
        @select="selectedCategory = $event"
      />
      <ProjectList 
        :projects="filteredProjects" 
        :category="selectedCategory"
      />
    </div>
  </section>
</template>