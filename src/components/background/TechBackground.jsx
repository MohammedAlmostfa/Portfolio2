import React, { useEffect, useState } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useReducedMotion,
} from 'framer-motion';
import {
  SiLaravel, SiPhp, SiReact, SiMysql,
  SiAngular, SiTypescript, SiSqlite, SiJsonwebtokens,
} from 'react-icons/si';

// x,y = مكان البلاطة % | z = العمق (سالب = أبعد) | size = عرض البلاطة px
// speed = حركة الـ scroll | spin = دوران | delay = تأخير الطفو
const techs = [
  { name: 'Laravel',    Icon: SiLaravel,       color: '#FF2D20', x: 6,  y: 8,  z: 140,  size: 190, speed: -900, spin: 140,  delay: 0 },
  { name: 'React',      Icon: SiReact,         color: '#61DAFB', x: 74, y: 12, z: -40,  size: 170, speed: -520, spin: -200, delay: 0.8 },
  { name: 'PHP',        Icon: SiPhp,           color: '#777BB4', x: 62, y: 58, z: -240, size: 140, speed: -260, spin: 110,  delay: 1.6 },
  { name: 'MySQL',      Icon: SiMysql,         color: '#4479A1', x: 14, y: 46, z: -140, size: 150, speed: -360, spin: -130, delay: 2.4 },
  { name: 'Angular',    Icon: SiAngular,       color: '#DD0031', x: 80, y: 74, z: 90,   size: 180, speed: -760, spin: 170,  delay: 0.4 },
  { name: 'TypeScript', Icon: SiTypescript,    color: '#3178C6', x: 36, y: 80, z: -300, size: 130, speed: -200, spin: -90,  delay: 1.2 },
  { name: 'SQLite',     Icon: SiSqlite,        color: '#44A8DB', x: 46, y: 18, z: -420, size: 120, speed: -150, spin: 80,   delay: 2 },
  { name: 'JWT',        Icon: SiJsonwebtokens, color: '#D63AFF', x: 2,  y: 82, z: 30,   size: 140, speed: -620, spin: -150, delay: 2.8 },
];

const Z_MIN = -420;
const Z_RANGE = 560; // من -420 إلى 140

// هل الشاشة صغيرة؟ (نصغّر البلاطات على الموبايل)
const useIsMobile = () => {
  const [m, setM] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const on = () => setM(mq.matches);
    on();
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);
  return m;
};

