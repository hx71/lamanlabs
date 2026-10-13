# Daftar Task: Landing Page Static Penjualan Landing Page Profil

**Acuan:** [srs-landing-page-profil.md](srs-landing-page-profil.md) versi 1.9
**Referensi konten:** https://yudhirazak.github.io/ (pemetaan di SRS bagian 2.4)
**Tanggal:** 13 Oktober 2026

Task diurutkan sesuai urutan pengerjaan. Kode di akhir task (FR/NFR) menunjuk ke kebutuhan di SRS.

---

## 0. Keputusan yang Dibutuhkan

Keputusan di bawah diambil pada 13 Oktober 2026. Yang belum selesai tidak menghalangi pengerjaan: halaman dibangun dengan nilai sementara di `config.js`, lalu diganti sebelum rilis.

- [x] **T-01** Nomor WhatsApp admin: 0857 7771 3662. Jam operasional: setiap hari 08.00–21.00. Zona waktu belum dicantumkan.
- [x] **T-02** Harga paket: Basic Rp 350.000, Standard Rp 750.000, Premium Rp 1.500.000; revisi 1/2/3 kali; pengerjaan 2/3/5 hari kerja.
- [x] **T-03** Template siap pakai: dibatalkan. Halaman tidak menampilkan katalog template maupun demo (keputusan 13 Oktober 2026).
- [x] **T-03a** Brand: brand baru, bukan SyukurDesign.
- [x] **T-04** Domain paket: Standard mendapat .my.id, Premium mendapat .com.
- [x] **T-05** Jalur custom: mulai Rp 2.000.000 dengan 3 kali revisi. Estimasi waktu pengerjaan belum ada.
- [x] **T-06** Hosting: GitHub Pages untuk tahap awal.
- [ ] **T-07** Nama brand: LamanLabs (mengikuti logo di `assets/img/`). Logo sudah ada; nama repositori GitHub belum ada. Jenis repositori sudah diputuskan: repositori proyek, alamat `https://<username>.github.io/<nama-repo>/`.

---

## 1. Persiapan Proyek

- [x] **T-08** Buat struktur folder: `index.html`, `src/`, `assets/css/`, `assets/js/`, `assets/img/`, `assets/fonts/`.
- [x] **T-09** Inisialisasi git, buat `.gitignore` (berisi `node_modules/`), dan tambahkan file `.nojekyll` kosong di root.
- [x] **T-09a** Pasang Tailwind CSS v4: `npm init -y`, lalu `npm install -D tailwindcss @tailwindcss/cli`.
- [x] **T-09b** Buat `src/input.css` berisi `@import "tailwindcss";` dan tambahkan skrip `dev` (`--watch`) serta `build` (`--minify`) di `package.json` dengan keluaran `assets/css/style.css`.
- [x] **T-10** Tentukan gaya visual (palet warna, font, ukuran teks, jarak antarbagian) dan tulis sebagai variabel tema di blok `@theme` pada `src/input.css`. (NFR-06)
- [x] **T-11** Buat file konfigurasi `assets/js/config.js` berisi nama brand, nomor WhatsApp, jam operasional, alamat, email, dan media sosial. Daftar paket ditulis langsung di `index.html` agar terbaca mesin pencari dan tetap tampil tanpa JavaScript. (NFR-08)

---

## 2. Kerangka Halaman

- [x] **T-11a** Pakai path relatif untuk semua aset (`assets/...`, tanpa garis miring di depan), karena halaman berada di subpath `/<nama-repo>/`.
- [x] **T-12** Buat kerangka `index.html` dengan tujuh bagian: Hero, Layanan, Harga, Custom, FAQ, Tentang, Kontak. (FR-01)
- [x] **T-13** Buat header dengan navigasi anchor dan menu hamburger untuk mobile. (FR-02, NFR-04)
- [x] **T-14** Buat footer berisi nomor WhatsApp, jam operasional, dan tautan media sosial. (FR-15)
- [x] **T-15** Buat gaya dasar dengan class Tailwind: lebar kontainer, jarak antarbagian, grid responsif, serta gaya tombol utama dan sekunder. (NFR-04, NFR-06)
- [x] **T-15a** Perbarui desain: font Plus Jakarta Sans (WOFF2, dihosting sendiri), gambar latar SVG di `assets/img/` untuk Hero, Harga, Custom, dan Kontak, serta ilustrasi `mockup.svg` di Hero.

---

## 3. Bagian Halaman

