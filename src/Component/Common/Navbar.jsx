import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Methodology', to: '/methodology' },
    { label: 'Success Stories', to: '/success-stories' },
    { label: 'Pricing', to: '/pricing' },
  ];

  const getNavLinkClass = ({ isActive }) => {
    const base = 'whitespace-nowrap border-b-2 px-0 pb-1.5 pt-2 text-sm font-semibold leading-none no-underline transition-colors';
    if (isActive) return `${base} border-[#005fc9] text-[#005fc9]`;
    return `${base} border-transparent text-[#42516a] hover:text-[#005fc9]`;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 mx-auto flex max-w-7xl flex-col gap-4 bg-[#f7f7f7] px-4 font-sans sm:px-6 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-0 lg:px-8 transition-all duration-300 ${isScrolled ? 'py-2 lg:min-h-12 shadow-md' : 'py-3 lg:min-h-14'}`}>
      <Link
        to="/"
        className="self-center whitespace-nowrap no-underline lg:justify-self-start"
        aria-label="Elite English home"
      >
        <img src={logo} alt="Elite English Logo" className={`w-auto transition-all duration-300 ${isScrolled ? 'h-8' : 'h-15'}`} />
      </Link>

      <nav
        className="flex w-full items-center gap-5 overflow-x-auto pb-1 sm:justify-center sm:overflow-visible lg:w-auto lg:gap-7 lg:justify-self-center"
        aria-label="Primary navigation"
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={getNavLinkClass}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:self-center lg:justify-self-end lg:items-center lg:gap-3">
        <Link
          to="/login"
          className="w-full whitespace-nowrap rounded-full border border-[#075bbf] px-5 py-2.5 text-center text-sm font-medium leading-none text-[#075bbf] no-underline transition-colors hover:bg-[#eaf2ff] sm:w-auto"
        >
          Login
        </Link>

        <Link
          to="/enrollment"
          className="w-full whitespace-nowrap rounded-full bg-[#075bbf] px-5 py-2.5 text-center text-sm font-medium leading-none text-white no-underline transition-colors hover:bg-[#0550a8] sm:w-auto lg:min-w-[120px]"
        >
          Enroll Now
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
