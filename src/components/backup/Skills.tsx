const hard = [
  "Teknik Dasar Memasak",
  "Food Preparation & Plating",
  "Keamanan & Higiene Pangan",
  "Baking & Pastry",
];

const soft = [
  "Manajemen Operasional Dapur",
  "Kreativitas",
  "Disiplin",
  "Kerja Sama Tim",
];

function Group({
  label,
  title,
  items,
  variant,
}: {
  label: string;
  title: string;
  items: string[];
  variant: "primary" | "ink";
}) {
  return (
    <div className="rounded-3xl border border-black/5 bg-card p-7 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.25)] sm:p-9">
      <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">{label}</p>
      <h3 className="mt-2 font-display text-2xl text-[var(--color-ink)] sm:text-3xl">{title}</h3>
      <ul className="mt-6 flex flex-wrap gap-2.5">
        {items.map((it) => (
          <li
            key={it}
            className={
              variant === "primary"
                ? "rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary"
                : "rounded-full border border-[var(--color-ink)]/10 bg-[var(--color-ink)]/[0.03] px-4 py-2 text-sm font-medium text-[var(--color-ink)]"
            }
          >
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Skills() {
  return (
    <section id="keahlian" className="px-5 pt-24 sm:px-8 sm:pt-32">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            Kompetensi Inti
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-5xl">Keahlian yang Saya Bawa ke Dapur</h2>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          <Group label="Hard Skills" title="Keahlian Teknis" items={hard} variant="primary" />
          <Group label="Soft Skills" title="Keahlian Personal" items={soft} variant="ink" />
        </div>
      </div>
    </section>
  );
}
