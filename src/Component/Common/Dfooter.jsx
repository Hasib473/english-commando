import React from "react";
const footerLinks = [
  "Terms of Service",
  "Privacy Policy",
  "Institutional Access",
  "Support",
];

export default function Dfooter() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#d6edf8] to-[#c2e2f5] border-t border-[#b8d8ef]">
      {/* Top Row */}
      <div className="flex items-center justify-between px-12 py-5">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-10 h-10 flex items-center justify-center text-2xl shrink-0">
            ⚔️
          </div>
          <div className="flex flex-col leading-tight">
            <span
              className="font-bold text-[#1e3a5f] text-[13px] tracking-[2px] uppercase"
              style={{ fontFamily: "Rajdhani, sans-serif" }}
            >
              English
            </span>
            <span
              className="font-semibold text-[#1e3a5f] text-[11px] tracking-[2px] uppercase"
              style={{ fontFamily: "Rajdhani, sans-serif" }}
            >
              Commando
            </span>
          </div>
        </a>

        {/* Links */}
        <nav className="flex items-center gap-8">
          {footerLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-[11.5px] font-semibold tracking-wide uppercase text-[#4a6a8a] hover:text-[#1e3a5f] transition-colors duration-150"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#b0d0e8] py-3 px-12 text-center">
        <span className="text-[12.5px] text-[#6a8aaa]">
          © 2026 The Commanders. All rights reserved.
        </span>
      </div>
    </footer>
  );
}