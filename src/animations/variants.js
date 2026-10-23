// src/animations/variants.js

// ============================================
// 0. SHARED CONFIG (إعدادات مشتركة)
// ============================================

export const easeOutExpo = [0.16, 1, 0.3, 1]; // حركة ناعمة وفخمة
export const easeSmooth = [0.25, 0.1, 0.25, 1];

const spring = { type: "spring", stiffness: 100, damping: 15 };
const springSnappy = { type: "spring", stiffness: 300, damping: 20 };

// إعدادات viewport جاهزة: <motion.div viewport={viewportOnce} />
export const viewportOnce = { once: true, amount: 0.15 };

// ============================================
// 1. BASIC ENTRY ANIMATIONS (الدخول الأساسي)
// ============================================

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOutExpo },
  },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easeOutExpo },
  },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easeOutExpo },
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

// دخول مع blur: ممتاز للعناوين والأقسام المهمة
export const blurIn = {
  hidden: { opacity: 0, y: 30, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: easeOutExpo },
  },
};

// ============================================
// 2. TEXT REVEAL (كشف النصوص)
// ============================================

// الاستخدام: غلاف بـ overflow-hidden + العنصر الداخلي motion بهاد الـ variant
// <span className="block overflow-hidden"><motion.span variants={maskReveal} className="block">Title</motion.span></span>
export const maskReveal = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 0.8, ease: easeOutExpo },
  },
};

// كشف كلمة كلمة: الحاوية بـ wordContainer وكل كلمة بـ wordItem
export const wordContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

export const wordItem = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: easeOutExpo },
  },
};

// ============================================
// 3. STAGGER CONTAINERS (لترتيب ظهور العناصر الداخلية)
// ============================================

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

export const staggerCards = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

// للـ tags الصغيرة (التقنيات): ظهور سريع ومتتابع
export const tagContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.3 } },
};

export const tagItem = {
  hidden: { opacity: 0, scale: 0.7, y: 8 },
  visible: { opacity: 1, scale: 1, y: 0, transition: springSnappy },
  hover: { scale: 1.08, y: -2, transition: springSnappy },
};

// ============================================
// 4. CARD / ITEM VARIANTS (للبطاقات والعناصر المتكررة)
// ============================================

export const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
};

// الكرت الأساسي: دخول + hover (كان ناقصه hover)
export const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    boxShadow: "0 0 0 0 rgba(0,0,0,0)",
    transition: spring,
  },
  hover: {
    y: -8,
    scale: 1.015,
    boxShadow: "0 24px 48px -16px rgba(0,0,0,0.55)",
    transition: { type: "spring", stiffness: 250, damping: 20 },
  },
};

// ============================================
// 5. CHILD VARIANTS (بتتأثر تلقائياً بـ hover الأب)
// ============================================
// إذا الأب motion بـ whileHover="hover" وهدول الأبناء motion بـ variants،
// بياخدوا حالة hover تلقائياً بدون أي state إضافي.

// صورة الخلفية: zoom-out عند الدخول، zoom-in عند الـ hover
export const imageHover = {
  hidden: { scale: 1.2 },
  visible: { scale: 1, transition: { duration: 1.2, ease: easeOutExpo } },
  hover: { scale: 1.08, transition: { duration: 0.7, ease: easeOutExpo } },
};

// سهم "show details"
export const arrowHover = {
  hidden: { x: 0 },
  visible: { x: 0, transition: springSnappy },
  hover: { x: 6, transition: springSnappy },
};

// شريط التقدم: progressBar("80%")
export const progressBar = (width = "100%") => ({
  hidden: { width: 0 },
  visible: {
    width,
    transition: { duration: 1.2, delay: 0.3, ease: easeOutExpo },
  },
});

// ============================================
// 6. HOVER / INTERACTION (للتفاعلات)
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
// 7. SPECIAL EFFECTS (تأثيرات خاصة)
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

// حركة طفو خفيفة (للأيقونات أو العناصر الزخرفية)
export const floating = {
  animate: {
    y: [0, -10, 0],
    transition: { repeat: Infinity, duration: 4, ease: "easeInOut" },
  },
};

// ============================================
// 8. PAGE TRANSITIONS (لانتقالات الصفحات)
// ============================================

export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

// ============================================
// 9. BACKWARD COMPATIBILITY (للتوافق مع الكود القديم)
// ============================================

export const containerVariants = staggerContainer;

export const cardWithHover = cardVariants;