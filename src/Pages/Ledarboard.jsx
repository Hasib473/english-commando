import { useState } from "react";

const top3 = [
  {
    rank: 2,
    name: "আয়েশা হক",
    xp: "৩২,৬০০ XP",
    color: "#9ca3af",
    borderColor: "#9ca3af",
    barHeight: "h-[90px]",
    barColor: "bg-[#b8d4ec]",
    avatar: null,
  },
  {
    rank: 1,
    name: "রায়হান চৌধুরী",
    streak: "১৫ দিনের Streak",
    xp: "30,150 XP",
    color: "#f59e0b",
    borderColor: "#f59e0b",
    barHeight: "h-[140px]",
    barColor: "bg-[#93c5fd]",
    avatar: "https://i.pravatar.cc/100?img=11",
    label: "চ্যাম্পিয়ন",
  },
  {
    rank: 3,
    name: "ওমর ফারুক",
    xp: "২৮,২০০ XP",
    color: "#f97316",
    borderColor: "#f97316",
    barHeight: "h-[70px]",
    barColor: "bg-[#b8d4ec]",
    avatar: "https://i.pravatar.cc/100?img=52",
    label: "তৃতীয়",
  },
];

const tableData = [
  { rank: 4, name: "সালিমা হক", streak: "১৭ দিন", xp: "২৮,৫০০", avatar: "https://i.pravatar.cc/40?img=25", highlighted: false, label: "" },
  { rank: 5, name: "সানিয়া আলম", subLabel: "আপনি", streak: "১০ দিন", xp: "২০,১৫০", xpSub: "১,২৫০ →", avatar: "https://i.pravatar.cc/40?img=5", highlighted: true, label: "আপনি" },
  { rank: 6, name: "আরিফ রাহান", streak: "১৯ দিন", xp: "১৯,৮০০", avatar: "https://i.pravatar.cc/40?img=60", highlighted: false, label: "" },
  { rank: 7, name: "ফারজানা হক", streak: "১০ দিন", xp: "১৭,৫৫০", avatar: "https://i.pravatar.cc/40?img=45", highlighted: false, label: "" },
  { rank: 8, name: "আবুবকর আহমেদ", streak: "৯ দিন", xp: "১৬,২০০", avatar: "https://i.pravatar.cc/40?img=70", highlighted: false, label: "" },
];

const FireIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#f97316" stroke="none">
    <path d="M12 2C9 7 6 9 6 13a6 6 0 0012 0c0-4-3-6-6-11zm0 16a2 2 0 01-2-2c0-2 2-3 2-5 0 2 2 3 2 5a2 2 0 01-2 2z" />
  </svg>
);

