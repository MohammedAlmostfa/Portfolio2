// src/components/sections/HeroSection.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import heroImage from '../../assets/hero-image.jpg';
import {
  fadeInUp,
  staggerContainer,
  scaleOnHover,
  imageScale,
} from '../../animations/variants';
import { heroText, stats, cvLink, imageConfig } from '../../data/heroData';

const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const scrollToContact = (e) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = (e) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    // يمكنك فتح الرابط في نافذة جديدة أو بدء التحميل مباشرة
    window.open(cvLink, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 sm:pt-20 overflow-hidden">
      {/* الخلفية المتحركة */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,217,255,0.08)_0%,_rgba(11,19,38,1)_70%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* العمود الأيسر - أنيميشن متتابع */}
          <motion.div
            className="relative"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="space-y-6 sm:space-y-8">
              {/* شارة Available for hire */}
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
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-container"></span>
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

              {/* النص الوصفي */}
              <motion.p
                variants={fadeInUp}
                className="hero-subtitle text-lg sm:text-xl md:text-2xl text-on-surface-variant max-w-xl font-light"
              >
                {heroText.subtitle}
              </motion.p>

              {/* الأزرار */}
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <motion.button
                  onClick={scrollToContact}
                  className="px-6 sm:px-8 py-3 sm:py-4 logic-gradient rounded-xl font-bold text-on-primary hover:shadow-[0_0_30px_rgba(0,217,255,0.3)] transition-all text-center text-sm sm:text-base"
                  {...scaleOnHover}
                >
                  {heroText.buttonContact}
                </motion.button>
                <motion.button
                  onClick={scrollToProjects}
                  className="px-6 sm:px-8 py-3 sm:py-4 border border-outline-variant/30 rounded-xl font-bold hover:bg-surface-container transition-all text-center text-sm sm:text-base"
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
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
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

          {/* العمود الأيمن - الصورة مع تحميل متحرك */}
          <motion.div
            className="hidden md:block relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            <motion.div
              className="aspect-square bg-surface-container-low rounded-3xl overflow-hidden relative group"
              variants={imageScale}
            >
              {/* مؤشر التحميل */}
              {!imageLoaded && !imageError && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-surface-container-low z-10">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                    className="w-12 h-12 border-4 border-primary-container border-t-transparent rounded-full"
                  />
                  <p className="text-primary text-sm mt-3">{heroText.loadingImage}</p>
                </div>
              )}

              {/* الصورة */}
              <motion.img
                className={`object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                src={heroImage}
                alt={heroText.imageAlt}
                whileHover={{ scale: imageConfig.hoverScale }}
                transition={{ duration: imageConfig.transitionDuration }}
                onLoad={() => setImageLoaded(true)}
                onError={() => {
                  setImageLoaded(false);
                  setImageError(true);
                }}
              />

              {/* رسالة الخطأ */}
              {imageError && (
                <div className="absolute inset-0 flex items-center justify-center bg-surface-container-low text-red-400 z-10">
                  <span className="material-symbols-outlined text-4xl mr-2">error</span>
                  {heroText.errorImage}
                </div>
              )}

              <div className="absolute inset-0 logic-gradient mix-blend-overlay opacity-30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 border-2 border-primary-container/20 rounded-full flex items-center justify-center">
                  <motion.div
                    className="w-48 h-48 border-2 border-primary-container/40 rounded-full flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: imageConfig.rotationDuration, ease: 'linear' }}
                  >
                    <motion.span
                      className="material-symbols-outlined text-primary-container text-6xl sm:text-8xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                      animate={{ scale: imageConfig.iconScale }}
                      transition={{ repeat: Infinity, duration: imageConfig.iconPulseDuration, ease: 'easeInOut' }}
                    >
                      terminal
                    </motion.span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;