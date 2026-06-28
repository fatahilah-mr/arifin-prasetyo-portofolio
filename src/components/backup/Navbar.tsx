import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { id: "beranda", label: "Beranda" },
  { id: "sertifikasi", label: "Sertifikasi" },
  { id: "keahlian", label: "Keahlian" },
  { id: "galeri", label: "Galeri Menu" },
  { id: "kontak", label: "Kontak" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <>
      {/* ===== NAVBAR UTAMA ===== */}
      <header className="sticky top-3 z-50 mx-auto w-full px-3 sm:top-5 sm:px-6">
        <div className="mx-auto flex max-w-3xl items-center justify-between rounded-full border border-black/5 bg-white/70 px-5 py-3 shadow-[0_6px_30px_-12px_rgba(0,0,0,0.15)] backdrop-blur-xl">
          {/* Logo sekarang langsung teks "Arifin Prasetyo" tanpa lingkaran */}
          <button
            onClick={() => go("beranda")}
            className="flex items-center font-display text-base font-semibold tracking-tight text-[var(--color-ink)] sm:text-lg"
          >
            <span>Arifin Prasetyo</span>
          </button>

          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="grid h-10 w-10 place-items-center rounded-full border border-black/5 bg-white/80 text-[var(--color-ink)] transition hover:bg-white"
          >
            <Menu size={18} />
          </button>
        </div>
      </header>

      {/* ===== OVERLAY MENU (saat hamburger diklik) ===== */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-[var(--color-background)]/95 backdrop-blur-xl">
          <div className="flex items-center justify-between px-6 py-5">
            {/* Ganti "AP" menjadi "Arifin Prasetyo" dengan ukuran responsif */}
            <span className="font-display text-base font-semibold sm:text-lg">
              Arifin Prasetyo
            </span>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="grid h-10 w-10 place-items-center rounded-full border border-black/10"
            >
              <X size={18} />
            </button>
          </div>

          <nav className="mt-10 flex flex-col items-center gap-6 px-6">
            {links.map((l, i) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="group font-display text-4xl font-medium tracking-tight text-[var(--color-ink)] transition hover:text-primary sm:text-5xl"
                style={{ animation: `fadeUp .5s ${i * 0.05}s both` }}
              >
                {l.label}
              </button>
            ))}
          </nav>

          <p className="absolute bottom-8 left-0 right-0 text-center text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Professional Cook · Purworejo, ID
          </p>

          <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}`}</style>
        </div>
      )}
    </>
  );
}