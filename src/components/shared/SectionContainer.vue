<template>
  <section :id="id" :class="[className, 'section-container']">
    <slot></slot>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  id: string;
  className?: string;
}>();
</script>