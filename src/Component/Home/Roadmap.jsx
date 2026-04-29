import React from 'react';

const roadmapTitle =
  '\u09ab\u09cd\u09b2\u09c1\u09af\u09bc\u09c7\u09a8\u09cd\u09b8\u09bf \u0985\u09b0\u09cd\u099c\u09a8\u09c7\u09b0 \u09b0\u09cb\u09a1\u09ae\u09cd\u09af\u09be\u09aa';

const roadmapSteps = [
  {
    step: '\u09b8\u09cd\u099f\u09c7\u09aa \u09e6\u09e7',
    title: '\u09ae\u09c1\u0996\u09c7\u09b0 \u099c\u09dc\u09a4\u09be \u0995\u09be\u099f\u09be\u09a8\u09cb',
    description:
      '\u09b8\u09cd\u09aa\u09c7\u09b6\u09be\u09b2 \u099f\u09be\u0982 \u099f\u09c1\u0987\u09b8\u09cd\u099f\u09be\u09b0 \u098f\u09ac\u0982 \u09ad\u09cb\u0995\u09be\u09b2 \u09a1\u09cd\u09b0\u09bf\u09b2 \u09b8\u09c7\u09b6\u09a8',
    side: 'left',
    icon: 'rocket',
  },
  {
    step: '\u09b8\u09cd\u099f\u09c7\u09aa \u09e6\u09e8',
    title:
      '\u09b8\u09a0\u09bf\u0995 \u0989\u099a\u09cd\u099a\u09be\u09b0\u09a3\u09c7\u09b0 \u0985\u09ad\u09cd\u09af\u09be\u09b8',
    description:
      '\u09ab\u09a8\u09c7\u099f\u09bf\u0995\u09cd\u09b8 \u0993 \u09b0\u09bf\u09a6\u09ae\u09bf\u0995 \u09b8\u09be\u0989\u09a8\u09cd\u09a1 \u09aa\u09cd\u09b0\u09cd\u09af\u09be\u0995\u099f\u09bf\u09b8',
    side: 'right',
    icon: 'voice',
  },
  {
    step: '\u09b8\u09cd\u099f\u09c7\u09aa \u09e6\u09e9',
    title: '\u0995\u09a8\u09ab\u09bf\u09a1\u09c7\u09a8\u09cd\u09b8 \u09ac\u09c3\u09a6\u09cd\u09a7\u09bf',
    description:
      '\u09a7\u09be\u09b0\u09be\u09ac\u09be\u09b9\u09bf\u0995 \u09b8\u09cd\u09aa\u09bf\u0995\u09bf\u0982 \u0993 \u09ae\u09bf\u09b0\u09b0 \u09aa\u09cd\u09b0\u09cd\u09af\u09be\u0995\u099f\u09bf\u09b8 \u099f\u09c7\u0995\u09a8\u09bf\u0995',
    side: 'left',
    icon: 'mind',
  },
];

const RoadmapIcon = ({ type }) => {
  if (type === 'voice') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-white">
        <path d="M8 9a4 4 0 1 1 8 0v2a4 4 0 0 1-8 0V9Zm2 0v2a2 2 0 1 0 4 0V9a2 2 0 1 0-4 0Zm-4 2a1 1 0 1 1 2 0 4 4 0 0 0 8 0 1 1 0 1 1 2 0 6 6 0 0 1-5 5.92V19h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-2.08A6 6 0 0 1 6 11Z" />
        <path d="M17.5 6.5a1 1 0 0 1 1.42 0 7 7 0 0 1 0 9.9 1 1 0 1 1-1.42-1.4 5 5 0 0 0 0-7.08 1 1 0 0 1 0-1.42Z" opacity=".72" />
      </svg>
    );
  }

  if (type === 'mind') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-white">
        <path d="M12 3a7 7 0 0 0-7 7c0 2.3 1.1 4.35 2.8 5.62V19a2 2 0 0 0 2 2h4.4a2 2 0 0 0 2-2v-3.38A6.98 6.98 0 0 0 12 3Zm0 4a1 1 0 0 1 .94.66l.45 1.24 1.24.45a1 1 0 0 1 0 1.88l-1.24.45-.45 1.24a1 1 0 0 1-1.88 0l-.45-1.24-1.24-.45a1 1 0 0 1 0-1.88l1.24-.45.45-1.24A1 1 0 0 1 12 7Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-white">
      <path d="M12.3 3.18c2.06-.43 4.18.2 5.67 1.7 1.5 1.49 2.13 3.61 1.7 5.67-.46 2.24-1.82 4.22-3.54 5.76l-.47.42a1 1 0 0 1-1.3.02l-3.28-2.82-2.82-3.28a1 1 0 0 1 .02-1.3l.42-.47c1.54-1.72 3.52-3.08 5.76-3.54Zm1.95 3.95a1.87 1.87 0 1 0 2.65 2.65 1.87 1.87 0 0 0-2.65-2.65ZM7.65 11.6l4.75 4.75-1.76 1.76a2 2 0 0 1-1.42.59H6.3a1 1 0 0 1-1-1v-2.92a2 2 0 0 1 .59-1.42l1.76-1.76Z" />
      <path d="M5.47 18.53c-.62.62-1.91.84-2.39.9a.43.43 0 0 1-.48-.48c.06-.48.28-1.77.9-2.39a1.4 1.4 0 1 1 1.97 1.97Z" />
    </svg>
  );
};

const Roadmap = () => {
  return (
    <section className="bg-[#f8f9ff] px-4 py-14 font-sans sm:px-8 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-black leading-tight tracking-normal text-[#082447] sm:text-4xl">
          {roadmapTitle}
        </h2>

        <div className="relative mx-auto mt-12 max-w-2xl sm:mt-16">
          <div className="absolute left-4 top-0 h-full w-1 rounded-full bg-[#d8e8ff] sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-14 sm:space-y-20">
            {roadmapSteps.map((item) => {
              const isLeft = item.side === 'left';

              return (
                <div key={item.step} className="relative grid gap-5 pl-14 sm:grid-cols-2 sm:gap-20 sm:pl-0">
                  <div className={isLeft ? 'sm:text-right' : 'sm:col-start-2 sm:text-left'}>
                    <p className="text-xl font-black text-[#075bbf] sm:text-2xl">{item.step}</p>
                    <h3 className="mt-2 text-base font-bold text-[#082447]">{item.title}</h3>
                    <p className="mt-2 text-xs font-medium leading-relaxed text-[#75849a]">{item.description}</p>
                  </div>

                  <div className="absolute left-0 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#075bbf] shadow-[0_8px_18px_rgba(7,91,191,0.28)] sm:left-1/2 sm:top-5 sm:h-10 sm:w-10 sm:-translate-x-1/2">
                    <RoadmapIcon type={item.icon} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
