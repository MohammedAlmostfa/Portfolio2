import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, itemVariants, cardVariants, liftOnHover } from '../../animations/variants';

const ExperienceSection = () => {
  // بيانات الخبرات المهنية
  const experiences = [
    {
      period: '2025 - Present',
      title: 'Co-Founder & Backend Lead',
      company: 'DevNest Development Team',
      description: 'Directing technical architecture for all client projects, ensuring code quality and infrastructure scalability.',
      active: true,
    },
    {
      period: '2025 - 2026',
      title: 'Frontend Developer Trainee',
      company: 'Focal X Academy',
      description: 'Completed intensive training in frontend development including HTML, CSS, JavaScript, and React. Gained experience in API integration and responsive UI design.',
      active: false,
    },
    {
      period: '2024 - 2025',
      title: 'Backend Developer Intern',
      company: 'Focal X Agency',
      description: 'Developed production-grade Laravel applications with Redis caching and real-time features. Worked with advanced backend concepts and Queue Workers. Awarded a Recommendation Certificate for strong performance.',
      active: false,
    },
  ];

  return (
    <motion.section
      className="py-16 sm:py-24 md:py-32 bg-surface-container-lowest"
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 timeline-grid grid md:grid-cols-2 gap-12 lg:gap-20">
        {/* العمود الأيسر - الخبرات المهنية */}
        <motion.div variants={staggerContainer}>
          <motion.h2
            variants={fadeInUp}
            className="text-2xl sm:text-3xl font-bold font-headline mb-12 sm:mb-16 flex items-center gap-4"
          >
            <span className="w-8 sm:w-12 h-0.5 bg-primary"></span> Professional Journey
          </motion.h2>
          <div className="space-y-8 sm:space-y-12 border-l border-outline-variant/30 ml-2 sm:ml-4 pl-6 sm:pl-12 relative">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`relative ${!exp.active ? 'opacity-70 hover:opacity-100 transition-opacity' : ''}`}
              >
                {/* النقطة الزرقاء المتوهجة */}
                <motion.div
                  className={`absolute -left-[29px] sm:-left-[53px] top-1 w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full ${
                    exp.active ? 'bg-primary-container shadow-[0_0_15px_#00d9ff]' : 'bg-outline'
                  }`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                />
                <motion.div
                  className={`text-xs uppercase mb-2 font-label ${
                    exp.active ? 'text-primary-container' : 'text-on-surface-variant'
                  }`}
                >
                  {exp.period}
                </motion.div>
                <h3 className="text-lg sm:text-xl font-bold text-white">{exp.title}</h3>
                <div className="text-on-surface-variant text-sm mb-2">{exp.company}</div>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* العمود الأيمن - التعليم والإنجازات */}
        <motion.div variants={staggerContainer} className="space-y-16 sm:space-y-24">
          <motion.div variants={staggerContainer} id="education">
            <motion.h2
              variants={fadeInUp}
              className="text-2xl sm:text-3xl font-bold font-headline mb-12 sm:mb-16 flex items-center gap-4"
            >
              <span className="w-8 sm:w-12 h-0.5 bg-primary"></span> Academic Background
            </motion.h2>
            <motion.div
              variants={cardVariants}
              {...liftOnHover}
              className="p-6 sm:p-8 bg-surface-container rounded-2xl sm:rounded-3xl border border-outline-variant/10"
            >
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                B.E in Computer & Automation Engineering
              </h3>
              <div className="text-secondary font-label text-xs sm:text-sm mb-4">
                Homs University | 2022 - 2026
              </div>
              <p className="text-on-surface-variant text-xs sm:text-sm">
                Focusing on system architecture, algorithms, and automated control systems.
              </p>
            </motion.div>
          </motion.div>

          {/* يمكنك إضافة شهادات أو إنجازات إضافية هنا إذا أردت */}
          <motion.div variants={fadeInUp}>
            <motion.h2
              variants={fadeInUp}
              className="text-2xl sm:text-3xl font-bold font-headline mb-8 sm:mb-12 flex items-center gap-4"
            >
              <span className="w-8 sm:w-12 h-0.5 bg-primary"></span> Certifications
            </motion.h2>
            <motion.div
              variants={cardVariants}
              {...liftOnHover}
              className="p-6 sm:p-8 bg-surface-container rounded-2xl sm:rounded-3xl border border-outline-variant/10"
            >
              <ul className="space-y-3 text-on-surface-variant text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-primary-container">✓</span> Recommendation Certificate – Focal X Agency
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-container">✓</span> Frontend Development Trainee – Focal X Academy
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ExperienceSection;