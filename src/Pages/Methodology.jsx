import React from 'react';
import { Link } from 'react-router';

const copy = {
  title: '\u0986\u09ae\u09be\u09a6\u09c7\u09b0 \u09ae\u09c7\u09a5\u09a1\u09cb\u09b2\u099c\u09bf',
  intro:
    '\u09b6\u09c1\u09a7\u09c1 \u09ae\u09c1\u0996\u09b8\u09cd\u09a5 \u09a8\u09df, English Commando \u0986\u09aa\u09a8\u09be\u0995\u09c7 \u09aa\u09cd\u09b0\u09a4\u09bf\u09a6\u09bf\u09a8\u09c7\u09b0 \u099b\u09cb\u099f \u099b\u09cb\u099f \u09b8\u09cd\u09aa\u09bf\u0995\u09bf\u0982 \u0985\u09cd\u09af\u09be\u0995\u09b6\u09a8, \u0989\u099a\u09cd\u099a\u09be\u09b0\u09a3 \u09a1\u09cd\u09b0\u09bf\u09b2 \u098f\u09ac\u0982 \u0995\u09a8\u09ab\u09bf\u09a1\u09c7\u09a8\u09cd\u09b8 \u09ac\u09bf\u09b2\u09cd\u09a1\u09bf\u0982 \u09aa\u09cd\u09b0\u09cd\u09af\u09be\u0995\u099f\u09bf\u09b8\u09c7\u09b0 \u09ae\u09be\u09a7\u09cd\u09af\u09ae\u09c7 \u09ab\u09cd\u09b2\u09c1\u09af\u09bc\u09c7\u09a8\u09cd\u09b8\u09bf\u09b0 \u09a6\u09bf\u0995\u09c7 \u09a8\u09bf\u09df\u09c7 \u09af\u09be\u09df\u0964',
  system:
    '\u09e7\u09eb \u09a6\u09bf\u09a8\u09c7\u09b0 \u0995\u09be\u09a0\u09be\u09ae\u09cb\u09ac\u09a6\u09cd\u09a7 \u09ab\u09cd\u09b2\u09c1\u09af\u09bc\u09c7\u09a8\u09cd\u09b8\u09bf \u09b8\u09bf\u09b8\u09cd\u099f\u09c7\u09ae',
  daily:
    '\u09aa\u09cd\u09b0\u09a4\u09bf\u09a6\u09bf\u09a8 \u09e9\u09e6-\u09ea\u09eb \u09ae\u09bf\u09a8\u09bf\u099f\u09c7\u09b0 \u09ab\u09cb\u0995\u09be\u09b8\u09a1 \u09aa\u09cd\u09b0\u09cd\u09af\u09be\u0995\u099f\u09bf\u09b8',
  why:
    '\u0995\u09c7\u09a8 \u098f\u0987 \u09aa\u09a6\u09cd\u09a7\u09a4\u09bf \u0995\u09be\u099c \u0995\u09b0\u09c7?',
  flow: '\u09aa\u09cd\u09b0\u09cd\u09af\u09be\u0995\u099f\u09bf\u09b8 \u09ab\u09cd\u09b2\u09cb',
  cta: '\u0986\u099c\u0987 \u09aa\u09cd\u09b0\u09cd\u09af\u09be\u0995\u099f\u09bf\u09b8 \u09b6\u09c1\u09b0\u09c1 \u0995\u09b0\u09c1\u09a8',
};

