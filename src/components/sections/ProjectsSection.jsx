// src/components/sections/ProjectsSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, cardVariants } from '../../animations/variants';
import { projectsText, projects } from '../../data/projectsData';

const ProjectsSection = () => {
  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <motion.section
      className="py-16 sm:py-24 md:py-32 bg-surface-container-lowest"
      id="projects"
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
          <motion.div
            whileHover={{ x: 8 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Link
              to="/project-details?all=true"
              className="text-primary-container font-bold flex items-center gap-2 hover:translate-x-2 transition-transform text-sm sm:text-base"
              onClick={scrollToTop}
            >
              {projectsText.viewArchive}{' '}
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Grid الرئيسي */}
        <motion.div
          className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
        >
          {/* Project 1: Educational Platform (Large with image) */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="project-lg group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-surface-container-low h-64 sm:h-96 md:h-[400px] flex flex-col"
          >
            <motion.img
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-700"
              src={projects.educational.img}
              alt={projects.educational.name}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
            <div className="absolute p-4 sm:p-8 md:p-10 w-full h-full flex flex-col">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">
                  {projects.educational.name}
                </h3>
                <p className="text-on-surface-variant max-w-lg mb-4 sm:mb-6 text-xs sm:text-sm md:text-base">
                  {projects.educational.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {projects.educational.tech.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      className="px-2 py-1 bg-surface-container-highest text-xs rounded"
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
              <div className="mt-auto">
                <Link
                  to={`/project-details?name=${projects.educational.link}`}
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 group/link"
                >
                  <span className="text-sm sm:text-base font-medium">{projectsText.showDetails}</span>
                  <span className="material-symbols-outlined text-lg group-hover/link:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Project 2: Wasalni */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-surface-container-low h-64 sm:h-96 md:h-[400px] flex flex-col"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-30"></div>
            <div className="absolute inset-0 p-4 sm:p-8 md:p-10 flex flex-col">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                  {projects.wasalni.name}
                </h3>
                <p className="text-on-surface-variant text-xs sm:text-sm mb-3 sm:mb-6">
                  {projects.wasalni.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {projects.wasalni.tech.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      className="px-2 py-1 bg-surface-container-highest text-xs rounded"
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
              <div className="mt-auto">
                <Link
                  to={`/project-details?name=${projects.wasalni.link}`}
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 group/link"
                >
                  <span className="text-sm sm:text-base font-medium">{projectsText.showDetails}</span>
                  <span className="material-symbols-outlined text-lg group-hover/link:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Projects 3 & 4 (Restaurant + Masari) in a nested grid */}
          <motion.div
            variants={staggerContainer}
            className="project-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
          >
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="p-4 sm:p-8 bg-surface-container rounded-2xl sm:rounded-3xl hover:bg-surface-container-high transition-all flex flex-col"
            >
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">
                  {projects.restaurant.name}
                </h3>
                <p className="text-on-surface-variant mb-4 sm:mb-6 text-xs sm:text-sm">
                  {projects.restaurant.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {projects.restaurant.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-surface-container-highest text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-auto pt-4">
                <Link
                  to={`/project-details?name=${projects.restaurant.link}`}
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 group/link"
                >
                  <span className="text-sm sm:text-base font-medium">{projectsText.showDetails}</span>
                  <span className="material-symbols-outlined text-lg group-hover/link:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="p-4 sm:p-8 bg-surface-container rounded-2xl sm:rounded-3xl hover:bg-surface-container-high transition-all flex flex-col"
            >
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">
                  {projects.masari.name}
                </h3>
                <p className="text-on-surface-variant mb-4 sm:mb-6 text-xs sm:text-sm">
                  {projects.masari.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {projects.masari.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-surface-container-highest text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-auto pt-4">
                <Link
                  to={`/project-details?name=${projects.masari.link}`}
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 group/link"
                >
                  <span className="text-sm sm:text-base font-medium">{projectsText.showDetails}</span>
                  <span className="material-symbols-outlined text-lg group-hover/link:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Project 5: Statistics ERP */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-surface-container-low min-h-[300px] sm:min-h-[350px] flex flex-col"
          >
            <div className="relative p-4 sm:p-8 md:p-10 border-t-4 border-tertiary flex flex-col gap-4 sm:gap-6">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4">
                  {projects.erp.name}
                </h3>
                <p className="text-on-surface-variant text-xs sm:text-sm mb-4 sm:mb-6">
                  {projects.erp.desc}
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
                  <motion.div
                    className="bg-tertiary h-full w-4/5"
                    initial={{ width: 0 }}
                    whileInView={{ width: '80%' }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                  />
                </div>
                <div className="text-xs font-label uppercase text-tertiary">
                  Installment Tracking • Financial Reporting • Inventory
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-2 sm:mt-4">
                {projects.erp.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-surface-container-highest text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-4">
                <Link
                  to={`/project-details?name=${projects.erp.link}`}
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 group/link"
                >
                  <span className="text-sm sm:text-base font-medium">{projectsText.showDetails}</span>
                  <span className="material-symbols-outlined text-lg group-hover/link:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Project 6: OBG Marketplace (with image) */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="project-lg group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-surface-container h-64 sm:h-96 md:h-[400px] flex flex-col"
          >
            <motion.img
              src={projects.obg.img}
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-700"
              alt={projects.obg.name}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface-container to-transparent"></div>
            <div className="relative z-10 p-4 sm:p-8 md:p-10 h-full flex flex-col">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4">
                  {projects.obg.name}
                </h3>
                <p className="text-on-surface-variant text-xs sm:text-sm">
                  {projects.obg.desc}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {projects.obg.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-surface-container-highest text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-4">
                <Link
                  to={`/project-details?name=${projects.obg.link}`}
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 group/link"
                >
                  <span className="text-sm sm:text-base font-medium">{projectsText.showDetails}</span>
                  <span className="material-symbols-outlined text-lg group-hover/link:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Project 7: vocaApp */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-surface-container-low h-64 sm:h-96 md:h-[400px] flex flex-col"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-30"></div>
            <div className="absolute inset-0 p-4 sm:p-8 md:p-10 flex flex-col">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                  {projects.vocaApp.name}
                </h3>
                <p className="text-on-surface-variant text-xs sm:text-sm mb-3 sm:mb-6">
                  {projects.vocaApp.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {projects.vocaApp.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-surface-container-highest text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-auto">
                <Link
                  to={`/project-details?name=${projects.vocaApp.link}`}
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 group/link"
                >
                  <span className="text-sm sm:text-base font-medium">{projectsText.showDetails}</span>
                  <span className="material-symbols-outlined text-lg group-hover/link:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;