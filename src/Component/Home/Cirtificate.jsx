import React from 'react';
import cirtificate from '../../assets/cirtificate.jpg';

const title =
  '\u0995\u09cb\u09b0\u09cd\u09b8 \u09b6\u09c7\u09b7\u09c7 \u09ad\u09c7\u09b0\u09bf\u09ab\u09be\u0987\u09a1 \u09b8\u09be\u09b0\u09cd\u099f\u09bf\u09ab\u09bf\u0995\u09c7\u099f';

const description =
  '\u09e7\u09eb \u09a6\u09bf\u09a8\u09c7 \u09ae\u09cb\u099f \u09e7\u09eb\u09e6\u09e6 \u09ae\u09be\u09b0\u09cd\u0995 \u09a5\u09be\u0995\u09ac\u09c7 (\u09aa\u09cd\u09b0\u09a4\u09bf\u09a6\u09bf\u09a8 \u09e7\u09e6\u09e6 \u09ae\u09be\u09b0\u09cd\u0995)\u0964 \u09a8\u09cd\u09af\u09c2\u09a8\u09a4\u09ae \u09e7\u09e8\u09e6\u09e6 \u09ae\u09be\u09b0\u09cd\u0995 \u0985\u09b0\u09cd\u099c\u09a8 \u0995\u09b0\u09b2\u09c7, \u0986\u09aa\u09a8\u09bf English Commando \u09a5\u09c7\u0995\u09c7 \u09ad\u09c7\u09b0\u09bf\u09ab\u09be\u0987\u09a1 \u09ab\u09cd\u09b2\u09c1\u09af\u09bc\u09c7\u09a8\u09cd\u09b8\u09bf \u09b8\u09be\u09b0\u09cd\u099f\u09bf\u09ab\u09bf\u0995\u09c7\u099f \u09aa\u09be\u09ac\u09c7\u09a8\u0964';

const featureOne =
  '\u09aa\u09cd\u09b0\u09ab\u09c7\u09b6\u09a8\u09be\u09b2 \u09a1\u09bf\u099c\u09be\u0987\u09a8';
const featureTwo = 'QR \u09ad\u09c7\u09b0\u09bf\u09ab\u09be\u0987\u09a1';

const Cirtificate = () => {
  return (
    <section className="bg-[#e2f2fc] px-4 py-16 font-sans sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div className="text-center lg:text-left">
          <h2 className="max-w-xl text-4xl font-black leading-tight tracking-normal text-[#082447] sm:text-5xl lg:text-[3.35rem]">
            {title}
          </h2>

          <p className="mx-auto mt-10 max-w-2xl text-base font-medium leading-8 text-[#53637a] lg:mx-0">
            {description}
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <div className="inline-flex items-center justify-center gap-3 rounded-2xl border border-[#e2ebf6] bg-white px-5 py-4 text-base font-black text-[#082447] shadow-[0_3px_10px_rgba(15,23,42,0.05)]">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-none stroke-[#075bbf] stroke-2">
                <path d="M12 3 9.5 5.3 6.2 4.9 5.8 8.2 3.5 10.7 5.8 13.2 6.2 16.5l3.3-.4L12 18.4l2.5-2.3 3.3.4.4-3.3 2.3-2.5-2.3-2.5-.4-3.3-3.3.4L12 3Z" />
                <path d="M9.2 11.2 11 13l3.9-4" />
                <path d="m8.5 17.2-.9 3.8 4.4-2.6 4.4 2.6-.9-3.8" />
              </svg>
              {featureOne}
            </div>

            <div className="inline-flex items-center justify-center gap-3 rounded-2xl border border-[#e2ebf6] bg-white px-5 py-4 text-base font-black text-[#082447] shadow-[0_3px_10px_rgba(15,23,42,0.05)]">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-[#075bbf]">
                <path d="M4 4h6v6H4V4Zm2 2v2h2V6H6Zm8-2h6v6h-6V4Zm2 2v2h2V6h-2ZM4 14h6v6H4v-6Zm2 2v2h2v-2H6Zm9-2h2v2h-2v-2Zm-3 0h2v2h-2v-2Zm6 0h2v2h-2v-2Zm-6 3h2v3h-2v-3Zm3 0h5v2h-3v1h-2v-3Zm3 3h2v2h-2v-2Z" />
              </svg>
              {featureTwo}
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[560px]">
          <img
            src={cirtificate}
            alt="Verified course completion certificate"
            className="w-full rounded-2xl border border-[#d6e9ea] object-cover shadow-[0_20px_50px_rgba(15,23,42,0.16)]"
          />
        </div>
      </div>
    </section>
  );
};

export default Cirtificate;
