import React from 'react';

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
    <section className="py-16 sm:py-24 md:py-32" id="expertise">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="mb-12 sm:mb-16">
          <span className="text-primary font-label tracking-widest uppercase text-xs sm:text-sm mb-2 block">Core Strengths</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline">Technical Specialization</h2>
        </div>
        <div className="expertise-grid">
          {expertiseData.map((item, idx) => (
            <div key={idx} className={`p-6 sm:p-8 bg-surface-container border-l-4 ${borderColorMap[item.color]} transition-all hover:bg-surface-container-high group`}>
              <span className={`material-symbols-outlined text-3xl sm:text-4xl ${iconColorMap[item.color]} mb-4 sm:mb-6 block group-hover:scale-110 transition-transform`}>{item.icon}</span>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{item.title}</h3>
              <p className="text-sm sm:text-base text-on-surface-variant">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;