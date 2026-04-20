import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
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
      _subject: `رسالة جديدة من ${formData.name} عبر موقع portfolio`,
    };

    try {
      const response = await fetch('https://formsubmit.co/ajax/mohammedalmostfa36@gmail.com', {
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
    <section className="py-16 sm:py-24 md:py-32 bg-surface-container-low" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* العمود الأيسر - بدون هوامز إضافية (مثل AboutSection) */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline mb-6 sm:mb-8">
              Let's build something <span className="text-primary">extraordinary</span>
            </h2>
            <p className="text-on-surface-variant text-base sm:text-lg mb-8 sm:mb-12">
              I'm currently open for high-impact project collaborations or strategic roles. If you have a challenging backend problem, I'd love to solve it.
            </p>

            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-12 sm:w-14 h-12 sm:h-14 logic-gradient rounded-lg sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-on-primary text-xl sm:text-2xl">alternate_email</span>
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-label text-on-surface-variant uppercase">Email Me</div>
                  <a href="mailto:mohammedalmostfa36@gmail.com?subject=Portfolio%20Contact&body=Hello%20Mohammed," className="text-sm sm:text-lg md:text-xl font-bold text-white break-all hover:text-blue-400 transition">
                    mohammedalmostfa36@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-12 sm:w-14 h-12 sm:h-14 logic-gradient rounded-lg sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-on-primary text-xl sm:text-2xl">call</span>
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-label text-on-surface-variant uppercase">Call Me / WhatsApp</div>
                  <a href="https://wa.me/963991851269" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-lg md:text-xl font-bold text-white hover:text-green-400 transition">
                    +963 991 851 269
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 sm:mt-16 pt-8 sm:pt-16 pb-12 sm:pb-16 border-t border-outline-variant/30">
              <h4 className="font-label text-xs uppercase mb-4 sm:mb-6 text-on-surface-variant">Follow My Development</h4>
              <div className="flex gap-4 sm:gap-6">
                <a className="w-10 sm:w-12 h-10 sm:h-12 bg-surface-container rounded-full flex items-center justify-center hover:text-primary transition-colors border border-outline-variant/10" href="https://www.linkedin.com/in/mohammed-almostfa-63b3a7240" target="_blank" rel="noopener noreferrer">
                  <img alt="LinkedIn" className="h-6 sm:h-9" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" />
                </a>
                <a className="w-10 sm:w-12 h-10 sm:h-12 bg-surface-container rounded-full flex items-center justify-center hover:text-primary transition-colors border border-outline-variant/10" href="https://github.com/MohammedAlmostfa" target="_blank" rel="noopener noreferrer">
                  <img alt="GitHub" className="h-6 sm:h-9" src="https://cdn-icons-png.flaticon.com/512/733/733553.png" />
                </a>
                <a className="w-10 sm:w-12 h-10 sm:h-12 bg-surface-container rounded-full flex items-center justify-center hover:text-primary transition-colors border border-outline-variant/10" href="https://www.facebook.com/share/18Ac9xMsiq/" target="_blank" rel="noopener noreferrer">
                  <img alt="Facebook" className="h-6 sm:h-9" src="https://cdn-icons-png.flaticon.com/512/733/733547.png" />
                </a>
                <a className="w-10 sm:w-12 h-10 sm:h-12 bg-surface-container rounded-full flex items-center justify-center hover:text-primary transition-colors border border-outline-variant/10" href="https://www.instagram.com/mohamd.almostfa.9" target="_blank" rel="noopener noreferrer">
                  <img alt="Instagram" className="h-6 sm:h-9" src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" />
                </a>
              </div>
            </div>
          </div>

          {/* العمود الأيمن - نموذج الاتصال */}
          <div className="bg-surface-container-high rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-outline-variant/20">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-label mb-2 text-on-surface-variant">Your name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-surface-container rounded-lg px-4 py-3 border border-outline-variant/30 focus:border-primary focus:outline-none transition"
                  placeholder="Ahmed"
                />
              </div>
              <div>
                <label className="block text-sm font-label mb-2 text-on-surface-variant">Email address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-surface-container rounded-lg px-4 py-3 border border-outline-variant/30 focus:border-primary focus:outline-none transition"
                  placeholder="hello@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-label mb-2 text-on-surface-variant">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-surface-container rounded-lg px-4 py-3 border border-outline-variant/30 focus:border-primary focus:outline-none transition"
                  placeholder="Project inquiry"
                />
              </div>
              <div>
                <label className="block text-sm font-label mb-2 text-on-surface-variant">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-surface-container rounded-lg px-4 py-3 border border-outline-variant/30 focus:border-primary focus:outline-none transition resize-none"
                  placeholder="Tell me about your idea..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full logic-gradient rounded-xl py-3 sm:py-4 font-bold text-on-primary hover:shadow-[0_0_25px_rgba(0,217,255,0.4)] transition-all disabled:opacity-70"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && <p className="text-green-400 text-center text-sm mt-3">✓ Message sent successfully!</p>}
              {status === 'error' && <p className="text-red-400 text-center text-sm mt-3">✗ Failed to send. Please try again.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;