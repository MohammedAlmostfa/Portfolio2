import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-surface-container-low" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 grid md:grid-cols-2 gap-12 md:gap-24 items-center">
        <div className="relative">
          <div className="absolute -top-12 -left-12 text-[10rem] font-bold text-surface-variant opacity-10 select-none hidden sm:block">
            BIO
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline mb-6 sm:mb-8">
            Architecting the
            <span className="text-primary-container"> invisible layer</span>
          </h2>
          <div className="space-y-4 sm:space-y-6 text-on-surface-variant text-base sm:text-lg">
            <p>
              I am a passionate Backend Developer with over 2 years of professional
              experience, specializing in the PHP/Laravel ecosystem. My focus
              lies in creating robust, secure, and highly scalable server-side
              architectures that power complex applications.
            </p>
            <p>
              As a Co-Founder of DevNest, I balance technical leadership with
              hands-on development, ensuring our team delivers
              high-performance solutions that meet the rigorous demands of
              modern digital transformation.
            </p>
          </div>
          <div className="mt-8 sm:mt-12 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary flex-shrink-0">mail</span>
              <span className="font-label text-sm sm:text-base break-all">mohammedalmostfa36@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary flex-shrink-0">phone_iphone</span>
              <span className="font-label text-sm sm:text-base">+963 991 851 269</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary flex-shrink-0">location_on</span>
              <span className="font-label text-sm sm:text-base">Damascus / Homs, Syria</span>
            </div>
          </div>
        </div>
        <div className="about-features grid grid-cols-2 gap-3 sm:gap-4">
          <div className="aspect-square bg-surface-container rounded-2xl flex flex-col items-center justify-center p-4 sm:p-8 text-center hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined text-3xl sm:text-4xl text-primary mb-2 sm:mb-4">code</span>
            <h4 className="font-bold text-white text-sm sm:text-base mb-1 sm:mb-2">Clean Code</h4>
            <p className="text-xs sm:text-sm text-on-surface-variant">Prioritizing maintainability and readability.</p>
          </div>
          <div className="feature-card aspect-square bg-surface-container rounded-2xl flex flex-col items-center justify-center p-4 sm:p-8 text-center mt-6 sm:mt-12 hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined text-3xl sm:text-4xl text-secondary mb-2 sm:mb-4">speed</span>
            <h4 className="font-bold text-white text-sm sm:text-base mb-1 sm:mb-2">High Perf</h4>
            <p className="text-xs sm:text-sm text-on-surface-variant">Optimizing every millisecond of latency.</p>
          </div>
          <div className="aspect-square bg-surface-container rounded-2xl flex flex-col items-center justify-center p-4 sm:p-8 text-center hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined text-3xl sm:text-4xl text-tertiary mb-2 sm:mb-4">security</span>
            <h4 className="font-bold text-white text-sm sm:text-base mb-1 sm:mb-2">Security</h4>
            <p className="text-xs sm:text-sm text-on-surface-variant">Hardened endpoints and secure data.</p>
          </div>
          <div className="feature-card aspect-square bg-surface-container rounded-2xl flex flex-col items-center justify-center p-4 sm:p-8 text-center mt-6 sm:mt-12 hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined text-3xl sm:text-4xl text-primary-container mb-2 sm:mb-4">hub</span>
            <h4 className="font-bold text-white text-sm sm:text-base mb-1 sm:mb-2">Scalability</h4>
            <p className="text-xs sm:text-sm text-on-surface-variant">Architectures ready for vertical &amp; horizontal growth.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;