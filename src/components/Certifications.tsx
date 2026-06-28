import certLulusan from "@/assets/cert-lulusan-terbaik.jpg";
import certKinken from "@/assets/cert-pkl-kinken.jpg";
import certSwiss from "@/assets/cert-pkl-swissbelhotel.jpg";
import certTable from "@/assets/cert-table-manner.jpg";

const items = [
  {
    date: "Mei 2026",
    title: "Sertifikat Lulusan Terbaik Jurusan Kuliner",
    issuer: "SMK Patriot Pituruh",
    img: certLulusan,
    accent: true,
  },
  {
    date: "Desember 2025",
    title: "Sertifikat Praktik Kerja Lapangan — 6 Bulan",
    issuer: "KinKEN Cake & Bakery",
    img: certKinken,
  },
  {
    date: "April 2025",
    title: "Certificate of Industrial Work Experience — 3 Bulan",
    issuer: "Swiss-Belhotel Airport Yogyakarta",
    img: certSwiss,
  },
  {
    date: "Oktober 2024",
    title: "Table Manner Certificate",
    issuer: "Swiss-Belhotel Airport Yogyakarta",
    img: certTable,
  },
];

export function Certifications() {
  return (
    <section id="sertifikasi" className="px-5 pt-24 sm:px-8 sm:pt-32">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              Kredensial Resmi
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-5xl">Perjalanan &amp; Sertifikasi</h2>
          </div>
          <p className="max-w-sm text-sm text-foreground/70">
            Empat kredensial formal yang merangkum perjalanan akademik dan pengalaman industri.
          </p>
        </header>

        <ol className="relative grid gap-6 md:grid-cols-2">
          {items.map((it) => (
            <li
              key={it.title}
              className="group relative overflow-hidden rounded-2xl border border-black/5 bg-card shadow-[0_18px_50px_-30px_rgba(0,0,0,0.25)] transition hover:shadow-[0_28px_60px_-25px_rgba(0,0,0,0.3)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />
                {it.accent && (
                  <span className="absolute right-3 top-3 rounded-full bg-[var(--color-gold)] px-3 py-1 text-[11px] font-semibold tracking-wide text-[var(--color-ink)]">
                    BEST GRADUATE
                  </span>
                )}
              </div>
              <div className="p-6">
                <p className="text-[11px] uppercase tracking-[0.22em] text-primary">{it.date}</p>
                <h3 className="mt-2 font-display text-xl leading-snug text-[var(--color-ink)]">
                  {it.title}
                </h3>
                <p className="mt-1.5 text-sm text-foreground/70">{it.issuer}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
