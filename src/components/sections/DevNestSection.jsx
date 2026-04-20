// src/components/sections/DevNestSection.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import devnestLogo from '../../assets/devnestlogo.webp';
import { fadeInUp, staggerContainer, itemVariants, scaleOnHover, imageScale } from '../../animations/variants';
import { devnestText, stats, tags, imageConfig } from '../../data/devnestData';

const DevNestSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <motion.section
      className="py-16 sm:py-24 md:py-32 relative overflow-hidden"
      id="devnest"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      {/* الخلفية المتدرجة المتحركة */}
      <motion.div
        className="absolute inset-0 logic-gradient opacity-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <motion.div
          variants={fadeInUp}
          className="devnest-container bg-surface-container-low rounded-2xl sm:rounded-[2rem] md:rounded-[3rem] p-6 sm:p-12 md:p-20 border border-primary/40 flex flex-col md:flex-row items-center gap-8 md:gap-16"
        >
          {/* العمود الأيسر (النص) */}
          <motion.div
            className="devnest-content flex-1 space-y-6 sm:space-y-8 relative ml-2 sm:ml-4 pl-6 sm:pl-12"
            variants={staggerContainer}
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tight"
            >
              {devnestText.titlePrefix}{' '}
              <span className="text-primary">{devnestText.titleHighlight}</span>
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-on-surface-variant"
            >
              {devnestText.description}
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6 sm:gap-8"
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, y: -3 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs sm:text-sm font-label text-on-surface-variant uppercase">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 sm:gap-4"
            >
              {tags.map((tag, idx) => (
                <motion.span
                  key={idx}
                  className="px-3 sm:px-4 py-2 bg-surface-container rounded-full text-xs sm:text-sm font-semibold"
                  whileHover={{ scale: 1.1, y: -2, backgroundColor: 'rgba(0,217,255,0.2)' }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* العمود الأيمن (الصورة) مع تحميل متحرك */}
          <motion.div
            variants={imageScale}
            className="devnest-image hidden md:block md:w-2/5 lg:w-2/5"
          >
            <div className="aspect-square bg-transparent rounded-3xl flex items-center justify-center relative">
              {/* مؤشر التحميل (يظهر أثناء تحميل الصورة) */}
              {!imageLoaded && !imageError && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-surface-container-low rounded-3xl z-10">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="w-12 h-12 border-4 border-primary-container border-t-transparent rounded-full"
                  />
                  <p className="text-primary text-sm mt-3">{devnestText.loadingText}</p>
                </div>
              )}

              {/* الصورة مع تأثير Fade-in بعد التحميل */}
              <motion.img
                src={devnestLogo}
                alt={imageConfig.alt}
                className={imageConfig.className + (imageLoaded ? ' opacity-100' : ' opacity-0')}
                whileHover={{ scale: imageConfig.hoverScale, rotate: imageConfig.hoverRotate }}
                transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                onLoad={() => setImageLoaded(true)}
                onError={() => {
                  setImageLoaded(false);
                  setImageError(true);
                }}
              />

              {/* رسالة الخطأ في حال فشل التحميل */}
              {imageError && (
                <div className="absolute inset-0 flex items-center justify-center bg-surface-container-low text-red-400 rounded-3xl z-10">
                  <span className="material-symbols-outlined text-4xl mr-2">error</span>
                  {devnestText.errorText}
                </div>
              )}

              {/* تأثير نبض حول الصورة (يظهر فقط بعد تحميل الصورة أو بدون خطأ) */}
              {imageLoaded && !imageError && (
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-primary/30"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                />
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DevNestSection;