# Fokus CPNS — Materi & Latihan SKD CPNS 2026

Aplikasi web belajar SKD CPNS 2026 lengkap sesuai kisi-kisi KemenPAN-RB terbaru (TWK, TIU, dan TKP) dengan materi mendalam, lab konsep interaktif, latihan soal HOTS, simulasi Tryout Mini CAT, dan statistik progress belajar real-time.

## Menjalankan Secara Lokal

```bash
npm install --legacy-peer-deps
npm run dev
```

## Deploy ke GitHub Pages

Aplikasi ini mendukung kedua metode deploy GitHub Pages agar tidak terjadi halaman kosong (blank putih):

1. **GitHub Actions (Disarankan)**
   - Buka **Settings → Pages → Source**, pilih **GitHub Actions**.
   - Workflow `.github/workflows/deploy.yml` otomatis melakukan build ke `dist/` dan mempublikasikan situs saat push ke `main` atau `master`.
2. **Deploy dari Branch (`main`)**
   - Jika Anda memilih **Deploy from a branch** (`main /docs` maupun `main /(root)`), folder `docs/` sudah berisi hasil build siap pakai beserta `.nojekyll` dan `404.html`.
