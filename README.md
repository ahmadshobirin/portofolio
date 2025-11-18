# Ahmad Shobirin – Portfolio

Portofolio modern dibangun dengan Vue 3, TypeScript, dan Tailwind CSS.

## Fitur

- Responsive layout
- SPA dengan Vue Router (hash history)
- Portfolio showcase dan halaman detail
- Career timeline
- Mode gelap/terang dengan persistensi

## Teknologi

- Vue 3, TypeScript, Vite
- Tailwind CSS, Vue Router

## Pengembangan

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build untuk production (default subpath /portofolio/)
npm run build

# Build untuk root domain (base '/')
npm run build:root

# Preview build (subpath)
npm run preview

# Preview build (root)
npm run preview:root
```

## Deploy

- Subpath project pages (repo ini): `npm run deploy`
- User pages root (repo `ahmadshobirin.github.io`):
  - Branch `master`: `npm run deploy:userpages:master`
  - Branch `gh-pages`: `npm run deploy:userpages:gh`

Catatan:
- Deploy ke user pages root menggunakan base `/` dan menyalin `README.dist.md` ke `dist/README.md` agar repo user pages memiliki README yang menjelaskan bahwa isi adalah hasil build.
- Folder `.bolt` dan `.vscode` tidak ikut terdeploy; hanya konten `dist`.

## Struktur Proyek

- `src/components/` – Komponen UI
- `src/pages/` – Halaman
- `src/router/` – Konfigurasi router
- `src/types/` – Tipe TypeScript
- `src/data/` – Data statis

## Penjelasan Base & Dist

- Build default menggunakan base `'/portofolio/'` untuk kompatibilitas GitHub Pages subpath.
- Build root menggunakan base `'/'` untuk user pages (`ahmadshobirin.github.io`).
- Folder `dist/` adalah artefak build dan tidak untuk diedit; lakukan perubahan di source (folder `src/`).

## Pembaruan Situs

- Lakukan perubahan di repo ini, jalankan build sesuai target, lalu jalankan salah satu script deploy di atas.