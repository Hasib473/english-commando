import React from 'react';
import logo from '../../assets/logo.png';

const footerLinks = [
  'Terms of Service',
  'Privacy Policy',
  'Institutional Access',
  'Support',
];

const Footer = () => {
  return (
    <footer className="border-t border-[#dbe7f3] bg-white/95 px-4 py-10 font-sans text-[#14335f] shadow-sm sm:px-8 sm:py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-7 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
        <a href="/" className="flex items-center gap-3 no-underline">
          <img src={logo} alt="Elite English Academy" className="h-12 w-auto" />
        </a>

        <nav
          className="flex flex-wrap items-center justify-center gap-x-7 gap-y-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#64748b] transition-colors sm:gap-x-10 sm:text-sm lg:gap-x-12"
          aria-label="Footer navigation"
        >
          {footerLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="whitespace-nowrap text-[#64748b] no-underline transition-colors hover:text-[#075bbf]"
            >
              {link}
            </a>
          ))}
        </nav>

        <p className="max-w-xs font-serif text-sm leading-relaxed text-[#64748b] sm:max-w-none sm:text-base">
          &copy; 2026 The Commanders. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
