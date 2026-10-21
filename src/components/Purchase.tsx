import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../utils/cn";

/**
 * Clearly-marked editable placeholder.
 * Rendered wherever a config value in src/config.ts is still empty,
 * so unfinished store settings are obvious — never silently invented.
 */
export function PlaceholderChip({ token, dark = false, className }: { token: string; dark?: boolean; className?: string }) {
  return (
    <span
      title={`Editable placeholder — set “${token}” in src/config.ts`}
      className={cn(
        "inline-flex items-center rounded-full border border-dashed px-2.5 py-1 font-mono text-[10.5px] leading-none tracking-wide",
        dark ? "border-cream/35 text-cream/60" : "border-ink/35 text-ink-mute",
        className
      )}
    >
      [{token}]
    </span>
  );
}

/** Renders the configured price, or a clearly-marked placeholder when unset. */
export function PriceTag({ price, token, large = false }: { price: string; token: string; large?: boolean }) {
  if (price.trim()) {
    return (
      <span className={cn("font-serif font-medium tracking-tight text-ink", large ? "text-4xl sm:text-5xl" : "text-[26px]")}>
        {price}
      </span>
    );
  }
  return <PlaceholderChip token={token} className={large ? "px-3.5 py-1.5 text-[11px]" : undefined} />;
}

type CheckoutButtonProps = {
  /** Payment link from src/config.ts. Empty string → honest placeholder state. */
  url: string;
  label: string;
  className?: string;
};

/**
 * Purchase CTA.
 * – When a real checkout URL is configured, this is a working link to it.
 * – While it is unset, clicking reveals an honest "not available yet"
 *   note instead of faking a purchase.
 */
export function CheckoutButton({ url, label, className }: CheckoutButtonProps) {
  const configured = Boolean(url.trim()) && !url.includes("example.com");
  const [showNote, setShowNote] = useState(false);

  if (configured) {
    const external = url.trim().startsWith("http");
    return (
      <a
        href={url.trim()}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className={cn("btn-primary w-full", className)}
      >
        {label}
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </a>
    );
  }

  return (
    <div className={cn("w-full", className)}>
      <button
        type="button"
        onClick={() => setShowNote(true)}
        className="inline-flex w-full cursor-default items-center justify-center gap-2 rounded-full bg-ink/75 px-7 py-3.5 text-sm font-medium text-cream/90 outline outline-1 outline-dashed outline-offset-2 outline-cream/40 transition-colors hover:bg-ink/75"
      >
        {label}
      </button>
      {showNote && (
        <p
          role="status"
          className="mt-3 rounded-xl bg-sand px-4 py-3 text-center text-[13px] leading-relaxed text-ink-soft"
        >
          Online checkout for this guide isn't available yet — please check back soon.
        </p>
      )}
    </div>
  );
}
