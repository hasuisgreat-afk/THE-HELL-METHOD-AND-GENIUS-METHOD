import { Check, Info } from "lucide-react";
import { CHECKOUT, SITE, type Product } from "../config";
import PagePreview from "./PagePreview";
import Reveal from "./Reveal";
import { CheckoutButton, PriceTag } from "./Purchase";
import { cn } from "../utils/cn";

type ProductDetailProps = {
  product: Product;
  /** Mirror the layout (cover on the right) for visual rhythm. */
  flip?: boolean;
  tone?: "cream" | "sand";
};

export default function ProductDetail({ product, flip = false, tone = "cream" }: ProductDetailProps) {
  const P = product;
  const isGenius = P.id === "genius";
  const price = isGenius ? CHECKOUT.GENIUS_METHOD_PRICE : CHECKOUT.HELL_METHOD_PRICE;
  const checkoutUrl = isGenius ? CHECKOUT.GENIUS_METHOD_CHECKOUT_URL : CHECKOUT.HELL_METHOD_CHECKOUT_URL;
  const token = isGenius ? "GENIUS_METHOD_PRICE" : "HELL_METHOD_PRICE";

  return (
    <section
      id={`product-${P.id}`}
      className={cn("relative", tone === "sand" ? "bg-sand" : "bg-cream")}
      aria-label={`${P.name} — details`}
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        {/* ── Intro: cover + overview ─────────────────────────── */}
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Cover mockup */}
          <Reveal className={cn("lg:col-span-5", flip && "lg:order-2")}>
            <div className="relative mx-auto max-w-[420px]">
              <div
                aria-hidden
                className="absolute inset-0 -m-6 rounded-[44px] bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.7),transparent_70%)]"
              />
              <div className="relative flex items-center justify-center rounded-[32px] border border-ink/5 bg-paper/70 px-8 py-14 backdrop-blur-sm sm:px-12">
                <div aria-hidden className="absolute right-7 top-7 h-20 w-20 rounded-full border border-gold/30" />
                <div aria-hidden className="absolute bottom-7 left-7 h-10 w-10 rounded-full border border-sage/40" />
                <img
                  src={P.cover}
                  alt={`${P.name} ebook cover`}
                  loading="lazy"
                  draggable={false}
                  className="w-[164px] rounded-md ring-1 ring-ink/10 shadow-[0_34px_64px_-26px_rgba(36,36,36,0.45)] transition-transform duration-500 ease-out hover:-translate-y-1.5 sm:w-[192px] lg:w-[210px]"
                />
              </div>
              <p className="absolute inset-x-0 bottom-5 text-center text-[11px] font-medium uppercase tracking-[0.22em] text-ink-mute">
                Digital ebook · {SITE.EBOOK_FORMAT}
              </p>
            </div>
          </Reveal>

          {/* Overview */}
          <div className={cn("lg:col-span-7", flip && "lg:order-1")}>
            <Reveal>
              <p className="eyebrow flex items-center gap-3">
                <span aria-hidden className="h-px w-8 shrink-0 bg-gold" />
                {P.eyebrow}
              </p>
              <h2 className="mt-5 font-serif text-4xl font-medium leading-[1.08] tracking-[-0.01em] text-ink sm:text-5xl">
                {P.name}
              </h2>
              <p className="mt-3 font-serif text-lg italic text-gold-deep sm:text-xl">{P.subtitle}</p>
              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink-soft sm:text-base">
                {P.detail.description}
              </p>
            </Reveal>

            <div className="mt-12 grid gap-10 sm:grid-cols-2">
              {/* Who it's for */}
              <Reveal delay={80}>
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink-mute">
                  {P.detail.whoTitle}
                </h3>
                <ul className="mt-5 space-y-4">
                  {P.detail.whoFor.map(({ icon: Icon, label }) => (
                    <li key={label} className="flex items-start gap-3.5">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sage-mist">
                        <Icon className="h-4 w-4 text-sage-deep" aria-hidden="true" />
                      </span>
                      <span className="pt-1.5 text-[14px] leading-snug text-ink">{label}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              {/* What you'll learn */}
              <Reveal delay={160}>
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink-mute">
                  {P.detail.learnTitle}
                </h3>
                <ul className="mt-5 space-y-3.5">
                  {P.detail.learn.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage-mist">
                        <Check className="h-3 w-3 text-sage-deep" strokeWidth={3} aria-hidden="true" />
                      </span>
                      <span className="text-[14px] leading-snug text-ink-soft">{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>

        {/* ── Contents + sample pages ─────────────────────────── */}
        <div className="mt-20 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <div className="h-full rounded-[24px] border border-ink/10 bg-paper p-7 sm:p-8">
              <h3 className="font-serif text-2xl font-medium text-ink">{P.detail.contentsTitle}</h3>
              <p className="mt-2 text-[13.5px] text-ink-mute">{P.detail.contentsIntro}</p>
              <ol className="mt-7 divide-y divide-ink/10">
                {P.detail.contents.map((item, i) => (
                  <li key={item} className="flex items-baseline gap-4 py-3.5 first:pt-0 last:pb-0">
                    <span className="font-serif text-[15px] font-medium italic text-gold-deep">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[14px] leading-snug text-ink-soft">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <PagePreview data={P.detail.preview} />
          </Reveal>
        </div>

        {/* ── Purchase ────────────────────────────────────────── */}
        <Reveal className="mx-auto mt-20 max-w-3xl">
          <div className="rounded-[28px] border border-ink/10 bg-paper p-8 text-center shadow-soft sm:p-12">
            {P.disclaimer && (
              <div className="mb-9 flex items-start gap-3.5 rounded-2xl bg-sand/80 p-5 text-left sm:p-6">
                <Info className="mt-0.5 h-[18px] w-[18px] shrink-0 text-gold-deep" aria-hidden="true" />
                <p className="text-[12.5px] leading-relaxed text-ink-soft sm:text-[13px]">{P.disclaimer}</p>
              </div>
            )}

            <p className="eyebrow">Get the guide</p>
            <div className="mt-5 flex flex-wrap items-baseline justify-center gap-x-4 gap-y-2">
              <PriceTag price={price} token={token} large />
              <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-ink-mute">
                One-time purchase
              </span>
            </div>

            <div className="mx-auto mt-8 max-w-sm">
              <CheckoutButton url={checkoutUrl} label={`Get ${P.name}`} />
            </div>

            <p className="mt-5 text-xs leading-relaxed text-ink-mute">
              Digital ebook · {SITE.EBOOK_FORMAT} · Instant delivery · Yours to keep
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-ink-mute">
              All sales are final — please read the description and sample pages before buying.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
