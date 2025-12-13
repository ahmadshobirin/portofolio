import type { Project } from '../../types';

export const fullstackProjects: Project[] = [
  {
    id: 'rmis-erp-trading',
    title: 'RMIS - ERP Trading',
    category: 'Full Stack',
    description: 'Membangun ERP Trading custom untuk Dealer Motor Honda Roda Mas (Situbondo) yang mengintegrasikan penjualan, pembelian, penerimaan unit, service, dan accounting. Fokus pada efisiensi operasional, integrasi modul, dan onboarding SDM.',
    technologies: ['Laravel', 'Import/Export Data Cut Off'],
    image: 'https://placehold.co/400x300',
    details: {
      overview: 'ERP Trading terintegrasi dari nol untuk mendigitalisasi proses manual: sales, purchasing, receiving unit, service, hingga accounting. Berperan sebagai Lead Project, menangani pengembangan software dan hardware serta integrasi antar-modul.',
      challenges: [
        'Membangun ERP dari awal sesuai kebutuhan spesifik client dan user',
        'Mengintegrasikan seluruh modul agar beroperasi efektif dan efisien',
        'SDM belum pernah mengoperasikan ERP sehingga memerlukan pendampingan non-teknis'
      ],
      solutions: [
        'Desain arsitektur modular dengan kontrak data yang jelas antar-modul',
        'Integrasi proses end-to-end: purchasing → receiving → sales/service → accounting',
        'Implementasi import/export data cut off untuk migrasi dan konsistensi historis',
        'Penyusunan SOP operasional dan pelatihan pengguna (onboarding)',
        'Monitoring & logging di titik kritis alur transaksi'
      ],
      results: [
        'Operasional lebih efisien dengan data terpusat dan alur terintegrasi',
        'Pengurangan kesalahan input dan mismatch antar departemen',
        'SDM mampu mengoperasikan ERP melalui SOP dan pelatihan'
      ],
      features: [
        'Purchasing & supplier management',
        'Receiving unit & stock registration',
        'Sales & service workflows',
        'Accounting & posting otomatis lintas modul',
        'Reporting terintegrasi dan audit trail'
      ],
      technicalDetails: [
        'Lokasi: Situbondo',
        'Periode: 2020–2021',
        'Client: Roda Mas (Dealer Motor Honda) Situbondo',
        'Tech: Laravel, Import/Export Data Cut Off',
        'Lead Project: software & hardware',
        'Integrasi penuh antar-modul'
      ]
    }
  },
  {
    id: 'waru-agung-intregated-system',
    title: 'Waru Agung Intregated System',
    category: 'Full Stack',
    description: 'ERP terintegrasi pertama untuk Waru Agung: Purchasing, Marketing, Inventory hingga Accounting; disesuaikan langsung dengan kondisi lapangan dan kebutuhan user.',
    technologies: ['Laravel'],
    image: 'https://placehold.co/400x300',
    details: {
      overview: 'Membangun sistem ERP terintegrasi dari nol yang menyatukan proses Purchasing, Marketing, Inventory, dan Accounting; fokus pada penyesuaian alur sesuai praktik di lapangan dan kebiasaan user.',
      challenges: [
        'Setiap modul memiliki kondisi unik yang harus diintegrasikan dengan modul lain',
        'User sebelumnya memakai software accounting yang belum terhubung ke modul lain',
        'Menjaga konsistensi data lintas proses (purchasing → inventory → accounting)'
      ],
      solutions: [
        'Desain modul terpisah dengan kontrak data yang jelas',
        'Master data bersama dan event sinkronisasi antar-modul',
        'Orkestrasi workflow dan approval antar departemen',
        'Migrasi bertahap dari sistem accounting-only ke ERP penuh',
        'Rekonsiliasi dan validasi data lintas proses untuk mencegah mismatch'
      ],
      results: [
        'Modul Purchasing, Marketing, Inventory, dan Accounting saling terhubung',
        'Satu sumber data yang konsisten untuk operasional',
        'Proses bisnis lebih rapi dan mudah diawasi'
      ],
      features: [
        'Purchasing & supplier management',
        'Marketing & order management',
        'Inventory & stok movement',
        'Accounting & posting terintegrasi',
        'Approval & audit trail antar-modul'
      ],
      technicalDetails: [
        'Lokasi: Malang',
        'Periode: 2017 – 2018',
        'Tech: Laravel',
        'Client: CV Waru Agung (Malang)',
      ]
    }
  },
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
    id: 'lelang-investor-app',
    title: 'Lelang Investor App',
    category: 'Full Stack',
    description: 'Aplikasi lelang untuk investor (PJB) menggunakan Laravel & jQuery, diselesaikan dalam timeline ketat satu bulan dan berjalan mulus saat hari delivery.',
    technologies: ['Laravel', 'jQuery'],
    image: 'https://placehold.co/400x300',
    details: {
      overview: 'Platform lelang investor dengan fokus reliabilitas dan eksekusi cepat; backend Laravel, frontend jQuery, target rampung dalam 1 bulan.',
      challenges: [
        'Timeline pengembangan hanya satu bulan namun harus memastikan fungsi lelang berjalan mulus saat go-live'
      ],
      solutions: [
        'Penentuan scope prioritas dan iterasi cepat dengan milestone mingguan',
        'Arsitektur sederhana namun tangguh: Laravel monolith dengan modul lelang terisolasi',
        'Pengujian beban dan simulasi skenario lelang (race conditions, bid concurrency)',
        'Fallback & logging komprehensif untuk insiden saat go-live',
        'Automasi build & deployment terjadwal agar menghindari regressions'
      ],
      results: [
        'Aplikasi berfungsi sempurna saat hari delivery',
        'Seluruh kebutuhan inti lelang terpenuhi sesuai rencana',
        'Pencapaian target waktu 1 bulan tanpa mengorbankan kualitas'
      ],
      features: [
        'Alur lelang end-to-end (create lot, bidding, closing)',
        'Validasi dan kontrol waktu lelang',
        'Dashboard sederhana untuk admin & monitoring'
      ],
      technicalDetails: [
        'Tahun: 2019',
        'Tech: Laravel, jQuery',
        'Client: PJB (Power Generation)'
      ]
    }
  }
];