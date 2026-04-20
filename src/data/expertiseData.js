// src/data/expertiseData.js

// قائمة مجالات الخبرة
export const expertiseItems = [
  {
    icon: 'php',
    title: 'Backend Development',
    desc: 'Building monolithic and microservices architectures using Laravel and PHP with a focus on domain-driven design.',
    colorKey: 'primary',
  },
  {
    icon: 'api',
    title: 'REST APIs',
    desc: 'Designing and documenting comprehensive, versioned API endpoints for web and mobile clients.',
    colorKey: 'secondary',
  },
  {
    icon: 'database',
    title: 'Database Optimization',
    desc: 'Refining complex SQL queries, indexing strategies, and relational data modeling for MySQL.',
    colorKey: 'tertiary',
  },
  {
    icon: 'sync',
    title: 'Real-time Systems',
    desc: 'Implementing WebSockets and event-driven communication for live tracking and instant notifications.',
    colorKey: 'primary-container',
  },
  {
    icon: 'bolt',
    title: 'Performance',
    desc: 'Integrating Redis caching and background job processing to handle heavy computational loads.',
    colorKey: 'secondary-container',
  },
  {
    icon: 'cloud_done',
    title: 'DevOps',
    desc: 'Managing CI/CD pipelines, Docker containers, and cloud deployment for consistent production environments.',
    colorKey: 'outline',
  },
];

// خرائط الألوان (يمكن وضعها هنا أو في ملف منفصل مثل theme.js)
export const borderColorMap = {
  primary: 'border-primary',
  secondary: 'border-secondary',
  tertiary: 'border-tertiary',
  'primary-container': 'border-primary-container',
  'secondary-container': 'border-secondary-container',
  outline: 'border-outline',
};

export const iconColorMap = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  tertiary: 'text-tertiary',
  'primary-container': 'text-primary-container',
  'secondary-container': 'text-secondary-container',
  outline: 'text-outline',
};

// النصوص الثابتة للقسم
export const expertiseText = {
  badge: 'Core Strengths',
  title: 'Technical Specialization',
};