const TechItem = ({
  Icon, color, x, y, z, size, speed, spin, delay,
  progress, mouseX, mouseY, scale, animated,
}) => {
  // 0 = الأبعد، 1 = الأقرب
  const depth = (z - Z_MIN) / Z_RANGE;

  const translateY = useTransform(progress, [0, 1], [0, speed]);
  const rotateY = useTransform(progress, [0, 1], [0, spin]);
  const rotateX = useTransform(progress, [0, 1], [0, spin / 3]);

  // الماوس: القريب بتحرك أكتر من البعيد = إحساس عمق حقيقي
  const factor = 14 + depth * 46;
  const mx = useTransform(mouseX, (v) => v * factor);
  const my = useTransform(mouseY, (v) => v * factor);

  const tile = size * scale;
  const opacity = 0.4 + depth * 0.5; // 0.4 → 0.9
  const blur = (1 - depth) * 1.6; // البعيد شوي ضبابي

  return (
    <motion.div
      className="absolute"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        x: mx,
        y: translateY,
        z,
        rotateY,
        rotateX,
        opacity,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* طبقة ثانية للماوس عشان ما تتداخل مع الـ scroll */}
      <motion.div style={{ y: my }}>
        {/* الطفو المستمر */}
        <motion.div
          animate={animated ? { y: [0, -16, 0] } : undefined}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay }}
          style={{ filter: blur > 0.1 ? `blur(${blur}px)` : undefined }}
        >
          {/* البلاطة الزجاجية */}
          <div
            style={{
              width: tile,
              height: tile,
              borderRadius: tile * 0.28,
              display: 'grid',
              placeItems: 'center',
              position: 'relative',
              background: `
                radial-gradient(120% 120% at 20% 10%, ${color}30 0%, transparent 55%),
                linear-gradient(145deg, rgba(255,255,255,0.10), rgba(255,255,255,0.02))
              `,
              border: '1px solid rgba(255,255,255,0.14)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              boxShadow: `
                inset 0 1px 0 rgba(255,255,255,0.22),
                inset 0 -20px 40px ${color}14,
                0 30px 80px -20px ${color}66,
                0 0 0 1px rgba(0,0,0,0.25)
              `,
            }}
          >
            <Icon
              size={tile * 0.5}
              color={color}
              style={{ filter: `drop-shadow(0 0 ${tile * 0.12}px ${color}99)` }}
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// بقع ضوء كبيرة بطيئة (aurora) بألوان التقنيات
const Aurora = ({ animated }) => {
  const blobs = [
    { color: '#00d9ff', top: '-15%', left: '-10%', size: '55vmax', dur: 38 },
    { color: '#6001d1', top: '30%', left: '60%', size: '60vmax', dur: 46 },
    { color: '#00d9ff', top: '65%', left: '-15%', size: '50vmax', dur: 52 },
  ];
  return (
    <>
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            top: b.top,
            left: b.left,
            width: b.size,
            height: b.size,
            background: `radial-gradient(circle, ${b.color}33 0%, transparent 65%)`,
            filter: 'blur(40px)',
          }}
          animate={
            animated
              ? { x: [0, 80, -40, 0], y: [0, -60, 40, 0], scale: [1, 1.12, 0.95, 1] }
              : undefined
          }
          transition={{ repeat: Infinity, duration: b.dur, ease: 'easeInOut' }}
        />
      ))}
    </>
  );
};

const TechBackground = () => {
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const animated = !reduceMotion;
  const scale = isMobile ? 0.55 : 1;

  const { scrollYProgress } = useScroll();
  const zero = useMotionValue(0);

  // spring = حركة ناعمة
  const smoothScroll = useSpring(scrollYProgress, { stiffness: 80, damping: 20, mass: 0.4 });
  const progress = animated ? smoothScroll : zero;

  // الماوس من -1 إلى 1
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mouseX = useSpring(rawX, { stiffness: 60, damping: 18, mass: 0.6 });
  const mouseY = useSpring(rawY, { stiffness: 60, damping: 18, mass: 0.6 });

  useEffect(() => {
    if (!animated) return;
    // ما في ماوس على اللمس
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const onMove = (e) => {
      rawX.set((e.clientX / window.innerWidth) * 2 - 1);
      rawY.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [animated, rawX, rawY]);

  // ميلان المشهد: scroll + ماوس
  const sceneRotateX = useTransform([progress, mouseY], ([s, m]) => 8 - 16 * s - m * 4);
  const sceneRotateY = useTransform(mouseX, (m) => m * 5);

  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* 1) ضوء خلفي */}
      <Aurora animated={animated} />

      {/* 2) شبكة نقاط خفيفة تتلاشى عند الأطراف */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.09) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          maskImage: 'radial-gradient(ellipse at center, #000 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, #000 30%, transparent 75%)',
        }}
      />

      {/* 3) مشهد الـ 3D */}
      <div className="absolute inset-0" style={{ perspective: 1100 }}>
        <motion.div
          className="absolute inset-0"
          style={{
            transformStyle: 'preserve-3d',
            rotateX: sceneRotateX,
            rotateY: sceneRotateY,
          }}
        >
          {techs.map((t) => (
            <TechItem
              key={t.name}
              {...t}
              progress={progress}
              mouseX={mouseX}
              mouseY={mouseY}
              scale={scale}
              animated={animated}
            />
          ))}
        </motion.div>
      </div>

      {/* 4) vignette عشان المحتوى يبقى مقروء */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)',
        }}
      />
    </div>
  );
};

export default TechBackground;