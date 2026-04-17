import React from 'react';

const ExperienceSection = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-surface-container-lowest" id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 timeline-grid">
        {/* Experience */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold font-headline mb-12 sm:mb-16 flex items-center gap-4">
            <span className="w-8 sm:w-12 h-0.5 bg-primary"></span> Professional Journey
          </h2>
          <div className="space-y-8 sm:space-y-12 border-l border-outline-variant/30 ml-2 sm:ml-4 pl-6 sm:pl-12 relative">
            <div className="relative">
              <div className="absolute -left-[29px] sm:-left-[53px] top-1 w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-primary-container shadow-[0_0_15px_#00d9ff]"></div>
              <div className="text-primary-container font-label text-xs uppercase mb-2">2025 - Present</div>
              <h3 className="text-lg sm:text-xl font-bold text-white">Co-Founder &amp; Backend Lead</h3>
              <div className="text-on-surface-variant text-sm mb-2">DevNest Development Team</div>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">Directing technical architecture for all client projects, ensuring code quality and infrastructure scalability.</p>
            </div>
            <div className="relative opacity-70 hover:opacity-100 transition-opacity">
              <div className="absolute -left-[29px] sm:-left-[53px] top-1 w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-outline"></div>
              <div className="text-on-surface-variant font-label text-xs uppercase mb-2">2025 - 2026</div>
              <h3 className="text-lg sm:text-xl font-bold text-white">Frontend Developer Trainee</h3>
              <div className="text-on-surface-variant text-sm mb-2">Focal X Academy</div>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">Completed intensive training in frontend development including HTML, CSS, JavaScript, and React. Gained experience in API integration and responsive UI design.</p>
            </div>
            <div className="relative opacity-70 hover:opacity-100 transition-opacity">
              <div className="absolute -left-[29px] sm:-left-[53px] top-1 w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-outline"></div>
              <div className="text-on-surface-variant font-label text-xs uppercase mb-2">2024 - 2025</div>
              <h3 className="text-lg sm:text-xl font-bold text-white">Backend Developer Intern</h3>
              <div className="text-on-surface-variant text-sm mb-2">Focal X Agency</div>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">Developed production-grade Laravel applications with Redis caching and real-time features. Worked with advanced backend concepts and Queue Workers. Awarded a Recommendation Certificate for strong performance.</p>
            </div>
          </div>
        </div>
        {/* Education & Accomplishments */}
        <div className="space-y-16 sm:space-y-24">
          <div id="education">
        

             <h2 className="text-2xl sm:text-3xl font-bold font-headline mb-12 sm:mb-16 flex items-center gap-4">
            <span className="w-8 sm:w-12 h-0.5 bg-primary"></span> Academic Background
          </h2>
            <div className="p-6 sm:p-8 bg-surface-container rounded-2xl sm:rounded-3xl border border-outline-variant/10">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">B.E in Computer &amp; Automation Engineering</h3>
              <div className="text-secondary font-label text-xs sm:text-sm mb-4">Homs University | 2022 - 2026</div>
              <p className="text-on-surface-variant text-xs sm:text-sm">Focusing on system architecture, algorithms, and automated control systems.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;