- [x] **T-16** Hero: judul penawaran, subjudul, tombol "Pesan via WhatsApp", dan tombol "Lihat Harga". (FR-03)
- [x] **T-16a** Layanan: enam kartu keunggulan berisi ikon, judul, dan satu kalimat penjelasan. (FR-20)
- [x] **T-17** Dibatalkan: bagian Template dihapus dari halaman.
- [x] **T-18** Harga: tiga kartu paket (Basic, Standard, Premium) dengan fitur sesuai SRS bagian 2.3 dan tombol pesan per paket. (FR-07, FR-09)
- [x] **T-19** Harga: keterangan domain/hosting per paket dan tiga ketentuan umum paket. (FR-08)
- [x] **T-20** Custom: penjelasan proses, estimasi waktu, kisaran harga, dan tombol "Minta Custom". (FR-10, FR-12)
- [x] **T-21** FAQ: daftar pertanyaan dalam bentuk accordion memakai elemen `<details>` (proses pemesanan, waktu pengerjaan, revisi, pembayaran). (FR-16)
- [x] **T-22** Tentang: lokasi, tahun berdiri, dan fokus layanan penyedia jasa. (FR-17)
- [x] **T-23** Kontak: nomor WhatsApp, jam operasional, alamat, email, tautan media sosial, dan tombol chat. (FR-15, FR-21)

---

## 4. Tautan WhatsApp

- [x] **T-24** Buat fungsi pembuat tautan `https://wa.me/<nomor>?text=<pesan>` dengan encoding pesan yang benar. (FR-13)
- [x] **T-25** Tetapkan format pesan standar: jalur, paket atau custom, nama pemesan. (FR-14)
- [x] **T-26** Dibatalkan: tombol pesan per template tidak ada lagi.
- [x] **T-27** Buat pesan untuk tombol paket yang memuat nama paket. (FR-09)
- [x] **T-28** Buat pesan untuk tombol "Minta Custom" yang memuat daftar poin brief. (FR-11)
- [ ] **T-29** Uji semua tombol di WhatsApp mobile dan WhatsApp Web.

---

## 5. Demo Template

Dibatalkan. T-30, T-31, T-32, dan T-32a tidak dikerjakan karena bagian Template dihapus dari halaman.

---

## 6. Konten

- [x] **T-33** Tulis teks Hero, Layanan, Custom, dan Tentang dengan gaya situs referensi; teks ditulis ulang, tidak disalin.
- [x] **T-34** Tulis isi FAQ.
- [ ] **T-35** Ganti nilai sementara di `config.js` (nama brand, nomor WhatsApp, zona waktu) setelah T-01 dan T-07 selesai.
- [ ] **T-36** Siapkan logo, favicon, dan gambar Open Graph. Logo dan favicon sudah terpasang; gambar Open Graph belum.

---

## 7. SEO, Performa, dan Aksesibilitas

- [ ] **T-37** Tambahkan meta title, description, dan Open Graph. (FR-18) Title, description, dan Open Graph dasar sudah ada; `og:url` dan `og:image` menunggu T-36 dan T-47.
- [ ] **T-38** Tambahkan `robots.txt` dan `sitemap.xml`.
- [ ] **T-39** Optimalkan gambar: WebP, atribut ukuran, dan lazy loading. (NFR-01)
- [ ] **T-40** Periksa kontras warna, ukuran font, teks alt gambar, dan navigasi keyboard. (NFR-06)
- [ ] **T-41** Jalankan Lighthouse; perbaiki hingga SEO minimal 90 dan waktu muat di bawah 2 detik pada 4G. (NFR-01, NFR-05)
- [ ] **T-42** (Opsional) Pasang Google Analytics dan catat klik tombol WhatsApp. (FR-19)

---

## 8. Pengujian

- [ ] **T-43** Uji tampilan di lebar layar 360px, 768px, dan 1280px. (NFR-04)
- [ ] **T-44** Uji di Chrome, Safari, dan Firefox.
- [ ] **T-45** Periksa semua anchor link dan tombol WhatsApp.
- [ ] **T-46** Periksa ejaan dan kesesuaian harga dengan SRS bagian 2.3. (NFR-07)

---

## 9. Rilis

- [ ] **T-46a** Jalankan `npm run build` dan commit `assets/css/style.css` hasil build. (NFR-01)
- [ ] **T-47** Buat repositori publik di GitHub dan push branch `main`. (NFR-09)
- [ ] **T-48** Aktifkan GitHub Pages di Settings > Pages dengan sumber branch `main`, folder root, lalu pastikan "Enforce HTTPS" aktif. (NFR-02)
- [ ] **T-49** Pastikan URL di meta Open Graph, `sitemap.xml`, dan `robots.txt` memakai alamat `https://<username>.github.io/<nama-repo>/`.
- [ ] **T-50** Uji ulang halaman di alamat `github.io`, termasuk pratinjau tautan saat dibagikan di WhatsApp.
- [ ] **T-51** Daftarkan situs ke Google Search Console.
- [ ] **T-52** (Nanti) Pasang domain sendiri: tambahkan file `CNAME`, atur DNS, lalu perbarui URL pada T-49.
