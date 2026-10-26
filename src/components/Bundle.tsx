import { Check } from "lucide-react";
import { CHECKOUT, GENIUS, HELL, SITE } from "../config";
import { CheckoutButton, PriceTag } from "./Purchase";
import Reveal from "./Reveal";

const INCLUDED = [
  `${GENIUS.name} — ${SITE.EBOOK_FORMAT} ebook`,
  `${HELL.name} — ${SITE.EBOOK_FORMAT} ebook`,
  "One payment · Instant delivery",
];

export default function Bundle() {
  return (
    <section
      id="bundle"
      className="relative px-5 py-20 sm:px-8 lg:py-28"
      aria-label="Complete bundle — both guides at one price"
    >
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[36px] border border-ink/10 bg-paper shadow-soft">
          {/* Soft decorative glows */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(167,181,160,0.3),transparent_70%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(237,232,223,0.95),transparent_70%)]"
          />

          <div className="relative grid items-center gap-12 p-8 sm:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:p-16">
            {/* Covers — both guides together */}
            <div className="flex items-end justify-center">
              <img
                src={GENIUS.cover}
                alt="The Genius Method ebook cover"
                loading="lazy"
                draggable={false}
                className="relative z-10 w-[128px] rounded-md ring-1 ring-ink/10 shadow-[0_30px_60px_-24px_rgba(36,36,36,0.45)] sm:w-[158px] lg:w-[172px]"
              />
              <img
                src={HELL.cover}
                alt="The Hell Method ebook cover"
                loading="lazy"
                draggable={false}
                className="-ml-7 w-[128px] rounded-md ring-1 ring-ink/10 shadow-[0_30px_60px_-24px_rgba(36,36,36,0.45)] sm:-ml-9 sm:w-[158px] lg:w-[172px]"
              />
            </div>

            {/* Offer */}
            <div className="text-center lg:text-left">
              <p className="eyebrow inline-flex items-center gap-3">
                <span aria-hidden className="h-px w-8 bg-gold" />
                Best Value — The Complete Bundle
              </p>
              <h2 className="mt-5 font-serif text-3xl font-medium leading-[1.12] tracking-[-0.01em] text-ink sm:text-4xl lg:text-[44px]">
                Get Both Guides at One Price.
              </h2>
              <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-ink-soft lg:mx-0">
                Why choose one? Get the complete Method Studio library — smarter learning and honest growth
                guidance — together in a single bundle.
              </p>

              <div className="mt-7 flex justify-center lg:justify-start">
                <ul className="space-y-3 text-left">
                  {INCLUDED.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[14px] text-ink">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage-mist">
                        <Check className="h-3 w-3 text-sage-deep" strokeWidth={3} aria-hidden="true" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-9 flex flex-col items-center gap-7 lg:items-start">
                <div className="flex flex-wrap items-baseline justify-center gap-x-4 gap-y-2 lg:justify-start">
                  <PriceTag price={CHECKOUT.BUNDLE_PRICE} token="BUNDLE_PRICE" large />
                  <span className="font-serif text-xl text-ink-mute line-through">
                    {CHECKOUT.BUNDLE_ORIGINAL_PRICE}
                  </span>
                  <span className="rounded-full bg-sage-mist px-2.5 py-1 text-xs font-semibold text-sage-deep">
                    Save ₹149 (75% OFF)
                  </span>
                  <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-ink-mute">
                    One-time payment · Both guides
                  </span>
                </div>
                <div className="w-full max-w-sm">
                  <CheckoutButton url={CHECKOUT.BUNDLE_CHECKOUT_URL} label="Get Both Guides" />
                </div>
                <p className="text-xs leading-relaxed text-ink-mute">
                  Digital ebooks · {SITE.EBOOK_FORMAT} · Instant delivery · All sales are final
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
