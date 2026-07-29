export type ProjectFeature = {
  title: string;
  description: string;
};

export type ProjectTimelineStep = {
  phase: string;
  period: string;
  description: string;
};

export type ProjectChallenge = {
  challenge: string;
  solution: string;
};

export type ProjectResult = {
  label: string;
  value: string;
};

export type ProjectInfo = {
  role: string;
  duration: string;
  team: string;
  year: string;
};

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  // --- Extended fields used by the Project Detail page ---
  // All optional so existing cards / landing sections keep working untouched.
  longDescription?: string[];
  goals?: string[];
  info?: ProjectInfo;
  gallery?: string[];
  features?: ProjectFeature[];
  timeline?: ProjectTimelineStep[];
  challenges?: ProjectChallenge[];
  results?: ProjectResult[];
};

// Replace image URLs with your own thumbnails in /public/images later
export const PROJECTS: Project[] = [
  {
    id: "project-satu",
    title: "E-Commerce Dashboard",
    category: "Full-Stack App",
    description:
      "Dashboard admin untuk mengelola produk, pesanan, dan statistik penjualan secara real-time.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    tech: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project-satu",
    longDescription: [
      "E-Commerce Dashboard adalah panel admin yang dibangun untuk membantu tim operasional mengelola katalog produk, memantau pesanan masuk, dan menganalisis performa penjualan tanpa harus menyentuh database secara langsung.",
      "Seluruh data disajikan secara real-time melalui kombinasi Next.js App Router dan Prisma sebagai ORM, dengan lapisan UI yang dirancang agar tetap ringan meski menampilkan ribuan baris data transaksi.",
    ],
    goals: [
      "Mempercepat proses pengelolaan produk dan stok oleh tim non-teknis.",
      "Menyediakan visualisasi penjualan yang mudah dibaca dalam satu tampilan.",
      "Mengurangi kesalahan input pesanan lewat validasi otomatis.",
    ],
    info: {
      role: "Full-Stack Developer",
      duration: "6 minggu",
      team: "Solo project",
      year: "2024",
    },
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    ],
    features: [
      {
        title: "Manajemen Produk",
        description:
          "CRUD produk lengkap dengan varian, kategori, dan pengelolaan stok otomatis.",
      },
      {
        title: "Statistik Real-Time",
        description:
          "Grafik pendapatan dan tren pesanan yang diperbarui secara langsung tanpa reload.",
      },
      {
        title: "Manajemen Pesanan",
        description:
          "Pelacakan status pesanan dari pending hingga selesai dengan notifikasi otomatis.",
      },
      {
        title: "Role-Based Access",
        description:
          "Hak akses berbeda untuk admin, staf gudang, dan staf penjualan.",
      },
    ],
    timeline: [
      {
        phase: "Riset & Perencanaan",
        period: "Minggu 1",
        description:
          "Menyusun kebutuhan fitur bersama calon pengguna dan merancang skema database.",
      },
      {
        phase: "Desain UI/UX",
        period: "Minggu 2",
        description: "Membuat wireframe dan prototipe alur kerja admin di Figma.",
      },
      {
        phase: "Pengembangan Inti",
        period: "Minggu 3–4",
        description:
          "Implementasi backend Prisma, autentikasi, dan modul produk/pesanan.",
      },
      {
        phase: "Pengujian & Optimasi",
        period: "Minggu 5",
        description: "Pengujian performa query dan perbaikan bug lintas perangkat.",
      },
      {
        phase: "Peluncuran",
        period: "Minggu 6",
        description: "Deploy ke production dan dokumentasi penggunaan.",
      },
    ],
    challenges: [
      {
        challenge:
          "Query statistik penjualan menjadi lambat saat data transaksi bertambah banyak.",
        solution:
          "Menerapkan agregasi di level database dan caching hasil query dengan revalidasi berkala.",
      },
      {
        challenge:
          "Sinkronisasi status pesanan antar tab admin yang dibuka bersamaan.",
        solution:
          "Menggunakan polling ringan dan optimistic update untuk menjaga konsistensi tampilan.",
      },
    ],
    results: [
      { label: "Waktu Proses Pesanan", value: "-40%" },
      { label: "Kesalahan Input Manual", value: "-65%" },
      { label: "Kepuasan Tim Operasional", value: "4.8/5" },
    ],
  },
  {
    id: "project-dua",
    title: "Task Management App",
    category: "Web Application",
    description:
      "Aplikasi manajemen tugas dengan fitur drag-and-drop, kolaborasi tim, dan notifikasi real-time.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=800&auto=format&fit=crop",
    tech: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project-dua",
    longDescription: [
      "Task Management App dirancang untuk tim kecil hingga menengah yang membutuhkan cara sederhana namun kuat untuk mengatur alur kerja mereka lewat papan Kanban.",
      "Fitur kolaborasi real-time memungkinkan setiap anggota tim melihat perubahan status tugas secara langsung, sehingga mengurangi miskomunikasi antar anggota tim yang bekerja jarak jauh.",
    ],
    goals: [
      "Menyederhanakan koordinasi tugas tim tanpa alat tambahan yang rumit.",
      "Memberikan visibilitas progres proyek secara instan bagi semua anggota.",
      "Mendukung kolaborasi jarak jauh dengan notifikasi yang relevan.",
    ],
    info: {
      role: "Frontend & Backend Developer",
      duration: "5 minggu",
      team: "2 developer",
      year: "2024",
    },
    gallery: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200&auto=format&fit=crop",
    ],
    features: [
      {
        title: "Papan Kanban Drag-and-Drop",
        description:
          "Pindahkan tugas antar kolom status dengan interaksi drag-and-drop yang halus.",
      },
      {
        title: "Kolaborasi Tim",
        description: "Komentar, mention, dan lampiran file pada setiap kartu tugas.",
      },
      {
        title: "Notifikasi Real-Time",
        description:
          "Pembaruan langsung saat tugas ditugaskan, diubah, atau mendekati tenggat waktu.",
      },
      {
        title: "Filter & Pencarian",
        description:
          "Menyaring tugas berdasarkan penanggung jawab, label, atau prioritas.",
      },
    ],
    timeline: [
      {
        phase: "Perencanaan Fitur",
        period: "Minggu 1",
        description: "Menentukan MVP dan alur kolaborasi tim.",
      },
      {
        phase: "Pengembangan Backend",
        period: "Minggu 2",
        description: "Membangun API Node.js dan skema data MongoDB.",
      },
      {
        phase: "Pengembangan Frontend",
        period: "Minggu 3",
        description: "Implementasi papan Kanban dan interaksi drag-and-drop.",
      },
      {
        phase: "Integrasi Real-Time",
        period: "Minggu 4",
        description: "Menghubungkan notifikasi dan sinkronisasi antar client.",
      },
      {
        phase: "QA & Rilis",
        period: "Minggu 5",
        description: "Pengujian menyeluruh dan rilis versi awal.",
      },
    ],
    challenges: [
      {
        challenge: "Drag-and-drop terasa patah-patah pada daftar tugas yang panjang.",
        solution:
          "Mengoptimalkan re-render dengan virtualisasi list dan memoization komponen kartu.",
      },
      {
        challenge: "Notifikasi real-time terkadang terlambat sampai ke client.",
        solution:
          "Mengganti polling dengan koneksi WebSocket yang lebih stabil dan reconnect otomatis.",
      },
    ],
    results: [
      { label: "Waktu Koordinasi Tim", value: "-30%" },
      { label: "Tugas Terlambat", value: "-25%" },
      { label: "Adopsi Tim Internal", value: "12 tim" },
    ],
  },
  {
    id: "project-tiga",
    title: "Portfolio Landing Page",
    category: "Frontend / UI",
    description:
      "Landing page interaktif dengan animasi scroll dan desain responsif untuk klien freelance.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=800&auto=format&fit=crop",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project-tiga",
    longDescription: [
      "Proyek ini merupakan landing page kustom untuk seorang klien freelance yang membutuhkan kehadiran digital yang kuat, dengan penekanan pada animasi scroll yang halus dan performa loading yang cepat.",
      "Setiap section dirancang modular sehingga klien dapat dengan mudah menambah atau mengubah konten tanpa mengubah struktur inti halaman.",
    ],
    goals: [
      "Menghadirkan kesan profesional sejak detik pertama halaman dimuat.",
      "Menjaga skor performa dan aksesibilitas tetap tinggi di semua perangkat.",
      "Membuat struktur konten yang mudah diperbarui oleh klien.",
    ],
    info: {
      role: "Frontend Developer",
      duration: "3 minggu",
      team: "Solo project",
      year: "2023",
    },
    gallery: [
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=1200&auto=format&fit=crop",
    ],
    features: [
      {
        title: "Animasi Scroll",
        description:
          "Transisi masuk yang halus di setiap section menggunakan Framer Motion.",
      },
      {
        title: "Desain Sepenuhnya Responsif",
        description: "Tampilan optimal mulai dari layar mobile hingga desktop lebar.",
      },
      {
        title: "Skor Performa Tinggi",
        description:
          "Dioptimasi untuk skor Lighthouse 90+ pada performance dan accessibility.",
      },
      {
        title: "Konten Modular",
        description: "Struktur komponen yang memudahkan klien menambah section baru.",
      },
    ],
    timeline: [
      {
        phase: "Diskusi Kebutuhan Klien",
        period: "Minggu 1",
        description: "Mengumpulkan referensi desain dan konten dari klien.",
      },
      {
        phase: "Desain & Prototipe",
        period: "Minggu 1–2",
        description: "Menyusun wireframe dan gaya visual di Figma.",
      },
      {
        phase: "Pengembangan",
        period: "Minggu 2",
        description: "Implementasi section dan animasi scroll.",
      },
      {
        phase: "Revisi & Peluncuran",
        period: "Minggu 3",
        description: "Revisi berdasarkan feedback klien dan deploy ke production.",
      },
    ],
    challenges: [
      {
        challenge:
          "Animasi scroll berat memengaruhi skor performa di perangkat low-end.",
        solution:
          "Menggunakan animasi berbasis transform/opacity saja dan lazy-load section di luar viewport.",
      },
      {
        challenge: "Klien membutuhkan revisi konten berulang kali.",
        solution:
          "Memisahkan konten teks ke dalam struktur data terpisah agar mudah diedit tanpa menyentuh komponen.",
      },
    ],
    results: [
      { label: "Skor Lighthouse", value: "96/100" },
      { label: "Waktu Muat Halaman", value: "<1.2s" },
      { label: "Kepuasan Klien", value: "5/5" },
    ],
  },
  {
    id: "project-empat",
    title: "Realtime Chat App",
    category: "Full-Stack App",
    description:
      "Aplikasi chat real-time dengan autentikasi, room privat, dan indikator status online.",
    image:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop",
    tech: ["React", "Socket.io", "Express"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project-empat",
    longDescription: [
      "Realtime Chat App adalah aplikasi pesan instan yang dibangun untuk mengeksplorasi komunikasi dua arah berbasis WebSocket, lengkap dengan autentikasi pengguna dan room percakapan privat.",
      "Aplikasi ini menekankan pengalaman real-time yang responsif, termasuk indikator sedang mengetik dan status online yang diperbarui tanpa jeda terasa.",
    ],
    goals: [
      "Membangun komunikasi real-time yang stabil dengan latensi rendah.",
      "Mengimplementasikan autentikasi dan privasi room percakapan.",
      "Memberikan indikator status kehadiran pengguna secara akurat.",
    ],
    info: {
      role: "Full-Stack Developer",
      duration: "4 minggu",
      team: "Solo project",
      year: "2023",
    },
    gallery: [
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop",
    ],
    features: [
      {
        title: "Pesan Real-Time",
        description: "Pengiriman dan penerimaan pesan instan melalui koneksi Socket.io.",
      },
      {
        title: "Room Privat",
        description: "Percakapan satu-ke-satu maupun grup dengan akses terbatas.",
      },
      {
        title: "Status Online",
        description:
          "Indikator kehadiran pengguna dan status sedang mengetik secara langsung.",
      },
      {
        title: "Autentikasi Aman",
        description: "Login dan sesi pengguna dilindungi dengan token terenkripsi.",
      },
    ],
    timeline: [
      {
        phase: "Riset Arsitektur",
        period: "Minggu 1",
        description: "Menentukan pendekatan WebSocket dan struktur room percakapan.",
      },
      {
        phase: "Backend & Autentikasi",
        period: "Minggu 2",
        description: "Membangun API Express dan sistem autentikasi pengguna.",
      },
      {
        phase: "Fitur Real-Time",
        period: "Minggu 3",
        description:
          "Implementasi pengiriman pesan, status online, dan indikator mengetik.",
      },
      {
        phase: "Pengujian & Rilis",
        period: "Minggu 4",
        description: "Pengujian beban koneksi bersamaan dan deploy.",
      },
    ],
    challenges: [
      {
        challenge:
          "Koneksi terputus saat pengguna berpindah jaringan menyebabkan pesan hilang.",
        solution:
          "Menambahkan mekanisme reconnect otomatis dan antrian pesan sementara di sisi klien.",
      },
      {
        challenge: "Status online tidak akurat saat banyak tab dibuka bersamaan.",
        solution:
          "Melacak sesi per koneksi socket, bukan per pengguna, lalu menggabungkan statusnya di server.",
      },
    ],
    results: [
      { label: "Latensi Rata-Rata Pesan", value: "<150ms" },
      { label: "Koneksi Bersamaan Teruji", value: "500+" },
      { label: "Uptime Selama Demo", value: "99.9%" },
    ],
  },
];

export function getProjectById(id: string): Project | undefined {
  return PROJECTS.find((project) => project.id === id);
}

export function getRelatedProjects(id: string, limit = 3): Project[] {
  return PROJECTS.filter((project) => project.id !== id).slice(0, limit);
}
