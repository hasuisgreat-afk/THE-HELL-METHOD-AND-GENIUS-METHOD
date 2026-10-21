import { useEffect, useState } from "react";
import Bundle from "./components/Bundle";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LegalModal, { type LegalTab } from "./components/LegalModal";
import Philosophy from "./components/Philosophy";
import ProductDetail from "./components/ProductDetail";
import Products from "./components/Products";
import { GENIUS, HELL } from "./config";

export default function App() {
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<LegalTab>("privacy");

  const handleOpenLegal = (tab: LegalTab) => {
    setLegalTab(tab);
    setLegalModalOpen(true);
  };

  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === "#privacy" || hash === "#privacy-policy") {
        setLegalTab("privacy");
        setLegalModalOpen(true);
      } else if (hash === "#terms" || hash === "#terms-of-service") {
        setLegalTab("terms");
        setLegalModalOpen(true);
      } else if (hash === "#refund" || hash === "#refund-policy") {
        setLegalTab("refund");
        setLegalModalOpen(true);
      }
    };

    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  return (
    <div className="min-h-screen bg-cream font-sans text-ink">
      {/* Accessibility: skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[90] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-cream"
      >
        Skip to content
      </a>

      {/* Subtle paper-grain texture over the whole page */}
      <div aria-hidden className="grain-overlay" />

      <Header />

      <main id="main">
        <Hero />
        <Products />
        <ProductDetail product={GENIUS} tone="cream" />
        <ProductDetail product={HELL} tone="sand" flip />
        <Bundle />
        <Philosophy />
        <FAQ />
      </main>

      <Footer onOpenLegal={handleOpenLegal} />

      <LegalModal
        isOpen={legalModalOpen}
        activeTab={legalTab}
        onClose={() => setLegalModalOpen(false)}
        onTabChange={setLegalTab}
      />
    </div>
  );
}
