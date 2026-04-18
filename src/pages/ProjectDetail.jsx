import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { projectsData } from '../data';

const ProjectDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse text-primary">Loading project details...</div>
      </div>
    );
  }

  if (!project) return null;

  const images = project.images || [];
  const currentImage = images[currentImageIndex];

  const handleNextImage = () => {
    if (images.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
  };

  const handlePrevImage = () => {
    if (images.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row gap-16 items-start bg-background">
      {/* القسم الأيسر: المعلومات */}
      <section className="w-full lg:w-1/2 flex flex-col gap-10">
        <Link to="/#projects" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 text-sm">
          <span className="material-symbols-outlined text-base">arrow_back</span>
          Back to Projects
        </Link>

        <div>
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
        </div>

        {/* Architectural Logic */}
        {project.architecture && project.architecture.length > 0 && (
          <div className="space-y-6">
            <h3 className="font-label text-xs uppercase tracking-widest text-primary font-bold">
              Architectural Logic
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.architecture.map((item, idx) => (
                <div key={idx} className="p-4 bg-surface-container-low rounded-lg border-l-2 border-primary-container">
                  <span className="block text-white font-semibold mb-1">{item.title}</span>
                  <span className="text-xs sm:text-sm text-on-surface-variant">{item.description}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack */}
        {project.techStack && project.techStack.length > 0 && (
          <div className="space-y-4">
            <h3 className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="px-4 py-1.5 bg-surface-container-highest text-on-surface text-xs font-medium rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

      
{project.collaborators && project.collaborators.length > 0 && (
  <div className="space-y-4">
    <h3 className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold">
      Collaborators
    </h3>
    <div className="flex flex-col gap-3">
      {project.collaborators.map((collab, idx) => (
        <a
          key={idx}
          href={collab.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between gap-4 p-3 bg-surface-container-highest rounded-xl hover:bg-primary-container/10 transition-all duration-200 border border-transparent hover:border-primary-container/30"
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
        </a>
      ))}
    </div>
  </div>
)}
        {/* Action Buttons */}
        <div className="flex flex-wrap gap-6 pt-4">
          {project.demoLink && project.demoLink !== "#" && (
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-primary-container to-secondary-container text-on-primary font-bold rounded-full hover:scale-105 transition-transform duration-300 flex items-center gap-2 text-sm md:text-base">
              Live Demo
              <span className="material-symbols-outlined text-base">open_in_new</span>
            </a>
          )}
          {project.sourceLink && project.sourceLink !== "#" && (
            <a href={project.sourceLink} target="_blank" rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-primary-container text-primary-container font-bold rounded-full hover:scale-105 transition-transform duration-300 flex items-center gap-2 text-sm md:text-base">
              View Source
              <span className="material-symbols-outlined text-base">code</span>
            </a>
          )}
        </div>
      </section>

      {/* القسم الأيمن: معرض الصور المحسن */}
{images.length > 0 && (
  <section className="w-full lg:w-1/2 space-y-6">
    {/* حاوية الصورة الرئيسية */}
    <div className="relative group">
      <div className="rounded-2xl overflow-hidden bg-surface-container-low flex items-center justify-center min-h-[300px] md:min-h-[400px]">
        {currentImage && currentImage.src ? (
          <img 
            src={`${import.meta.env.BASE_URL}${currentImage.src}`}
            alt={currentImage.alt || project.title} 
            className="w-full h-auto max-h-[500px] object-contain transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: '#1e1e2f' }}
            loading="lazy"
          />
        ) : (
          <div className="text-center text-on-surface-variant p-8">
            <span className="material-symbols-outlined text-6xl mb-2">image_not_supported</span>
            <p>No image available</p>
          </div>
        )}
      </div>

      {/* أزرار التنقل */}
      {images.length > 1 && (
        <>
          <button 
            onClick={handlePrevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center hover:bg-primary-container/80 transition-all text-white opacity-0 group-hover:opacity-100 focus:opacity-100 md:opacity-0 md:group-hover:opacity-100"
            aria-label="Previous image"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button 
            onClick={handleNextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center hover:bg-primary-container/80 transition-all text-white opacity-0 group-hover:opacity-100 focus:opacity-100 md:opacity-0 md:group-hover:opacity-100"
            aria-label="Next image"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </>
      )}
    </div>

    {/* عنوان ووصف الصورة */}
    {currentImage && (
      <div className="space-y-2 text-center lg:text-left px-2">
        <h4 className="text-xl font-bold text-on-surface">
          {currentImage.title || "Image"}
        </h4>
        <p className="text-on-surface-variant text-sm leading-relaxed">
          {currentImage.description || ""}
        </p>
      </div>
    )}

    {/* الصور المصغرة */}
    {images.length > 1 && (
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2 md:gap-3 mt-4">
        {images.map((image, idx) => (
          <div
            key={idx}
            onClick={() => setCurrentImageIndex(idx)}
            className={`
              aspect-square rounded-lg overflow-hidden cursor-pointer transition-all duration-200
              ${idx === currentImageIndex 
                ? 'ring-2 ring-primary-container ring-offset-2 ring-offset-background shadow-lg scale-95' 
                : 'opacity-70 hover:opacity-100 hover:scale-105'
              }
            `}
          >
            <img 
              src={`${import.meta.env.BASE_URL}${image.src}`}
              alt={image.alt || `Thumbnail ${idx + 1}`} 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    )}
  </section>
)}
    </main>
  );
};

export default ProjectDetail;