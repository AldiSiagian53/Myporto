# Portfolio Next.js

Website portofolio pribadi — Next.js (App Router) + React + Tailwind CSS + lucide-react.

## Cara Menjalankan

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Menambahkan File CV (Penting)

Tombol "Download CV" di header mengarah ke `/cv.pdf`. Next.js menyajikan
semua isi folder `public/` langsung dari root domain, jadi:

1. Siapkan file CV Anda dalam format PDF.
2. Beri nama file tersebut persis **`cv.pdf`**.
3. Letakkan di dalam folder `public/` (sejajar dengan `public/images/`),
   sehingga strukturnya menjadi:

   ```
   public/
     cv.pdf        <-- taruh di sini
     images/
       profile.jpg
   ```

4. Jalankan ulang `npm run dev` bila perlu — file akan otomatis bisa
   diakses di `http://localhost:3000/cv.pdf` dan tombol "Download CV"
   akan langsung mengunduhnya.

## Kustomisasi Cepat

- **Nama, peran, bio** — edit `components/Hero.tsx` dan `components/About.tsx`.
- **Data proyek** — edit array `PROJECTS` di `lib/projects.ts`.
- **Foto profil** — ganti `public/images/profile.jpg`.
- **Info kontak & sosial media** — edit `components/Contact.tsx` dan `components/Footer.tsx`.
- **Warna/tema** — token warna ada di `tailwind.config.ts` (`base`, `accent`, `ink`).

## Struktur Proyek

```
portfolio-nextjs/
├── app/
│   ├── layout.tsx      # Root layout, font, metadata
│   ├── page.tsx         # Merangkai semua section sesuai urutan menu
│   └── globals.css      # Tema dasar dark + grid background
├── components/
│   ├── Header.tsx        # Nav sticky, burger mobile, tombol CV
│   ├── Hero.tsx           # Section Home
│   ├── Projects.tsx       # Section Project (grid)
│   ├── ProjectCard.tsx    # Kartu proyek individual
│   ├── About.tsx          # Section About Me
│   ├── Contact.tsx        # Section Contact + form
│   └── Footer.tsx         # Footer
├── lib/
│   └── projects.ts        # Data proyek (edit di sini)
└── public/
    ├── cv.pdf              # <-- tambahkan file Anda sendiri
    └── images/
        └── profile.jpg     # <-- tambahkan foto Anda sendiri
```
