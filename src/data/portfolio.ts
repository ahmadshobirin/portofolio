import type { Project, CareerPosition, NavigationItem } from '../types';

export const projects: Project[] = [
  {
    title: 'E-commerce Platform',
    category: 'Backend',
    description: 'Developed a scalable e-commerce backend using Golang microservices.',
    technologies: ['Golang', 'gRPC', 'PostgreSQL'],
    image: 'https://via.placeholder.com/400x300'
  },
  {
    title: 'CRM System',
    category: 'Full Stack',
    description: 'Built a customer relationship management system using Laravel and Vue.js.',
    technologies: ['PHP', 'Laravel', 'Vue.js', 'MySQL'],
    image: 'https://via.placeholder.com/400x300'
  }
];

export const careerPositions: CareerPosition[] = [
  {
    title: 'Backend Developer',
    company: 'Current Company',
    period: '2022 - Present',
    description: 'Specializing in backend development, focusing on feature implementation and product improvement using Golang microservices.',
    technologies: ['Golang', 'Microservices', 'REST APIs']
  },
  {
    title: 'Full Stack Developer',
    company: 'Previous Company',
    period: '2020 - 2022',
    description: 'Developed and maintained web applications using Laravel and Vue.js.',
    technologies: ['PHP', 'Laravel', 'Vue.js', 'MySQL']
  }
];

export const navigationItems: NavigationItem[] = [
  { name: 'About', href: '#about' },
  { name: 'Career', href: '#career' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

export const skills = [
  'PHP (Laravel, CodeIgniter)',
  'JavaScript',
  'Golang',
  'Microservices',
  'Backend Development',
  'Full-stack Development'
];