# SRS (Software Requirements Specification): Landing Page Static Penjualan Landing Page Profil

**Versi:** 1.9
**Tanggal:** 13 Oktober 2026
**Status:** Draft

---

## 1. Pendahuluan

### 1.1 Tujuan
Dokumen ini mendefinisikan kebutuhan sebuah landing page static satu halaman untuk menjual jasa pembuatan landing page profil. Halaman menampilkan tiga paket harga dan layanan custom. Seluruh proses pemesanan dilakukan melalui WhatsApp, sehingga halaman tidak memiliki keranjang belanja, pembayaran online, formulir, maupun akun pengguna.

### 1.2 Ruang Lingkup
Sistem adalah satu halaman static (`index.html`) yang berisi beberapa bagian (section) dan navigasi anchor antarbagian.

Halaman menawarkan dua jalur pemesanan:
- **Paket:** pembeli memilih salah satu dari tiga paket (Basic, Standard, Premium), lalu halaman dibuat oleh tim dengan susunan standar.
- **Custom:** pembeli meminta desain yang dirancang khusus sesuai brief.

Sistem mencakup:
- Bagian hero, layanan, harga, custom, FAQ, tentang, dan kontak dalam satu halaman
- Tombol pemesanan yang mengarahkan ke WhatsApp dengan pesan terisi otomatis

Sistem tidak mencakup:
- Website multi-halaman
- Katalog template siap pakai dan halaman demo template
- Formulir brief dan penyimpanan data brief
- Pembayaran online dan invoice otomatis
- Registrasi dan login pengguna
- Dashboard admin, CMS, dan editor konten oleh pembeli
- Backend, database, dan layanan pihak ketiga untuk formulir

### 1.3 Definisi
- **Landing page profil:** halaman tunggal yang memperkenalkan bisnis, personal brand, atau individu. Ini adalah produk yang dijual.
- **Landing page static:** satu halaman berupa file HTML/CSS/JS tanpa server-side rendering, backend, atau database. Ini adalah bentuk website penjualan dalam dokumen ini.
- **Paket:** pembuatan landing page dengan susunan halaman standar; yang disesuaikan adalah konten, warna dasar, dan logo.
- **Custom:** desain yang dirancang khusus sesuai kebutuhan pemesan.
- **Order WhatsApp:** pemesanan yang diselesaikan melalui percakapan WhatsApp dengan admin.

---

## 2. Deskripsi Umum

### 2.1 Aktor Pengguna

| Aktor | Deskripsi |
|---|---|
| Pengunjung | Melihat layanan dan harga, lalu menghubungi admin via WhatsApp |
| Admin | Memperbarui isi halaman, menindaklanjuti pesanan, serta mengerjakan konten atau custom |

### 2.2 Asumsi dan Ketergantungan
- Pemesanan dan pembayaran diproses manual di luar sistem (transfer bank, e-wallet, dll.) melalui WhatsApp.
- Kebutuhan custom (brief) dikumpulkan admin lewat percakapan WhatsApp, bukan lewat formulir di halaman.
- Isi halaman diperbarui manual dengan mengubah file sumber, lalu diunggah ulang.
- Komputer pengembang memiliki Node.js untuk menjalankan build Tailwind CSS. Pengunjung dan hosting tidak membutuhkannya.
- Pengunjung memiliki WhatsApp terpasang di perangkatnya.
- Halaman memakai brand baru, bukan brand situs referensi. Nama brand adalah "LamanLabs", sesuai logo di `assets/img/`; pengembangnya Hasrul. Data kontak disimpan di satu file konfigurasi.
- Untuk tahap awal, halaman dihosting di GitHub Pages. Pada paket gratis GitHub, repositori harus bersifat publik.
- Selama belum memakai domain sendiri, halaman diakses di `https://<username>.github.io/<nama-repo>/` (repositori proyek, bukan repositori `<username>.github.io`), sehingga semua tautan aset memakai path relatif.

### 2.3 Paket yang Ditawarkan
Jalur paket terdiri dari tiga pilihan. Harga, jumlah revisi, dan waktu pengerjaan di bawah sudah disetujui.

