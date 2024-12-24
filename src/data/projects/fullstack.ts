import type { Project } from '../../types';

export const fullstackProjects: Project[] = [
  {
    id: 'crm-system',
    title: 'CRM System',
    category: 'Full Stack',
    description: 'Built a customer relationship management system using Laravel and Vue.js.',
    technologies: ['PHP', 'Laravel', 'Vue.js', 'MySQL', 'Redis', 'Docker'],
    image: 'https://via.placeholder.com/400x300',
    details: {
      overview: 'A comprehensive CRM system for managing customer relationships and interactions.',
      challenges: ['Complex permissions', 'Real-time updates', 'Data migration'],
      solutions: ['RBAC system', 'WebSocket integration', 'Migration tools'],
      results: ['60% faster response', '40% productivity gain', '1M+ records migrated'],
      features: ['Contact management', 'Task system', 'Email campaigns'],
      technicalDetails: ['Laravel 8', 'Vue.js 3', 'WebSocket'],
      demoUrl: 'https://crm-demo.yourdomain.com',
      githubUrl: 'https://github.com/yourusername/crm-system'
    }
  },
  {
    id: 'project-management',
    title: 'Project Management Tool',
    category: 'Full Stack',
    description: 'Developed a collaborative project management platform with real-time features.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'WebSocket'],
    image: 'https://via.placeholder.com/400x300',
    details: {
      overview: 'Modern project management tool with real-time collaboration features.',
      challenges: ['Real-time sync', 'Complex UI', 'Performance'],
      solutions: ['WebSocket', 'Component system', 'Optimization'],
      results: ['Improved collaboration', 'Faster project delivery', 'User satisfaction'],
      features: ['Task management', 'Team collaboration', 'File sharing'],
      technicalDetails: ['Next.js', 'Prisma ORM', 'Real-time sync'],
      demoUrl: 'https://pm-demo.yourdomain.com',
      githubUrl: 'https://github.com/yourusername/project-management'
    }
  },
  {
    id: 'learning-platform',
    title: 'E-Learning Platform',
    category: 'Full Stack',
    description: 'Created an interactive learning platform with video courses and assessments.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Redis', 'AWS'],
    image: 'https://via.placeholder.com/400x300',
    details: {
      overview: 'Feature-rich e-learning platform supporting various content types.',
      challenges: ['Video streaming', 'User progress', 'Content management'],
      solutions: ['AWS integration', 'Progress tracking', 'CMS system'],
      results: ['1000+ courses', 'High engagement', 'Positive feedback'],
      features: ['Video courses', 'Assessments', 'Progress tracking'],
      technicalDetails: ['React', 'Node.js', 'AWS S3'],
      demoUrl: 'https://learn-demo.yourdomain.com',
      githubUrl: 'https://github.com/yourusername/learning-platform'
    }
  }
];