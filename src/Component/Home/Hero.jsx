import React from 'react';

const features = [
  '\u09a6\u09c8\u09a8\u09bf\u0995 \u09ad\u09cb\u0995\u09be\u09ac \u09aa\u09cd\u09b0\u09cd\u09af\u09be\u0995\u099f\u09bf\u09b8 \u09b8\u09c7\u09b6\u09a8',
  '\u09b8\u09a0\u09bf\u0995 \u0989\u099a\u09cd\u099a\u09be\u09b0\u09a3 \u0993 \u09a8\u09bf\u0989\u099f\u09cd\u09b0\u09be\u09b2 \u0985\u09cd\u09af\u09be\u0995\u09b8\u09c7\u09a8\u09cd\u099f',
  '\u0995\u09a8\u09ab\u09bf\u09a1\u09c7\u09a8\u09cd\u09b8 \u09ac\u09bf\u09b2\u09cd\u09a1\u09bf\u0982 \u09ae\u09c7\u09a5\u09a1\u09cb\u09b2\u099c\u09bf',
  '\u09b2\u09be\u0987\u09ab\u099f\u09be\u0987\u09ae \u0985\u09cd\u09af\u09be\u0995\u09cd\u09b8\u09c7\u09b8 \u0993 \u09b8\u09be\u09aa\u09cb\u09b0\u09cd\u099f',
];

const heroTitle = '\u09e7\u09eb \u09a6\u09bf\u09a8\u09c7 \u0987\u0982\u09b2\u09bf\u09b6';
const heroHighlight =
  '\u09ab\u09cd\u09b2\u09c1\u09af\u09bc\u09c7\u09a8\u09cd\u09b8\u09bf \u099a\u09cd\u09af\u09be\u09b2\u09c7\u099e\u09cd\u099c';
const offerLabel = '\u0985\u09ab\u09be\u09b0 \u09ae\u09c2\u09b2\u09cd\u09af:';
const currentPrice = '\u09ea\u09ef\u09ef \u099f\u09be\u0995\u09be';
const oldPrice = '\u09ef\u09ef\u09ef \u099f\u09be\u0995\u09be';
const ctaText =
  '\u09ea\u09ef\u09ef \u099f\u09be\u0995\u09be\u09af\u09bc \u098f\u0996\u09a8\u0987 \u099c\u09af\u09bc\u09c7\u09a8 \u0995\u09b0\u09c1\u09a8';
const discountText =
  '\u09b8\u09c0\u09ae\u09bf\u09a4 \u09b8\u09ae\u09af\u09bc\u09c7\u09b0 \u099c\u09a8\u09cd\u09af \u09eb\u09e6% \u099b\u09be\u09a1\u09bc!';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-[#fbfcff] to-[#f4f8ff] px-4 py-14 font-sans text-[#082447] sm:px-8 sm:py-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <p className="mb-5 max-w-full rounded-full border border-[#d8e8ff] bg-white px-4 py-1 text-[0.68rem] font-extrabold uppercase tracking-[0.12em] text-[#075bbf] shadow-sm sm:text-xs">
          Premium Fluency Challenge
        </p>

        <h1 className="max-w-4xl text-[2.35rem] font-black leading-[1.15] tracking-normal sm:text-5xl lg:text-6xl">
          {heroTitle}{' '}
          <span className="bg-gradient-to-r from-[#075bbf] to-[#3db7ff] bg-clip-text text-transparent">
            {heroHighlight}
          </span>
        </h1>

        <div className="mt-8 grid w-full max-w-2xl gap-3 sm:grid-cols-2 sm:gap-4">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex min-h-14 items-center gap-3 rounded-xl border border-[#e5edf7] bg-white px-4 py-3 text-left text-sm font-medium text-[#53637a] shadow-[0_4px_14px_rgba(15,23,42,0.06)]"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3db7ff] text-xs font-black text-white">
                {'\u2713'}
              </span>
              <span className="min-w-0">{feature}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-baseline justify-center gap-x-2 gap-y-1 text-[#64748b] sm:mt-16">
          <span className="text-base font-semibold">{offerLabel}</span>
          <span className="text-3xl font-black text-[#082447]">{currentPrice}</span>
          <span className="text-sm font-semibold line-through text-[#9aa8ba]">
            {oldPrice}
          </span>
        </div>

        <a
          href="#enroll"
          className="mt-7 inline-flex min-h-14 w-full max-w-[340px] items-center justify-center rounded-[1.25rem] bg-gradient-to-r from-[#0672df] to-[#42bbff] px-5 text-center text-sm font-extrabold text-white no-underline shadow-[0_6px_0_#064a99] transition-transform hover:-translate-y-0.5 sm:min-h-16 sm:text-base"
        >
          <span className="mr-2" aria-hidden="true">
            {'\u{1f680}'}
          </span>
          {ctaText}
        </a>

        <p className="mt-7 text-sm font-semibold text-[#9aa8ba]">
          {discountText}
        </p>
      </div>
    </section>
  );
};

export default Hero;
