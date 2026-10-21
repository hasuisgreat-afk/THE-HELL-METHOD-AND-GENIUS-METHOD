/**
 * ============================================================
 *  THE METHOD STUDIO — SITE & STORE CONFIGURATION
 * ============================================================
 *  This is the only file the store owner needs to edit.
 *
 *  1) PRICES — e.g.  GENIUS_METHOD_PRICE: "$29"
 *     While a price is left empty (""), the site shows a clearly
 *     marked placeholder chip instead of an invented price.
 *
 *  2) CHECKOUT — paste your payment link (Stripe Payment Link,
 *     Gumroad, Lemon Squeezy, Shopify, etc.) into the matching
 *     *_CHECKOUT_URL field. While a field is empty, the buy
 *     button shows an honest "not available yet" state and never
 *     fakes a purchase. After successful payment, your provider
 *     redirects the customer to the digital delivery / download
 *     page you configured on their side.
 *
 *  3) CONTACT & POLICIES — fill in SUPPORT_EMAIL and the policy
 *     URLs once those pages exist. Empty fields render as
 *     clearly marked placeholders on the site.
 *
 *  4) REFUNDS — this store uses a strict no-refund policy
 *     (all sales are final). The FAQ and the purchase panels
 *     already state this honestly.
 *
 *  NOTE: Payment links are public URLs. Never place secret API
 *  keys or payment credentials in this file — or anywhere in
 *  frontend code.
 * ============================================================
 */

import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Compass,
  GraduationCap,
  Leaf,
  PersonStanding,
  Sprout,
} from "lucide-react";

/* ── Store-wide settings ─────────────────────────────────── */

export const SITE = {
  BRAND: "The Method Studio",
  TAGLINE: "Practical guides for personal growth",
  /** File format of the ebooks — update if you deliver another format. */
  EBOOK_FORMAT: "PDF",
} as const;

/* ── Editable business fields ────────────────────────────── */

export const CHECKOUT = {
  GENIUS_METHOD_PRICE: "₹199",
  GENIUS_METHOD_CHECKOUT_URL: "https://rzp.io/rzp/czYSlps2",

  HELL_METHOD_PRICE: "₹199",
  HELL_METHOD_CHECKOUT_URL: "https://rzp.io/rzp/czYSlps2",

  /** Complete bundle — both guides, one price. */
  BUNDLE_PRICE: "₹299",
  BUNDLE_CHECKOUT_URL: "https://rzp.io/rzp/czYSlps2",

  SUPPORT_EMAIL: "hellmethod2343@gmail.com", // update if different
  /** Store policy: all sales are final (no refunds). */
  REFUND_POLICY_URL: "#refund",
  PRIVACY_POLICY_URL: "#privacy",
  TERMS_OF_SERVICE_URL: "#terms",
} as const;

/* ── Product content ─────────────────────────────────────── */

export type AudienceItem = {
  icon: LucideIcon;
  label: string;
};

export type Product = {
  id: string;
  index: string;
  eyebrow: string;
  name: string;
  subtitle: string;
  tag: string;
  cardDescription: string;
  benefits: string[];
  cover: string;
  spine: string;
  /** Optional visible note shown with the purchase block (e.g. Hell Method disclaimer). */
  disclaimer?: string;
  detail: {
    description: string;
    whoTitle: string;
    whoFor: AudienceItem[];
    learnTitle: string;
    learn: string[];
    contentsTitle: string;
    contentsIntro: string;
    contents: string[];
    preview: {
      kicker: string;
      chapter: string;
      paragraphs: string[];
      quote: string;
    };
  };
};

