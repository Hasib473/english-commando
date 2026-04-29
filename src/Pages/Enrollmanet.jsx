import React from 'react';

const steps = [
  { label: '\u09a4\u09a5\u09cd\u09af', icon: 'a', active: true },
  { label: '\u09aa\u09c7\u09ae\u09c7\u09a8\u09cd\u099f', icon: '2' },
  { label: '\u09b0\u09bf\u09ad\u09bf\u0989', icon: '3' },
  { label: '\u09a8\u09bf\u09b6\u09cd\u099a\u09bf\u09a4\u0995\u09b0\u09a3', icon: '4' },
];

const paymentMethods = [
  { name: 'bKash', color: '#e2136e', symbol: 'b' },
  { name: 'Nagad', color: '#f7941d', symbol: 'N' },
  { name: 'Rocket', color: '#8f1d52', symbol: 'R' },
  { name: 'Card', color: '#0b5bbf', symbol: '\u25ac' },
];

const labels = {
  heading: '\u0986\u09aa\u09a8\u09be\u09b0 \u09a4\u09a5\u09cd\u09af \u09a6\u09bf\u09a8',
  subheading:
    '\u0985\u09ac\u09b6\u09cd\u09af\u0987 \u09b8\u0995\u09b2 \u09ac\u09bf\u09ac\u09b0\u09a3 \u09b8\u09a0\u09bf\u0995\u09ad\u09be\u09ac\u09c7 \u09a8\u09bf\u09b6\u09cd\u099a\u09bf\u09a4 \u0995\u09b0\u09c1\u09a8\u0964',
  name: '\u09b8\u09ae\u09cd\u09aa\u09c2\u09b0\u09cd\u09a3 \u09a8\u09be\u09ae',
  namePlaceholder: '\u0989\u09a6\u09be: \u0986\u09aa\u09a8\u09be\u09b0 \u09a8\u09be\u09ae',
  phone: '\u09ab\u09cb\u09a8 \u09a8\u09ae\u09cd\u09ac\u09b0',
  country: '\u09a6\u09c7\u09b6',
  bangladesh: '\u09ac\u09be\u0982\u09b2\u09be\u09a6\u09c7\u09b6',
  email: '\u0987\u09ae\u09c7\u0987\u09b2',
  address: '\u09a0\u09bf\u0995\u09be\u09a8\u09be',
  addressPlaceholder:
    '\u0986\u09aa\u09a8\u09be\u09b0 \u09ac\u09b0\u09cd\u09a4\u09ae\u09be\u09a8 \u09a0\u09bf\u0995\u09be\u09a8\u09be \u09b2\u09bf\u0996\u09c1\u09a8',
  paymentTitle:
    '\u09aa\u09c7\u09ae\u09c7\u09a8\u09cd\u099f \u09ae\u09c7\u09a5\u09a1 \u09a8\u09bf\u09b0\u09cd\u09ac\u09be\u099a\u09a8 \u0995\u09b0\u09c1\u09a8',
  summary: '\u0985\u09b0\u09cd\u09a1\u09be\u09b0 \u09b8\u09be\u09ae\u09be\u09b0\u09bf',
  courseFee: '\u0995\u09cb\u09b0\u09cd\u09b8 \u09ab\u09bf',
  discount: '\u09a1\u09bf\u09b8\u0995\u09be\u0989\u09a8\u09cd\u099f (\u09eb\u09e6%)',
  total: '\u09ae\u09cb\u099f',
  promo: '\u09aa\u09cd\u09b0\u09cb\u09ae\u09cb \u0995\u09cb\u09a1',
  pay: '\u09aa\u09c7\u09ae\u09c7\u09a8\u09cd\u099f \u09b8\u09ae\u09cd\u09aa\u09a8\u09cd\u09a8 \u0995\u09b0\u09c1\u09a8',
  joined:
    '\u0986\u09b0\u0993 \u09eb\u09e6\u09e6+ \u099c\u09a8 \u0986\u099c\u0987 \u099c\u09df\u09c7\u09a8 \u0995\u09b0\u09c7\u099b\u09c7\u09a8',
  ssl:
    '\u09e7\u09e6\u09e6% \u09a8\u09bf\u09b0\u09be\u09aa\u09a6 \u09aa\u09c7\u09ae\u09c7\u09a8\u09cd\u099f \u0997\u09c7\u099f\u0993\u09df\u09c7 (SSL protected)',
  safe:
    '\u0986\u09aa\u09a8\u09be\u09b0 \u09a4\u09a5\u09cd\u09af \u09a8\u09bf\u09b0\u09be\u09aa\u09a6\u09c7 \u09b8\u09c1\u09b0\u0995\u09cd\u09b7\u09bf\u09a4 \u0986\u099b\u09c7',
};

