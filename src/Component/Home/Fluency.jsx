import React from 'react';

const title =
  '\u09b8\u09a4\u09cd\u09af\u09bf\u0987 \u0995\u09bf \u09e7\u09eb \u09a6\u09bf\u09a8\u09c7 \u0987\u0982\u09b2\u09bf\u09b6\u09c7 \u09ab\u09cd\u09b2\u09c1\u09df\u09c7\u09a8\u09cd\u09b8\u09bf \u09aa\u09be\u0993\u09df\u09be \u09b8\u09ae\u09cd\u09ad\u09ac?';

const subtitle =
  '\u0986\u09ae\u09be\u09a6\u09c7\u09b0 \u09ae\u09c7\u09a5\u09a1\u09cb\u09b2\u099c\u09bf \u098f\u09ac\u0982 \u09b8\u09cd\u099f\u09c1\u09a1\u09c7\u09a8\u09cd\u099f \u09b8\u09be\u0995\u09b8\u09c7\u09b8 \u09a6\u09c7\u0996\u09c1\u09a8';

const Fluency = () => {
  return (
    <section className="bg-[#e2f2fc] px-4 py-14 font-sans sm:px-8 sm:py-20">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-2xl font-black leading-tight tracking-normal text-[#082447] sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm font-medium leading-relaxed text-[#8a97a8]">
          {subtitle}
        </p>

        <div className="mx-auto mt-9 max-w-3xl sm:mt-14">
          <button
            type="button"
            aria-label="Play fluency success video"
            className="group relative block w-full overflow-hidden rounded-xl shadow-[0_12px_28px_rgba(15,23,42,0.16)] sm:rounded-2xl sm:shadow-[0_16px_38px_rgba(15,23,42,0.18)]"
          >
            <img
              src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=1200&q=85"
              alt="English fluency coaching session"
              className="aspect-[16/9] w-full object-cover"
            />
            <span className="absolute inset-0 bg-[#082447]/25 transition-colors group-hover:bg-[#082447]/15" />
            <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/60 shadow-lg backdrop-blur-sm transition-transform group-hover:scale-105 sm:h-16 sm:w-16">
              <span className="ml-1 h-0 w-0 border-y-[8px] border-l-[12px] border-y-transparent border-l-[#075bbf] sm:border-y-[10px] sm:border-l-[15px]" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Fluency;
