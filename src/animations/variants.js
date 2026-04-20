// src/animations/variants.js
// ============================================
// 1. BASIC ENTRY ANIMATIONS (الدخول الأساسي)
// ============================================

export const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const zoomIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// ============================================
// 2. STAGGER CONTAINERS (لترتيب ظهور العناصر الداخلية)
// ============================================

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const staggerCards = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

// ============================================
// 3. CARD / ITEM VARIANTS (للبطاقات والعناصر المتكررة)
// ============================================

export const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
};

export const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.5,
    },
  },
};

// ============================================
// 4. HOVER / INTERACTION (للتفاعلات)
// ============================================

export const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: { type: "spring", stiffness: 400, damping: 17 },
};

export const iconHover = {
  whileHover: { scale: 1.2, rotate: 5 },
  transition: { type: "spring", stiffness: 300 },
};

export const liftOnHover = {
  whileHover: { y: -8, transition: { type: "spring", stiffness: 200 } },
};

// ============================================
// 5. SPECIAL EFFECTS (تأثيرات خاصة)
// ============================================

export const imageScale = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 0.6,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const pulseRing = {
  initial: { scale: 1, opacity: 0.2 },
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.2, 0.5, 0.2],
    transition: { repeat: Infinity, duration: 2, ease: "easeInOut" },
  },
};

// ============================================
// 6. PAGE TRANSITIONS (لانتقالات الصفحات)
// ============================================

export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

// أضف هذا في نهاية الملف (قبل التصدير)

export const containerVariants = staggerContainer; // إعادة تصدير للتوافق مع الكود القديم

// نسخة محسنة من cardVariants مع دعم hover
export const cardWithHover = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
  hover: {
    scale: 1.05,
    y: -5,
    transition: { type: "spring", stiffness: 300, damping: 10 },
  },
};