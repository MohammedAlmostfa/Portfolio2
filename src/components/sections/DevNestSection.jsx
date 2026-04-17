import React from 'react';
import devnestLogo from '../../assets/devnestlogo.webp';

const DevNestSection = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32 relative overflow-hidden" id="devnest">
      <div className="absolute inset-0 logic-gradient opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="devnest-container bg-surface-container-low rounded-2xl sm:rounded-[2rem] md:rounded-[3rem] p-6 sm:p-12 md:p-20 border border-outline-variant/20 flex items-center gap-8 md:gap-16">
          <div className="devnest-content flex-1 space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tight">
              Co-Founder @ <span className="text-primary">DevNest</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-on-surface-variant">
              Leading a team of elite developers to create custom digital solutions. From specialized
              ERP systems to consumer-facing mobile apps, we engineering excellence.
            </p>
            <div className="grid grid-cols-2 gap-6 sm:gap-8">
              <div><div className="text-2xl sm:text-3xl font-bold text-white">15+</div><div className="text-xs sm:text-sm font-label text-on-surface-variant uppercase">Projects Delivered</div></div>
              <div><div className="text-2xl sm:text-3xl font-bold text-white">98%</div><div className="text-xs sm:text-sm font-label text-on-surface-variant uppercase">Client Satisfaction</div></div>
            </div>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <span className="px-3 sm:px-4 py-2 bg-surface-container rounded-full text-xs sm:text-sm font-semibold">Web Platforms</span>
              <span className="px-3 sm:px-4 py-2 bg-surface-container rounded-full text-xs sm:text-sm font-semibold">ERP Systems</span>
              <span className="px-3 sm:px-4 py-2 bg-surface-container rounded-full text-xs sm:text-sm font-semibold">Mobile Apps</span>
            </div>
          </div>
          <div className="devnest-image hidden md:w-1/3 md:flex">
            <div className="aspect-square bg-transparent rounded-3xl flex items-center justify-center relative">
              <img src={devnestLogo} alt="DevNest Logo" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevNestSection;