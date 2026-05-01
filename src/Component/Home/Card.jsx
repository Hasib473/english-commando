import React from 'react';

const cards = [
  {
    title: 'Vocal Exercise',
    duration: 'Duration: 2 Hours',
    progressClass: 'w-14 bg-[#075bbf]',
    icon: 'dumbbell',
  },
  {
    title: 'Magic Sound',
    duration: 'Duration: 2.5 Hours',
    progressClass: 'w-full bg-[#3db7ff]',
    icon: 'sparkles',
  },
  {
    title: 'Tongue Twister',
    duration: 'Duration: 3 Hours',
    progressClass: 'w-14 bg-[#075bbf]',
    icon: 'voice',
  },
  {
    title: 'Daily Tracker',
    duration: 'Duration: 5 Hours',
    progressClass: 'w-14 bg-[#3db7ff]',
    icon: 'compass',
  },
];

const CardIcon = ({ type }) => {
  if (type === 'sparkles') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-none stroke-[#3db7ff] stroke-2">
        <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z" />
        <path d="M19 14l.9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14Z" />
        <path d="M5 13l.7 1.6L7 15l-1.3.4L5 17l-.7-1.6L3 15l1.3-.4L5 13Z" />
      </svg>
    );
  }

  if (type === 'voice') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-none stroke-[#075bbf] stroke-2">
        <path d="M9 10a3 3 0 1 1 6 0v1a3 3 0 1 1-6 0v-1Z" />
        <path d="M6 11a6 6 0 0 0 12 0" />
        <path d="M12 17v3" />
        <path d="M9 20h6" />
        <path d="M18 6a5 5 0 0 1 0 8" />
        <path d="M20.5 3.5a8.5 8.5 0 0 1 0 13" />
      </svg>
    );
  }

  if (type === 'compass') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-none stroke-[#3db7ff] stroke-2">
        <path d="M12 8v12" />
        <path d="M7 20l5-12 5 12" />
        <path d="M12 4h.01" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-none stroke-[#075bbf] stroke-2">
      <path d="M6 7l11 11" />
      <path d="M4 9l2-2 3 3-2 2-3-3Z" />
      <path d="M15 12l2-2 3 3-2 2-3-3Z" />
      <path d="M3 12l3-3" />
      <path d="M18 15l3-3" />
    </svg>
  );
};

const Card = () => {
  return (
    <section className="bg-[#e2f2fc] px-4 py-14 font-sans sm:px-8 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <article
            key={card.title}
            className="rounded-[1.45rem] border border-[#dce9f7] bg-white px-8 py-10 shadow-[0_2px_8px_rgba(15,23,42,0.05)] sm:px-10"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eff7ff]">
              <CardIcon type={card.icon} />
            </div>

            <h3 className="mt-8 text-2xl font-black leading-tight text-[#082447]">
              {card.title}
            </h3>
            <p className="mt-4 text-base font-medium text-[#5e708a]">
              {card.duration}
            </p>

            <div className="mt-6 h-1 w-full max-w-[282px] rounded-full bg-transparent">
              <div className={`h-full rounded-full ${card.progressClass}`} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Card;
