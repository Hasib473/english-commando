import React from 'react';

const title = '\u09b8\u09a4\u09b0\u09cd\u0995\u09a4\u09be!';

const message =
  '\u09e7\u09eb \u09a6\u09bf\u09a8\u09c7 \u09ab\u09cd\u09b2\u09c1\u09af\u09bc\u09c7\u09a8\u09cd\u09b8\u09bf \u0985\u09b0\u09cd\u099c\u09a8 \u0995\u09b0\u09be \u09b8\u09ae\u09cd\u09ad\u09ac, \u0995\u09bf\u09a8\u09cd\u09a4\u09c1 \u098f\u0995\u099c\u09a8 \u09ab\u09cd\u09b2\u09c1\u09af\u09bc\u09c7\u09a8\u09cd\u099f \u0987\u0982\u09b2\u09bf\u09b6 \u09b8\u09cd\u09aa\u09bf\u0995\u09be\u09b0 \u09b9\u09a4\u09c7 \u09b8\u09ae\u09af\u09bc\u09c7\u09b0 \u09aa\u09cd\u09b0\u09af\u09bc\u09cb\u099c\u09a8\u0964';

const Disclaimer = () => {
  return (
    <section className="bg-[#e2f2fc] px-4 py-14 font-sans sm:px-8">
      <div className="mx-auto max-w-5xl rounded-3xl border border-[#ffb8b8] bg-[#fff3f3] px-6 py-10 text-center shadow-[0_8px_18px_rgba(248,113,113,0.08)] sm:px-10">
        <svg
          viewBox="0 0 64 64"
          aria-hidden="true"
          className="mx-auto h-12 w-12 fill-[#ff4c4c]"
        >
          <path d="M32 8 4 56h56L32 8Zm-2.7 16h5.4l-.8 18h-3.8L29.3 24ZM32 50a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
        </svg>

        <h2 className="mt-7 text-3xl font-black leading-tight text-[#082447] sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-4xl text-lg font-medium leading-relaxed text-[#d82020] sm:text-xl">
          {message}
        </p>
      </div>
    </section>
  );
};

export default Disclaimer;
