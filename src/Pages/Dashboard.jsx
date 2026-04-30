import { useState } from "react";

// ── Icons ──────────────────────────────────────────────────────────────────
const LockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const ChevronRight = ({ color = "#9ca3af" }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const ChevronDown = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const CheckCircle = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const PlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

const BoltIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

// ── Sub-components ─────────────────────────────────────────────────────────
const VideoThumbnail = () => (
  <div className="w-[72px] h-[46px] rounded-lg bg-gradient-to-br from-indigo-900 to-indigo-500 flex flex-col items-center justify-center shrink-0 relative overflow-hidden">
    <div className="absolute inset-0 bg-white/5" />
    <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
      <PlayIcon />
    </div>
    <span className="text-[9px] text-white/70 mt-0.5 font-medium">VIDEO</span>
  </div>
);

const QuizThumbnail = () => (
  <div className="w-[72px] h-[46px] rounded-lg bg-gradient-to-br from-blue-100 to-violet-100 flex items-center justify-center shrink-0">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2">
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  </div>
);

const CircularProgress = ({ pct }) => {
  const r = 42;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;
  return (
    <svg width="110" height="110" viewBox="0 0 110 110">
      <circle cx="55" cy="55" r={r} fill="none" stroke="#e5e7eb" strokeWidth="8" />
      <circle
        cx="55" cy="55" r={r} fill="none" stroke="#6366f1" strokeWidth="8"
        strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round"
        style={{ transform: "rotate(-90deg)", transformOrigin: "55px 55px", transition: "stroke-dashoffset 0.6s ease" }}
      />
      <text x="55" y="50" textAnchor="middle" fill="#1e1b4b" fontSize="18" fontWeight="700" fontFamily="sans-serif">{pct}%</text>
      <text x="55" y="65" textAnchor="middle" fill="#6b7280" fontSize="9" fontFamily="sans-serif">COMPLETE</text>
    </svg>
  );
};

// ── Data ───────────────────────────────────────────────────────────────────
const DAYS = [
  {
    id: 1,
    title: "Day 1: Foundations",
    sub: "Mastering the basics of vocal practice and phonetics",
    open: true,
    lessons: [
      { type: "video", title: "Vocal Exercise", meta: "12:45" },
      { type: "video", title: "ABCD Correct Pronunciation", meta: "08:21" },
      { type: "quiz", title: "Check Your Progress", meta: "Take a quick assessment for Day 1" },
    ],
  },
  { id: 2, title: "Day 2: Grammar Deep Dive", locked: true },
  { id: 3, title: "Day 3: Conversational Flow", locked: true },
  { id: 4, title: "Day 4: Vocabulary Expansion", locked: true },
  { id: 5, title: "Day 5: Listening Masterclass", locked: true },
];

// ── Main Component ─────────────────────────────────────────────────────────
export default function Dashboard() {
  const [expanded, setExpanded] = useState(1);

  const toggle = (id, locked) => {
    if (locked) return;
    setExpanded((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6 font-sans">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-5">
          <h1 className="text-2xl font-bold text-indigo-950">Course Playlist</h1>
          <div className="flex items-center gap-2 mt-1">
            <div className="w-2 h-2 rounded-full bg-indigo-500" />
            <span className="text-sm text-indigo-500 font-medium">15 Days Learning Journey</span>
            <span className="text-sm text-gray-400">• Beginner to Intermediate</span>
          </div>
        </div>

        <div className="flex gap-4 flex-wrap">

          {/* ── Left: Day List ── */}
          <div className="flex-1 min-w-[300px] flex flex-col gap-3">
            {DAYS.map((day) => {
              const isOpen = expanded === day.id;
              return (
                <div
                  key={day.id}
                  className={`bg-white rounded-2xl overflow-hidden transition-all duration-200 ${
                    isOpen
                      ? "border border-indigo-200 shadow-[0_4px_20px_rgba(99,102,241,0.10)]"
                      : "border border-slate-100 shadow-sm"
                  }`}
                >
                  {/* Day header row */}
                  <div
                    onClick={() => toggle(day.id, day.locked)}
                    className={`flex items-center gap-3 px-4 py-3.5 ${
                      day.locked ? "cursor-default" : "cursor-pointer"
                    } ${isOpen ? "bg-gradient-to-r from-violet-50 to-white" : "bg-white"}`}
                  >
                    <div
                      className={`w-7 h-7 rounded-lg shrink-0 flex items-center justify-center text-xs font-bold transition-all duration-200 ${
                        isOpen
                          ? "bg-indigo-500 text-white"
                          : day.locked
                          ? "bg-slate-100 text-gray-400"
                          : "bg-violet-100 text-indigo-500"
                      }`}
                    >
                      {day.id}
                    </div>
                    <div className="flex-1">
                      <p className={`text-sm font-semibold ${day.locked ? "text-gray-400" : "text-indigo-950"}`}>
                        {day.title}
                      </p>
                      {day.sub && (
                        <p className="text-[11px] text-gray-400 mt-0.5">{day.sub}</p>
                      )}
                    </div>
                    {day.locked ? (
                      <LockIcon />
                    ) : isOpen ? (
                      <ChevronDown />
                    ) : (
                      <ChevronRight color="#9ca3af" />
                    )}
                  </div>

                  {/* Lessons */}
                  {isOpen && day.lessons && (
                    <div className="border-t border-slate-100 py-2">
                      {day.lessons.map((lesson, j) => (
                        <div
                          key={j}
                          className="flex items-center gap-3 px-4 py-2.5 hover:bg-slate-50 cursor-pointer transition-colors"
                        >
                          {lesson.type === "video" ? <VideoThumbnail /> : <QuizThumbnail />}
                          <div className="flex-1">
                            <p className="text-[13px] font-semibold text-indigo-950">{lesson.title}</p>
                            <p className="text-[11px] text-gray-400 mt-0.5">{lesson.meta}</p>
                          </div>
                          {lesson.type === "quiz" ? (
                            <button className="flex items-center gap-1 bg-indigo-500 text-white px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-indigo-600 transition-colors">
                              Start <ChevronRight color="white" />
                            </button>
                          ) : (
                            <CheckCircle />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Ellipsis */}
            <div className="text-center text-gray-300 text-xl tracking-widest py-1">•••</div>

            {/* Day 15 */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden opacity-60">
              <div className="flex items-center gap-3 px-4 py-3.5">
                <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-xs font-bold text-gray-400 shrink-0">
                  15
                </div>
                <p className="flex-1 text-sm font-semibold text-gray-400">Day 15: Final Proficiency Exam</p>
                <LockIcon />
              </div>
            </div>
          </div>

          {/* ── Right: Sidebar ── */}
          <div className="w-52 shrink-0 flex flex-col gap-4">

            {/* Progress card */}
            <div className="bg-white rounded-2xl p-5 shadow-md border border-slate-100">
              <h2 className="text-sm font-bold text-indigo-950 mb-4">Course Progress</h2>
              <div className="flex justify-center mb-4">
                <CircularProgress pct={7} />
              </div>
              <div className="flex flex-col gap-2">
                {[
                  { label: "Total Lessons", val: "45" },
                  { label: "Completed", val: "3" },
                  { label: "Next Milestone", val: "Day 2", accent: true },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between items-center">
                    <span className="text-[11px] text-gray-400">{row.label}</span>
                    <span className={`text-xs font-bold ${row.accent ? "text-indigo-500" : "text-indigo-950"}`}>
                      {row.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Streak card */}
            <div className="bg-gradient-to-br from-indigo-950 to-indigo-700 rounded-2xl p-4 shadow-[0_4px_16px_rgba(99,102,241,0.3)] animate-pulse">
              <div className="flex items-center gap-1.5 mb-2">
                <BoltIcon />
                <span className="text-[11px] text-indigo-300 font-semibold tracking-wide">Daily Streak</span>
              </div>
              <p className="text-3xl font-bold text-white leading-none">5 Days</p>
              <p className="text-[11px] text-indigo-300 mt-2 leading-relaxed">
                You're on fire! Keep it up for a 7-day streak XP.
              </p>
            </div>

            {/* Promo card */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-4 border border-amber-200 shadow-sm">
              <div className="text-2xl mb-2">🎁</div>
              <p className="text-sm font-bold text-amber-900 mb-1">এক্সক্লুসিভ লার্নিং প্যাক</p>
              <p className="text-[11px] text-amber-700 leading-relaxed mb-3">
                আজকের অফারে পান বিশেষ, বোনাস টিউটোরিয়াল এবং সার্টিফিকেট!
              </p>
              <button className="w-full bg-gradient-to-r from-amber-500 to-yellow-400 text-white text-xs font-bold py-2 rounded-lg hover:opacity-90 transition-opacity">
                আপগ্রেড করুন →
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}