import { ref, computed } from 'vue';

export function usePagination<T>(itemsGetter: () => T[], itemsPerPage: number) {
  const currentPage = ref(1);
  
  const totalPages = computed(() => Math.ceil(itemsGetter().length / itemsPerPage));
  
  const paginatedItems = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return itemsGetter().slice(start, end);
  });

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages.value) {
      currentPage.value = page;
      // Smooth scroll to top of list
      document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return {
    currentPage,
    totalPages,
    paginatedItems,
    goToPage
  };
}