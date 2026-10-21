import type { ReactNode } from "react";
import Reveal from "./Reveal";
import { cn } from "../utils/cn";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  align?: "center" | "left";
  className?: string;
};

export default function SectionHeading({ eyebrow, title, sub, align = "center", className }: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal className={cn(centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl", className)}>
      <p className={cn("eyebrow flex items-center gap-3", centered && "justify-center")}>
        <span aria-hidden className="h-px w-8 shrink-0 bg-gold" />
        {eyebrow}
        {centered && <span aria-hidden className="h-px w-8 shrink-0 bg-gold" />}
      </p>
      <h2 className="mt-5 font-serif text-3xl font-medium leading-[1.12] tracking-[-0.01em] text-ink sm:text-4xl lg:text-[44px]">
        {title}
      </h2>
      {sub && <p className="mt-5 text-[15px] leading-relaxed text-ink-soft sm:text-base">{sub}</p>}
    </Reveal>
  );
}
