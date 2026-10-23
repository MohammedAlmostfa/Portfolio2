
// src/data/techStackData.js

// Section Text
export const techStackText = {
  title: 'My Technical',
  titleHighlight: 'Toolbox',
  description:
    'Technologies I use to build web applications, develop backend APIs, manage relational databases, and create responsive user interfaces.',
};

// Skill Level Text Colors
export const levelColor = {
  Expert: 'text-emerald-400',
  High: 'text-blue-400',
  Mid: 'text-yellow-400',
  Low: 'text-gray-400',
};

// Skill Level Progress Colors
export const levelBgColor = {
  Expert: 'bg-emerald-400',
  High: 'bg-blue-400',
  Mid: 'bg-yellow-400',
  Low: 'bg-gray-400',
};

// Technology Categories
export const techCategories = [
  {
    title: 'Backend Development',
    color: 'text-primary',
    borderColor: 'border-primary',
    skills: [
      { name: 'PHP', level: 'High', levelWidth: 'w-4/5' },
      { name: 'Laravel', level: 'High', levelWidth: 'w-4/5' },
      { name: 'ASP.NET Core', level: 'Mid', levelWidth: 'w-3/5' },
      { name: 'C#', level: 'Mid', levelWidth: 'w-3/5' },
    ],
  },
  {
    title: 'Databases',
    color: 'text-primary',
    borderColor: 'border-primary',
    skills: [
      { name: 'MySQL', level: 'High', levelWidth: 'w-4/5' },
      { name: 'PostgreSQL', level: 'Mid', levelWidth: 'w-3/5' },
      { name: 'SQL', level: 'Mid', levelWidth: 'w-3/5' },
    ],
  },
  {
    title: 'Frontend Development',
    color: 'text-primary-container',
    borderColor: 'border-primary-container',
    skills: [
      { name: 'HTML / CSS', level: 'High', levelWidth: 'w-4/5' },
      { name: 'JavaScript', level: 'High', levelWidth: 'w-4/5' },
      { name: 'TypeScript', level: 'Mid', levelWidth: 'w-3/5' },
      { name: 'Angular', level: 'Mid', levelWidth: 'w-3/5' },
      { name: 'React', level: 'Low', levelWidth: 'w-2/5' },
      { name: 'Bootstrap', level: 'High', levelWidth: 'w-4/5' },
    ],
  },
  {
    title: 'Tools & DevOps',
    color: 'text-primary',
    borderColor: 'border-primary',
    skills: [
      { name: 'Git / GitHub', level: 'Mid', levelWidth: 'w-3/5' },
      { name: 'Docker', level: 'Low', levelWidth: 'w-2/5' },
      { name: 'CI/CD', level: 'Low', levelWidth: 'w-2/5' },
    ],
  },
  {
    title: 'Programming Languages',
    color: 'text-primary-container',
    borderColor: 'border-primary-container',
    skills: [
      { name: 'PHP', level: 'High', levelWidth: 'w-4/5' },
      { name: 'C#', level: 'Mid', levelWidth: 'w-3/5' },
      { name: 'JavaScript', level: 'High', levelWidth: 'w-4/5' },
      { name: 'C++', level: 'Mid', levelWidth: 'w-3/5' },
      { name: 'Python', level: 'Low', levelWidth: 'w-2/5' },
      { name: 'Java', level: 'Low', levelWidth: 'w-2/5' },
    ],
  },
];
