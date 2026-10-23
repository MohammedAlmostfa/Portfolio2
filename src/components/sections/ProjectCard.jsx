// src/components/sections/ProjectCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  cardVariants,
  imageHover,
  arrowHover,
  tagContainer,
  tagItem,
  progressBar,
} from '../../animations/variants';

const scrollToTop = () => window.scrollTo(0, 0);

// معرّف خارج الكومبوننت حتى ما ينعمل object جديد بكل render
const erpProgress = progressBar('80%');

const TechTags = ({ tech }) => (
  <motion.div variants={tagContainer} className="flex flex-wrap gap-2">
    {tech.map((t) => (
      <motion.span
        key={t}
        variants={tagItem}
        className="px-2 py-1 bg-surface-container-highest text-xs rounded"
      >
        {t}
      </motion.span>
    ))}
  </motion.div>
);

const DetailsLink = ({ to, label }) => (
  <Link
    to={to}
    onClick={scrollToTop}
    className="inline-flex items-center gap-2 text-primary group/link"
  >
    <span className="text-sm sm:text-base font-medium">{label}</span>
    <motion.span
      variants={arrowHover}
      className="material-symbols-outlined text-lg"
    >
      arrow_forward
    </motion.span>
  </Link>
);

// أنماط الكرت: كل نمط يحدد الخلفية والحجم
const VARIANTS = {
  image: {
    wrapper: 'bg-surface-container-low min-h-[280px] sm:min-h-[360px] md:min-h-[400px]',
    title: 'text-xl sm:text-2xl md:text-3xl',
  },
  gradient: {
    wrapper: 'bg-surface-container-low min-h-[280px] sm:min-h-[360px] md:min-h-[400px]',
    title: 'text-lg sm:text-xl md:text-2xl',
  },
  plain: {
    wrapper: 'bg-surface-container hover:bg-surface-container-high transition-colors min-h-[260px]',
    title: 'text-base sm:text-lg md:text-xl',
  },
  accent: {
    wrapper: 'bg-surface-container-low border-t-4 border-tertiary min-h-[300px] sm:min-h-[350px]',
    title: 'text-lg sm:text-xl md:text-2xl',
  },
};

const ProjectCard = ({ project, variant = 'plain', className = '', showDetailsLabel }) => {
  const styles = VARIANTS[variant];
  const hasImage = variant === 'image' && project.img;

  return (
    <motion.article
      variants={cardVariants}
      whileHover="hover"
      className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl flex flex-col ${styles.wrapper} ${className}`}
    >
      {/* خلفية الصورة */}
      {hasImage && (
        <>
          <motion.img
            variants={imageHover}
            src={project.img}
            alt={project.name}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent" />
        </>
      )}

      {/* خلفية gradient */}
      {variant === 'gradient' && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-30" />
      )}

      {/* المحتوى */}
      <div className="relative z-10 flex flex-col flex-1 p-5 sm:p-8 md:p-10 gap-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className={`font-bold ${styles.title}`}>{project.name}</h3>
          {project.isNew && (
            <span className="shrink-0 px-2 py-0.5 text-[10px] font-label uppercase tracking-widest rounded-full bg-primary/15 text-primary">
              New
            </span>
          )}
        </div>

        <p className="text-on-surface-variant text-xs sm:text-sm md:text-base max-w-lg">
          {project.desc}
        </p>

        {/* ميزات إضافية (للنمط accent فقط) */}
        {variant === 'accent' && project.highlights && (
          <div className="space-y-3">
            <div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
              <motion.div variants={erpProgress} className="bg-tertiary h-full" />
            </div>
            <div className="text-xs font-label uppercase text-tertiary">
              {project.highlights.join(' • ')}
            </div>
          </div>
        )}

        <TechTags tech={project.tech} />

        <div className="mt-auto pt-2">
          <DetailsLink
            to={`/project-details?name=${project.link}`}
            label={showDetailsLabel}
          />
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;