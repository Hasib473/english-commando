import React from 'react';

const title =
  '\u0986\u09aa\u09a8\u09bf \u0995\u09bf \u0986\u09aa\u09a8\u09be\u09b0 \u0987\u0982\u09b2\u09bf\u09b6 \u09ab\u09cd\u09b2\u09c1\u09af\u09bc\u09c7\u09a8\u09cd\u09b8\u09bf \u0989\u09a8\u09cd\u09a8\u09a4 \u0995\u09b0\u09a4\u09c7 \u09aa\u09cd\u09b0\u09b8\u09cd\u09a4\u09c1\u09a4?';

const subtitle =
  '\u0986\u09aa\u09a8\u09be\u09b0 \u09ab\u09cd\u09b2\u09c1\u09af\u09bc\u09c7\u09a8\u09cd\u09b8\u09bf \u099c\u09be\u09b0\u09cd\u09a8\u09bf \u09b6\u09c1\u09b0\u09c1 \u09b9\u09cb\u0995 \u09ae\u09be\u09a4\u09cd\u09b0 \u09ea\u09ef\u09ef \u099f\u09be\u0995\u09be\u09af\u09bc!';

const buttonText =
  '\u098f\u0996\u09a8\u0987 \u09b6\u09c1\u09b0\u09c1 \u0995\u09b0\u09c1\u09a8';

const socialProof =
  'Join \u09eb,\u09e6\u09e6\u09e6+ \u09b8\u09ab\u09b2 \u09b6\u09bf\u0995\u09cd\u09b7\u09be\u09b0\u09cd\u09a5\u09c0';

const avatars = [
  'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=96&q=80',
  'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=96&q=80',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=96&q=80',
];

const Join = () => {
  return (
    <section id="enroll" className="bg-[#eef6ff] px-4 py-16 font-sans sm:px-8 sm:py-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-normal text-[#082447] sm:text-5xl lg:text-6xl">
          {title}
        </h2>

        <p className="mt-8 text-xl font-black leading-relaxed text-[#075bbf] sm:text-2xl">
          {subtitle}
        </p>

        <a
          href="#curriculum"
          className="mt-10 inline-flex min-h-20 w-full max-w-[315px] items-center justify-center rounded-[1.35rem] bg-gradient-to-r from-[#075bbf] to-[#3db7ff] px-8 text-xl font-black text-white no-underline shadow-[0_8px_0_#064a99] transition-transform hover:-translate-y-0.5 sm:max-w-[330px] sm:text-2xl"
        >
          <span className="mr-3" aria-hidden="true">
            {'\u{1f680}'}
          </span>
          {buttonText}
        </a>

        <div className="mt-16 flex flex-col items-center gap-4 sm:flex-row">
          <div className="flex -space-x-3">
            {avatars.map((avatar) => (
              <img
                key={avatar}
                src={avatar}
                alt=""
                className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm"
              />
            ))}
          </div>
          <p className="text-sm font-medium text-[#75849a]">{socialProof}</p>
        </div>
      </div>
    </section>
  );
};

export default Join;
