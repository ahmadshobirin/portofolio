<script setup lang="ts">
import { ref } from 'vue';
import { useScrollNavigation } from '../composables/useScrollNavigation';
import DesktopMenu from './navigation/DesktopMenu.vue';
import MobileMenu from './navigation/MobileMenu.vue';
import MobileMenuButton from './navigation/MobileMenuButton.vue';
import ThemeToggle from './navigation/ThemeToggle.vue';

const isMenuOpen = ref(false);
const { scrollToSection } = useScrollNavigation();

const navigation = [
  { name: 'About', href: 'about' },
  { name: 'Career', href: 'career' },
  { name: 'Portfolio', href: 'portfolio' },
  { name: 'Contact', href: 'contact' },
];

const handleNavClick = (sectionId: string) => {
  isMenuOpen.value = false;
  scrollToSection(sectionId);
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <nav class="bg-white shadow-sm fixed w-full top-0 z-50 dark:bg-elegant-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <router-link to="/" class="text-xl font-bold text-elegant-800 dark:text-elegant-100">Shob</router-link>
        </div>
        
        <div class="flex items-center">
          <DesktopMenu 
            :navigation="navigation"
            :onNavClick="handleNavClick"
          />
          <ThemeToggle class="ml-4" />
          <MobileMenuButton 
            :isOpen="isMenuOpen"
            :onClick="toggleMenu"
            class="ml-4 md:hidden"
          />
        </div>
      </div>
    </div>

    <MobileMenu 
      :isOpen="isMenuOpen"
      :navigation="navigation"
      :onNavClick="handleNavClick"
    />
  </nav>
</template>