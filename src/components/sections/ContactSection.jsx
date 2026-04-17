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
    // Replace with actual Netlify form submission or your own endpoint
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ 'form-name': 'contact', ...formData }).toString(),
      });
      if (response.ok) {
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
        <div className="contact-grid">
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
          <div className="bg-surface-container-lowest p-6 sm:p-10 rounded-2xl sm:rounded-[2.5rem] border border-outline-variant/20 shadow-2xl">
            <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <input type="hidden" name="form-name" value="contact" />
              <div className="form-grid-two grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-label text-on-surface-variant uppercase ml-2">Your Name</label>
                  <input name="name" value={formData.name} onChange={handleChange} className="w-full bg-surface-container-low border-none rounded-lg sm:rounded-xl px-4 sm:px-6 py-3 sm:py-4 focus:ring-2 focus:ring-primary-container text-white placeholder:text-surface-variant text-sm sm:text-base" placeholder="John Doe" type="text" required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-label text-on-surface-variant uppercase ml-2">Email Address</label>
                  <input name="email" value={formData.email} onChange={handleChange} className="w-full bg-surface-container-low border-none rounded-lg sm:rounded-xl px-4 sm:px-6 py-3 sm:py-4 focus:ring-2 focus:ring-primary-container text-white placeholder:text-surface-variant text-sm sm:text-base" placeholder="john@example.com" type="email" required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-label text-on-surface-variant uppercase ml-2">Subject</label>
                <input name="subject" value={formData.subject} onChange={handleChange} className="w-full bg-surface-container-low border-none rounded-lg sm:rounded-xl px-4 sm:px-6 py-3 sm:py-4 focus:ring-2 focus:ring-primary-container text-white placeholder:text-surface-variant text-sm sm:text-base" placeholder="Collaboration Inquiry" type="text" required />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-label text-on-surface-variant uppercase ml-2">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} className="w-full bg-surface-container-low border-none rounded-lg sm:rounded-xl px-4 sm:px-6 py-3 sm:py-4 focus:ring-2 focus:ring-primary-container text-white placeholder:text-surface-variant text-sm sm:text-base" placeholder="How can I help you?" rows="5" required></textarea>
              </div>
              <button className="w-full logic-gradient text-on-primary font-bold py-4 sm:py-5 rounded-lg sm:rounded-xl text-base sm:text-lg hover:shadow-[0_10px_30px_rgba(0,217,255,0.3)] transition-all" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && <p className="text-green-400 text-sm text-center">Message sent successfully!</p>}
              {status === 'error' && <p className="text-red-400 text-sm text-center">Failed to send. Please try again.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;