# Portfolio Analysis — Ivan Rozak

> Tujuan: apply sebagai Fullstack Developer. Analisis ini mencakup apa yang perlu diperbaiki dari sisi konten, copywriting, dan struktur data agar terlihat lebih profesional di mata recruiter.

---

## 1. Masalah Kritis (Harus Diperbaiki)

### 1.1 Tagline Grammatically Incorrect
```
"I write code and creating things."
```
Campuran simple present + present continuous. Perbaikan:
- `"I write code and build things."` — simple, paralel
- `"Building products and crafting experiences through code."` — lebih berasa
- `"Fullstack Developer. I turn ideas into working software."` — langsung ke poin

### 1.2 Bio Terlalu Generic
Tidak ada yang membedakan kamu dari 1000 developer lain yang nulis hal serupa.

**Sekarang:**
> "I love crafting both frontend interfaces and backend systems to create seamless digital experiences."

**Masalah:** Tidak ada tech stack, tidak ada angka/skala, tidak ada value proposition yang konkret.

**Contoh perbaikan:**
> "Fullstack Developer with 4+ years of experience building web products used by real users — from telehealth platforms to B2B e-commerce. I work primarily with Next.js, Node.js, and TypeScript."

### 1.3 Deskripsi Project Tidak Menjual
Semua deskripsi project saat ini ditulis dengan sudut pandang task ("Developing...", "Building..."), bukan achievement.

| Project | Sekarang | Lebih Baik |
|---------|----------|------------|
| YesDok | "A health-app video call platform developed using Next.js. Seamlessly connecting users with healthcare professionals." | "Telemedicine platform built with Next.js connecting patients to doctors via video call. Served X active users." |
| Sign-it | "Developed a **groundbreaking** project for digital document signing..." | Hapus kata "groundbreaking" — overclaim. Ganti dengan deskripsi teknis konkret. |
| Daruma | "Developing B2B E-commerce platform..." | "B2B e-commerce platform for office supplies procurement, built with Next.js and integrated payment gateway." |

**Formula deskripsi yang baik:** `[Apa yang dibangun] + [untuk siapa/use case] + [tech stack utama] + [impact/scale kalau ada]`

### 1.4 Tidak Ada Tech Stack di Manapun
Recruiter sangat bergantung pada keyword scanning (manual maupun ATS). Tidak ada satupun mention tech stack di homepage atau project cards. Harus ada:
- Di hero/bio section: tech stack utama kamu
- Di setiap project: badge/tag tech yang dipakai
- Opsional: dedicated skills section

### 1.5 Experience Section Terlalu Kosong
Data experience sekarang hanya: posisi, perusahaan, logo, periode. Tidak ada:
- Deskripsi singkat apa yang dikerjakan
- Tech stack per peran
- Bullet point pencapaian

**"2022 - Present"** di YesDok perlu diupdate — kalau sudah tidak kerja di sana, ganti ke tanggal actual. Kalau masih, oke.

---

## 2. Perbaikan Konten Per Section

### 2.1 Hero Section (Homepage)
Tambahkan:
- **Tech stack pills** di bawah bio: `Next.js · TypeScript · Node.js · React · ...`
- **Availability status** (opsional tapi menarik): `"Open to opportunities"` dengan dot hijau
- **Tahun pengalaman** yang konkret: "4+ years" lebih meyakinkan dari deskripsi abstrak

### 2.2 Projects Section
Tambahkan field baru ke data model:
```typescript
interface Project {
  title: string;
  year: string;
  description: string;
  image: string;
  url: string;
  // Tambahan:
  tech: string[];        // ["Next.js", "TypeScript", "PostgreSQL"]
  category: ProjectCategory;  // lihat section 3
  role?: string;         // "Frontend Lead" | "Fullstack" | "Solo"
  repoUrl?: string;      // link GitHub kalau open source
}
```

### 2.3 Experience Section
Tambahkan field:
```typescript
interface Experience {
  position: string;
  company: string;
  logo: string;
  period: string;
  // Tambahan:
  description?: string;  // 1-2 kalimat apa yang dikerjakan
  tech?: string[];       // tech stack per peran
  type?: "fulltime" | "freelance" | "contract";
}
```

