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
          ? 'bg-secondary text-white'
          : 'hover:bg-secondary hover:text-white'
      ]"
      @click="emit('select', category)">
      {{ category }}
    </button>
  </div>
</template>