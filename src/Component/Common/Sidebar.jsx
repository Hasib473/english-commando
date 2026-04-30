import { NavLink } from "react-router";

const navItems = [
  {
    label: "Dashboard",
    to: "/dashboard",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    label: "Practice",
    to: "/practice",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="8" y1="4" x2="8" y2="9" />
        <line x1="16" y1="4" x2="16" y2="9" />
      </svg>
    ),
  },
  {
    label: "Leaderboard",
    to: "/leaderboard",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <path d="M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        <path d="M12 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        <path d="M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        <path d="M2 21v-2a4 4 0 0 1 4-4h.5" />
        <path d="M22 21v-2a4 4 0 0 0-4-4h-.5" />
        <path d="M8 21v-2a4 4 0 0 1 4-4 4 4 0 0 1 4 4v2" />
      </svg>
    ),
  },
  {
    label: "Profile",
    to: "/profile",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
];

export default function Sidebar() {
  return (
    <aside className="fixed top-[60px] left-0 bottom-[60px] w-[220px] flex flex-col px-3.5 py-6 z-[90]"
      style={{ background: "linear-gradient(180deg, #daeef9 0%, #c8e5f5 100%)", borderRight: "1px solid #b8d8ef" }}>

      {/* Start Learning Button */}
      <button className="w-full py-3 mb-7 rounded-xl text-white text-sm font-semibold tracking-wide cursor-pointer border-none transition-opacity hover:opacity-90"
        style={{ background: "linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)", boxShadow: "0 4px 14px rgba(37,99,235,0.3)" }}>
        Start Learning
      </button>

      {/* Nav Items */}
      <nav className="flex flex-col gap-1">
        {navItems.map(({ label, to, icon }) => (
          <NavLink
            key={label}
            to={to}
            className={({ isActive }) =>
              `relative flex items-center gap-3 px-3.5 py-2.5 rounded-[10px] text-sm font-medium no-underline transition-all duration-150
              ${isActive
                ? "text-[#1e4fd6] font-semibold"
                : "text-[#3a6080] hover:text-[#1e3a5f]"
              }`
            }
            style={({ isActive }) =>
              isActive
                ? { background: "rgba(255,255,255,0.65)", boxShadow: "0 2px 8px rgba(37,99,235,0.08)" }
                : {}
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <span className="absolute left-0 top-1.5 bottom-1.5 w-[3.5px] rounded-r-full"
                    style={{ background: "linear-gradient(180deg, #2563eb, #0ea5e9)" }} />
                )}
                <span className="flex items-center justify-center w-5 h-5 shrink-0">{icon}</span>
                {label}
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}