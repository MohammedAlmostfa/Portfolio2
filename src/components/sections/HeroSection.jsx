import React from 'react';
import heroImage from '../../assets/hero-image.jpg'; 

const HeroSection = () => {
  const scrollToContact = (e) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = (e) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 sm:pt-20 overflow-hidden px-4 sm:px-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,217,255,0.08)_0%,_rgba(11,19,38,1)_70%)]"></div>
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* العمود الأيسر - تم إضافة نفس القيم اليسارية من ExperienceSection */}
          <div className="relative ml-2 sm:ml-4 pl-6 sm:pl-12">
            {/* نفس النقطة الزرقاء العلوية (اختياري، لجعل المظهر متطابقاً) */}
          
            <div className="space-y-6 sm:space-y-8">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant/30 gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-container"></span>
                </span>
                <span className="text-xs sm:text-sm font-label text-primary uppercase tracking-widest">Available for hire</span>
              </div>
              <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold font-headline tracking-tighter leading-[0.9]">
                Mohammed <br /> <span className="text-transparent bg-clip-text logic-gradient">Almostfa</span>
              </h1>
              <p className="hero-subtitle text-lg sm:text-xl md:text-2xl text-on-surface-variant max-w-xl font-light">
                Backend Developer building scalable systems and powering modern web applications.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <button onClick={scrollToContact} className="px-6 sm:px-8 py-3 sm:py-4 logic-gradient rounded-xl font-bold text-on-primary hover:shadow-[0_0_30px_rgba(0,217,255,0.3)] transition-all text-center text-sm sm:text-base">
                  Get in Touch
                </button>
                <button onClick={scrollToProjects} className="px-6 sm:px-8 py-3 sm:py-4 border border-outline-variant/30 rounded-xl font-bold hover:bg-surface-container transition-all text-center text-sm sm:text-base">
                  View My Work
                </button>
                <button className="px-6 sm:px-8 py-3 sm:py-4 text-primary font-label uppercase tracking-wider hover:opacity-80 text-center text-xs sm:text-sm">
                  Download CV
                </button>
              </div>
              <div className="stats-grid grid grid-cols-3 gap-4 sm:gap-8 pt-8 sm:pt-12">
                <div><div className="text-3xl sm:text-4xl font-bold text-white font-headline">2+</div><div className="text-xs sm:text-sm text-on-surface-variant font-label uppercase tracking-tighter">Years Exp</div></div>
                <div><div className="text-3xl sm:text-4xl font-bold text-white font-headline">10+</div><div className="text-xs sm:text-sm text-on-surface-variant font-label uppercase tracking-tighter">Projects</div></div>
                <div><div className="text-3xl sm:text-4xl font-bold text-white font-headline">100%</div><div className="text-xs sm:text-sm text-on-surface-variant font-label uppercase tracking-tighter">Satisfaction</div></div>
              </div>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="aspect-square bg-surface-container-low rounded-3xl overflow-hidden relative group">
              <img className="object-cover w-full h-full opacity-60 group-hover:scale-105 transition-transform duration-700" src={heroImage} alt="Developer workspace" />
              <div className="absolute inset-0 logic-gradient mix-blend-overlay opacity-30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 border-2 border-primary-container/20 rounded-full animate-pulse flex items-center justify-center">
                  <div className="w-48 h-48 border-2 border-primary-container/40 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary-container text-6xl sm:text-8xl" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;