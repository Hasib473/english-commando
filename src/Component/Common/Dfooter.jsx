import React from "react";
import logo from '../../assets/logo.png';
const footerLinks = [
  "Terms of Service",
  "Privacy Policy",
  "Institutional Access",
  "Support",
];

export default function Dfooter() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#d6edf8] to-[#c2e2f5] border-t border-[#b8d8ef] shadow-sm">
      {/* Top Row */}
      <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 sm:px-12 sm:py-5">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="English Commando Logo" className="h-12 w-auto" />
        </a>

        {/* Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6 text-[11.5px] font-semibold uppercase tracking-wide text-[#4a6a8a] sm:gap-8 sm:text-sm">
          {footerLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="transition-colors duration-150 hover:text-[#1e3a5f]"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#b0d0e8] py-3 px-6 text-center text-[12.5px] text-[#6a8aaa] sm:px-12">
        © 2026 The Commanders. All rights reserved.
      </div>
    </footer>
  );
}