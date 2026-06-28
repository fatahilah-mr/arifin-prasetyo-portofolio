import { Mail, Phone, MapPin, Instagram } from "lucide-react";

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.554-5.338 11.89-11.893 11.89a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

function TikTokIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005.8 20.1a6.34 6.34 0 0010.86-4.43V9.01a8.16 8.16 0 004.77 1.52V7.1a4.85 4.85 0 01-1.84-.41z" />
    </svg>
  );
}

export function ContactCard() {
  return (
    <section id="kontak" className="px-5 pt-24 sm:px-8 sm:pt-32">
      <div className="mx-auto max-w-3xl">
        <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-card p-7 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)] sm:p-12">
          <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Kontak</p>
          <h2 className="mt-2 font-display text-3xl leading-tight text-[var(--color-ink)] sm:text-4xl">
            Mari berkolaborasi
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-foreground/80">
            Punya proyek dapur, event, atau peluang kerja? Saya senang berdiskusi soal menu,
            katering, hingga kolaborasi kuliner. Jangan ragu untuk menyapa.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="https://wa.me/6283109378056"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_-12px_#25D366] transition hover:translate-y-[-1px]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Chat WhatsApp
            </a>
            <a
              href="mailto:arifin08prasetyo@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-ink)]/15 px-6 py-3.5 text-sm font-semibold text-[var(--color-ink)] transition hover:border-[var(--color-ink)]/40 hover:bg-white"
            >
              <Mail className="h-4 w-4" />
              Kirim Email
            </a>
          </div>

          <dl className="mt-9 grid gap-4 border-t border-black/5 pt-7 sm:grid-cols-3">
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-primary" />
              <div className="min-w-0">
                <dt className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Email</dt>
                <dd className="mt-1 truncate text-sm text-[var(--color-ink)]">arifin08prasetyo@gmail.com</dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 text-primary" />
              <div>
                <dt className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Telepon</dt>
                <dd className="mt-1 text-sm text-[var(--color-ink)]">+62 831-0937-8056</dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-primary" />
              <div>
                <dt className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Lokasi</dt>
                <dd className="mt-1 text-sm text-[var(--color-ink)]">Purworejo, ID</dd>
              </div>
            </div>
          </dl>

          <div className="mt-8 flex items-center gap-3 border-t border-black/5 pt-7">
            <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Sosial</span>
            <a
              href="https://www.instagram.com/arifinprasetyo8"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border border-black/10 text-[var(--color-ink)] transition hover:border-primary hover:text-primary"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.tiktok.com/@arifinprasetyo858"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="grid h-10 w-10 place-items-center rounded-full border border-black/10 text-[var(--color-ink)] transition hover:border-primary hover:text-primary"
            >
              <TikTokIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
