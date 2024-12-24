import { backendProjects } from './projects/backend';
import { fullstackProjects } from './projects/fullstack';
import type { Project, CareerPosition } from '../types';

export const projects: Project[] = [
  ...backendProjects,
  ...fullstackProjects
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