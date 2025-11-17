<script setup lang="ts">
const props = defineProps<{
  currentPage: number;
  totalPages: number;
}>();

const emit = defineEmits<{
  (e: 'update:page', page: number): void;
}>();

const goToPage = (page: number) => {
  if (page >= 1 && page <= props.totalPages) {
    emit('update:page', page);
  }
};
</script>

<template>
  <div class="flex justify-center gap-2">
    <button
      @click="goToPage(currentPage - 1)"
      :disabled="currentPage === 1"
      class="pagination-button"
      :class="{ 'opacity-50 cursor-not-allowed': currentPage === 1 }"
      aria-label="Previous page"
    >
      Previous
    </button>
    
    <button
      v-for="page in totalPages"
      :key="page"
      @click="goToPage(page)"
      class="pagination-button"
      :class="[
        currentPage === page 
          ? 'bg-accent-600 text-white shadow-md transform scale-105' 
          : 'hover:bg-accent-100 hover:text-accent-700'
      ]"
      :aria-current="currentPage === page ? 'page' : undefined"
    >
      {{ page }}
    </button>
    
    <button
      @click="goToPage(currentPage + 1)"
      :disabled="currentPage === totalPages"
      class="pagination-button"
      :class="{ 'opacity-50 cursor-not-allowed': currentPage === totalPages }"
      aria-label="Next page"
    >
      Next
    </button>
  </div>
</template>

<style scoped>
.pagination-button {
  @apply px-4 py-2 rounded-md bg-elegant-100 text-elegant-700 
         dark:bg-elegant-800 dark:text-elegant-200
         transition-all duration-200 ease-in-out;
}
</style>