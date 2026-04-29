import React from 'react';

const footerLinks = [
  'Terms of Service',
  'Privacy Policy',
  'Institutional Access',
  'Support',
];

const Footer = () => {
  return (
    <footer className="border-b-4 border-[#2d75a8] bg-[#f8f8f8] px-4 py-10 font-sans sm:px-8 sm:py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-7 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
        <a
          href="/"
          className="text-xl font-extrabold text-[#075bbf] no-underline"
        >
          Elite English Academy
        </a>

        <nav
          className="flex flex-wrap items-center justify-center gap-x-7 gap-y-4 text-xs font-medium uppercase tracking-[0.12em] sm:gap-x-10 sm:text-sm lg:gap-x-12"
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
