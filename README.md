# Fokus CPNS — Materi & Latihan SKD CPNS 2026

Aplikasi web belajar SKD CPNS 2026 lengkap sesuai kisi-kisi KemenPAN-RB terbaru (TWK, TIU, dan TKP) dengan materi mendalam, lab konsep interaktif, latihan soal HOTS, simulasi Tryout Mini CAT, dan statistik progress belajar real-time.

## Menjalankan Secara Lokal

```bash
npm install
npm run dev
```

## Deploy ke GitHub Pages

Repository ini sudah dikonfigurasi untuk langsung di-deploy ke **GitHub Pages** menggunakan GitHub Actions:

1. Push seluruh kode ke branch `main` atau `master` di repository GitHub Anda.
2. Buka tab **Settings → Pages** pada repository GitHub Anda.
3. Pada bagian **Build and deployment → Source**, pilih **GitHub Actions**.
4. Workflow `.github/workflows/deploy.yml` akan otomatis berjalan, mem-build proyek ke folder `dist/`, dan mempublikasikannya ke URL GitHub Pages Anda (`https://<username>.github.io/<nama-repo>/`).
