import React from 'react';
import { Link } from 'react-router';

const copy = {
  title:
    '\u09b8\u09ab\u09b2 \u09b6\u09bf\u0995\u09cd\u09b7\u09be\u09b0\u09cd\u09a5\u09c0\u09a6\u09c7\u09b0 \u0997\u09b2\u09cd\u09aa',
  intro:
    'English Commando\u2013\u09b0 \u09e7\u09eb \u09a6\u09bf\u09a8\u09c7\u09b0 \u09ab\u09cd\u09b2\u09c1\u09af\u09bc\u09c7\u09a8\u09cd\u09b8\u09bf \u099a\u09cd\u09af\u09be\u09b2\u09c7\u099e\u09cd\u099c\u09c7 \u09b6\u09bf\u0995\u09cd\u09b7\u09be\u09b0\u09cd\u09a5\u09c0\u09b0\u09be \u0995\u09c0\u09ad\u09be\u09ac\u09c7 \u09ae\u09c1\u0996\u09c7\u09b0 \u099c\u09dc\u09a4\u09be \u0995\u09be\u099f\u09bf\u09df\u09c7 \u0986\u09a4\u09cd\u09ae\u09ac\u09bf\u09b6\u09cd\u09ac\u09be\u09b8\u09c7\u09b0 \u09b8\u09be\u09a5\u09c7 \u0995\u09a5\u09be \u09ac\u09b2\u09be \u09b6\u09c1\u09b0\u09c1 \u0995\u09b0\u09c7\u099b\u09c7, \u09a4\u09be\u09a6\u09c7\u09b0 \u09ac\u09be\u09b8\u09cd\u09a4\u09ac \u0985\u09ad\u09bf\u099c\u09cd\u099e\u09a4\u09be \u09a6\u09c7\u0996\u09c1\u09a8\u0964',
  changed:
    '\u09b8\u09ac\u099a\u09c7\u09df\u09c7 \u09ac\u09c7\u09b6\u09bf \u09aa\u09b0\u09bf\u09ac\u09b0\u09cd\u09a4\u09a8 \u09b9\u09df\u09c7\u099b\u09c7',
  ctaTitle:
    '\u0986\u09aa\u09a8\u09bf\u0993 \u09aa\u09b0\u09ac\u09b0\u09cd\u09a4\u09c0 \u09b8\u09ab\u09b2 \u0997\u09b2\u09cd\u09aa \u09b9\u09a4\u09c7 \u09aa\u09be\u09b0\u09c7\u09a8',
  ctaText:
    '\u0986\u099c\u0987 \u09e7\u09eb \u09a6\u09bf\u09a8\u09c7\u09b0 \u09ab\u09cd\u09b2\u09c1\u09af\u09bc\u09c7\u09a8\u09cd\u09b8\u09bf \u099a\u09cd\u09af\u09be\u09b2\u09c7\u099e\u09cd\u099c\u09c7 \u09af\u09cb\u0997 \u09a6\u09bf\u09a8 \u098f\u09ac\u0982 \u09a8\u09bf\u099c\u09c7\u09b0 \u09aa\u09b0\u09bf\u09ac\u09b0\u09cd\u09a4\u09a8 \u09b6\u09c1\u09b0\u09c1 \u0995\u09b0\u09c1\u09a8\u0964',
  cta: '\u098f\u0996\u09a8\u0987 \u099c\u09df\u09c7\u09a8 \u0995\u09b0\u09c1\u09a8',
};

const stats = [
  '\u09eb,\u09e6\u09e6\u09e6+ \u09b6\u09bf\u0995\u09cd\u09b7\u09be\u09b0\u09cd\u09a5\u09c0',
  '\u09ea.\u09ef/\u09eb \u0997\u09dc \u09b0\u09c7\u099f\u09bf\u0982',
  '\u09ef\u09e8% \u0995\u09cb\u09b0\u09cd\u09b8 \u09b8\u09ae\u09cd\u09aa\u09a8\u09cd\u09a8',
];

