import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0b1326] w-full py-8 sm:py-12 border-t border-slate-800/50">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-4 sm:px-8 gap-4 sm:gap-6 text-center md:text-left">
        <div className="text-base sm:text-lg font-bold text-[#00D9FF] font-headline">
          Mohammed Almostfa
        </div>
        <div className="text-slate-500 font-['Inter'] text-xs sm:text-sm">
          © 2026 Mohammed Almostfa. Engineered for Performance.
        </div>
        <div className="flex gap-4 sm:gap-6">
          <a className="text-slate-500 hover:text-[#00D9FF] transition-colors opacity-80 hover:opacity-100 text-xs sm:text-sm" href="https://www.linkedin.com/in/mohammed-almostfa-63b3a7240" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="text-slate-500 hover:text-[#00D9FF] transition-colors opacity-80 hover:opacity-100 text-xs sm:text-sm" href="https://github.com/MohammedAlmostfa" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="text-slate-500 hover:text-[#00D9FF] transition-colors opacity-80 hover:opacity-100 text-xs sm:text-sm" href="https://www.facebook.com/share/18Ac9xMsiq/" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a className="text-slate-500 hover:text-[#00D9FF] transition-colors opacity-80 hover:opacity-100 text-xs sm:text-sm" href="https://www.instagram.com/mohamd.almostfa.9" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;