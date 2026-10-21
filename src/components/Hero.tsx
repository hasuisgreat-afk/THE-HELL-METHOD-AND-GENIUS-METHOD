import { ArrowRight, Download, MonitorSmartphone, Zap } from "lucide-react";
import Reveal from "./Reveal";

const TRUST_POINTS = [
  { icon: Zap, label: "Instant delivery after checkout" },
  { icon: MonitorSmartphone, label: "Read on any device" },
  { icon: Download, label: "Download yours to keep" },
];

function LabelChip({ dot, title, sub }: { dot: string; title: string; sub: string }) {
  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-ink/10 bg-paper/85 py-1.5 pl-3 pr-3.5 shadow-sm backdrop-blur-sm">
      <span aria-hidden className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: dot }} />
      <span className="text-[11px] font-medium text-ink">{title}</span>
      <span className="hidden text-[11px] text-ink-mute sm:inline">· {sub}</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden" aria-label="Introduction">
      {/* Soft ambient light */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-48 -top-48 h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle_at_center,rgba(167,181,160,0.32),transparent_65%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-56 top-72 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle_at_center,rgba(237,232,223,0.9),transparent_65%)]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-5 pb-24 pt-12 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-6 lg:pb-32 lg:pt-16">
        {/* Copy */}
        <Reveal>
          <p className="eyebrow flex flex-wrap items-center gap-3">
            <span aria-hidden className="h-px w-9 shrink-0 bg-gold" />
            Practical Guides for Personal Growth
          </p>

          <h1 className="mt-7 font-serif text-[42px] font-medium leading-[1.05] tracking-[-0.015em] text-ink sm:text-6xl lg:text-[64px]">
            Better Ways to <em className="underline-gold">Learn.</em>
            <br />
            Better Ways to <em className="underline-gold">Grow.</em>
          </h1>

          <p className="mt-7 max-w-md text-[15px] leading-relaxed text-ink-soft sm:text-base">
            Discover thoughtfully designed digital guides that help you build better habits, learn more
            effectively, and understand your potential.
          </p>

          <div className="mt-10 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <a href="#products" className="btn-primary">
              Explore the Guides
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#product-genius" className="btn-secondary">
              Meet Our Products
            </a>
          </div>

          <ul className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3">
            {TRUST_POINTS.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5 text-[13px] text-ink-mute">
                <Icon className="h-4 w-4 text-sage-deep" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Both guides, side by side — clean flat covers */}
        <Reveal delay={160} className="relative">
          <div className="relative mx-auto flex w-full max-w-[560px] items-end justify-center gap-6 sm:gap-10">
            {/* Studio glow behind the pair */}
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 h-[88%] w-[96%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(167,181,160,0.3),rgba(237,232,223,0.55)_55%,transparent_75%)]"
            />

            {/* The Genius Method */}
            <figure className="group relative z-10 flex flex-col items-center">
              <img
                src="/images/genius-cover.jpg"
                alt="The Genius Method ebook cover"
                draggable={false}
                className="w-[148px] rounded-md ring-1 ring-ink/10 shadow-[0_30px_60px_-24px_rgba(36,36,36,0.45)] transition-transform duration-500 ease-out group-hover:-translate-y-2 sm:w-[196px] lg:w-[216px]"
              />
              <figcaption className="mt-6">
                <LabelChip dot="#6f7d68" title="The Genius Method" sub="Learning & study" />
              </figcaption>
            </figure>

            {/* The Hell Method */}
            <figure className="group relative z-10 flex flex-col items-center">
              <img
                src="/images/hell-cover.jpg"
                alt="The Hell Method ebook cover"
                draggable={false}
                className="w-[148px] rounded-md ring-1 ring-ink/10 shadow-[0_30px_60px_-24px_rgba(36,36,36,0.45)] transition-transform duration-500 ease-out group-hover:-translate-y-2 sm:w-[196px] lg:w-[216px]"
              />
              <figcaption className="mt-6">
                <LabelChip dot="#b7a477" title="The Hell Method" sub="Height & posture" />
              </figcaption>
            </figure>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