export const GENIUS: Product = {
  id: "genius",
  index: "01",
  eyebrow: "Guide 01 — Learning",
  name: "The Genius Method",
  subtitle: "The Most Genius Way to Study Anything",
  tag: "Learning & study",
  cardDescription:
    "A practical learning guide built around effective study strategies, memory techniques, focused practice, and deeper understanding.",
  benefits: [
    "Learn more effectively",
    "Remember information for longer",
    "Build better study habits",
  ],
  cover: "/images/genius-cover.jpg",
  spine: "#6f7d68",
  detail: {
    description:
      "The Genius Method is a calm, practical approach to studying smarter. It explains how memory, attention, and understanding actually work — then turns that knowledge into simple routines you can apply to any subject, from exam preparation to entirely new skills.",
    whoTitle: "Who this guide is for",
    whoFor: [
      { icon: GraduationCap, label: "Students preparing for exams and assessments" },
      { icon: BookOpen, label: "Lifelong learners exploring new subjects and skills" },
      { icon: Compass, label: "Professionals studying for certifications and career growth" },
    ],
    learnTitle: "What you'll learn",
    learn: [
      "How memory, attention, and understanding actually work",
      "Evidence-based study strategies you can apply to any subject",
      "How to plan review sessions so knowledge lasts",
      "Ways to build focus and reduce distraction while studying",
      "A simple system for turning notes into real understanding",
      "How to build study habits that stay consistent",
    ],
    contentsTitle: "A look inside",
    contentsIntro: "The guide walks through six connected topics:",
    contents: [
      "How Learning Works — memory, attention, and real understanding",
      "Study Strategies That Work — recall, spacing, and practice",
      "Focus & Environment — deep work and managing distractions",
      "Reading & Notes — capturing ideas you actually understand",
      "Habits & Motivation — routines that keep you consistent",
      "Your Study System — putting it all together, week by week",
    ],
    preview: {
      kicker: "Sample · Chapter Two",
      chapter: "Study Strategies That Work",
      paragraphs: [
        "Most studying feels productive because it is familiar. Re-reading a chapter, highlighting sentences, skimming notes — each is comfortable, and each quietly signals that the material is known. But familiarity is not the same as memory, and recognition is not the same as recall.",
        "The most effective learners do something that feels harder: they close the book and ask themselves what they can reproduce. Retrieval — actively pulling knowledge out of memory — strengthens that memory far more than putting it in ever could. It is slower, less comfortable, and dramatically more effective.",
      ],
      quote:
        "If you can recall it without looking, you will remember it when it matters.",
    },
  },
};

export const HELL: Product = {
  id: "hell",
  index: "02",
  eyebrow: "Guide 02 — Growth",
  name: "The Hell Method",
  subtitle: "Understand Your Height Potential",
  tag: "Height & posture",
  cardDescription:
    "A practical guide to height-related factors, posture, healthy habits, and realistic expectations.",
  benefits: [
    "Understand the factors influencing height",
    "Learn about posture and healthy habits",
    "Separate evidence from common height myths",
  ],
  cover: "/images/hell-cover.jpg",
  spine: "#7c6b4a",
  disclaimer:
    "This guide is educational and explores factors related to height, posture, and healthy habits. Individual results vary and depend on many personal circumstances — no specific height increase is guaranteed. This guide is not a substitute for professional medical advice. If you have concerns about growth or health, please consult a qualified healthcare professional.",
  detail: {
    description:
      "The Hell Method takes a calm, honest look at height. It explains the factors that actually influence growth, shows how posture affects the way you stand and appear, and separates popular claims from what the evidence supports — so you can focus your effort where it genuinely matters.",
    whoTitle: "Who this guide is for",
    whoFor: [
      { icon: PersonStanding, label: "Anyone curious about how height actually works" },
      { icon: Sprout, label: "Readers who want to stand taller through better posture" },
      { icon: Leaf, label: "People building habits that support healthy development" },
    ],
    learnTitle: "What you'll explore",
    learn: [
      "The main factors that influence height and growth",
      "How posture affects how tall you stand and appear",
      "Daily habits that support healthy development",
      "How to read height claims critically and spot myths",
      "Realistic ways to set expectations and track progress",
    ],
    contentsTitle: "A look inside",
    contentsIntro: "The guide walks through five connected topics:",
    contents: [
      "Understanding Height — genetics, growth, and development",
      "Posture & Alignment — standing taller, starting today",
      "Habits That Support Growth — movement, sleep, and nutrition",
      "Myths vs. Evidence — examining popular height claims",
      "Realistic Expectations — honesty over hype",
    ],
    preview: {
      kicker: "Sample · Chapter One",
      chapter: "Understanding Height Realistically",
      paragraphs: [
        "Height is one of the most misunderstood measurements in popular health culture. It is influenced by genetics, nutrition, sleep, movement, and overall health — and most of those factors set their course early. Anyone promising a quick, dramatic change is selling a certainty that no one actually has.",
        "What you can influence is real, though more modest: posture, alignment, and the daily habits that support healthy development. Standing well, moving often, sleeping enough, and eating reasonably are unglamorous — and they are exactly where honest attention pays off.",
      ],
      quote:
        "Understand the factors first. Then decide where your effort is best spent.",
    },
  },
};
