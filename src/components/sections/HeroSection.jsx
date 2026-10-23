// src/components/sections/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import myPhoto from '../../assets/my-photo.png'; // صورتك بدون خلفية
import {
  fadeInUp,
  fadeIn,
  blurIn,
  zoomIn,
  staggerContainer,
  scaleOnHover,
} from '../../animations/variants';
import { heroText, stats, cvLink } from '../../data/heroData';

// الشارات على أطراف المربع، متوسّطة عمودياً على الحافة
const floatingChips = [
  { label: 'Laravel',   icon: 'code',   position: 'top-[15%] left-0 -translate-x-1/4',    delay: 0 },
  { label: 'React',     icon: 'web',    position: 'top-[40%] right-0 translate-x-1/4',    delay: 0.8 },
  { label: 'DevSecOps', icon: 'shield', position: 'bottom-[18%] left-0 -translate-x-1/4', delay: 1.6 },
];

const HeroSection = () => {
  const scrollTo = (selector) => (e) => {
    e.preventDefault();
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => window.open(cvLink, '_blank');

  return (
    <section className="relative min-h-screen flex items-center pt-24 sm:pt-20 overflow-hidden">
      {/* الخلفية */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,217,255,0.08)_0%,_rgba(11,19,38,1)_70%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* ========== العمود الأيسر ========== */}
          <motion.div
            className="relative"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="space-y-6 sm:space-y-8">
              {/* الشارة */}
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant/30 gap-2"
              >
                <span className="relative flex h-2 w-2">
                  <motion.span
                    className="absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.75, 0, 0.75] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-container" />
                </span>
                <span className="text-xs sm:text-sm font-label text-primary uppercase tracking-widest">
                  {heroText.badge}
                </span>
              </motion.div>

              {/* العنوان */}
              <motion.h1
                variants={fadeInUp}
                className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold font-headline tracking-tighter leading-[0.9]"
              >
                {heroText.firstName} <br />
                <motion.span
                  className="text-transparent bg-clip-text logic-gradient"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {heroText.lastName}
                </motion.span>
              </motion.h1>

              {/* الوصف */}
              <motion.p
                variants={fadeInUp}
                className="hero-subtitle text-lg sm:text-xl md:text-2xl text-on-surface-variant max-w-xl font-light"
              >
                {heroText.subtitle}
              </motion.p>

              {/* الأزرار */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
              >
                <motion.button
                  onClick={scrollTo('#contact')}
                  className="px-6 sm:px-8 py-3 sm:py-4 logic-gradient rounded-xl font-bold text-on-primary hover:shadow-[0_0_30px_rgba(0,217,255,0.3)] transition-shadow text-center text-sm sm:text-base"
                  {...scaleOnHover}
                >
                  {heroText.buttonContact}
                </motion.button>
                <motion.button
                  onClick={scrollTo('#projects')}
                  className="px-6 sm:px-8 py-3 sm:py-4 border border-outline-variant/30 rounded-xl font-bold hover:bg-surface-container transition-colors text-center text-sm sm:text-base"
                  {...scaleOnHover}
                >
                  {heroText.buttonWork}
                </motion.button>
                <motion.button
                  onClick={handleDownloadCV}
                  className="px-6 sm:px-8 py-3 sm:py-4 text-primary font-label uppercase tracking-wider hover:opacity-80 text-center text-xs sm:text-sm"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 500 }}
                >
                  {heroText.buttonCV}
                </motion.button>
              </motion.div>

              {/* الإحصائيات */}
              <motion.div
                variants={fadeInUp}
                className="stats-grid grid grid-cols-3 gap-4 sm:gap-8 pt-8 sm:pt-12"
              >
                {stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ y: -5, transition: { type: 'spring', stiffness: 300 } }}
                  >
                    <div className="text-3xl sm:text-4xl font-bold text-white font-headline">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-on-surface-variant font-label uppercase tracking-tighter">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* ========== العمود الأيمن: صورتك ========== */}
          <motion.div
            className="flex justify-center relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {/* المربع: الصورة بنصه والشارات على أطرافه */}
            <div className="relative w-full max-w-[18rem] sm:max-w-sm md:max-w-md lg:max-w-lg aspect-[4/5]">
              {/* 1) Glow خلف الشخص */}
              <motion.div
                variants={zoomIn}
                className="absolute inset-x-8 bottom-0 top-10 rounded-full bg-primary-container/20 blur-3xl"
              />

              {/* 2) صورتك: بنص المربع بالضبط (بدون translate) */}
              <motion.img
                variants={blurIn}
                src={myPhoto}
                alt={heroText.imageAlt}
                draggable={false}
                className="absolute bottom-0 left-4 h-full w-[calc(100%-2rem)] object-contain object-bottom select-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
              />

              {/* 3) تلاشي من تحت */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[rgba(11,19,38,1)] to-transparent pointer-events-none" />

              {/* 4) الشارات على الأطراف */}
              {floatingChips.map(({ label, icon, position, delay }) => (
                <motion.div
                  key={label}
                  variants={fadeIn}
                  className={`absolute z-10 ${position}`}
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay }}
                    className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-surface-container-high/80 backdrop-blur-md border border-outline-variant/30 shadow-lg"
                  >
                    <span className="material-symbols-outlined text-primary text-base sm:text-lg">
                      {icon}
                    </span>
                    <span className="text-[10px] sm:text-xs font-label uppercase tracking-wider text-white">
                      {label}
                    </span>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;