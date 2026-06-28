export function HighlightBanner() {
  return (
    <section className="px-5 pt-24 sm:px-8 sm:pt-28">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-[var(--color-gold)]/40 bg-gradient-to-br from-[var(--color-gold)]/15 via-white to-[var(--color-gold)]/10 p-6 sm:p-9">
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full"
          style={{ background: "radial-gradient(closest-side, var(--color-gold), transparent)" }}
        />
        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[var(--color-gold)] text-2xl shadow-[0_10px_25px_-10px_var(--color-gold)]">
            🏆
          </div>
          <div className="min-w-0">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink)]/55">
              Penghargaan Tertinggi
            </p>
            <h3 className="mt-1 font-display text-xl leading-snug text-[var(--color-ink)] sm:text-2xl">
              Lulusan Terbaik Jurusan Kuliner SMK Patriot Pituruh
              <span className="text-[var(--color-ink)]/60"> · TP 2025/2026</span>
            </h3>
            <p className="mt-2 text-sm text-foreground/75">
              Disahkan oleh Kepala Sekolah H. Haryoto, M.Pd. pada 4 Mei 2026.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
