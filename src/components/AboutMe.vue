<script setup lang="ts">
import { skills } from '../data/profile';
import ProfileImage from './about/ProfileImage.vue';
import SkillsList from './about/SkillsList.vue';
</script>

<template>
  <section id="about" class="bg-gradient-elegant from-elegant-50 via-white to-elegant-100">
    <div class="section-container">
      <h2 class="section-title">About Me</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <ProfileImage />
        <div class="space-y-6">
          <p class="text-lg text-elegant-700 leading-relaxed">
            I am a Software Engineer specializing in backend development. With extensive experience in full-stack development,
            I focus on implementing features, fixing bugs, and improving products through efficient and scalable solutions.
          </p>
          <SkillsList :skills="skills" />
        </div>
      </div>
    </div>
  </section>
</template>