| Fitur | Basic | Standard | Premium |
|---|---|---|---|
| Harga | Rp 350.000 | Rp 750.000 | Rp 1.500.000 |
| Cocok untuk | Personal, portofolio sederhana | UMKM dan jasa | Bisnis yang butuh tampilan lengkap |
| Jumlah bagian halaman | Hingga 5 | Hingga 8 | Hingga 12 |
| Ganti konten, logo, dan warna dasar | Ya | Ya | Ya |
| Tombol WhatsApp dan tautan media sosial | Ya | Ya | Ya |
| Galeri foto dan Google Maps | Tidak | Ya | Ya |
| Testimoni dan FAQ | Tidak | Tidak | Ya |
| Penulisan teks (copywriting) | Tidak | Tidak | Ya |
| Domain dan hosting 1 tahun | Tidak, file diserahkan ke pembeli | Ya, domain .my.id | Ya, domain .com |
| SEO | Meta dasar | Meta dasar dan Google Search Console | Meta dasar, Google Search Console, dan Google Analytics |
| Jumlah revisi | 1 kali | 2 kali | 3 kali |
| Waktu pengerjaan | 2 hari kerja | 3 hari kerja | 5 hari kerja |
| Dukungan setelah publikasi | 7 hari | 30 hari | 90 hari |

Ketentuan yang berlaku untuk semua paket:
- Paket memakai susunan halaman standar. Permintaan desain khusus masuk ke jalur custom.
- Pembeli menyediakan teks, logo, dan foto, kecuali teks pada paket Premium.
- Perpanjangan domain dan hosting tahun berikutnya dikenakan biaya terpisah.

### 2.4 Referensi Konten
Isi konten halaman mengacu pada `https://yudhirazak.github.io/` (SyukurDesign, jasa pembuatan website). Referensi dipakai untuk jenis isi dan gaya penyampaian, bukan untuk struktur teknis. Teks ditulis ulang, tidak disalin.

| Bagian di referensi | Isi di referensi | Penerapan di halaman ini |
|---|---|---|
| Navigasi | Home, About Us, Our Service, Portfolio, Contact Us | Navigasi anchor berbahasa Indonesia: Beranda, Layanan, Harga, Custom, FAQ, Tentang, Kontak |
| Hero | Judul ajakan singkat, subjudul "harga terjangkau dan proses cepat", satu tombol "Chat Via WhatsApp" | Pola sama: judul ajakan, subjudul manfaat, satu tombol WhatsApp utama |
| Paket | Tiga kartu paket berisi harga, daftar fitur singkat, dan tombol "Beli Sekarang" | Tiga kartu Basic, Standard, Premium dengan pola sama; tombol langsung ke WhatsApp |
| About Us | Profil singkat penyedia: lokasi, tahun berdiri, fokus layanan | Bagian Tentang dengan isi sejenis |
| Our Service | Enam kartu keunggulan: Expert Coder, Graphic Designer, Social Marketer, SEO Expert, 24/7 Support, System Analyst | Bagian Layanan berisi enam kartu keunggulan, masing-masing dengan satu kalimat penjelasan |
| Kontak | Alamat, telepon, email, dan tautan media sosial | Bagian Kontak dan footer dengan isi sejenis |

Bagian referensi yang tidak dipakai:
- **Formulir kontak** (nama, email, pilihan paket, pesan): diganti tombol WhatsApp, karena halaman ini tidak memiliki formulir.
- **Portfolio** (enam kartu gambar contoh situs): tidak dipakai, karena halaman ini tidak menampilkan katalog template.
- **Technologies Used:** tidak relevan untuk pembeli landing page profil.
- **Isi paket** (jumlah halaman, kuota upload, akun email): referensi menjual website penuh, sedangkan halaman ini menjual landing page satu halaman sesuai bagian 2.3.

---

## 3. Kebutuhan Fungsional

### 3.1 Struktur Halaman
- **FR-01** Sistem berupa satu halaman dengan bagian berurutan: Hero, Layanan, Harga, Custom, FAQ, Tentang, dan Kontak.
- **FR-02** Navigasi di bagian atas halaman menggulir ke bagian terkait melalui anchor link.
- **FR-03** Bagian Hero menampilkan penawaran utama dan tombol "Pesan via WhatsApp".

### 3.2 Bagian Template
Dihapus pada versi 1.9. FR-04, FR-05, dan FR-06 tidak berlaku lagi dan nomornya tidak dipakai ulang.