const Avatar = ({ src, size = 44, borderColor = "#e5e7eb", rankBadge = null, gray = false }) => (
  <div className="relative" style={{ width: size, height: size }}>
    <div
      className="overflow-hidden rounded-full"
      style={{
        width: size,
        height: size,
        border: `3px solid ${borderColor}`,
        background: gray ? "#d1d5db" : undefined,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {src ? (
        <img src={src} alt="" className="h-full w-full object-cover" />
      ) : (
        <svg width={size * 0.5} height={size * 0.5} viewBox="0 0 24 24" fill="#9ca3af">
          <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
        </svg>
      )}
    </div>
    {rankBadge && (
      <div
        className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-black text-white"
        style={{ background: rankBadge === 1 ? "#f59e0b" : rankBadge === 2 ? "#9ca3af" : "#f97316" }}
      >
        {rankBadge}
      </div>
    )}
  </div>
);

export default function Ledarboard() {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="min-h-screen bg-[#daeaf8] px-4 py-8">
      <div className="mx-auto max-w-[480px]">

        {/* ── Title ── */}
        <div className="mb-1 text-center">
          <h1 className="text-[22px] font-black text-[#0b3d6e]">
            লিডারবোর্ড (Leaderboard)
          </h1>
          <p className="mt-0.5 text-[13px] font-bold text-[#1a6fc4]">১৫ দিনের চ্যালেঞ্জ</p>
          <p className="text-[11px] text-[#7a99b8]">(15 Day Challenge)</p>
        </div>

        {/* ── Top 3 Podium ── */}
        <div className="mt-6 flex items-end justify-center gap-4 px-4">

          {/* 2nd place */}
          <div className="flex flex-col items-center gap-2" style={{ flex: 1 }}>
            <Avatar size={58} gray borderColor="#9ca3af" rankBadge={2} />
            <div className="text-center">
              <p className="text-[13px] font-bold text-[#0b3d6e]">আয়েশা হক</p>
              <p className="text-[12px] text-[#6b8aaa]">৩২,৬০০ XP</p>
            </div>
            <div className="w-full rounded-t-xl bg-[#b8d4ec] flex items-end justify-center h-[90px]">
              <p className="mb-2 text-[12px] font-bold text-[#4a6a8a]">দ্বিতীয়</p>
            </div>
          </div>

          {/* 1st place */}
          <div className="flex flex-col items-center gap-2" style={{ flex: 1 }}>
            <Avatar size={76} src="https://i.pravatar.cc/100?img=11" borderColor="#f59e0b" rankBadge={1} />
            <div className="text-center">
              <p className="text-[14px] font-black text-[#0b3d6e]">রায়হান চৌধুরী</p>
              <p className="flex items-center justify-center gap-1 text-[12px] text-[#6b8aaa]">
                <FireIcon size={13} /> ১৫ দিনের Streak
              </p>
              <p className="text-[15px] font-black text-[#1a6fc4]">30,150 XP</p>
            </div>
            <div className="w-full rounded-t-xl bg-[#93c5fd] flex items-end justify-center h-[140px]">
              <p className="mb-2 text-[12px] font-black text-[#1a6fc4]">চ্যাম্পিয়ন</p>
            </div>
          </div>

          {/* 3rd place */}
          <div className="flex flex-col items-center gap-2" style={{ flex: 1 }}>
            <Avatar size={58} src="https://i.pravatar.cc/100?img=52" borderColor="#f97316" rankBadge={3} />
            <div className="text-center">
              <p className="text-[13px] font-bold text-[#0b3d6e]">ওমর ফারুক</p>
              <p className="text-[12px] text-[#6b8aaa]">২৮,২০০ XP</p>
            </div>
            <div className="w-full rounded-t-xl bg-[#b8d4ec] flex items-end justify-center h-[70px]">
              <p className="mb-2 text-[12px] font-bold text-[#4a6a8a]">তৃতীয়</p>
            </div>
          </div>

        </div>

        {/* ── Table ── */}
        <div className="mt-5 overflow-hidden rounded-2xl bg-white shadow-sm">

          {/* Table header */}
          <div className="grid grid-cols-[40px_1fr_80px_80px] border-b border-[#e8eff6] px-4 py-3 text-[11px] font-bold uppercase tracking-wide text-[#9aafca]">
            <span>ক্রমাংক</span>
            <span>শিক্ষার্থী</span>
            <span className="text-center">STREAK</span>
            <span className="text-right">প্রাপ্ত XP</span>
          </div>

          {/* Table rows */}
          {tableData.map((row) => (
            <div
              key={row.rank}
              className={`grid grid-cols-[40px_1fr_80px_80px] items-center border-b border-[#f0f5fb] px-4 py-3 last:border-0 transition-colors ${
                row.highlighted ? "bg-[#eaf4ff]" : "bg-white"
              }`}
            >
              {/* Rank */}
              <span
                className={`text-[14px] font-black ${
                  row.highlighted ? "text-[#1a6fc4]" : "text-[#6b8aaa]"
                }`}
              >
                {row.rank < 10 ? `0${row.rank}` : row.rank}
              </span>

              {/* Name + avatar */}
              <div className="flex items-center gap-2.5">
                <div className="relative h-9 w-9 flex-shrink-0 overflow-hidden rounded-full border border-[#dde8f5]">
                  <img src={row.avatar} alt="" className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className={`text-[13px] font-bold ${row.highlighted ? "text-[#1a6fc4]" : "text-[#0b3d6e]"}`}>
                    {row.name}
                  </p>
                  {row.highlighted && (
                    <p className="text-[11px] text-[#7a99b8]">আপনি</p>
                  )}
                </div>
              </div>

              {/* Streak */}
              <div className="flex items-center justify-center gap-1 text-[12px] text-[#6b8aaa]">
                <FireIcon size={13} />
                <span>{row.streak}</span>
              </div>

              {/* XP */}
              <div className="text-right">
                <p className={`text-[13px] font-black ${row.highlighted ? "text-[#1a6fc4]" : "text-[#0b3d6e]"}`}>
                  {row.xp}
                </p>
                {row.highlighted && row.xpSub && (
                  <p className="text-[11px] text-[#22c55e]">{row.xpSub}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ── Load more button ── */}
        <div className="mt-5 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 rounded-full bg-[#1a6fc4] px-7 py-2.5 text-[13px] font-bold text-white shadow-md transition-all hover:bg-[#155fa0]"
          >
            পুরো র‍্যাংকিং দেখুন
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
}