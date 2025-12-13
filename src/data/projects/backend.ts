import type { Project } from '../../types';

export const backendProjects: Project[] = [
  {
    id: 'dokter-apps-unesa',
    title: 'Dokter Apps UNESA',
    category: 'Backend',
    description: 'Backend majalah/jurnal dokter UNESA (web & mobile): manajemen konten, pengumuman, submission dari mobile, notifikasi, dan akses dokumen aman via signed URL.',
    technologies: ['Golang', 'PostgreSQL', 'Firebase Cloud Messaging', 'Cloud Storage', 'OAuth2', 'JWT'],
    image: 'https://placehold.co/400x300',
    details: {
      overview: 'Mendukung web untuk pengelolaan majalah/jurnal/pengumuman dan mobile untuk konsumsi & pengajuan konten; autentikasi sosial dan akses dokumen aman.',
      challenges: [
        'Akses dokumen yang diunggah admin harus aman dan terkontrol',
        'Multi-auth (Google, Apple, Facebook, Basic, JWT) dengan pengalaman mulus',
        'Sinkronisasi alur publishing (web) dan submission (mobile)',
        'Notifikasi andal ke berbagai perangkat'
      ],
      solutions: [
        'Cloud Storage signed URL untuk distribusi dokumen terproteksi',
        'OAuth2 providers & Basic/JWT untuk registrasi/login',
        'Workflow submission konten dari mobile ke admin dengan status & audit trail',
        'FCM untuk notifikasi pengumuman dan pembaruan konten',
        'Skema PostgreSQL untuk konten, riwayat, dan laporan'
      ],
      results: [
        'Akses konten aman dengan kontrol durasi/izin',
        'Notifikasi mencapai user secara konsisten',
        'Proses submission mobile ke admin berjalan efektif'
      ],
      features: [
        'Manajemen majalah, jurnal, pengumuman (web)',
        'Submission konten dari mobile',
        'Signed URL untuk dokumen',
        'Social Auth (Google, Apple, Facebook) + Basic/JWT',
        'History & reporting'
      ],
      technicalDetails: [
        'Year: 2020',
        'Tech: Golang, PostgreSQL, FCM, Cloud Storage',
        'Auth: Google, Apple, Facebook, Basic, JWT',
        'Role: Backend Developer (support Web & Mobile, signed URLs)'
      ]
    }
  },
  {
    id: 'meda-school-system',
    title: 'Meda',
    category: 'Backend',
    description: 'School information system backend connecting students, parents, teachers, homeroom, and admin; supports registration (PPDB), scheduling, attendance, announcements, quizzes, chat, and notifications.',
    technologies: ['Golang', 'PostgreSQL', 'Firebase Cloud Messaging', 'Firebase Realtime Database', 'OAuth2', 'JWT'],
    image: 'https://placehold.co/400x300',
    details: {
      overview: 'Backend powering web and mobile with real-time communication and role-driven features, ensuring reliable notifications and messaging.',
      challenges: [
        'Multi-role domain with distinct workflows',
        'Real-time notifications and messaging',
        'Scalable chat per user and per class',
        'Data consistency across web and mobile clients',
        'Multiple auth flows (social, basic, JWT)'
      ],
      solutions: [
        'Role-based access control and relational data modeling in PostgreSQL',
        'FCM topic-based notifications and device token management',
        'Realtime Database channels for private user-to-user and class chats',
        'OAuth2 (Google, Apple, Facebook) + Basic/JWT auth with refresh tokens',
        'Event-driven notifications for attendance, announcements, and quizzes',
        'Audit trails and history for reporting'
      ],
      results: [
        'Unified platform connecting all stakeholders',
        'Reliable push notifications across devices',
        'Consistent transaction history with class/student-level reporting'
      ],
      features: [
        'Registration/PPDB',
        'Class schedule management by homeroom',
        'Student attendance',
        'Announcements & quizzes',
        'Private user-to-user chat',
        'Class-wide chat channels',
        'Reporting per class and per student'
      ],
      technicalDetails: [
        'Year: 2020',
        'Tech: Golang, PostgreSQL, FCM, Firebase Realtime Database',
        'Auth: Google, Apple, Facebook, Basic, JWT',
        'Role: Backend Developer (master data, transactions, history, reports)'
      ]
    }
  },
  {
    id: 'xendit-keyboard',
    title: 'Xendit Keyboard',
    category: 'Backend',
    description: 'Seller application with keyboard-integrated flows enabling seamless sales, auto-text replies, and in-app billing. Built with Golang and PostgreSQL, integrating social auth, JWT, Xendit payments, and bank account validation.',
    technologies: ['Golang', 'PostgreSQL', 'OAuth2', 'JWT', 'Xendit'],
    image: 'https://placehold.co/400x300',
    details: {
      overview: 'A backend for a seller app featuring keyboard-integrated functions to streamline sales and billing, with secure authentication and payment processing.',
      challenges: [
        'Designing seamless keyboard-integrated sales flows',
        'Supporting multiple authentication methods (social + basic + JWT)',
        'Reliable payment processing with Xendit and bank account validation',
        'Maintaining low latency for in-app billing and auto-responses'
      ],
      solutions: [
        'Modular auth with OAuth2 providers (Google, Apple, Facebook) and JWT',
        'Payment gateway integration with Xendit, including webhooks and reconciliation',
        'Bank account validation service integration and verification workflows',
        'PostgreSQL schemas for master data, transactions, histories, and reporting',
        'Idempotent APIs, retry policies, and rate limiting for robustness',
        'Observability with structured logging and metrics on critical paths'
      ],
      results: [
        'Faster seller workflows via keyboard-driven actions',
        'Reduced payment friction and improved billing reliability',
        'Consistent transaction histories and actionable reports'
      ],
      features: [
        'Keyboard-integrated selling and auto-text responses',
        'In-app billing with secure payment flows',
        'Social Auth (Google, Apple, Facebook) + Basic/JWT Auth',
        'Bank account validation and verification',
        'Transactional history and reporting'
      ],
      technicalDetails: [
        'Year: 2020',
        'Tech: Golang, PostgreSQL',
        'Integrations: Google, Apple, Facebook, JWT, Xendit, Bank Validation',
        'Role: Backend Developer (master data, transactions, history, reports)'
      ]
    }
  }
];
