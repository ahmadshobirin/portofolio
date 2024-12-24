import { ref } from 'vue';

const isDark = ref(false);

export function useTheme() {
  const toggleTheme = () => {
    isDark.value = !isDark.value;
    document.documentElement.classList.toggle('dark');
  };

  return {
    isDark,
    toggleTheme
  };
}