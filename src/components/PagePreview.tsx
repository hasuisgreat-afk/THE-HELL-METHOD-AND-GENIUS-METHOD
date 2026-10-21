import { SITE, type Product } from "../config";

/**
 * An elegant, indicative sample-page spread rendered like the interior
 * of the book — cream paper, serif headings, drop cap, and a pull quote.
 */
export default function PagePreview({ data }: { data: Product["detail"]["preview"] }) {
  return (
    <div>
      <p className="eyebrow">Sample pages</p>
      <div className="relative mt-4 overflow-hidden rounded-[24px] border border-ink/10 bg-paper shadow-soft">
        {/* Gutter between the two pages */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-1/2 z-10 hidden w-10 -translate-x-1/2 bg-[linear-gradient(90deg,transparent,rgba(36,36,36,0.07),transparent)] sm:block"
        />

        <div className="grid sm:grid-cols-2">
          {/* Left page */}
          <div className="border-b border-ink/10 p-7 sm:border-b-0 sm:border-r sm:p-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold-deep">{data.kicker}</p>
            <h4 className="mt-3 font-serif text-[22px] font-medium leading-snug text-ink">{data.chapter}</h4>
            <p className="mt-5 text-[14px] leading-[1.75] text-ink-soft first-letter:float-left first-letter:mr-2.5 first-letter:font-serif first-letter:text-[40px] first-letter:font-medium first-letter:leading-[0.85] first-letter:text-gold-deep">
              {data.paragraphs[0]}
            </p>
          </div>

          {/* Right page */}
          <div className="p-7 sm:p-8">
            <p className="text-[14px] leading-[1.75] text-ink-soft">{data.paragraphs[1]}</p>
            <blockquote className="mt-6 border-l-2 border-gold pl-4 font-serif text-[16px] italic leading-relaxed text-ink">
              “{data.quote}”
            </blockquote>
          </div>
        </div>

        {/* Running footer */}
        <div className="flex items-center justify-between border-t border-ink/10 bg-cream/60 px-7 py-3 text-[10px] font-medium uppercase tracking-[0.22em] text-ink-mute sm:px-8">
          <span>{SITE.BRAND}</span>
          <span>Sample</span>
        </div>
      </div>
      <p className="mt-3 text-xs text-ink-mute">An indicative preview of the guide's interior.</p>
    </div>
  );
}
