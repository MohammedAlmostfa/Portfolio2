import React from 'react';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants, cardWithHover } from '../../animations/variants';

const AboutSection = () => {
  // تعريف متغيرات البطاقات مع إضافة تأخير مخصص لكل بطاقة (اختياري)
  const cards = [
    { icon: 'code', title: 'Clean Code', desc: 'Prioritizing maintainability and readability.', color: 'text-primary', mt: false },
    { icon: 'speed', title: 'High Perf', desc: 'Optimizing every millisecond of latency.', color: 'text-secondary', mt: true },
    { icon: 'security', title: 'Security', desc: 'Hardened endpoints and secure data.', color: 'text-tertiary', mt: false },
    { icon: 'hub', title: 'Scalability', desc: 'Architectures ready for vertical & horizontal growth.', color: 'text-primary-container', mt: true }
  ];

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-surface-container-low" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 grid md:grid-cols-2 gap-12 md:gap-24 items-center">
        {/* العمود الأيسر - النصوص والمعلومات (بدون تغيير) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute -top-12 -left-12 text-[10rem] font-bold text-surface-variant select-none hidden sm:block"
          >
            BIO
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline mb-6 sm:mb-8"
          >
            Architecting the
            <span className="text-primary-container"> invisible layer</span>
          </motion.h2>

          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6 text-on-surface-variant text-base sm:text-lg">
            <p>
              I am a passionate Backend Developer with over 2 years of professional
              experience, specializing in the PHP/Laravel ecosystem. My focus
              lies in creating robust, secure, and highly scalable server-side
              architectures that power complex applications.
            </p>
            <p>
              As a Co-Founder of DevNest, I balance technical leadership with
              hands-on development, ensuring our team delivers
              high-performance solutions that meet the rigorous demands of
              modern digital transformation.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8 sm:mt-12 space-y-3 sm:space-y-4">
            {[
              { icon: 'mail', text: 'mohammedalmostfa36@gmail.com', href: 'mailto:mohammedalmostfa36@gmail.com' },
              { icon: 'phone_iphone', text: '+963 991 851 269', href: 'tel:+963991851269' },
              { icon: 'location_on', text: 'Damascus / Homs, Syria' }
            ].map((contact, idx) => (
              <motion.a
                key={idx}
                href={contact.href || '#'}
                whileHover={{ x: 8, transition: { type: 'spring', stiffness: 300 } }}
                className="flex items-center gap-4 group cursor-pointer"
                style={{ textDecoration: 'none' }}
              >
                <span className="material-symbols-outlined text-primary flex-shrink-0 group-hover:scale-110 transition-transform">
                  {contact.icon}
                </span>
                <span className="font-label text-sm sm:text-base break-all text-on-surface-variant group-hover:text-primary transition-colors">
                  {contact.text}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* العمود الأيمن - البطاقات الأربع مع دخول متتالي واضح */}
        <motion.div
          className="about-features grid grid-cols-2 gap-3 sm:gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,     // كل بطاقة تتأخر 0.2 ثانية عن السابقة
                delayChildren: 0.1,       // تأخير أولي قبل بدء ظهور البطاقات
              },
            },
          }}
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.9 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { type: 'spring', stiffness: 120, damping: 12 }
                },
                hover: {
                  scale: 1.05,
                  y: -5,
                  transition: { type: 'spring', stiffness: 300 },
                },
              }}
              whileHover="hover"
              className={`aspect-square bg-surface-container rounded-2xl flex flex-col items-center justify-center p-4 sm:p-8 text-center hover:bg-surface-container-high transition-colors ${card.mt ? 'mt-6 sm:mt-12' : ''}`}
            >
              <motion.span
                className={`material-symbols-outlined text-3xl sm:text-4xl ${card.color} mb-2 sm:mb-4`}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                {card.icon}
              </motion.span>
              <h4 className="font-bold text-white text-sm sm:text-base mb-1 sm:mb-2">{card.title}</h4>
              <p className="text-xs sm:text-sm text-on-surface-variant">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;