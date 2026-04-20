import React from 'react';
import { motion } from 'framer-motion';
import { staggerCards, cardVariants, iconHover, fadeInUp, liftOnHover } from '../../animations/variants';

const expertiseData = [
  { icon: 'php', title: 'Backend Development', desc: 'Building monolithic and microservices architectures using Laravel and PHP with a focus on domain-driven design.', color: 'primary' },
  { icon: 'api', title: 'REST APIs', desc: 'Designing and documenting comprehensive, versioned API endpoints for web and mobile clients.', color: 'secondary' },
  { icon: 'database', title: 'Database Optimization', desc: 'Refining complex SQL queries, indexing strategies, and relational data modeling for MySQL.', color: 'tertiary' },
  { icon: 'sync', title: 'Real-time Systems', desc: 'Implementing WebSockets and event-driven communication for live tracking and instant notifications.', color: 'primary-container' },
  { icon: 'bolt', title: 'Performance', desc: 'Integrating Redis caching and background job processing to handle heavy computational loads.', color: 'secondary-container' },
  { icon: 'cloud_done', title: 'DevOps', desc: 'Managing CI/CD pipelines, Docker containers, and cloud deployment for consistent production environments.', color: 'outline' },
];

const borderColorMap = {
  primary: 'border-primary',
  secondary: 'border-secondary',
  tertiary: 'border-tertiary',
  'primary-container': 'border-primary-container',
  'secondary-container': 'border-secondary-container',
  outline: 'border-outline',
};

const iconColorMap = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  tertiary: 'text-tertiary',
  'primary-container': 'text-primary-container',
  'secondary-container': 'text-secondary-container',
  outline: 'text-outline',
};

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
        <motion.div
          className="mb-12 sm:mb-16"
          variants={fadeInUp}
        >
          <span className="text-primary font-label tracking-widest uppercase text-xs sm:text-sm mb-2 block">Core Strengths</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline">Technical Specialization</h2>
        </motion.div>

        <motion.div
          className="expertise-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerCards}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {expertiseData.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              {...liftOnHover}
              className={`p-6 sm:p-8 bg-surface-container border-l-4 ${borderColorMap[item.color]} transition-all hover:bg-surface-container-high group`}
            >
              <motion.span
                className={`material-symbols-outlined text-3xl sm:text-4xl ${iconColorMap[item.color]} mb-4 sm:mb-6 block`}
                {...iconHover}
              >
                {item.icon}
              </motion.span>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{item.title}</h3>
              <p className="text-sm sm:text-base text-on-surface-variant">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ExpertiseSection;