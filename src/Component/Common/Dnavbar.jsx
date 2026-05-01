import { useState } from "react";
import logo from '../../assets/logo.png';

const navLinks = ["Dashboard", "Practice", "Leaderboard", "Community"];

export default function Dnavbar() {
  const [active, setActive] = useState("Dashboard");
  const [search, setSearch] = useState("");

  return (
    <nav className="max-w-7xl mx-auto bg-white shadow-md  px-5 flex items-center h-[60px] gap-6 max-w-5xl mx-auto">
      {/* Logo */}
      <a href="#" className="flex items-center shrink-0">
        <img src={logo} alt="English Commando logo" className="w-20 h-20 object-contain" />
      </a>

      {/* Divider */}
      <div className="w-px h-7 bg-slate-200 shrink-0" />

      {/* Nav Links */}
      <div className="flex items-center gap-1 flex-1">
        {navLinks.map((link) => (
          <button
            key={link}
            onClick={() => setActive(link)}
            className={`relative text-sm px-3.5 py-1.5 rounded-lg font-medium transition-all duration-200 cursor-pointer border-none bg-transparent
              ${active === link
                ? "text-[#1e3a5f] font-semibold"
                : "text-slate-500 hover:text-[#1e3a5f] hover:bg-slate-100"
              }`}
          >
            {link}
            {active === link && (
              <span className="absolute bottom-0 left-3.5 right-3.5 h-[2.5px] rounded-full bg-gradient-to-r from-[#1e3a5f] to-[#0ea5e9]" />
            )}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative shrink-0">
        <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none">🔍</span>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search knowledge..."
          className="text-sm bg-slate-50 border border-slate-200 rounded-lg pl-8 pr-3 py-1.5 w-48 text-slate-700 outline-none focus:border-[#0ea5e9] focus:bg-white focus:ring-2 focus:ring-sky-100 placeholder:text-slate-400 transition-all"
        />
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-1.5 shrink-0">
        <button className="relative w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 hover:bg-slate-100 hover:text-[#1e3a5f] transition-all text-lg border-none bg-transparent cursor-pointer">
          🔔
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full border border-white" />
        </button>
        <button className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 hover:bg-slate-100 hover:text-[#1e3a5f] transition-all text-lg border-none bg-transparent cursor-pointer">
          ⚙️
        </button>
        <div className="w-[34px] h-[34px] rounded-full bg-gradient-to-br from-[#1e3a5f] to-[#0ea5e9] flex items-center justify-center text-white text-sm font-bold border-2 border-slate-200 hover:border-sky-400 cursor-pointer transition-all">
          EC
        </div>
      </div>
    </nav>
  );
}