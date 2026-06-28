import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { HighlightBanner } from "@/components/HighlightBanner";
import { Certifications } from "@/components/Certifications";
import { Skills } from "@/components/Skills";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { ContactCard } from "@/components/ContactCard";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arifin Prasetyo — Professional Cook & Pastry" },
      {
        name: "description",
        content:
          "Portofolio Arifin Prasetyo, lulusan terbaik Jurusan Kuliner SMK Patriot Pituruh 2026. Hot kitchen, baking & pastry, dan pengalaman industri hotel bintang 4.",
      },
      { property: "og:title", content: "Arifin Prasetyo — Professional Cook & Pastry" },
      {
        property: "og:description",
        content:
          "Portofolio kuliner: hot kitchen, baking & pastry, beverages. Tersedia untuk kolaborasi.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <HighlightBanner />
      <Certifications />
      <Skills />
      <PortfolioGrid />
      <ContactCard />
      <Footer />
    </main>
  );
}