const stories = [
  {
    name: '\u09b0\u09be\u09ab\u09bf \u0986\u09b9\u09ae\u09c7\u09a6',
    role: 'University Student',
    text: '\u0986\u0997\u09c7 \u0986\u09ae\u09bf \u0987\u0982\u09b0\u09c7\u099c\u09bf\u09a4\u09c7 \u0995\u09a5\u09be \u09ac\u09b2\u09a4\u09c7 \u09ad\u09df \u09aa\u09c7\u09a4\u09be\u09ae\u0964 Vocal Exercise \u0986\u09b0 Mirror Practice \u0986\u09ae\u09be\u0995\u09c7 \u09aa\u09cd\u09b0\u09a4\u09bf\u09a6\u09bf\u09a8 \u0995\u09a5\u09be \u09ac\u09b2\u09be\u09b0 \u0985\u09ad\u09cd\u09af\u09be\u09b8 \u09a4\u09c8\u09b0\u09bf \u0995\u09b0\u09a4\u09c7 \u09b8\u09be\u09b9\u09be\u09af\u09cd\u09af \u0995\u09b0\u09c7\u099b\u09c7\u0964',
    accent: '#075bbf',
  },
  {
    name: '\u09a8\u09c1\u09b8\u09b0\u09be\u09a4 \u099c\u09be\u09b9\u09be\u09a8',
    role: 'Job Candidate',
    text: '\u09e7\u09eb \u09a6\u09bf\u09a8\u09c7 \u0986\u09ae\u09be\u09b0 pronunciation \u0985\u09a8\u09c7\u0995 \u09aa\u09b0\u09bf\u09b7\u09cd\u0995\u09be\u09b0 \u09b9\u09df\u09c7\u099b\u09c7\u0964 \u09ac\u09be\u0982\u09b2\u09be \u09b8\u09be\u0989\u09a8\u09cd\u09a1 \u09a5\u09c7\u0995\u09c7 \u0987\u0982\u09b2\u09bf\u09b6 \u09b8\u09be\u0989\u09a8\u09cd\u09a1\u09c7 \u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8\u09ab\u09be\u09b0 \u099f\u09c7\u0995\u09a8\u09bf\u0995\u099f\u09be \u09b8\u09ac\u099a\u09c7\u09df\u09c7 \u09ac\u09c7\u09b6\u09bf \u0995\u09be\u099c\u09c7 \u09a6\u09bf\u09df\u09c7\u099b\u09c7\u0964',
    accent: '#3db7ff',
  },
  {
    name: '\u09b8\u09be\u09a6\u09bf\u09df\u09be \u09b0\u09b9\u09ae\u09be\u09a8',
    role: 'Office Executive',
    text: 'Daily tracker \u09a6\u09c7\u0996\u09c7 \u09a8\u09bf\u099c\u09c7\u09b0 \u0989\u09a8\u09cd\u09a8\u09a4\u09bf \u09ac\u09c1\u099d\u09a4\u09c7 \u09aa\u09be\u09b0\u09a4\u09be\u09ae\u0964 \u098f\u0996\u09a8 meeting-\u098f \u099b\u09cb\u099f \u099b\u09cb\u099f \u0987\u0982\u09b0\u09c7\u099c\u09bf \u09ac\u09be\u0995\u09cd\u09af \u09ac\u09b2\u09a4\u09c7 \u0986\u09b0 \u09ad\u09df \u09b2\u09be\u0997\u09c7 \u09a8\u09be\u0964',
    accent: '#16b987',
  },
];

