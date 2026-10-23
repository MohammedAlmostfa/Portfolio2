
// src/data/expertiseData.js

// Core Technical Expertise
export const expertiseItems = [
  {
    icon: 'php',
    title: 'Backend Development',
    desc: 'Building web applications and backend services using PHP and Laravel, with an emphasis on clean, secure, and maintainable code.',
    colorKey: 'primary',
  },
  {
    icon: 'api',
    title: 'REST API Development',
    desc: 'Developing RESTful APIs for web and mobile applications, including authentication, authorization, validation, and error handling.',
    colorKey: 'secondary',
  },
  {
    icon: 'database',
    title: 'Database Design',
    desc: 'Designing relational database schemas, managing data relationships, and working with MySQL and PostgreSQL.',
    colorKey: 'tertiary',
  },
  {
    icon: 'code',
    title: 'ASP.NET Core',
    desc: 'Developing backend applications with C#, ASP.NET Core, Entity Framework Core, and PostgreSQL through practical projects.',
    colorKey: 'primary-container',
  },
  {
    icon: 'layers',
    title: 'Software Architecture',
    desc: 'Applying separation of concerns, reusable components, and established design principles to build maintainable applications.',
    colorKey: 'secondary-container',
  },
  {
    icon: 'web',
    title: 'Frontend Development',
    desc: 'Building responsive web interfaces using Angular, TypeScript, HTML, and CSS, with practical experience integrating APIs.',
    colorKey: 'outline',
  },
];

// Border color mapping
export const borderColorMap = {
  primary: 'border-primary',
  secondary: 'border-secondary',
  tertiary: 'border-tertiary',
  'primary-container': 'border-primary-container',
  'secondary-container': 'border-secondary-container',
  outline: 'border-outline',
};

// Icon color mapping
export const iconColorMap = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  tertiary: 'text-tertiary',
  'primary-container': 'text-primary-container',
  'secondary-container': 'text-secondary-container',
  outline: 'text-outline',
};

// Section Text
export const expertiseText = {
  badge: 'Technical Skills',
  title: 'What I Bring to the Table',
};