import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { CHECKOUT, SITE } from "../config";
import { PlaceholderChip } from "./Purchase";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { cn } from "../utils/cn";

type Faq = {
  question: string;
  answer: ReactNode;
};

const FAQS: Faq[] = [
  {
    question: "What will I receive after purchasing?",
    answer: (
      <>
        You'll receive the complete guide as a digital ebook file you can download after checkout. Nothing is
        shipped — your guide is delivered online, and the file is yours to keep.
      </>
    ),
  },
  {
    question: "Are these digital ebooks or physical books?",
    answer: (
      <>
        They are digital ebooks only. Nothing is printed or shipped — once your purchase is complete, you
        download the file and can read it anywhere.
      </>
    ),
  },
  {
    question: "How do I access my purchase?",
    answer: (
      <>
        After checkout, you'll be taken to a confirmation page with your download link. You'll also receive an
        email with the same link, so you can return to your guide at any time.
      </>
    ),
  },
  {
    question: "Can I read the ebooks on my phone or computer?",
    answer: (
      <>
        Yes. The guides are provided in {SITE.EBOOK_FORMAT} format, which opens on phones, tablets, e-readers,
        and both Windows and Mac computers.
      </>
    ),
  },
  {
    question: "Which guide should I choose?",
    answer: (
      <>
        If your goal is studying, learning, or mastering new skills, choose <strong className="font-medium text-ink">The Genius Method</strong>. If you're curious about height, posture, and
        healthy growth habits, choose <strong className="font-medium text-ink">The Hell Method</strong>. Many
        readers pick up both.
      </>
    ),
  },
  {
    question: "Can I buy both guides together?",
    answer: (
      <>
        Yes — the <strong className="font-medium text-ink">complete bundle</strong> gives you both guides with
        a single one-time payment of{" "}
        {CHECKOUT.BUNDLE_PRICE ? (
          <strong className="font-medium text-ink">{CHECKOUT.BUNDLE_PRICE}</strong>
        ) : (
          <PlaceholderChip token="BUNDLE_PRICE" />
        )}
        .{" "}
        <a
          href="#bundle"
          className="font-medium text-ink underline decoration-gold underline-offset-4 transition-colors hover:bg-sand"
        >
          See the bundle
        </a>
        .
      </>
    ),
  },
  {
    question: "What is your refund policy?",
    answer: (
      <>
        Because our guides are digital products delivered instantly, all sales are final and we're unable to
        offer refunds. Please read the descriptions and sample pages carefully before purchasing — and if
        anything is unclear, feel free to{" "}
        {CHECKOUT.SUPPORT_EMAIL ? (
          <a
            href={`mailto:${CHECKOUT.SUPPORT_EMAIL}`}
            className="font-medium text-ink underline decoration-gold underline-offset-4 transition-colors hover:bg-sand"
          >
            reach out
          </a>
        ) : (
          "reach out"
        )}{" "}
        before you buy.
      </>
    ),
  },
];

function FaqItem({
  faq,
  index,
  open,
  onToggle,
}: {
  faq: Faq;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div className="overflow-hidden rounded-2xl border border-ink/10 bg-paper">
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-cream/60 sm:px-7"
        >
          <span className="text-[15px] font-medium text-ink">{faq.question}</span>
          <ChevronDown
            className={cn(
              "h-4 w-4 shrink-0 text-ink-mute transition-transform duration-300",
              open && "rotate-180"
            )}
            aria-hidden="true"
          />
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="min-h-0 overflow-hidden" inert={!open}>
          <p className="px-6 pb-6 pt-1 text-[14.5px] leading-relaxed text-ink-soft sm:px-7">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative" aria-label="Frequently asked questions">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          sub="Everything you need to know before you buy."
        />

        <Reveal className="mx-auto mt-12 max-w-3xl space-y-3.5 lg:mt-16">
          {FAQS.map((faq, i) => (
            <FaqItem
              key={faq.question}
              faq={faq}
              index={i}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
