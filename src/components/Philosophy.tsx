import Reveal from "./Reveal";

const PRINCIPLES = [
  { word: "Clarity", line: "Clear ideas over clever jargon." },
  { word: "Practice", line: "Simple habits you can apply today." },
  { word: "Honesty", line: "Realistic claims over hype." },
];

export default function Philosophy() {
  return (
    <section id="about" className="px-5 py-20 sm:px-8 lg:py-28" aria-label="About The Method Studio">
      <Reveal className="mx-auto max-w-5xl">
        <div className="rounded-[36px] bg-sand px-6 py-16 text-center sm:px-12 lg:py-24">
          <p className="eyebrow">Our Philosophy</p>
          <h2 className="mx-auto mt-5 max-w-xl font-serif text-3xl font-medium leading-[1.12] tracking-[-0.01em] text-ink sm:text-4xl lg:text-[44px]">
            Progress Starts With Understanding.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-ink-soft sm:text-base">
            We believe useful knowledge should be clear, practical, and easy to apply. Our guides are designed
            to help you explore better approaches, make informed decisions, and take meaningful steps toward
            your goals.
          </p>

          <div aria-hidden className="mx-auto mt-10 h-px w-16 bg-gold" />

          <div className="mx-auto mt-10 grid max-w-3xl gap-8 sm:grid-cols-3 sm:gap-6">
            {PRINCIPLES.map((principle) => (
              <div key={principle.word} className="flex flex-col items-center">
                <p className="font-serif text-lg italic text-ink">{principle.word}</p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-ink-mute">{principle.line}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