### 3.3 Bagian Harga
- **FR-07** Bagian Harga menampilkan tiga paket (Basic, Standard, Premium) dalam bentuk kartu atau tabel perbandingan, dengan isi sesuai bagian 2.3.
- **FR-08** Harga ditampilkan dalam Rupiah dengan keterangan apakah sudah termasuk domain/hosting atau belum.
- **FR-09** Setiap paket memiliki tombol "Pesan via WhatsApp" dengan pesan terisi otomatis berisi nama paket.

### 3.4 Bagian Custom
- **FR-10** Bagian Custom menjelaskan proses, estimasi waktu, harga mulai Rp 2.000.000, dan jatah 3 kali revisi.
- **FR-11** Tombol "Minta Custom" mengarahkan ke WhatsApp dengan pesan terisi otomatis berisi daftar poin brief yang diisi pemesan di chat: nama bisnis/personal, tujuan halaman, referensi desain, warna dan gaya, bagian yang dibutuhkan, dan anggaran.
- **FR-12** Harga custom bersifat estimasi dan difinalisasi admin setelah brief dikonfirmasi di WhatsApp.

### 3.5 Pesan WhatsApp
- **FR-13** Semua tombol pemesanan mengarah ke `https://wa.me/<nomor>?text=<pesan>`.
- **FR-14** Pesan WhatsApp mengikuti format standar yang memudahkan admin mencatat pesanan (jalur, paket atau custom, nama pemesan).
- **FR-15** Sistem menampilkan nomor WhatsApp dan jam operasional admin (setiap hari 08.00–21.00) di bagian Kontak dan footer.

### 3.6 Bagian Informasi
- **FR-16** Bagian FAQ menjawab pertanyaan umum seperti proses pemesanan, waktu pengerjaan, jumlah revisi, dan metode pembayaran.
- **FR-17** Bagian Tentang menjelaskan singkat siapa penyedia jasa: lokasi, tahun berdiri, dan fokus layanan.
- **FR-20** Bagian Layanan menampilkan enam kartu keunggulan, masing-masing berisi ikon, judul, dan satu kalimat penjelasan.
- **FR-21** Bagian Kontak dan footer menampilkan alamat, email, dan tautan media sosial selain nomor WhatsApp.
- **FR-18** Halaman memiliki meta SEO dasar (title, description, Open Graph).

### 3.7 Analitik (Opsional)
- **FR-19** Sistem dapat mencatat klik tombol WhatsApp menggunakan Google Analytics atau tools serupa.

---

## 4. Kebutuhan Non-Fungsional

| ID | Kategori | Kebutuhan |
|---|---|---|
| NFR-01 | Performa | Halaman dimuat di bawah 2 detik pada koneksi 4G |
| NFR-02 | Keamanan | HTTPS wajib; halaman tidak mengumpulkan atau menyimpan data pengunjung |
| NFR-03 | Ketersediaan | Target uptime 99%, mengikuti ketersediaan GitHub Pages yang tidak memberikan jaminan (SLA) |
| NFR-04 | Responsif | Tampilan optimal di desktop dan mobile |
| NFR-05 | SEO | Skor Lighthouse SEO minimal 90 |
| NFR-06 | Aksesibilitas | Kontras warna dan ukuran font memenuhi panduan WCAG dasar |
| NFR-07 | Bahasa | Antarmuka dalam Bahasa Indonesia |
| NFR-08 | Maintainability | Teks dan harga dapat diubah dengan mengedit satu file sumber tanpa mengubah struktur halaman |
| NFR-09 | Portabilitas | Halaman dapat dijalankan di hosting static mana pun tanpa konfigurasi server khusus |

---

## 5. Arsitektur dan Teknologi (Usulan)

