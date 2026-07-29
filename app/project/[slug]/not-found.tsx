import Link from "next/link";
import { ArrowLeft, SearchX } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ProjectNotFound() {
  return (
    <>
      <Header />
      <main>
        <section className="relative flex min-h-screen items-center pt-16">
          <div className="mx-auto max-w-6xl px-6 lg:px-8 w-full text-center">
            <span className="inline-flex rounded-full bg-accent-500/10 p-4 text-accent-400">
              <SearchX className="h-8 w-8" />
            </span>
            <h1 className="mt-6 font-display font-bold text-3xl sm:text-4xl text-ink-100">
              Proyek Tidak Ditemukan
            </h1>
            <p className="mt-3 max-w-md mx-auto text-ink-300">
              Proyek yang Anda cari tidak tersedia atau mungkin sudah
              dipindahkan.
            </p>
            <Link
              href="/#project"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-white hover:bg-accent-600 transition-all shadow-lg shadow-accent-500/20"
            >
              <ArrowLeft className="h-4 w-4" />
              Kembali ke Proyek
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
