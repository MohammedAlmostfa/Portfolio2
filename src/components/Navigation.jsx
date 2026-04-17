import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Expertise', href: '#expertise' },
    { name: 'Projects', href: '#projects' },
    { name: 'DevNest', href: '#devnest' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0b1326]/80 backdrop-blur-xl' : 'bg-[#0b1326]/40 backdrop-blur-xl'}`}>
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-8 h-16 sm:h-20">
        <div className="text-lg sm:text-xl font-bold tracking-tighter text-[#00D9FF] font-headline">
          Mohammed Almostfa
        </div>
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-slate-400 hover:text-[#00D9FF] transition-colors font-['Plus_Jakarta_Sans'] tracking-tight text-sm lg:text-base"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;