import React from 'react';

const sectionTitle =
  '\u09e7\u09eb \u09a6\u09bf\u09a8\u09c7\u09b0 \u0995\u09be\u09b0\u09bf\u0995\u09c1\u09b2\u09be\u09ae';

const lessons = [
  {
    day: 'DAY 01',
    title:
      'Vocal Exercise: \u09ae\u09c1\u0996\u09c7\u09b0 \u099c\u09dc\u09a4\u09be \u0995\u09be\u099f\u09be\u09a8\u09cb\u09b0 \u09b8\u09c7\u09b0\u09be \u099f\u09c7\u0995\u09a8\u09bf\u0995',
    status: 'done',
  },
  {
    day: 'DAY 02',
    title:
      'ABC Pronunciation: \u09b8\u09a0\u09bf\u0995 \u0989\u099a\u09cd\u099a\u09be\u09b0\u09a3\u09c7\u09b0 \u09b6\u09c1\u09b0\u09c1',
    status: 'play',
  },
  {
    day: 'DAY 03',
    title:
      '\u09ac\u09be\u0982\u09b2\u09be \u09b8\u09be\u0989\u09a8\u09cd\u09a1 \u099f\u09cd\u09b0\u09be\u09a8\u09cd\u09b8\u09ab\u09be\u09b0 \u099f\u09c7\u0995\u09a8\u09bf\u0995',
    status: 'play',
  },
  {
    day: 'DAY 04',
    title:
      '\u0995\u09bf\u09ad\u09be\u09ac\u09c7 \u09b8\u09be\u09ac\u09b2\u09c0\u09b2\u09ad\u09be\u09ac\u09c7 \u09aa\u09cd\u09b0\u09b6\u09cd\u09a8 \u0995\u09b0\u09ac\u09c7\u09a8?',
    status: 'locked',
    hint:
      'Unlock \u0995\u09b0\u09a4\u09c7 \u099c\u09af\u09bc\u09c7\u09a8 \u0995\u09b0\u09c1\u09a8',
  },
];

const LessonIcon = ({ status }) => {
  if (status === 'done') {
    return (
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#19bd8b]">
        <svg viewBox="0 0 20 20" aria-hidden="true" className="h-3.5 w-3.5 fill-none stroke-white stroke-[3]">
          <path d="M5 10.2 8.2 13 15 6.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    );
  }

  if (status === 'locked') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-[#b8bbc2] stroke-2">
        <path d="M7 10V8a5 5 0 0 1 10 0v2" />
        <rect x="5" y="10" width="14" height="11" rx="2" />
        <path d="M12 15v2" />
      </svg>
    );
  }

  return (
    <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#075bd8]">
      <span className="ml-0.5 h-0 w-0 border-y-[5px] border-l-[7px] border-y-transparent border-l-[#075bd8]" />
    </span>
  );
};

const Curriculam = () => {
  return (
    <section id="curriculum" className="bg-[#f8f9ff] px-4 py-16 font-sans sm:px-8 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-4xl font-black leading-tight tracking-normal text-[#082447] sm:text-5xl">
          {sectionTitle}
        </h2>

        <div className="mt-14 space-y-4 sm:mt-20 sm:space-y-5">
          {lessons.map((lesson) => {
            const isLocked = lesson.status === 'locked';

            return (
              <article
                key={lesson.day}
                className={
                  isLocked
                    ? 'flex flex-col gap-4 rounded-3xl border border-[#e6e8ee] bg-white/55 px-5 py-6 text-[#a7a9af] shadow-[0_4px_14px_rgba(15,23,42,0.04)] sm:flex-row sm:items-center sm:gap-6 sm:px-7'
                    : 'flex flex-col gap-4 rounded-3xl border-2 border-[#075bd8] bg-white px-5 py-6 text-[#082447] sm:flex-row sm:items-center sm:gap-6 sm:px-7'
                }
              >
                <span
                  className={
                    isLocked
                      ? 'inline-flex h-12 min-w-24 items-center justify-center self-start rounded-2xl bg-white/70 px-4 text-sm font-black text-[#a7a9af]'
                      : 'inline-flex h-12 min-w-24 items-center justify-center self-start rounded-2xl bg-[#edf6ff] px-4 text-sm font-black text-[#075bbf]'
                  }
                >
                  {lesson.day}
                </span>

                <h3 className="min-w-0 flex-1 text-base font-black leading-relaxed sm:text-[1.05rem]">
                  {lesson.title}
                </h3>

                <div className="flex shrink-0 items-center gap-3 self-start sm:self-center">
                  {isLocked && (
                    <span className="text-xs font-semibold text-[#a7a9af]">
                      {lesson.hint}
                    </span>
                  )}
                  <LessonIcon status={lesson.status} />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Curriculam;
