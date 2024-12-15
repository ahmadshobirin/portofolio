<script setup lang="ts">
defineProps<{
  skills: string[];
}>();
</script>

<template>
  <div>
    <h3 class="text-xl font-semibold mb-3 text-elegant-800">Skills</h3>
    <div class="flex flex-wrap gap-2">
      <span v-for="skill in skills" :key="skill" class="tag">
        {{ skill }}
      </span>
    </div>
  </div>
</template>