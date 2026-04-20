// src/data/techStackData.js

// النصوص الثابتة للقسم
export const techStackText = {
  title: 'Stack of',
  titleHighlight: 'Excellence',
  description:
    'Mastery over the technologies that power the modern web, from server logic to devops workflows.',
};

// ألوان النص حسب المستوى
export const levelColor = {
  Expert: 'text-emerald-400',
  High: 'text-blue-400',
  Mid: 'text-yellow-400',
  Low: 'text-gray-400',
};

// ألوان الخلفية لخط التقدم حسب المستوى (جديدة)
export const levelBgColor = {
  Expert: 'bg-emerald-400',
  High: 'bg-blue-400',
  Mid: 'bg-yellow-400',
  Low: 'bg-gray-400',
};

// فئات التقنيات (البيانات الأساسية)
export const techCategories = [
  {
    title: 'Backend',
    color: 'text-primary',        // للعنوان فقط
    borderColor: 'border-primary',
    skills: [
      { name: 'PHP', level: 'Expert', levelWidth: 'w-full' },
      { name: 'Laravel', level: 'Expert', levelWidth: 'w-full' },
    ],
  },
  {
    title: 'Databases',
    color: 'text-primary',
    borderColor: 'border-primary',
    skills: [
      { name: 'MySQL', level: 'Expert', levelWidth: 'w-full' },
    ],
  },
  {
    title: 'DevOps',
    color: 'text-primary',
    borderColor: 'border-primary',
    skills: [
      { name: 'Git', level: 'High', levelWidth: 'w-4/5' },
      { name: 'Docker', level: 'Mid', levelWidth: 'w-3/5' },
      { name: 'CI/CD', level: 'Mid', levelWidth: 'w-3/5' },
    ],
  },
  {
    title: 'Frontend',
    color: 'text-primary-container',
    borderColor: 'border-primary-container',
    skills: [
      { name: 'HTML/CSS/JS', level: 'Expert', levelWidth: 'w-full' },
      { name: 'Bootstrap', level: 'High', levelWidth: 'w-4/5' },
      { name: 'React', level: 'Low', levelWidth: 'w-2/5' },
    ],
  },
  {
    title: 'Languages',
    color: 'text-primary-container',
    borderColor: 'border-primary-container',
    skills: [
      { name: 'C++', level: 'Expert', levelWidth: 'w-full' },
      { name: 'Java', level: 'High', levelWidth: 'w-4/5' },
      { name: 'Python', level: 'Mid', levelWidth: 'w-3/5' },
    ],
  },
];