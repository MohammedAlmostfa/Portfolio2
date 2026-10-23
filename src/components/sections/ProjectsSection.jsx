// src/components/sections/ProjectsSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../animations/variants';
import { projectsText, projects } from '../../data/projectsData';
import ProjectCard from './ProjectCard';

/**
 * إعداد التخطيط: الترتيب + النمط + المساحة (على شاشة md وفوق، الشبكة 12 عمود).
 * الكلاسات مكتوبة كاملة عمداً حتى يلتقطها Tailwind.
 */
const layout = [
  { key: 'educational', variant: 'image',    span: 'md:col-span-7' },
  { key: 'wasalni',     variant: 'gradient', span: 'md:col-span-5' },

  { key: 'restaurant',  variant: 'plain',    span: 'md:col-span-4' },
  { key: 'masari',      variant: 'plain',    span: 'md:col-span-4' },
  { key: 'solarEnergy', variant: 'plain',    span: 'md:col-span-4' },

  { key: 'erp',         variant: 'accent',   span: 'md:col-span-5' },
  { key: 'obg',         variant: 'image',    span: 'md:col-span-7' },

  { key: 'vocaApp',     variant: 'gradient', span: 'md:col-span-12' },
];

const scrollToTop = () => window.scrollTo(0, 0);

const ProjectsSection = () => (
  <motion.section
    id="projects"
    className="py-16 sm:py-24 md:py-32 bg-surface-container-lowest"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    variants={staggerContainer}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-8">
      {/* Header */}
      <motion.div
        variants={fadeInUp}
        className="mb-12 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8"
      >
        <div>
          <span className="text-primary font-label tracking-widest uppercase text-xs sm:text-sm mb-2 block">
            {projectsText.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline text-white">
            {projectsText.title}
          </h2>
        </div>

        <motion.div whileHover={{ x: 8 }} transition={{ type: 'spring', stiffness: 300 }}>
          <Link
            to="/project-details?all=true"
            onClick={scrollToTop}
            className="text-primary-container font-bold flex items-center gap-2 text-sm sm:text-base"
          >
            {projectsText.viewArchive}
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Bento Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6"
        variants={staggerContainer}
      >
        {layout.map(({ key, variant, span }) => (
          <ProjectCard
            key={key}
            project={projects[key]}
            variant={variant}
            className={span}
            showDetailsLabel={projectsText.showDetails}
          />
        ))}
      </motion.div>
    </div>
  </motion.section>
);

export default ProjectsSection;