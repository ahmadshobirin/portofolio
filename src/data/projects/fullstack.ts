import type { Project } from '../../types';

export const fullstackProjects: Project[] = [
  {
    id: 'modern-store-autopos',
    title: 'Modern Store Building Autopos',
    category: 'Full Stack',
    description: 'Handle pembayaran via Android, kirim data ke ERP, cashier dashboard untuk settlement; Android app untuk penjualan tiap lantai.',
    technologies: ['Laravel', 'Android', 'jQuery', 'Bootstrap', 'Cronjob', 'REST API'],
    image: 'https://placehold.co/400x300',
    details: {
      overview: 'POS modern terintegrasi ERP: Android untuk penjualan di tiap lantai, payment diselesaikan di kasir dengan alur packing.',
      challenges: [
        'Sinkronisasi penjualan & pembayaran ke ERP agar stok dan transaksi tidak mismatch',
        'Pergerakan barang dari gudang ke etalase lintas lantai dengan konsistensi data'
      ],
      solutions: [
        'Android app untuk operasi penjualan per-lantai',
        'Cashier dashboard terpusat untuk proses pembayaran dan settlement',
        'REST API untuk mobile & back-office dengan integrasi ERP dua arah',
        'Cronjob rekonsiliasi & retry pengiriman data ke ERP saat jaringan tidak stabil',
        'Alur packing: sales membuat order, barang dipacking, pembayaran final di kasir'
      ],
      results: [
        'Sales tiap lantai dapat melakukan transaksi di lokasi masing-masing',
        'Pembayaran tetap tersentral di kasir sambil menunggu packing',
        'Pengurangan mismatch persediaan antara gudang dan etalase',
        'Data penjualan & pembayaran tersinkronisasi ke ERP'
      ],
      features: [
        'Penjualan multi-lantai (multi-location)',
        'Android POS untuk sales',
        'Cashier dashboard & settlement terpusat',
        'Alur packing sebelum pembayaran final',
        'Sinkronisasi ERP untuk order, pembayaran, dan stok'
      ],
      technicalDetails: [
        'Deploy di server klien',
        'Laravel',
        'Android',
        'jQuery',
        'Bootstrap',
        'Cronjob',
        'REST API',
        'Integrasi ERP',
        'Tahun: 2018',
        'Client: Jaya Teknik Pratama (Bali)'
      ]
    }
  },
  {
    id: 'crm-system',
    title: 'CRM System',
    category: 'Full Stack',
    description: 'Built a customer relationship management system using Laravel and Vue.js.',
    technologies: ['PHP', 'Laravel', 'Vue.js', 'MySQL', 'Redis', 'Docker'],
    image: 'https://placehold.co/400x300',
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
    image: 'https://placehold.co/400x300',
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
    image: 'https://placehold.co/400x300',
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