// src/data/projectsData.js

// استيراد الصور (يمكن استيرادها هنا بدلاً من المكون)
import projectImg1 from '../assets/unnamed.png';
import projectImg2 from '../assets/unnamed(1).png';  
import projectImg3 from '../assets/unnamed(2).png';  

// النصوص الثابتة للقسم
export const projectsText = {
  badge: 'Case Studies',
  title: 'Featured Engineering',
  viewArchive: 'View Archive',
  showDetails: 'show details',
};

// بيانات المشاريع (تم تحويلها إلى مصفوفة مع الحفاظ على المفاتيح للوصول السهل)
export const projects = {
  educational: {
    name: 'Educational Platform',
    desc: 'A robust and scalable educational platform built with Laravel.',
    tech: ['Laravel', 'MySQL', 'JWT'],
    img: projectImg2,
    link: 'Educational%20Platform',
  },
  wasalni: {
    name: 'Wasalni',
    desc: 'A scalable ride-sharing backend system built with Laravel that connects users with service providers through trip booking and real-time notifications.',
    tech: ['Laravel', 'MySQL', 'JWT', 'FCM'],
    link: 'Wasalni',
  },
  restaurant: {
    name: 'Restaurant Reservation',
    desc: 'A multi-role restaurant management system built with Laravel enabling customers to book tables and managers to handle reservations.',
    tech: ['Laravel', 'MySQL', 'JWT', 'FCM'],
    link: 'Restaurant%20Reservation',
  },
  masari: {
    name: "Masari Al-Jam'iya",
    desc: 'A university admission guidance platform helping students explore majors and understand admission requirements.',
    tech: ['Laravel', 'MySQL', 'Auth', 'FCM'],
    link: 'Masari%20Al-Jamiya',
  },
  erp: {
    name: 'Statistics ERP',
    desc: 'A comprehensive enterprise resource planning system managing sales operations, inventory, and financial transactions with advanced reporting.',
    tech: ['Laravel', 'MySQL', 'JWT', 'WhatsApp'],
    link: 'Statistics%20ERP',
  },
  obg: {
    name: 'OBG Marketplace',
    desc: 'A scalable secondhand marketplace platform for buying and selling used tools and equipment with secure payment processing.',
    tech: ['Laravel', 'MySQL', 'JWT', 'FCM'],
    img: projectImg3,
    link: 'OBG%20Marketplace',
  },
  vocaApp: {
    name: 'vocaApp',
    desc: 'A mobile app for saving and reviewing English vocabulary using spaced repetition. Built with React + Capacitor + SQLite.',
    tech: ['React', 'Capacitor', 'SQLite'],
    link: 'vocaApp',
  },
};

// يمكن تصدير مصفوفة المشاريع إذا أردت التكرار لاحقاً
export const projectsList = Object.values(projects);