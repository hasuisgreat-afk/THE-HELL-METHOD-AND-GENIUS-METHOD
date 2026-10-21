import { useEffect, useState } from "react";
import { ArrowDown, Menu, X } from "lucide-react";
import { cn } from "../utils/cn";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Our Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-ink/10 bg-cream/90 shadow-[0_10px_40px_-24px_rgba(36,36,36,0.4)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Brand */}
        <a href="#home" className="flex items-baseline gap-2" aria-label="The Method Studio — home">
          <span className="font-serif text-[22px] font-medium tracking-tight text-ink">The Method</span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-ink-mute">Studio</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#products"
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink/85 hover:shadow-lift"
          >
            Explore Guides
            <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-sand md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden transition-[max-height,opacity] duration-300 ease-out md:hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="border-t border-ink/10 bg-cream px-5 py-4" aria-label="Mobile" inert={!open}>
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-[15px] text-ink-soft transition-colors hover:bg-sand hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#products"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-ink/85"
          >
            Explore Guides
            <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
}
