import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data';
import { fadeInUp, staggerContainer, itemVariants, cardVariants, scaleOnHover } from '../animations/variants';

const ProjectDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [direction, setDirection] = useState(0);
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const projectName = params.get('name');

    if (projectName) {
      const foundProject = projectsData.find(p => p.name === decodeURIComponent(projectName));
      if (foundProject) {
        setProject(foundProject);
        setCurrentImageIndex(0);
      } else {
        navigate('/');
      }
    } else {
      navigate('/');
    }
    setLoading(false);
  }, [location.search, navigate]);

  // إعادة تعيين حالة تحميل الصورة عند تغيير الصورة أو المشروع
  useEffect(() => {
    setImageLoading(true);
    setImageError(false);
  }, [currentImageIndex, project]);

  const handleNextImage = () => {
    if (project?.images?.length) {
      setDirection(1);
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const handlePrevImage = () => {
    if (project?.images?.length) {
      setDirection(-1);
      setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    }
  };

  // Loading animation للمشروع
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ repeat: Infinity, repeatType: 'reverse', duration: 0.6 }}
          className="text-primary text-lg"
        >
          Loading project details...
        </motion.div>
      </div>
    );
  }

  if (!project) return null;

  const images = project.images || [];
  const currentImage = images[currentImageIndex];

  const imageVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 200, damping: 20 },
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      transition: { duration: 0.2 },
    }),
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row gap-16 items-start bg-background"
    >
      {/* القسم الأيسر: المعلومات (بدون تغيير) */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="w-full lg:w-1/2 flex flex-col gap-10"
      >
        {/* ... المحتوى كما هو ... */}
        <motion.div variants={fadeInUp}>
          <Link to="/#projects" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 text-sm group">
            <motion.span
              className="material-symbols-outlined text-base"
              whileHover={{ x: -3 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              arrow_back
            </motion.span>
            <span>Back to Projects</span>
          </Link>
        </motion.div>

        <motion.div variants={fadeInUp}>
          {project.category && (
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-12 h-[2px] bg-primary-container"></span>
              <span className="font-label text-[10px] tracking-[0.2em] text-primary uppercase font-bold">
                {project.category}
              </span>
            </div>
          )}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-on-surface mb-6">
            {project.title}
          </h1>
          <p className="text-on-surface-variant text-base md:text-lg leading-relaxed max-w-xl">
            {project.description}
          </p>
        </motion.div>

        {/* Architectural Logic */}
        {project.architecture && project.architecture.length > 0 && (
          <motion.div variants={fadeInUp} className="space-y-6">
            <h3 className="font-label text-xs uppercase tracking-widest text-primary font-bold">
              Architectural Logic
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.architecture.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  whileHover={{ scale: 1.02, y: -3 }}
                  className="p-4 bg-surface-container-low rounded-lg border-l-2 border-primary-container"
                >
                  <span className="block text-white font-semibold mb-1">{item.title}</span>
                  <span className="text-xs sm:text-sm text-on-surface-variant">{item.description}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Tech Stack */}
        {project.techStack && project.techStack.length > 0 && (
          <motion.div variants={fadeInUp} className="space-y-4">
            <h3 className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <motion.span
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-1.5 bg-surface-container-highest text-on-surface text-xs font-medium rounded-full"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Collaborators */}
        {project.collaborators && project.collaborators.length > 0 && (
          <motion.div variants={fadeInUp} className="space-y-4">
            <h3 className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold">
              Collaborators
            </h3>
            <div className="flex flex-col gap-3">
              {project.collaborators.map((collab, idx) => (
                <motion.a
                  key={idx}
                  href={collab.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ x: 5, backgroundColor: 'rgba(0,217,255,0.1)' }}
                  className="group flex items-center justify-between gap-4 p-3 bg-surface-container-highest rounded-xl transition-all duration-200 border border-transparent hover:border-primary-container/30"
                >
                  <div className="flex flex-col">
                    <span className="text-on-surface font-semibold group-hover:text-primary-container transition-colors">
                      {collab.name}
                    </span>
                    {collab.specialization && (
                      <span className="text-xs text-on-surface-variant group-hover:text-primary-container/80">
                        {collab.specialization}
                      </span>
                    )}
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary-container text-base">
                    link
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}

        {/* Action Buttons */}
        <motion.div variants={fadeInUp} className="flex flex-wrap gap-6 pt-4">
          {project.demoLink && project.demoLink !== "#" && (
            <motion.a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              {...scaleOnHover}
              className="px-8 py-3 bg-gradient-to-r from-primary-container to-secondary-container text-on-primary font-bold rounded-full flex items-center gap-2 text-sm md:text-base"
            >
              Live Demo
              <span className="material-symbols-outlined text-base">open_in_new</span>
            </motion.a>
          )}
          {project.sourceLink && project.sourceLink !== "#" && (
            <motion.a
              href={project.sourceLink}
              target="_blank"
              rel="noopener noreferrer"
              {...scaleOnHover}
              className="px-8 py-3 border-2 border-primary-container text-primary-container font-bold rounded-full flex items-center gap-2 text-sm md:text-base"
            >
              View Source
              <span className="material-symbols-outlined text-base">code</span>
            </motion.a>
          )}
        </motion.div>
      </motion.section>

      {/* القسم الأيمن: معرض الصور المحسن مع تحميل متحرك */}
      {images.length > 0 && (
        <motion.section
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-1/2 space-y-6"
        >
          <div className="relative group">
            <div className="rounded-2xl overflow-hidden bg-surface-container-low flex items-center justify-center min-h-[300px] md:min-h-[400px] relative">
              <AnimatePresence mode="wait" custom={direction}>
                {currentImage && currentImage.src ? (
                  <>
                    {/* مؤشر التحميل (يظهر أثناء تحميل الصورة) */}
                    {imageLoading && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-surface-container-low z-10">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                          className="w-12 h-12 border-4 border-primary-container border-t-transparent rounded-full"
                        />
                        <p className="text-primary text-sm mt-3">Loading image...</p>
                      </div>
                    )}
                    <motion.img
                      key={currentImageIndex}
                      custom={direction}
                      variants={imageVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      src={`${import.meta.env.BASE_URL}${currentImage.src}`}
                      alt={currentImage.alt || project.title}
                      className={`w-full h-auto max-h-[500px] object-contain transition-all duration-300 hover:scale-105 ${
                        imageLoading ? 'opacity-0' : 'opacity-100'
                      }`}
                      style={{ backgroundColor: '#0b1326' }}
                      loading="lazy"
                      onLoad={() => setImageLoading(false)}
                      onError={() => {
                        setImageLoading(false);
                        setImageError(true);
                      }}
                    />
                    {imageError && (
                      <div className="absolute inset-0 flex items-center justify-center bg-surface-container-low text-red-400">
                        <span className="material-symbols-outlined text-4xl mr-2">error</span>
                        Failed to load image
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center text-on-surface-variant p-8">
                    <span className="material-symbols-outlined text-6xl mb-2">image_not_supported</span>
                    <p>No image available</p>
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* أزرار التنقل (بدون تغيير) */}
            {images.length > 1 && (
              <>
                <motion.button
                  onClick={handlePrevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center hover:bg-primary-container/80 transition-all text-white opacity-0 group-hover:opacity-100 focus:opacity-100 md:opacity-0 md:group-hover:opacity-100"
                  aria-label="Previous image"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="material-symbols-outlined">chevron_left</span>
                </motion.button>
                <motion.button
                  onClick={handleNextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center hover:bg-primary-container/80 transition-all text-white opacity-0 group-hover:opacity-100 focus:opacity-100 md:opacity-0 md:group-hover:opacity-100"
                  aria-label="Next image"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="material-symbols-outlined">chevron_right</span>
                </motion.button>
              </>
            )}
          </div>

          {/* عنوان ووصف الصورة (بدون تغيير) */}
          {currentImage && (
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-2 text-center lg:text-left px-2"
            >
              <h4 className="text-xl font-bold text-on-surface">
                {currentImage.title || "Image"}
              </h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {currentImage.description || ""}
              </p>
            </motion.div>
          )}

          {/* الصور المصغرة (بدون تغيير) */}
          {images.length > 1 && (
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2 md:gap-3 mt-4">
              {images.map((image, idx) => (
                <motion.div
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentImageIndex ? 1 : -1);
                    setCurrentImageIndex(idx);
                  }}
                  className={`
                    aspect-square rounded-lg overflow-hidden cursor-pointer transition-all duration-200
                    ${idx === currentImageIndex
                      ? 'ring-2 ring-primary-container ring-offset-2 ring-offset-background shadow-lg scale-95'
                      : 'opacity-70 hover:opacity-100 hover:scale-105'
                    }
                  `}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}${image.src}`}
                    alt={image.alt || `Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          )}
        </motion.section>
      )}
    </motion.main>
  );
};

export default ProjectDetail;