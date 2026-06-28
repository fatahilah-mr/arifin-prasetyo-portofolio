import { useMemo, useState } from "react";
import cordon from "@/assets/menu-cordon-bleu.webp";
import shrimp from "@/assets/menu-shrimp-salad.webp";
import club from "@/assets/menu-club-sandwich.webp";
import slice from "@/assets/menu-slice-cake.webp";
import sweet from "@/assets/menu-sweet-bread.webp";
import muffin from "@/assets/menu-chocolate-muffin.webp";
import welcome from "@/assets/menu-welcome-cake.webp";
import birthday from "@/assets/menu-birthday-cake.webp";
import donuts from "@/assets/menu-donuts.webp";
import pudding from "@/assets/menu-bread-pudding.webp";
import toast from "@/assets/menu-white-toast.webp";
import soes from "@/assets/menu-soes.webp";
import roll from "@/assets/menu-roll-cake.webp";
import mocktails from "@/assets/menu-mocktails.webp";

type Category = "Main Course & Appetizer" | "Pastry & Bakery" | "Beverages";

const data: { title: string; desc: string; img: string; cat: Category }[] = [
  { title: "Chicken Cordon Bleu", desc: "Hidangan ayam gulung isi keju dan daging yang dipotong melintang, disajikan bersama kentang tumbuk (mashed potato), sayuran rebus (wortel, buncis, jagung), serta saus tomat yang dihias melingkar di piring.", img: cordon, cat: "Main Course & Appetizer" },
  { title: "Vegetable Shrimp Salad", desc: "Salad segar yang disusun artistik melingkar, terdiri dari udang rebus, brokoli, tomat ceri, irisan mentimun, selada hijau, serta hiasan saus merah dan irisan lemon di pinggir piring.", img: shrimp, cat: "Main Course & Appetizer" },
  { title: "Club House Sandwich", desc: "Roti lapis panggang (club sandwich) dipotong menjadi dua bagian segitiga, berisi daging, telur, dan sayuran. Disajikan dengan hiasan saus tomat yang diteteskan membentuk pola artistik.", img: club, cat: "Main Course & Appetizer" },
  { title: "Slice Cake", desc: "Berbagai varian potongan kue yang ditata rapi di atas nampan, terdiri dari kue berlapis kuning dengan stroberi, kue cokelat dengan hiasan krim dan stik cokelat, serta kue merah muda dengan potongan buah persik.", img: slice, cat: "Pastry & Bakery" },
  { title: "Sweet Bread", desc: "Roti manis berukuran kecil yang dipanggang hingga berwarna cokelat keemasan mengilap, lalu ditaburi biji wijen di atasnya dan disusun rapi di atas loyang.", img: sweet, cat: "Pastry & Bakery" },
  { title: "Chocolate Muffin", desc: "Muffin cokelat yang baru saja dipanggang di dalam loyang logam, memiliki tekstur mengembang dan warna cokelat pekat yang terlihat sangat menggugah selera.", img: muffin, cat: "Pastry & Bakery" },
  { title: "Welcome Cake", desc: "Potongan kue bolu berlapis warna hijau dan putih yang disajikan di atas piring besar. Kue ini dihiasi dengan tulisan 'Welcome to SBY' menggunakan saus merah dan potongan stroberi di atasnya.", img: welcome, cat: "Pastry & Bakery" },
  { title: "Birthday Cake", desc: "Kue ulang tahun bundar dengan desain elegan, memiliki lapisan ganache cokelat gelap yang menetes di sisi kue berlapis putih, serta dihiasi dengan tiga mawar merah muda dan daun hijau.", img: birthday, cat: "Pastry & Bakery" },
  { title: "Donuts", desc: "Berbagai varian donat berbahan dasar cokelat yang ditata di atas nampan logam, dengan variasi topping seperti hiasan garis putih zigzag, remahan kacang, dan serutan kelapa putih.", img: donuts, cat: "Pastry & Bakery" },
  { title: "Bread Butter Pudding", desc: "Puding roti panggang khas Inggris yang dipanggang dalam loyang aluminium persegi panjang, berwarna kuning keemasan, dengan taburan kismis hitam yang tersebar merata di seluruh permukaannya.", img: pudding, cat: "Pastry & Bakery" },
  { title: "White Toast", desc: "Roti tawar berbentuk kotak panjang dengan tekstur padat, berwarna kecoklatan, dan terlihat memiliki taburan biji-bijian atau gandum utuh di permukaannya.", img: toast, cat: "Pastry & Bakery" },
  { title: "Soes", desc: "Adonan kue sus (choux pastry) berwarna kuning cerah yang sudah disemprotkan rapi di atas loyang, siap untuk dipanggang hingga mengembang menjadi kulit kue sus yang renyah.", img: soes, cat: "Pastry & Bakery" },
  { title: "Roll Cake", desc: "Potongan kue gulung berwarna ungu dengan isian krim putih, dihiasi dengan stroberi segar, potongan buah gelap, dan sedikit krim di atasnya.", img: roll, cat: "Pastry & Bakery" },
  { title: "Mocktails & Cocktails", desc: "Koleksi minuman segar berwarna merah dan ungu dalam gelas-gelas cantik, dihiasi dengan potongan buah dan daun segar, cocok untuk hidangan pembuka atau penutup.", img: mocktails, cat: "Beverages" },
];

const filters = ["Semua Menu", "Main Course & Appetizer", "Pastry & Bakery", "Beverages"] as const;

export function PortfolioGrid() {
  const [active, setActive] = useState<(typeof filters)[number]>("Semua Menu");

  const items = useMemo(
    () => (active === "Semua Menu" ? data : data.filter((d) => d.cat === active)),
    [active],
  );

  return (
    <section id="galeri" className="px-5 pt-24 sm:px-8 sm:pt-32">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Portofolio</p>
            <h2 className="mt-2 font-display text-3xl sm:text-5xl">Galeri Menu</h2>
          </div>
          <p className="max-w-sm text-sm text-foreground/70">
            Pilihan hasil olahan dari hot kitchen, pastry &amp; bakery, hingga beverages.
          </p>
        </header>

        <div className="-mx-5 mb-8 overflow-x-auto whitespace-nowrap px-5 no-scrollbar sm:mx-0 sm:px-0" style={{ WebkitOverflowScrolling: "touch" }}>
          <div className="inline-flex gap-2">
            {filters.map((f) => {
              const on = active === f;
              return (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={
                    "rounded-full border px-4 py-2 text-sm transition " +
                    (on
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-black/10 bg-white text-[var(--color-ink)] hover:border-black/30")
                  }
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <article
              key={it.title}
              className="group overflow-hidden rounded-2xl border border-black/5 bg-card shadow-[0_18px_50px_-30px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 hover:shadow-[0_28px_60px_-25px_rgba(0,0,0,0.3)]"
            >
              <div className="overflow-hidden">
                <img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full transition duration-700 group-hover:scale-[1.05]"
                  style={{ aspectRatio: "4 / 3", objectFit: "cover", borderRadius: "12px 12px 0 0" }}
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-primary">
                  {it.cat}
                </div>
                <h3 className="mt-2 font-display text-xl text-[var(--color-ink)]">{it.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-foreground/75">{it.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
