import React from 'react';

const TechStackSection = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline mb-3 sm:mb-4">
            Stack of <span className="text-primary-container">Excellence</span>
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-sm sm:text-base">
            Mastery over the technologies that power the modern web, from server logic to devops workflows.
          </p>
        </div>
        <div className="tech-stack-grid">
          <div className="bg-surface-container p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
            <h4 className="text-primary font-label mb-4 sm:mb-6 text-xs sm:text-sm uppercase">Backend</h4>
            <ul className="space-y-3 sm:space-y-4 font-bold text-white text-sm sm:text-base">
              <li className="flex items-center justify-between">PHP <span className="text-on-surface-variant font-normal text-xs">Expert</span></li>
              <li className="flex items-center justify-between">Laravel <span className="text-on-surface-variant font-normal text-xs">Expert</span></li>
            </ul>
          </div>
          <div className="bg-surface-container p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
            <h4 className="text-secondary font-label mb-4 sm:mb-6 text-xs sm:text-sm uppercase">Databases</h4>
            <ul className="space-y-3 sm:space-y-4 font-bold text-white text-sm sm:text-base">
              <li className="flex items-center justify-between">MySQL <span className="text-on-surface-variant font-normal text-xs">Expert</span></li>
            </ul>
          </div>
          <div className="bg-surface-container p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
            <h4 className="text-tertiary font-label mb-4 sm:mb-6 text-xs sm:text-sm uppercase">DevOps</h4>
            <ul className="space-y-3 sm:space-y-4 font-bold text-white text-sm sm:text-base">
              <li className="flex items-center justify-between">Git <span className="text-on-surface-variant font-normal text-xs">High</span></li>
              <li className="flex items-center justify-between">Docker <span className="text-on-surface-variant font-normal text-xs">Mid</span></li>
              <li className="flex items-center justify-between">CI/CD <span className="text-on-surface-variant font-normal text-xs">Mid</span></li>
            </ul>
          </div>
          <div className="bg-surface-container p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
            <h4 className="text-primary-container font-label mb-4 sm:mb-6 text-xs sm:text-sm uppercase">Frontend</h4>
            <ul className="space-y-3 sm:space-y-4 font-bold text-white text-sm sm:text-base">
              <li className="flex items-center justify-between">HTML/CSS/JS <span className="text-on-surface-variant font-normal text-xs">Expert</span></li>
              <li className="flex items-center justify-between">Bootstrap <span className="text-on-surface-variant font-normal text-xs">High</span></li>
              <li className="flex items-center justify-between">React <span className="text-on-surface-variant font-normal text-xs">Low</span></li>
            </ul>
          </div>
          <div className="bg-surface-container p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
            <h4 className="text-secondary-container font-label mb-4 sm:mb-6 text-xs sm:text-sm uppercase">Languages</h4>
            <ul className="space-y-3 sm:space-y-4 font-bold text-white text-sm sm:text-base">
              <li className="flex items-center justify-between">C++ <span className="text-on-surface-variant font-normal text-xs">Expert</span></li>
              <li className="flex items-center justify-between">Java <span className="text-on-surface-variant font-normal text-xs">High</span></li>
              <li className="flex items-center justify-between">Python <span className="text-on-surface-variant font-normal text-xs">Mid</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;