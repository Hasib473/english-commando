import React from 'react';

const title =
  '\u09e7\u09e6\u09e6% \u099f\u09be\u0995\u09be \u09ab\u09c7\u09b0\u09a4 \u0997\u09cd\u09af\u09be\u09b0\u09be\u09a8\u09cd\u099f\u09bf';

const description =
  '\u09aa\u09cd\u09b0\u09a4\u09bf\u099f\u09bf \u09a8\u09bf\u09b0\u09cd\u09a6\u09c7\u09b6\u09a8\u09be \u09aa\u09c1\u0999\u09cd\u0996\u09be\u09a8\u09c1\u09aa\u09c1\u0999\u09cd\u0996\u09ad\u09be\u09ac\u09c7 \u0985\u09a8\u09c1\u09b8\u09b0\u09a3 \u0995\u09b0\u09be\u09b0 \u09aa\u09b0\u0993 \u09af\u09a6\u09bf \u09e7\u09eb \u09a6\u09bf\u09a8\u09c7\u09b0 \u09ae\u09a7\u09cd\u09af\u09c7 \u0986\u09aa\u09a8\u09be\u09b0 \u09b8\u09a0\u09bf\u0995 \u0989\u099a\u09cd\u099a\u09be\u09b0\u09a3 \u098f\u09ac\u0982 \u09ab\u09cd\u09b2\u09c1\u09af\u09bc\u09c7\u09a8\u09cd\u09b8\u09bf \u09a8\u09be \u0986\u09b8\u09c7, \u09a4\u09be\u09b9\u09b2\u09c7 \u0986\u09ae\u09b0\u09be \u0986\u09aa\u09a8\u09be\u09b0 \u09b8\u09ae\u09cd\u09aa\u09c2\u09b0\u09cd\u09a3 \u099f\u09be\u0995\u09be \u09ab\u09c7\u09b0\u09a4 \u09a6\u09bf\u09a4\u09c7 \u09aa\u09be\u09b0\u09ac\u09cb\u0964 \u09a4\u09ac\u09c7 \u09b6\u09b0\u09cd\u09a4 \u09aa\u09cd\u09b0\u09af\u09cb\u099c\u09cd\u09af\u0964';

const Garunty = () => {
  return (
    <section className="bg-[#e2f2fc] px-4 py-14 font-sans sm:px-8 sm:py-20">
      <div className="mx-auto max-w-5xl rounded-3xl border border-[#b8f0d6] bg-white px-6 py-12 text-center shadow-[0_16px_28px_rgba(15,23,42,0.10)] sm:px-12 sm:py-14">
        <svg
          viewBox="0 0 64 64"
          aria-hidden="true"
          className="mx-auto h-14 w-14 fill-[#16b987]"
        >
          <path d="M32 6 12 13.8V28c0 14.2 8.3 24.8 20 30 11.7-5.2 20-15.8 20-30V13.8L32 6Z" />
        </svg>

        <h2 className="mt-8 text-4xl font-black leading-tight tracking-normal text-[#082447] sm:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-7 max-w-4xl text-base font-medium leading-8 text-[#5e708a] sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
};

export default Garunty;