const improvements = [
  {
    title: '\u0995\u09a8\u09ab\u09bf\u09a1\u09c7\u09a8\u09cd\u09b8',
    text: '\u09aa\u09cd\u09b0\u09a4\u09bf\u09a6\u09bf\u09a8 \u099b\u09cb\u099f \u09b8\u09cd\u09aa\u09bf\u0995\u09bf\u0982 \u099f\u09be\u09b8\u09cd\u0995 \u09b6\u09c7\u09b7 \u0995\u09b0\u09be\u09b0 \u0995\u09be\u09b0\u09a3\u09c7 \u09ad\u09df \u0995\u09ae\u09c7\u099b\u09c7\u0964',
  },
  {
    title: '\u0989\u099a\u09cd\u099a\u09be\u09b0\u09a3',
    text: '\u09ab\u09a8\u09c7\u099f\u09bf\u0995 \u09a1\u09cd\u09b0\u09bf\u09b2 \u0993 \u099f\u09be\u0982 \u099f\u09c1\u0987\u09b8\u09cd\u099f\u09be\u09b0 \u09a6\u09bf\u09df\u09c7 \u09b8\u09be\u0989\u09a8\u09cd\u09a1 \u09aa\u09b0\u09bf\u09b7\u09cd\u0995\u09be\u09b0 \u09b9\u09df\u09c7\u099b\u09c7\u0964',
  },
  {
    title: '\u09a7\u09be\u09b0\u09be\u09ac\u09be\u09b9\u09bf\u0995\u09a4\u09be',
    text: 'Progress chart \u09b6\u09bf\u0995\u09cd\u09b7\u09be\u09b0\u09cd\u09a5\u09c0\u09a6\u09c7\u09b0 \u09aa\u09cd\u09b0\u09a4\u09bf\u09a6\u09bf\u09a8 practice-\u098f \u09a7\u09b0\u09c7 \u09b0\u09c7\u0996\u09c7\u099b\u09c7\u0964',
  },
];

const SuccessStory = () => {
  return (
    <main className="bg-[#f8f9ff] font-sans text-[#082447]">
      <section className="px-4 py-16 text-center sm:px-8 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mx-auto mb-5 inline-flex rounded-full border border-[#d8e8ff] bg-white px-4 py-1 text-xs font-black uppercase tracking-[0.12em] text-[#075bbf] shadow-sm">
            Student Wins
          </p>
          <h1 className="text-4xl font-black leading-tight tracking-normal sm:text-6xl">
            {copy.title}
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-base font-medium leading-8 text-[#53637a] sm:text-lg">
            {copy.intro}
          </p>

          <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat} className="rounded-2xl border border-[#dce9f7] bg-white p-5 shadow-sm">
                <p className="text-xl font-black text-[#075bbf]">{stat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {stories.map((story) => (
            <article
              key={story.name}
              className="rounded-3xl border border-[#dce9f7] bg-white p-8 shadow-[0_4px_16px_rgba(15,23,42,0.05)]"
            >
              <div className="flex items-center gap-4">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-full text-lg font-black text-white"
                  style={{ backgroundColor: story.accent }}
                >
                  {story.name.slice(0, 1)}
                </div>
                <div>
                  <h2 className="text-xl font-black">{story.name}</h2>
                  <p className="mt-1 text-sm font-semibold text-[#75849a]">{story.role}</p>
                </div>
              </div>
              <div className="mt-6 flex gap-1 text-[#f7b500]" aria-label="5 star rating">
                {'\u2605\u2605\u2605\u2605\u2605'}
              </div>
              <p className="mt-5 text-sm font-medium leading-8 text-[#53637a]">{story.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-black leading-tight sm:text-5xl">
            {copy.changed}
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {improvements.map((item) => (
              <article key={item.title} className="rounded-3xl border border-[#dce9f7] bg-white p-8 text-center shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#075bbf] text-white">
                  {'\u2713'}
                </div>
                <h3 className="mt-6 text-2xl font-black">{item.title}</h3>
                <p className="mt-4 text-sm font-medium leading-7 text-[#5e708a]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 text-center sm:px-8 sm:py-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-[#dce9f7] bg-[#f8fbff] p-8 shadow-sm sm:p-12">
          <h2 className="text-3xl font-black leading-tight sm:text-5xl">{copy.ctaTitle}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-8 text-[#53637a]">
            {copy.ctaText}
          </p>
          <Link
            to="/enrollment"
            className="mt-8 inline-flex min-h-14 items-center justify-center rounded-full bg-[#075bbf] px-8 text-base font-black text-white no-underline shadow-[0_6px_0_#064a99] transition-transform hover:-translate-y-0.5"
          >
            {copy.cta}
          </Link>
        </div>
      </section>
    </main>
  );
};

export default SuccessStory;
