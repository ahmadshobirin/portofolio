<script setup lang="ts">
defineProps<{
  categories: string[];
  selectedCategory: string;
}>();

const emit = defineEmits<{
  (e: 'select', category: string): void;
}>();
</script>

<template>
  <div class="flex justify-center gap-4 mb-8">
    <button v-for="category in categories" :key="category"
      :class="[
        'px-4 py-2 rounded-full transition-colors',
        selectedCategory === category
          ? 'bg-accent-600 text-white shadow-md'
          : 'bg-elegant-100 text-elegant-700 hover:bg-accent-100 hover:text-accent-700'
      ]"
      @click="emit('select', category)">
      {{ category }}
    </button>
  </div>
</template>