- **Halaman:** Satu `index.html` berisi HTML biasa; tanpa framework JavaScript
- **Styling:** Tailwind CSS v4 melalui Tailwind CLI. File sumber `src/input.css` di-build menjadi `assets/css/style.css` yang sudah diperkecil (minify)
- **Build:** Hanya untuk CSS, dijalankan di komputer lokal (`npm run build`). Hasil build ikut di-commit, sehingga GitHub Pages cukup melayani file apa adanya tanpa GitHub Actions
- **Tailwind Play CDN tidak dipakai untuk rilis:** CDN memproses CSS di browser pengunjung sehingga memperlambat halaman; hanya boleh dipakai untuk mencoba desain
- **JavaScript:** JavaScript murni dalam satu file kecil untuk menu mobile dan pembuat tautan WhatsApp; FAQ memakai elemen bawaan `<details>` tanpa JavaScript
- **Ikon:** SVG inline (misalnya Heroicons atau Lucide), tanpa pustaka ikon berbasis font
- **Font:** Satu keluarga font yang dihosting sendiri dalam format WOFF2, atau font bawaan sistem
- **Aset:** Gambar, bila ada, dalam format WebP dengan lazy loading
- **Hosting (tahap awal):** GitHub Pages, dipublikasikan dari branch `main`; HTTPS disediakan otomatis oleh GitHub
- **Deploy:** Jalankan build CSS, lalu `git push` ke branch `main`; file `.nojekyll` di root agar file dilayani apa adanya
- **Domain:** Alamat bawaan `github.io` pada tahap awal; domain sendiri dapat dipasang kemudian melalui pengaturan custom domain GitHub Pages
- **Hosting (lanjutan):** Dapat dipindah ke VPS atau static hosting lain tanpa mengubah halaman
- **Kontak:** Tautan WhatsApp (`wa.me`) tanpa integrasi API
- **Analitik:** Google Analytics (opsional)

---

## 6. Di Luar Lingkup (Versi 1.9)
- Website multi-halaman
- Katalog template siap pakai dan halaman demo template
- Formulir brief dan penyimpanan data brief
- Pembayaran online dan invoice otomatis
- Registrasi dan login pengguna
- Dashboard admin, CMS, dan editor konten oleh pembeli
- Integrasi WhatsApp Business API dan chatbot
- Custom domain otomatis (dikelola manual)
- Revisi custom di luar jumlah yang disepakati (dikenakan biaya tambahan)
- Fitur interaktif kompleks (booking, e-commerce, login member) pada jalur custom

---

## 7. Alur Pemesanan

### 7.1 Jalur Paket
1. Pengunjung memilih paket di halaman.
2. Pengunjung menekan "Pesan via WhatsApp".
3. Admin mengonfirmasi paket dan meminta data konten.
4. Admin membuat halaman, lalu mengirim pratinjau.
5. Pembayaran dan publikasi disepakati.

### 7.2 Jalur Custom
1. Pengunjung menekan "Minta Custom".
2. Pengunjung mengisi poin brief di pesan WhatsApp dan mengirimkannya.
3. Admin mereview brief dan mengirim estimasi harga serta waktu pengerjaan.
4. Setelah disepakati, admin membuat desain, mengirim pratinjau, dan melakukan revisi sesuai kesepakatan.
5. Pembayaran dan publikasi disepakati.

---

## 8. Pertanyaan Terbuka
1. (Terjawab) Logo halaman penjualan: logo LamanLabs di `assets/img/`.
2. Apa nama akun dan nama repositori GitHub yang dipakai?
3. Zona waktu mana yang dicantumkan pada jam operasional (WIB, WITA, atau WIT)?
4. Berapa estimasi waktu pengerjaan jalur custom?
5. Apakah halaman penjualan akan memakai domain sendiri, dan kapan?

## 9. Keputusan yang Sudah Diambil

| Hal | Keputusan |
|---|---|
| Brand | LamanLabs, dikerjakan oleh Hasrul; bukan SyukurDesign |
| Logo dan warna | Logo LamanLabs (`assets/img/logo.png`, `logo-text.png`); warna halaman mengikuti logo: hijau dan biru tua |
| Harga paket | Basic Rp 350.000, Standard Rp 750.000, Premium Rp 1.500.000 |
| Domain paket | Standard .my.id, Premium .com |
| Template siap pakai | Dihapus dari halaman; tidak ada katalog template maupun demo |
| Jalur custom | Mulai Rp 2.000.000, 3 kali revisi |
| Jam operasional | Setiap hari 08.00–21.00 |
| Nomor WhatsApp admin | 0857 7771 3662 |
| Hosting | GitHub Pages, repositori proyek |
| Styling | Tailwind CSS v4 melalui Tailwind CLI |
