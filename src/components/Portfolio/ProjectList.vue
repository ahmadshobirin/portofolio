<script setup lang="ts">
import { watch } from 'vue';
import ProjectCard from './ProjectCard.vue';
import Pagination from '../shared/Pagination.vue';
import { usePagination } from '../../composables/usePagination';
import type { Project } from '../../types';

const props = defineProps<{
  projects: Project[];
  category: string;
}>();

const itemsPerPage = 6;
const { currentPage, totalPages, paginatedItems, goToPage } = usePagination(props.projects, itemsPerPage);

// Reset to first page when category changes
watch(() => props.category, () => {
  goToPage(1);
});
</script>

<template>
  <div class="space-y-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ProjectCard 
        v-for="project in paginatedItems" 
        :key="project.id" 
        :project="project" 
      />
    </div>
    
    <Pagination
      v-if="totalPages > 1"
      :currentPage="currentPage"
      :totalPages="totalPages"
      @update:page="goToPage"
    />
  </div>
</template>