// src/components/sections/ContactSection.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  staggerContainer,
  fadeInUp,
  itemVariants,
  cardVariants,
  scaleOnHover,
} from '../../animations/variants';
import {
  contactItems,
  socialLinks,
  contactText,
  formConfig,
} from '../../data/contactData';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const payload = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      _subject: `${formConfig.emailSubjectPrefix} ${formData.name} عبر موقع portfolio`,
    };

    try {
      const response = await fetch(formConfig.submitUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <motion.section
      className="py-16 sm:py-24 md:py-32 bg-surface-container-low"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* العمود الأيسر - المعلومات */}
          <motion.div variants={staggerContainer}>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline mb-6 sm:mb-8"
            >
              {contactText.titlePrefix}{' '}
              <span className="text-primary">{contactText.titleHighlight}</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-on-surface-variant text-base sm:text-lg mb-8 sm:mb-12"
            >
              {contactText.description}
            </motion.p>

            <motion.div variants={staggerContainer} className="space-y-6 sm:space-y-8">
              {contactItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex items-center gap-4 sm:gap-6"
                >
                  <div className="w-12 sm:w-14 h-12 sm:h-14 logic-gradient rounded-lg sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-on-primary text-xl sm:text-2xl">
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-label text-on-surface-variant uppercase">
                      {item.label}
                    </div>
                    <motion.a
                      href={item.href}
                      target={item.icon === 'call' ? '_blank' : undefined}
                      rel={item.icon === 'call' ? 'noopener noreferrer' : undefined}
                      className={`text-sm sm:text-lg md:text-xl font-bold text-white break-all ${item.hoverColor} transition-colors`}
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {item.value}
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-12 sm:mt-16 pt-8 sm:pt-16 pb-12 sm:pb-16 border-t border-outline-variant/30"
            >
              <h4 className="font-label text-xs uppercase mb-4 sm:mb-6 text-on-surface-variant">
                {contactText.followText}
              </h4>
              <div className="flex gap-4 sm:gap-6">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 sm:w-12 h-10 sm:h-12 bg-surface-container rounded-full flex items-center justify-center hover:text-primary transition-colors border border-outline-variant/10"
                    whileHover={{ scale: 1.15, y: -3 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <img
                      alt={social.name}
                      className="h-6 sm:h-9"
                      src={social.icon}
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* العمود الأيمن - نموذج الاتصال */}
          <motion.div
            variants={cardVariants}
            className="bg-surface-container-high rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-outline-variant/20"
          >
            <motion.h3
              variants={fadeInUp}
              className="text-2xl sm:text-3xl font-bold mb-6"
            >
              {contactText.formTitle}
            </motion.h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <motion.div variants={fadeInUp}>
                <label className="block text-sm font-label mb-2 text-on-surface-variant">
                  {contactText.nameLabel}
                </label>
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-surface-container rounded-lg px-4 py-3 border border-outline-variant/30 focus:border-primary focus:outline-none transition"
                  placeholder={contactText.namePlaceholder}
                  whileFocus={{ scale: 1.02, borderColor: '#00d9ff' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <label className="block text-sm font-label mb-2 text-on-surface-variant">
                  {contactText.emailLabel}
                </label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-surface-container rounded-lg px-4 py-3 border border-outline-variant/30 focus:border-primary focus:outline-none transition"
                  placeholder={contactText.emailPlaceholder}
                  whileFocus={{ scale: 1.02, borderColor: '#00d9ff' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <label className="block text-sm font-label mb-2 text-on-surface-variant">
                  {contactText.subjectLabel}
                </label>
                <motion.input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-surface-container rounded-lg px-4 py-3 border border-outline-variant/30 focus:border-primary focus:outline-none transition"
                  placeholder={contactText.subjectPlaceholder}
                  whileFocus={{ scale: 1.02, borderColor: '#00d9ff' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <label className="block text-sm font-label mb-2 text-on-surface-variant">
                  {contactText.messageLabel}
                </label>
                <motion.textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-surface-container rounded-lg px-4 py-3 border border-outline-variant/30 focus:border-primary focus:outline-none transition resize-none"
                  placeholder={contactText.messagePlaceholder}
                  whileFocus={{ scale: 1.02, borderColor: '#00d9ff' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                className="w-full logic-gradient rounded-xl py-3 sm:py-4 font-bold text-on-primary hover:shadow-[0_0_25px_rgba(0,217,255,0.4)] transition-all disabled:opacity-70"
                variants={scaleOnHover}
                whileTap={{ scale: 0.97 }}
              >
                {status === 'sending'
                  ? contactText.buttonSendingText
                  : contactText.buttonText}
              </motion.button>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-center text-sm mt-3"
                >
                  {contactText.successMessage}
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-center text-sm mt-3"
                >
                  {contactText.errorMessage}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;