### 2.4 About Page
Saat ini hanya ada social links — terlalu minim. Tambahkan:
- Bio yang lebih panjang dan personal (2-3 paragraf)
- Skills/tech stack section
- Education (kalau relevan)
- Apa yang kamu cari / sedang interested dalam (topik, domain)

---

## 3. Fitur Kategori Project

Ide yang bagus. Berikut struktur yang disarankan:

```typescript
type ProjectCategory = "professional" | "experiment" | "team" | "open-source";
```

**Definisi per kategori:**

| Kategori | Deskripsi | Contoh |
|----------|-----------|--------|
| `professional` | Project dari kerjaan/client, production, ada real users | Ground Radar, Geolitix, YesDok, Daruma, Sign-it, ASA |
| `experiment` | Side project, personal project, proof of concept | Kalau ada |
| `team` | Dibangun bersama tim (bisa overlap dengan professional) | Apapun yang punya team credit |
| `open-source` | Punya repo publik yang bisa dikontribusi | Kalau ada |

**Implementasi di UI (Projects page):**
- Filter tabs di atas daftar project: `All | Professional | Experiment | Team`
- Badge kecil di setiap project card menunjukkan kategori
- Bisa digabung dengan filter tech stack

**Contoh update data untuk project yang ada:**
```typescript
{
  title: "Ground Radar",
  year: "2025",
  category: "professional",
  role: "Fullstack Engineer",
  tech: ["Next.js", "TypeScript", "WebGL", "Node.js"],
  description: "...",
  ...
}
```

---

## 4. Section yang Sebaiknya Ditambahkan

### 4.1 Skills / Tech Stack (Priority: High)
Section ini yang paling sering dicari recruiter dalam 10 detik pertama. Format yang bersih:

```
Frontend    Next.js · React · TypeScript · Tailwind CSS
Backend     Node.js · Express · NestJS · REST API
Database    PostgreSQL · MongoDB · Redis
Tools       Git · Docker · Vercel · Figma
```

### 4.2 GitHub Activity / Open Source (Priority: Medium)
Kalau ada repo publik yang bisa dibanggakan, link langsung ke sana. Bisa juga embed GitHub contribution graph (pakai `github-readme-stats` atau custom API).

### 4.3 Education (Priority: Medium)
Recruiter tetap melihat ini, terutama untuk filter awal. Kalau belum ada di portfolio, tambahkan minimal nama universitas + jurusan + tahun lulus.

### 4.4 "What I'm Currently Working On" (Priority: Low)
Section kecil yang menunjukkan kamu aktif: proyek terbaru, hal yang sedang dipelajari. Memberi kesan kandidat yang tidak stagnan.

---

## 5. Copywriting & Tone

- **Hindari kata-kata lemah:** "Developing...", "Building...", "Creating..." di awal deskripsi project — ganti dengan noun phrase atau hasil konkret
- **Hindari overclaim:** "groundbreaking", "seamless", "cutting-edge" tanpa bukti
- **Tambahkan angka kalau bisa:** "Used by 50k+ users", "Reduced load time by 40%", "10k monthly active sessions" — jauh lebih meyakinkan
- **Konsisten bahasa:** Semua deskripsi project sebaiknya full English kalau target market internasional, atau full Indonesia kalau lokal

---

## 6. Prioritas Pengerjaan

| # | Item | Dampak | Effort |
|---|------|--------|--------|
| 1 | Perbaiki tagline & bio hero | Tinggi | Rendah |
| 2 | Tambah `tech[]` per project, tampilkan sebagai badge | Tinggi | Sedang |
| 3 | Update deskripsi project (achievement-based) | Tinggi | Rendah |
| 4 | Tambah kategori project + filter UI | Sedang | Sedang |
| 5 | Perkaya experience section (deskripsi + tech) | Tinggi | Rendah |
| 6 | Tambah skills section di homepage atau about | Tinggi | Rendah |
| 7 | Perkaya about page dengan bio lebih panjang | Sedang | Rendah |
| 8 | Tambah education | Sedang | Rendah |
