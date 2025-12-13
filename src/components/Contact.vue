<script setup lang="ts">
const email = 'mailto:ahmadshobirin.dev@gmail.com';
const linkedin = 'https://www.linkedin.com/in/ahmad-shobirin';
const currentYear = new Date().getFullYear();
</script>

<template>
  <section id="contact" class="bg-white dark:bg-elegant-900">
    <div class="section-container">
      <div class="text-center max-w-2xl mx-auto py-12">
        <h2 class="text-3xl font-bold text-elegant-800 dark:text-elegant-100 mb-4">Contact</h2>
        <p class="text-elegant-600 dark:text-elegant-300 mb-8">
          Get in touch via Email or LinkedIn.
        </p>
        <div class="flex items-center justify-center gap-6">
          <a
            :href="email"
            aria-label="Email"
            class="p-3 rounded-full text-elegant-700 dark:text-elegant-200 hover:text-accent-600 transition-colors"
          >
            <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
          <a
            :href="linkedin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            class="p-3 rounded-full text-elegant-700 dark:text-elegant-200 hover:text-accent-600 transition-colors"
          >
            <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>
        <div class="mt-10 text-elegant-700 dark:text-elegant-200 text-sm">
          © {{ currentYear }} Ahmad Shobirin. 
          All rights reserved.
        </div>
      </div>
    </div>
  </section>
</template>