const methodCards = [
  {
    title: '\u09ad\u09cb\u0995\u09be\u09b2 \u0993\u09df\u09be\u09b0\u09cd\u09ae\u0986\u09aa',
    text: '\u09ae\u09c1\u0996\u09c7\u09b0 \u099c\u09dc\u09a4\u09be \u0995\u09be\u099f\u09be\u09a4\u09c7 \u099f\u09be\u0982 \u099f\u09c1\u0987\u09b8\u09cd\u099f\u09be\u09b0, \u09ac\u09cd\u09b0\u09bf\u09a6\u09bf\u0982 \u098f\u09ac\u0982 \u09a6\u09cd\u09b0\u09c1\u09a4 \u0989\u099a\u09cd\u099a\u09be\u09b0\u09a3 \u09a1\u09cd\u09b0\u09bf\u09b2\u0964',
    icon: '01',
  },
  {
    title: '\u09a8\u09bf\u0989\u099f\u09cd\u09b0\u09be\u09b2 \u0989\u099a\u09cd\u099a\u09be\u09b0\u09a3',
    text: '\u09ac\u09be\u0982\u09b2\u09be \u09b8\u09be\u0989\u09a8\u09cd\u09a1 \u09a5\u09c7\u0995\u09c7 \u0987\u0982\u09b2\u09bf\u09b6 \u09b8\u09be\u0989\u09a8\u09cd\u09a1\u09c7 \u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8\u09ab\u09be\u09b0 \u0995\u09b0\u09be\u09b0 \u09b8\u09b9\u099c \u09ab\u09a8\u09c7\u099f\u09bf\u0995 \u099f\u09c7\u0995\u09a8\u09bf\u0995\u0964',
    icon: '02',
  },
  {
    title: '\u09b0\u09bf\u09df\u09c7\u09b2 \u09b8\u09cd\u09aa\u09bf\u0995\u09bf\u0982 \u09aa\u09cd\u09b0\u09cd\u09af\u09be\u0995\u099f\u09bf\u09b8',
    text: '\u09ae\u09bf\u09b0\u09b0 \u09aa\u09cd\u09b0\u09cd\u09af\u09be\u0995\u099f\u09bf\u09b8, \u09aa\u09cd\u09b0\u09b6\u09cd\u09a8-\u0989\u09a4\u09cd\u09a4\u09b0 \u098f\u09ac\u0982 \u09b2\u09be\u0987\u09ab \u09b8\u09bf\u099a\u09c1\u09df\u09c7\u09b6\u09a8 \u09ad\u09bf\u09a4\u09cd\u09a4\u09bf\u0995 \u0995\u09a5\u09cb\u09aa\u0995\u09a5\u09a8\u0964',
    icon: '03',
  },
  {
    title: '\u099f\u09cd\u09b0\u09cd\u09af\u09be\u0995\u09bf\u0982 \u0993 \u09ab\u09bf\u09a1\u09ac\u09cd\u09af\u09be\u0995',
    text: '\u09a6\u09c8\u09a8\u09bf\u0995 \u09aa\u09cd\u09b0\u0997\u09cd\u09b0\u09c7\u09b8 \u099a\u09be\u09b0\u09cd\u099f \u09a6\u09bf\u09df\u09c7 \u09a8\u09bf\u099c\u09c7\u09b0 \u0989\u09a8\u09cd\u09a8\u09a4\u09bf \u09ae\u09be\u09aa\u09c1\u09a8 \u098f\u09ac\u0982 \u09a6\u09c1\u09b0\u09cd\u09ac\u09b2 \u099c\u09be\u09df\u0997\u09be \u09a0\u09bf\u0995 \u0995\u09b0\u09c1\u09a8\u0964',
    icon: '04',
  },
];

const reasons = [
  {
    title: '\u09ad\u09df\u09c7\u09b8 \u09ae\u09c7\u09ae\u09cb\u09b0\u09bf',
    text: '\u098f\u0995\u0987 \u09b8\u09be\u0989\u09a8\u09cd\u09a1 \u09ac\u09be\u09b0\u09ac\u09be\u09b0 \u09ac\u09b2\u09be\u09b0 \u09ae\u09be\u09a7\u09cd\u09af\u09ae\u09c7 \u09ae\u09c1\u0996 \u0993 \u099c\u09bf\u09b9\u09cd\u09ac\u09be\u09b0 \u09ae\u09be\u0982\u09b8\u09aa\u09c7\u09b6\u09bf \u0987\u0982\u09b2\u09bf\u09b6\u09c7 \u0985\u09ad\u09cd\u09af\u09b8\u09cd\u09a4 \u09b9\u09df\u0964',
  },
  {
    title: '\u099b\u09cb\u099f \u09a6\u09c8\u09a8\u09bf\u0995 \u099c\u09df',
    text: '\u09aa\u09cd\u09b0\u09a4\u09bf\u09a6\u09bf\u09a8 \u099b\u09cb\u099f \u099f\u09be\u09b0\u09cd\u0997\u09c7\u099f \u09b6\u09c7\u09b7 \u0995\u09b0\u09b2\u09c7 \u09a7\u09be\u09b0\u09be\u09ac\u09be\u09b9\u09bf\u0995\u09a4\u09be \u09a4\u09c8\u09b0\u09bf \u09b9\u09df \u098f\u09ac\u0982 \u09ad\u09df \u0995\u09ae\u09c7\u0964',
  },
  {
    title: '\u09ac\u09be\u0982\u09b2\u09be-\u099f\u09c1-\u0987\u0982\u09b2\u09bf\u09b6 \u09ac\u09cd\u09b0\u09bf\u099c',
    text: '\u09ac\u09be\u0982\u09b2\u09be \u09ad\u09be\u09b7\u09be\u09ad\u09be\u09b7\u09c0\u09a6\u09c7\u09b0 \u09b8\u09be\u09a7\u09be\u09b0\u09a3 \u0989\u099a\u09cd\u099a\u09be\u09b0\u09a3 \u09b8\u09ae\u09b8\u09cd\u09af\u09be\u09b0 \u099c\u09a8\u09cd\u09af \u0986\u09b2\u09be\u09a6\u09be \u09b8\u09be\u0989\u09a8\u09cd\u09a1 \u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8\u09ab\u09be\u09b0 \u09a8\u09bf\u09df\u09ae\u0964',
  },
];

