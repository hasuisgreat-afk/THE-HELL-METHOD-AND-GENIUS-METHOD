import { Mail } from "lucide-react";
import { CHECKOUT, SITE } from "../config";
import { PlaceholderChip } from "./Purchase";


export default function Footer({
  onOpenLegal,
}: {
  onOpenLegal?: (tab: "privacy" | "terms" | "refund") => void;
} = {}) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream/70">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <a href="#home" className="inline-flex items-baseline gap-2" aria-label="The Method Studio — back to top">
              <span className="font-serif text-[22px] font-medium tracking-tight text-cream">The Method</span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-cream/50">Studio</span>
            </a>
            <p className="mt-5 max-w-sm text-[13.5px] leading-relaxed text-cream/60">
              Calm, practical digital guides for people who want to learn better, stand taller, and grow with
              patience.
            </p>
            <div className="mt-6 flex items-center gap-3 text-[13.5px]">
              <Mail className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              {CHECKOUT.SUPPORT_EMAIL ? (
                <a href={`mailto:${CHECKOUT.SUPPORT_EMAIL}`} className="transition-colors hover:text-cream">
                  {CHECKOUT.SUPPORT_EMAIL}
                </a>
              ) : (
                <PlaceholderChip token="SUPPORT_EMAIL" dark />
              )}
            </div>
          </div>

          {/* Products */}
          <nav className="md:col-span-3" aria-label="Products">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cream/40">Products</h4>
            <ul className="mt-5 space-y-3 text-[14px]">
              <li>
                <a href="#product-genius" className="transition-colors hover:text-cream">
                  The Genius Method
                </a>
              </li>
              <li>
                <a href="#product-hell" className="transition-colors hover:text-cream">
                  The Hell Method
                </a>
              </li>
              <li>
                <a href="#products" className="transition-colors hover:text-cream">
                  Compare both guides
                </a>
              </li>
              <li>
                <a href="#bundle" className="transition-colors hover:text-cream">
                  Get Both Guides — {CHECKOUT.BUNDLE_PRICE}
                </a>
              </li>
            </ul>
          </nav>

          {/* Explore */}
          <nav className="md:col-span-2" aria-label="Explore">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cream/40">Explore</h4>
            <ul className="mt-5 space-y-3 text-[14px]">
              <li>
                <a href="#about" className="transition-colors hover:text-cream">
                  About
                </a>
              </li>
              <li>
                <a href="#faq" className="transition-colors hover:text-cream">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>

          {/* Legal */}
          <nav className="md:col-span-2" aria-label="Legal">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cream/40">Legal</h4>
            <ul className="mt-5 space-y-3 text-[14px]">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal ? onOpenLegal("privacy") : (window.location.hash = "privacy")}
                  className="transition-colors hover:text-cream text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal ? onOpenLegal("terms") : (window.location.hash = "terms")}
                  className="transition-colors hover:text-cream text-left"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal ? onOpenLegal("refund") : (window.location.hash = "refund")}
                  className="transition-colors hover:text-cream text-left"
                >
                  Refund Policy
                </button>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-cream/10 pt-7 text-[12.5px] text-cream/45 sm:flex-row">
          <p>
            © {year} {SITE.BRAND}. All rights reserved.
          </p>
          <p>{SITE.TAGLINE}.</p>
        </div>
      </div>
    </footer>
  );
}
