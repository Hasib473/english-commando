import React from 'react';

const description =
  '\u09b8\u09ae\u09cd\u09aa\u09c2\u09b0\u09cd\u09a3 \u09ab\u09cd\u09b0\u09bf\u09a4\u09c7 \u09aa\u09be\u099a\u09cd\u099b\u09c7\u09a8 \u098f\u0995\u099f\u09bf \u0987\u09ae\u09aa\u09cd\u09b0\u09c1\u09ad\u09ae\u09c7\u09a8\u09cd\u099f \u099a\u09be\u09b0\u09cd\u099f \u098f\u09ac\u0982 \u09e7\u09eb \u09a6\u09bf\u09a8\u09c7\u09b0 \u09ab\u09cd\u09b2\u09c1\u09af\u09bc\u09c7\u09a8\u09cd\u09b8\u09bf \u099a\u09cd\u09af\u09be\u09b2\u09c7\u099e\u09cd\u099c, \u09af\u09be\u09b0 \u09ac\u09be\u099c\u09be\u09b0\u09ae\u09c2\u09b2\u09cd\u09af \u09ea\u09eb\u09e6 \u099f\u09be\u0995\u09be\u0964 \u098f\u099f\u09bf \u09a6\u09c8\u09a8\u09bf\u0995 \u09b0\u09bf\u09ad\u09bf\u09b6\u09a8\u09c7\u09b0 \u09b8\u09be\u09a5\u09c7 \u09b8\u09be\u09a5\u09c7 \u09b8\u09be\u09ab\u09b2\u09cd\u09af \u09a7\u09b0\u09c7 \u09b0\u09be\u0996\u09a4\u09c7 \u0995\u09b0\u09be \u09b9\u09af\u09bc\u09c7\u099b\u09c7\u0964';

const valueText =
  '\u09ac\u09be\u099c\u09be\u09b0\u09ae\u09c2\u09b2\u09cd\u09af: \u09ea\u09eb\u09e6 \u099f\u09be\u0995\u09be (\u098f\u0996\u09a8 \u09ab\u09cd\u09b0\u09bf!)';

const Bonus = () => {
  return (
    <section className="bg-white px-4 py-16 font-sans sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl rounded-3xl border border-[#dce9f7] bg-white px-6 py-8 shadow-[0_18px_34px_rgba(15,23,42,0.12)] sm:px-10 lg:px-16">
        <div className="grid items-center gap-10 lg:grid-cols-[320px_1fr] lg:gap-16">
          <div className="flex justify-center rounded-[1.75rem] bg-[#eef6ff] px-8 py-10 shadow-[0_0_70px_rgba(61,183,255,0.28)]">
            <div className="relative h-72 w-56 rotate-1 rounded-xl bg-white p-7 shadow-[18px_18px_24px_rgba(15,23,42,0.18)]">
              <div className="absolute bottom-4 right-4 h-64 w-48 rounded-lg bg-[#f5f7f8] shadow-[8px_8px_14px_rgba(15,23,42,0.18)]" />
              <div className="relative h-full rounded-md bg-[#13515a] p-8 text-white shadow-[inset_8px_0_0_rgba(255,255,255,0.25)]">
                <div className="mt-14 text-xs font-black uppercase tracking-[0.08em]">
                  Soremfliore Book
                </div>
                <div className="mt-3 space-y-1.5 text-[0.46rem] leading-relaxed text-white/75">
                  <p>Lorem ipsum dolor sit amet,</p>
                  <p>consectetur adipiscing elit,</p>
                  <p>communication method and</p>
                  <p>daily practice progress.</p>
                  <p>volume notes and guide.</p>
                </div>
                <div className="absolute bottom-12 left-1/2 flex -translate-x-1/2 gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/35" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/35" />
                </div>
              </div>
            </div>
          </div>

          <div className="relative text-center lg:text-left">
            <span className="mb-8 inline-flex rounded-full bg-[#075bbf] px-5 py-2 text-xs font-black uppercase text-white lg:absolute lg:right-0 lg:top-0 lg:mb-0">
              Free Bonus
            </span>

            <h2 className="text-4xl font-black leading-tight tracking-normal text-[#082447] sm:text-5xl">
              Exclusive Bonus!
            </h2>
            <h3 className="mt-6 text-2xl font-black leading-tight text-[#075bbf] sm:text-3xl">
              15-Day Fluency Book + Progress Chart
            </h3>

            <p className="mx-auto mt-9 max-w-2xl text-base font-medium leading-8 text-[#53637a] lg:mx-0">
              {description}
            </p>

            <div className="mt-2 flex items-center justify-center gap-4 text-[#082447] lg:justify-start">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#075bbf]">
                <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4 fill-white">
                  <path d="M9.1 2.8a1.2 1.2 0 0 1 1.8 0l1.1 1.3 1.7-.2a1.2 1.2 0 0 1 1.3 1.3l-.2 1.7 1.3 1.1a1.2 1.2 0 0 1 0 1.8l-1.3 1.1.2 1.7a1.2 1.2 0 0 1-1.3 1.3l-1.7-.2-1.1 1.3a1.2 1.2 0 0 1-1.8 0L8 13.7l-1.7.2A1.2 1.2 0 0 1 5 12.6l.2-1.7-1.3-1.1a1.2 1.2 0 0 1 0-1.8l1.3-1.1L5 5.2a1.2 1.2 0 0 1 1.3-1.3l1.7.2 1.1-1.3Z" />
                </svg>
              </span>
              <p className="text-base font-black">{valueText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bonus;
