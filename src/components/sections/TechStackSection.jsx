import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerCards, cardVariants, liftOnHover } from '../../animations/variants';

const TechStackSection = () => {
  // بيانات التقنيات مع توحيد الألوان للأزرق
  const techCategories = [
    {
      title: 'Backend',
      color: 'text-primary',        // أزرق
      borderColor: 'border-primary',
      skills: [
        { name: 'PHP', level: 'Expert', levelWidth: 'w-full' },
        { name: 'Laravel', level: 'Expert', levelWidth: 'w-full' },
      ],
    },
    {
      title: 'Databases',
      color: 'text-primary',        // تم التغيير من text-secondary إلى text-primary
      borderColor: 'border-primary',
      skills: [
        { name: 'MySQL', level: 'Expert', levelWidth: 'w-full' },
      ],
    },
    {
      title: 'DevOps',
      color: 'text-primary',        // أزرق
      borderColor: 'border-primary',
      skills: [
        { name: 'Git', level: 'High', levelWidth: 'w-4/5' },
        { name: 'Docker', level: 'Mid', levelWidth: 'w-3/5' },
        { name: 'CI/CD', level: 'Mid', levelWidth: 'w-3/5' },
      ],
    },
    {
      title: 'Frontend',
      color: 'text-primary-container', // أزرق فاتح
      borderColor: 'border-primary-container',
      skills: [
        { name: 'HTML/CSS/JS', level: 'Expert', levelWidth: 'w-full' },
        { name: 'Bootstrap', level: 'High', levelWidth: 'w-4/5' },
        { name: 'React', level: 'Low', levelWidth: 'w-2/5' },
      ],
    },
    {
      title: 'Languages',
      color: 'text-primary-container', // تم التغيير من text-secondary-container إلى text-primary-container
      borderColor: 'border-primary-container',
      skills: [
        { name: 'C++', level: 'Expert', levelWidth: 'w-full' },
        { name: 'Java', level: 'High', levelWidth: 'w-4/5' },
        { name: 'Python', level: 'Mid', levelWidth: 'w-3/5' },
      ],
    },
  ];

  const levelColor = {
    Expert: 'text-emerald-400',
    High: 'text-blue-400',
    Mid: 'text-yellow-400',
    Low: 'text-gray-400',
  };

  return (
    <motion.section
      className="py-16 sm:py-24 md:py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          variants={fadeInUp}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline mb-3 sm:mb-4">
            Stack of <span className="text-primary-container">Excellence</span>
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-sm sm:text-base">
            Mastery over the technologies that power the modern web, from server logic to devops workflows.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          variants={staggerCards}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {techCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              {...liftOnHover}
              className={`bg-surface-container p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border-l-4 ${category.borderColor} hover:bg-surface-container-high transition-all duration-300`}
            >
              <h4 className={`${category.color} font-label mb-4 sm:mb-6 text-xs sm:text-sm uppercase tracking-wider`}>
                {category.title}
              </h4>
              <ul className="space-y-4 sm:space-y-5">
                {category.skills.map((skill, skillIdx) => (
                  <motion.li
                    key={skillIdx}
                    className="space-y-1"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: skillIdx * 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between text-sm sm:text-base">
                      <span className="font-bold text-white">{skill.name}</span>
                      <span className={`text-xs font-mono ${levelColor[skill.level]}`}>
                        {skill.level}
                      </span>
                    </div>
                    <div className="w-full bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${category.color.replace('text', 'bg')}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 0.8, delay: skillIdx * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className={skill.levelWidth}></div>
                      </motion.div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TechStackSection;