const flow = [
  '\u0993\u09df\u09be\u09b0\u09cd\u09ae\u0986\u09aa',
  '\u09b8\u09be\u0989\u09a8\u09cd\u09a1 \u09a1\u09cd\u09b0\u09bf\u09b2',
  '\u0995\u09a5\u09cb\u09aa\u0995\u09a5\u09a8',
  '\u09b0\u09bf\u09ad\u09bf\u0989',
];

const Methodology = () => {
  return (
    <main className="bg-[#f8f9ff] font-sans text-[#082447]">
      <section className="px-4 py-16 text-center sm:px-8 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mx-auto mb-5 inline-flex rounded-full border border-[#d8e8ff] bg-white px-4 py-1 text-xs font-black uppercase tracking-[0.12em] text-[#075bbf] shadow-sm">
            English Commando Method
          </p>
          <h1 className="text-4xl font-black leading-tight tracking-normal sm:text-6xl">
            {copy.title}
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-base font-medium leading-8 text-[#53637a] sm:text-lg">
            {copy.intro}
          </p>

          <div className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#dce9f7] bg-white p-5 shadow-sm">
              <p className="text-3xl font-black text-[#075bbf]">15 Days</p>
              <p className="mt-2 text-sm font-black text-[#53637a]">{copy.system}</p>
            </div>
            <div className="rounded-2xl border border-[#dce9f7] bg-white p-5 shadow-sm">
              <p className="text-3xl font-black text-[#075bbf]">30-45 Min</p>
              <p className="mt-2 text-sm font-black text-[#53637a]">{copy.daily}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-4">
          {methodCards.map((card) => (
            <article
              key={card.icon}
              className="rounded-3xl border border-[#dce9f7] bg-white p-8 shadow-[0_4px_16px_rgba(15,23,42,0.05)]"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eff7ff] text-lg font-black text-[#075bbf]">
                {card.icon}
              </span>
              <h2 className="mt-7 text-2xl font-black leading-tight">{card.title}</h2>
              <p className="mt-4 text-sm font-medium leading-7 text-[#5e708a]">{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-black leading-tight sm:text-5xl">
            {copy.why}
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reasons.map((reason) => (
              <article
                key={reason.title}
                className="rounded-3xl border border-[#dce9f7] bg-white p-8 text-center shadow-sm"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#075bbf] text-white">
                  {'\u2713'}
                </div>
                <h3 className="mt-6 text-xl font-black">{reason.title}</h3>
                <p className="mt-4 text-sm font-medium leading-7 text-[#5e708a]">{reason.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-black sm:text-5xl">{copy.flow}</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-4">
            {flow.map((item, index) => (
              <div key={item} className="rounded-2xl border border-[#dce9f7] bg-[#f8fbff] p-5">
                <p className="text-sm font-black text-[#075bbf]">STEP {index + 1}</p>
                <p className="mt-3 text-lg font-black">{item}</p>
              </div>
            ))}
          </div>

          <Link
            to="/enrollment"
            className="mt-12 inline-flex min-h-14 items-center justify-center rounded-full bg-[#075bbf] px-8 text-base font-black text-white no-underline shadow-[0_6px_0_#064a99] transition-transform hover:-translate-y-0.5"
          >
            {copy.cta}
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Methodology;
