import { ref } from 'vue';

const isDark = ref(false);

const applyTheme = (dark: boolean) => {
  isDark.value = dark;
  document.documentElement.classList.toggle('dark', dark);
};

const initTheme = () => {
  try {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') {
      applyTheme(stored === 'dark');
      return;
    }
  } catch {}
  const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(prefersDark);
};

initTheme();

export function useTheme() {
  const toggleTheme = () => {
    const next = !isDark.value;
    applyTheme(next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {}
  };

  return {
    isDark,
    toggleTheme
  };
}