const Enrollmanet = () => {
  return (
    <main className="min-h-screen bg-[#f7f8ff] px-4 py-8 font-sans text-[#082447] sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[290px_1fr_390px]">
        <aside className="space-y-6">
          <div className="rounded-xl border border-[#cbd8ea] bg-white p-6 shadow-sm">
            <div className="space-y-4">
              {steps.map((step) => (
                <div
                  key={step.label}
                  className={
                    step.active
                      ? 'flex items-center gap-3 rounded-lg bg-[#075bbf] px-3 py-3 text-white'
                      : 'flex items-center gap-3 px-3 py-2 text-[#53637a]'
                  }
                >
                  <span
                    className={
                      step.active
                        ? 'flex h-7 w-7 items-center justify-center rounded-full bg-white/18 text-xs font-black'
                        : 'flex h-7 w-7 items-center justify-center rounded-full border border-[#aab7c8] text-xs font-black'
                    }
                  >
                    {step.icon}
                  </span>
                  <span className="text-sm font-black">{step.label}</span>
                  {step.active && (
                    <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-white">
                      <svg viewBox="0 0 20 20" aria-hidden="true" className="h-3.5 w-3.5 fill-none stroke-[#075bbf] stroke-[3]">
                        <path d="M5 10.2 8.2 13 15 6.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl bg-[#eaf2ff] p-5 text-[#075bbf]">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#cfe2ff]">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-[#075bbf] stroke-2">
                <path d="M12 3 5 6v5c0 4.5 2.7 8.5 7 10 4.3-1.5 7-5.5 7-10V6l-7-3Z" />
                <path d="M9 12l2 2 4-5" />
              </svg>
            </span>
            <p className="text-xs font-black leading-relaxed">{labels.safe}</p>
          </div>
        </aside>

        <section>
          <div className="mb-8">
            <h1 className="flex items-center gap-2 text-2xl font-black">
              <span aria-hidden="true">{'\u{1f449}'}</span>
              {labels.heading}
            </h1>
            <p className="mt-2 text-sm font-medium text-[#53637a]">{labels.subheading}</p>
          </div>

          <form className="rounded-xl border border-[#cbd8ea] bg-white p-8 shadow-sm">
            <div className="space-y-6">
              <label className="block">
                <span className="mb-2 block text-sm font-black">{labels.name}</span>
                <input
                  type="text"
                  placeholder={labels.namePlaceholder}
                  className="h-14 w-full rounded-xl border border-[#cbd8ea] bg-[#fafbff] px-5 text-sm outline-none focus:border-[#075bbf]"
                />
              </label>

              <div className="grid gap-5 sm:grid-cols-[1fr_170px]">
                <label className="block">
                  <span className="mb-2 block text-sm font-black">{labels.phone}</span>
                  <input
                    type="tel"
                    placeholder={'\u09e6\u09e7XXXXXXXXX'}
                    className="h-14 w-full rounded-xl border border-[#cbd8ea] bg-[#fafbff] px-5 text-sm outline-none focus:border-[#075bbf]"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-black">{labels.country}</span>
                  <select className="h-14 w-full rounded-xl border border-[#cbd8ea] bg-[#fafbff] px-5 text-sm font-black outline-none focus:border-[#075bbf]">
                    <option>{labels.bangladesh}</option>
                  </select>
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-black">{labels.email}</span>
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="h-14 w-full rounded-xl border border-[#cbd8ea] bg-[#fafbff] px-5 text-sm outline-none focus:border-[#075bbf]"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-black">{labels.address}</span>
                <textarea
                  rows="5"
                  placeholder={labels.addressPlaceholder}
                  className="w-full resize-none rounded-xl border border-[#cbd8ea] bg-[#fafbff] px-5 py-4 text-sm outline-none focus:border-[#075bbf]"
                />
              </label>
            </div>
          </form>

          <div className="mt-8">
            <h2 className="text-xl font-black">{labels.paymentTitle}</h2>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {paymentMethods.map((method) => (
                <button
                  key={method.name}
                  type="button"
                  className="flex h-24 flex-col items-center justify-center gap-2 rounded-xl border border-[#cbd8ea] bg-white font-black shadow-sm transition-colors hover:border-[#075bbf]"
                >
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded text-sm text-white"
                    style={{ backgroundColor: method.color }}
                  >
                    {method.symbol}
                  </span>
                  <span className="text-sm">{method.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <aside className="lg:sticky lg:top-6 lg:self-start">
          <div className="rounded-xl border-2 border-[#2f80ed] bg-white p-8 shadow-sm">
            <h2 className="flex items-center gap-2 text-2xl font-black">
              <span aria-hidden="true">{'\u{1f449}'}</span>
              {labels.summary}
            </h2>
            <div className="my-8 h-px bg-[#dce7f5]" />

            <div className="space-y-4 text-sm font-medium text-[#53637a]">
              <div className="flex justify-between">
                <span>{labels.courseFee}</span>
                <span className="line-through">{'\u09f3 \u09ef\u09ef\u09ef'}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-black text-[#075bbf]">{labels.discount}</span>
                <span className="rounded-full bg-[#64dfc5] px-3 py-1 text-xs font-black text-[#006450]">
                  {'-\u09f3 \u09eb\u09e6\u09e6'}
                </span>
              </div>
            </div>

            <div className="my-8 flex items-center justify-between">
              <span className="text-2xl font-black">{labels.total}</span>
              <span className="text-5xl font-black text-[#075bbf]">{'\u09f3 \u09ea\u09ef\u09ef'}</span>
            </div>

            <div className="grid grid-cols-[1fr_auto] gap-2">
              <input
                type="text"
                placeholder={labels.promo}
                className="h-12 min-w-0 rounded-xl border border-[#cbd8ea] bg-white px-4 text-sm outline-none focus:border-[#075bbf]"
              />
              <button type="button" className="rounded-xl bg-[#e9eef8] px-5 text-sm font-black text-[#53637a]">
                Apply
              </button>
            </div>

            <button
              type="button"
              className="mt-6 flex h-16 w-full items-center justify-center gap-3 rounded-xl bg-[#075bbf] text-base font-black text-white shadow-[0_8px_16px_rgba(7,91,191,0.22)] transition-colors hover:bg-[#064fa7]"
            >
              {labels.pay}
              <span aria-hidden="true">{'\u2192'}</span>
            </button>

            <div className="mt-10 flex items-center gap-3">
              <div className="flex -space-x-2">
                {['#ffd6ba', '#ffe7a3', '#9dd6ff'].map((color) => (
                  <span
                    key={color}
                    className="h-8 w-8 rounded-full border-2 border-white"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <p className="text-xs font-black leading-relaxed text-[#53637a]">{labels.joined}</p>
            </div>

            <p className="mt-8 text-center text-[0.68rem] font-semibold text-[#53637a]">
              {'\u{1f512}'} {labels.ssl}
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Enrollmanet;
