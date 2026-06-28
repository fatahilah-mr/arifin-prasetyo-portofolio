import profile from "@/assets/profile.jpg";

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section id="beranda" className="relative px-5 pt-12 sm:px-8 sm:pt-20">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-16">
        {/* Copy */}
        <div className="order-2 md:order-1">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Tersedia untuk kolaborasi
          </div>

          <h1 className="mt-5 font-display text-[44px] leading-[1.02] tracking-tight text-[var(--color-ink)] sm:text-6xl md:text-7xl">
            Hi, Saya <span className="italic text-primary">Arifin</span> Prasetyo
          </h1>

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-foreground/85 sm:text-base">
            Lulusan terbaik Jurusan Kuliner tahun 2026 yang berdedikasi, disiplin, dan memiliki
            kompetensi tinggi di dunia Food &amp; Beverage. Memiliki pengalaman kerja industri
            (PKL) yang solid selama 3 bulan di hotel bintang 4 (Swiss-Belhotel Airport Yogyakarta)
            dan 6 bulan di industri bakery komersial (KinKEN Cake &amp; Bakery). Menguasai teknik
            pengolahan hidangan utama (hot kitchen), seni pembuatan roti dan kue (baking &amp;
            pastry), serta memiliki pemahaman yang kuat tentang standar operasional dapur yang
            higienis.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => scrollTo("galeri")}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-[0_10px_25px_-12px_oklch(0.36_0.16_25)] transition hover:translate-y-[-1px] hover:shadow-[0_15px_30px_-12px_oklch(0.36_0.16_25)]"
            >
              Lihat Galeri Menu
              <span aria-hidden>→</span>
            </button>
            <button
              onClick={() => scrollTo("kontak")}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-ink)]/15 bg-transparent px-6 py-3.5 text-sm font-medium text-[var(--color-ink)] transition hover:border-[var(--color-ink)]/40 hover:bg-white"
            >
              Hubungi Saya
            </button>
          </div>
        </div>

        {/* Portrait */}
        <div className="order-1 md:order-2">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 -z-10 rounded-[2.2rem] bg-gradient-to-br from-primary/15 via-transparent to-[var(--color-gold)]/20 blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)]">
              <img
                src={profile}
                alt="Arifin Prasetyo, Professional Cook"
                width={896}
                height={1152}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-black/5 bg-white px-5 py-2.5 text-[12.5px] font-medium text-[var(--color-ink)] shadow-[0_18px_40px_-18px_rgba(0,0,0,0.35)]">
              <span aria-hidden>🍳</span> Professional Cook —{" "}
              <span className="text-muted-foreground">Lulusan SMK Jurusan Kuliner</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
