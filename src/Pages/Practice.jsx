import { useState } from "react";

const questions = [
  {
    bengali: "এই শব্দটির সঠিক উচ্চারণ কোনটি?",
    english: "(Which is the correct pronunciation of this word?)",
    options: ["Pronunciation A", "Pronunciation B", "Pronunciation C", "Pronunciation D"],
    correct: 1,
  },
  {
    bengali: "এই শব্দটির সঠিক উচ্চারণ কোনটি?",
    english: "(Which is the correct pronunciation of this word?)",
    options: ["Pronunciation A", "Pronunciation B", "Pronunciation C", "Pronunciation D"],
    correct: 0,
  },
];

const TOTAL = 60;
const DAILY_GOAL = 10;

export default function Practice() {
  const [current, setCurrent] = useState(3);
  const [selected, setSelected] = useState(1); // B pre-selected like image
  const [confirmed, setConfirmed] = useState(true); // already confirmed like image
  const [dailyCorrect] = useState(2);

  const q = questions[(current - 1) % questions.length];
  const progressPct = Math.round((current / TOTAL) * 100);

  const handleSelect = (idx) => {
    if (confirmed) return;
    setSelected(idx);
  };

  const handleNext = () => {
    setCurrent((c) => c + 1);
    setSelected(null);
    setConfirmed(false);
  };

  const getOptionClasses = (idx) => {
    const base =
      "flex items-center justify-between rounded-xl border px-4 py-[13px] text-[13px] font-semibold cursor-pointer transition-all select-none";

    if (!confirmed) {
      if (selected === idx)
        return `${base} border-2 border-[#1a6fc4] bg-white text-[#1a6fc4]`;
      return `${base} border border-[#cdd9e8] bg-white text-[#2d4a6b] hover:border-[#1a6fc4]`;
    }

    if (idx === selected && idx === q.correct) {
      return `${base} border-2 border-[#1a6fc4] bg-white text-[#1a6fc4]`;
    }
    return `${base} border border-[#cdd9e8] bg-white text-[#2d4a6b]`;
  };

  const RadioIcon = ({ idx }) => {
    if (!confirmed) {
      if (selected === idx)
        return (
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-[#1a6fc4] bg-white">
            <span className="h-2.5 w-2.5 rounded-full bg-[#1a6fc4]" />
          </span>
        );
      return <span className="h-5 w-5 shrink-0 rounded-full border-2 border-[#b5c8da] bg-white" />;
    }

    if (idx === selected && idx === q.correct) {
      return (
        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1a6fc4]">
          <svg width="11" height="11" viewBox="0 0 20 20" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 10.5L8.5 15 16 5.5" />
          </svg>
        </span>
      );
    }
    return <span className="h-5 w-5 shrink-0 rounded-full border-2 border-[#b5c8da] bg-white" />;
  };

  return (
    <div className="min-h-screen bg-[#d9eaf8] px-6 py-8 md:px-10 md:py-10">
      <div className="mx-auto flex max-w-[800px] flex-col gap-5 lg:flex-row lg:items-start">

        {/* ── Left: Main Quiz ── */}
        <div className="flex-1">

          {/* Progress row */}
          <div className="mb-2 flex items-center justify-between text-[13px] text-[#4e6e8e]">
            <span>প্রশ্ন {current}/{TOTAL}</span>
            <span>{progressPct}%</span>
          </div>

          {/* Progress bar */}
          <div className="mb-6 h-[7px] w-full overflow-hidden rounded-full bg-[#b5cfe8]">
            <div
              className="h-full rounded-full bg-[#1a6fc4] transition-all duration-500"
              style={{ width: `${progressPct}%` }}
            />
          </div>

          {/* Question card */}
          <div className="rounded-2xl bg-white px-8 py-9 shadow-sm">

            {/* Speaker icon */}
            <div className="mb-6 flex justify-center">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#cce0f5]">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#5b9fd4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                </svg>
              </div>
            </div>

            {/* Bengali question */}
            <h2 className="mb-2 text-center text-[21px] font-black text-[#0b3d6e]">
              {q.bengali}
            </h2>

            {/* English subtitle */}
            <p className="mb-7 text-center text-[13px] text-[#7a99b8]">{q.english}</p>

            {/* Play button */}
            <div className="mb-8 flex justify-center">
              <button className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#1a6fc4] shadow-[0_6px_18px_rgba(26,111,196,0.35)] transition-all hover:scale-105 hover:bg-[#155fa0] active:scale-95">
                <svg width="21" height="21" viewBox="0 0 24 24" fill="white">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </button>
            </div>

            {/* Divider */}
            <div className="mb-7 h-px bg-[#e8eff6]" />

            {/* Options 2×2 */}
            <div className="grid grid-cols-2 gap-3">
              {q.options.map((opt, idx) => (
                <div key={idx} onClick={() => handleSelect(idx)} className={getOptionClasses(idx)}>
                  <span>{opt}</span>
                  <RadioIcon idx={idx} />
                </div>
              ))}
            </div>

            {/* Next button */}
            <div className="mt-8 flex justify-center">
              <button
                onClick={handleNext}
                className="rounded-xl bg-[#1a6fc4] px-10 py-3 text-[14px] font-bold text-white shadow-md transition-all hover:bg-[#155fa0]"
              >
                পরবর্তী প্রশ্ন →
              </button>
            </div>
          </div>
        </div>

        {/* ── Right Sidebar ── */}
        <div className="flex w-full flex-col gap-4 lg:w-[205px]">

          {/* আজকের লক্ষ্য */}
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full border-[2px] border-[#1a6fc4]">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1a6fc4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <span className="text-[15px] font-black text-[#0b3d6e]">আজকের লক্ষ্য</span>
            </div>
            <p className="mb-4 text-[12px] leading-[1.6] text-[#4e6e8e]">
              ৬টি সঠিক উত্তর প্রদান করুন আপনার স্ট্রিক বজায় রাখতে।
            </p>
            <div className="flex items-center gap-2">
              <div className="h-[6px] flex-1 overflow-hidden rounded-full bg-[#cfe0ef]">
                <div
                  className="h-full rounded-full bg-[#1a6fc4]"
                  style={{ width: `${(dailyCorrect / DAILY_GOAL) * 100}%` }}
                />
              </div>
              <span className="text-[12px] font-semibold text-[#4e6e8e]">{dailyCorrect}/{DAILY_GOAL}</span>
            </div>
          </div>

          {/* Day 2 Practice */}
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="mb-3 flex justify-center">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#b0c4d8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <p className="text-center text-[14px] font-black text-[#0b3d6e]">Day 2 Practice</p>
            <p className="mt-1 text-center text-[12px] leading-snug text-[#7a99b8]">
              Complete today's goal to unlock the next challenge.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}