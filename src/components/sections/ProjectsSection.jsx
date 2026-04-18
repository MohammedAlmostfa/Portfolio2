import React from 'react';
import { Link } from 'react-router-dom';
import projectImg1 from '../../assets/unnamed.png';
import projectImg2 from '../../assets/unnamed(1).png';
import projectImg3 from '../../assets/unnamed(2).png';

const ProjectsSection = () => {
  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-surface-container-lowest" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="mb-12 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8">
          <div>
            <span className="text-primary font-label tracking-widest uppercase text-xs sm:text-sm mb-2 block">Case Studies</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline text-white">Featured Engineering</h2>
          </div>
          <Link to="/project-details?all=true" className="text-primary-container font-bold flex items-center gap-2 hover:translate-x-2 transition-transform text-sm sm:text-base" onClick={scrollToTop}>
            View Archive <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>

        <div className="projects-grid">
          {/* Project 1: Educational Platform */}
          <div className="project-lg group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-surface-container-low h-64 sm:h-96 md:h-[400px] flex flex-col">
            <img className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-700" src={projectImg2} alt="Educational Platform" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
            <div className="absolute p-4 sm:p-8 md:p-10 w-full h-full flex flex-col">
              <div>
              
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">Educational Platform</h3>
                <p className="text-on-surface-variant max-w-lg mb-4 sm:mb-6 text-xs sm:text-sm md:text-base">A robust and scalable educational platform built with Laravel.</p>
                 <div className="flex flex-wrap gap-2">
        <span className="px-2 py-1 bg-surface-container-highest text-xs rounded">Laravel</span>
        <span className="px-2 py-1 bg-surface-container-highest text-xs rounded">MySQL</span>
        <span className="px-2 py-1 bg-surface-container-highest text-xs rounded">JWT</span>
  
      </div>
              </div>
              <div className="mt-auto">
                <Link to="/project-details?name=Educational%20Platform" onClick={scrollToTop} className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 group/link">
                  <span className="text-sm sm:text-base font-medium">show details</span>
                  <span className="material-symbols-outlined text-lg group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Project 2: Wasalni */}

<div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-surface-container-low h-64 sm:h-96 md:h-[400px] flex flex-col">
  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-30"></div>
  <div className="absolute inset-0 p-4 sm:p-8 md:p-10 flex flex-col">
    <div>
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">Wasalni</h3>
      <p className="text-on-surface-variant text-xs sm:text-sm mb-3 sm:mb-6">
        A scalable ride-sharing backend system built with Laravel that connects users with service providers through trip booking and real-time notifications.
      </p>
      <div className="flex flex-wrap gap-2">
        <span className="px-2 py-1 bg-surface-container-highest text-xs rounded">Laravel</span>
        <span className="px-2 py-1 bg-surface-container-highest text-xs rounded">MySQL</span>
        <span className="px-2 py-1 bg-surface-container-highest text-xs rounded">JWT</span>
        <span className="px-2 py-1 bg-surface-container-highest text-xs rounded">FCM</span>
      </div>
    </div>
    <div className="mt-auto">
      <Link to="/project-details?name=Wasalni" onClick={scrollToTop} className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 group/link">
        <span className="text-sm sm:text-base font-medium">show details</span>
        <span className="material-symbols-outlined text-lg group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
      </Link>
    </div>
  </div>
</div>

          {/* Project 3 & 4 */}
          <div className="project-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="p-4 sm:p-8 bg-surface-container rounded-2xl sm:rounded-3xl hover:bg-surface-container-high transition-all flex flex-col">
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">Restaurant Reservation</h3>
                <p className="text-on-surface-variant mb-4 sm:mb-6 text-xs sm:text-sm">A multi-role restaurant management system built with Laravel enabling customers to book tables and managers to handle reservations.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-surface-container-highest text-xs rounded">Laravel</span>
                  <span className="px-2 py-1 bg-surface-container-highest text-xs rounded">MySQL</span>
                  <span className="px-2 py-1 bg-surface-container-highest text-xs rounded">JWT</span>
                  <span className="px-2 py-1 bg-surface-container-highest text-xs rounded">FCM</span>
                </div>
              </div>
              <div className="mt-auto pt-4">
                <Link to="/project-details?name=Restaurant%20Reservation" onClick={scrollToTop} className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 group/link">
                  <span className="text-sm sm:text-base font-medium">show details</span>
                  <span className="material-symbols-outlined text-lg group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>
            </div>
            <div className="p-4 sm:p-8 bg-surface-container rounded-2xl sm:rounded-3xl hover:bg-surface-container-high transition-all flex flex-col">
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">Masari Al-Jam'iya</h3>
                <p className="text-on-surface-variant mb-4 sm:mb-6 text-xs sm:text-sm">A university admission guidance platform helping students explore majors and understand admission requirements.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-surface-container-highest text-xs rounded">Laravel</span>
                  <span className="px-2 py-1 bg-surface-container-highest text-xs rounded">MySQL</span>
                  <span className="px-2 py-1 bg-surface-container-highest text-xs rounded">Auth</span>
                  <span className="px-2 py-1 bg-surface-container-highest text-xs rounded">FCM</span>
                </div>
              </div>
              <div className="mt-auto pt-4">
                <Link to="/project-details?name=Masari%20Al-Jamiya" onClick={scrollToTop} className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 group/link">
                  <span className="text-sm sm:text-base font-medium">show details</span>
                  <span className="material-symbols-outlined text-lg group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Project 5: Statistics ERP */}
          <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-surface-container-low min-h-[300px] sm:min-h-[350px] flex flex-col">
            <div className="relative p-4 sm:p-8 md:p-10 border-t-4 border-tertiary flex flex-col gap-4 sm:gap-6">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4">Statistics ERP</h3>
                <p className="text-on-surface-variant text-xs sm:text-sm mb-4 sm:mb-6">A comprehensive enterprise resource planning system managing sales operations, inventory, and financial transactions with advanced reporting.</p>
              </div>
              <div className="space-y-4">
                <div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
                  <div className="bg-tertiary h-full w-4/5"></div>
                </div>
                <div className="text-xs font-label uppercase text-tertiary">Installment Tracking • Financial Reporting • Inventory</div>
              </div>
              <div className="flex flex-wrap gap-2 mt-2 sm:mt-4">
                <span className="px-2 py-1 bg-surface-container-highest text-xs rounded">Laravel</span>
                <span className="px-2 py-1 bg-surface-container-highest text-xs rounded">MySQL</span>
                <span className="px-2 py-1 bg-surface-container-highest text-xs rounded">JWT</span>
                <span className="px-2 py-1 bg-surface-container-highest text-xs rounded">WhatsApp</span>
              </div>
              <div className="mt-auto pt-4">
                <Link to="/project-details?name=Statistics%20ERP" onClick={scrollToTop} className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 group/link">
                  <span className="text-sm sm:text-base font-medium">show details</span>
                  <span className="material-symbols-outlined text-lg group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Project 6: OBG Marketplace */}
          <div className="project-lg group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-surface-container h-64 sm:h-96 md:h-[400px] flex flex-col">
            <img src={projectImg3} className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-700" alt="OBG Marketplace" />
            <div className="absolute inset-0 bg-gradient-to-r from-surface-container to-transparent"></div>
            <div className="relative z-10 p-4 sm:p-8 md:p-10 h-full flex flex-col">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4">OBG Marketplace</h3>
                <p className="text-on-surface-variant text-xs sm:text-sm">A scalable secondhand marketplace platform for buying and selling used tools and equipment with secure payment processing.</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-2 py-1 bg-surface-container-highest text-xs rounded">Laravel</span>
                <span className="px-2 py-1 bg-surface-container-highest text-xs rounded">MySQL</span>
                <span className="px-2 py-1 bg-surface-container-highest text-xs rounded">JWT</span>
                <span className="px-2 py-1 bg-surface-container-highest text-xs rounded">FCM</span>
              </div>
              <div className="mt-auto pt-4">
                <Link to="/project-details?name=OBG%20Marketplace" onClick={scrollToTop} className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 group/link">
                  <span className="text-sm sm:text-base font-medium">show details</span>
                  <span className="material-symbols-outlined text-lg group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Project 7: vocaApp */}
          <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-surface-container-low h-64 sm:h-96 md:h-[400px] flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-30"></div>
            <div className="absolute inset-0 p-4 sm:p-8 md:p-10 flex flex-col">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">vocaApp</h3>
                <p className="text-on-surface-variant text-xs sm:text-sm mb-3 sm:mb-6">A mobile app for saving and reviewing English vocabulary using spaced repetition. Built with React + Capacitor + SQLite.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-surface-container-highest text-xs rounded">React</span>
                  <span className="px-2 py-1 bg-surface-container-highest text-xs rounded">Capacitor</span>
                  <span className="px-2 py-1 bg-surface-container-highest text-xs rounded">SQLite</span>
                </div>
              </div>
              <div className="mt-auto">
                <Link to="/project-details?name=vocaApp" onClick={scrollToTop} className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 group/link">
                  <span className="text-sm sm:text-base font-medium">show details</span>
                  <span className="material-symbols-outlined text-lg group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;