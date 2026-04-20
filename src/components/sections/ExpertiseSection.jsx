// src/components/sections/ExpertiseSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  staggerCards,
  cardVariants,
  iconHover,
  fadeInUp,
  liftOnHover,
} from '../../animations/variants';
import {
  expertiseItems,
  borderColorMap,
  iconColorMap,
  expertiseText,
} from '../../data/expertiseData';

const ExpertiseSection = () => {
  return (
    <motion.section
      className="py-16 sm:py-24 md:py-32"
      id="expertise"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div className="mb-12 sm:mb-16" variants={fadeInUp}>
          <span className="text-primary font-label tracking-widest uppercase text-xs sm:text-sm mb-2 block">
            {expertiseText.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline">
            {expertiseText.title}
          </h2>
        </motion.div>

        <motion.div
          className="expertise-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerCards}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {expertiseItems.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              {...liftOnHover}
              className={`p-6 sm:p-8 bg-surface-container border-l-4 ${borderColorMap[item.colorKey]} transition-all hover:bg-surface-container-high group`}
            >
              <motion.span
                className={`material-symbols-outlined text-3xl sm:text-4xl ${iconColorMap[item.colorKey]} mb-4 sm:mb-6 block`}
                {...iconHover}
              >
                {item.icon}
              </motion.span>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-on-surface-variant">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ExpertiseSection;