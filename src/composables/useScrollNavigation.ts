import { useRouter } from 'vue-router';

export function useScrollNavigation() {
  const router = useRouter();

  const scrollToSection = async (sectionId: string) => {
    // Remove the '#' if it exists
    const cleanSectionId = sectionId.replace('#', '');
    
    // If we're not on the home page, navigate there first
    if (router.currentRoute.value.name !== 'home') {
      await router.push('/');
      // Wait for the DOM to update
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    const element = document.getElementById(cleanSectionId);
    if (element) {
      const navHeight = 64; // Height of the fixed navigation bar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return {
    scrollToSection
  };
}