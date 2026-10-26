import { ArrowRight, Check } from "lucide-react";
import { CHECKOUT, GENIUS, HELL, SITE, type Product } from "../config";
import { PriceTag } from "./Purchase";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type ProductCardProps = {
  product: Product;
  price: string;
  originalPrice: string;
  token: string;
  delay?: number;
};

function ProductCard({ product, price, originalPrice, token, delay = 0 }: ProductCardProps) {
  const P = product;
  return (
    <Reveal delay={delay} className="h-full">
      <article className="group flex h-full flex-col rounded-[28px] border border-ink/5 bg-paper p-6 shadow-soft transition-shadow duration-500 hover:shadow-lift sm:p-8">
        {/* Cover */}
        <div className="relative flex aspect-[5/4] items-center justify-center overflow-hidden rounded-[20px] bg-sand/70">
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.75),transparent_62%)]"
          />
          <span className="absolute left-4 top-4 z-10 rounded-full bg-paper/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-mute backdrop-blur-sm">
            Guide {P.index}
          </span>
          <img
            src={P.cover}
            alt={`${P.name} — ebook cover`}
            loading="lazy"
            className="h-[84%] w-auto rounded-md shadow-[0_24px_50px_-22px_rgba(36,36,36,0.5)] transition-transform duration-500 ease-out group-hover:-translate-y-2"
          />
        </div>

        {/* Copy */}
        <div className="mt-8 flex flex-1 flex-col">
          <h3 className="font-serif text-[28px] font-medium leading-tight text-ink">{P.name}</h3>
          <p className="mt-1.5 font-serif text-[15px] italic text-gold-deep">{P.subtitle}</p>
          <p className="mt-4 text-[14.5px] leading-relaxed text-ink-soft">{P.cardDescription}</p>

          <ul className="mt-6 space-y-3">
            {P.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 text-[14px] text-ink">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage-mist">
                  <Check className="h-3 w-3 text-sage-deep" strokeWidth={3} aria-hidden="true" />
                </span>
                {benefit}
              </li>
            ))}
          </ul>

          {/* Price + CTA */}
          <div className="mt-8 flex items-end justify-between border-t border-ink/10 pt-6">
            <div>
              <div className="flex items-baseline gap-2.5">
                <PriceTag price={price} token={token} />
                <span className="font-serif text-sm text-ink-mute line-through">{originalPrice}</span>
                <span className="rounded-full bg-sage-mist px-2 py-0.5 text-[11px] font-semibold text-sage-deep">
                  60% OFF
                </span>
              </div>
              <p className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-ink-mute">
                Digital ebook · {SITE.EBOOK_FORMAT}
              </p>
            </div>
            <span className="mb-1 text-[11px] font-medium uppercase tracking-[0.16em] text-ink-mute">
              One-time purchase
            </span>
          </div>
          <a href={`#product-${P.id}`} className="btn-primary mt-6 w-full" aria-label={`Explore ${P.name} in detail`}>
            Explore {P.name}
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </article>
    </Reveal>
  );
}

export default function Products() {
  return (
    <section id="products" className="relative" aria-label="Our products">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <SectionHeading
          eyebrow="Our Products"
          title="Two Guides. Two Ways to Grow."
          sub="Choose the guide that fits your next goal."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 md:gap-8 lg:mt-16">
          <ProductCard
            product={GENIUS}
            price={CHECKOUT.GENIUS_METHOD_PRICE}
            originalPrice={CHECKOUT.GENIUS_METHOD_ORIGINAL_PRICE}
            token="GENIUS_METHOD_PRICE"
          />
          <ProductCard
            product={HELL}
            price={CHECKOUT.HELL_METHOD_PRICE}
            originalPrice={CHECKOUT.HELL_METHOD_ORIGINAL_PRICE}
            token="HELL_METHOD_PRICE"
            delay={120}
          />
        </div>

        <Reveal className="mt-10 text-center">
          <p className="text-[13px] text-ink-mute">
            Both guides are digital ebooks ({SITE.EBOOK_FORMAT}) — delivered online, with nothing physical
            shipped.{" "}
            <a
              href="#bundle"
              className="font-medium text-ink underline decoration-gold underline-offset-4 transition-colors hover:bg-sand"
            >
              Or get both guides together for only ₹49 (Save 75%) →
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
