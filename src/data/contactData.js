// src/data/contactData.js

// بيانات وسائل الاتصال المباشر
export const contactItems = [
  {
    icon: 'alternate_email',
    label: 'Email Me',
    value: 'mohammedalmostfa36@gmail.com',
    href: 'mailto:mohammedalmostfa36@gmail.com?subject=Portfolio%20Contact&body=Hello%20Mohammed,',
    hoverColor: 'hover:text-blue-400',
  },
  {
    icon: 'call',
    label: 'Call Me / WhatsApp',
    value: '+963 991 851 269',
    href: 'https://wa.me/963991851269',
    hoverColor: 'hover:text-green-400',
  },
];

// روابط السوشيال ميديا
export const socialLinks = [
  {
    name: 'LinkedIn',
    icon: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
    url: 'https://www.linkedin.com/in/mohammed-almostfa-63b3a7240',
  },
  {
    name: 'GitHub',
    icon: 'https://cdn-icons-png.flaticon.com/512/733/733553.png',
    url: 'https://github.com/MohammedAlmostfa',
  },
  {
    name: 'Facebook',
    icon: 'https://cdn-icons-png.flaticon.com/512/733/733547.png',
    url: 'https://www.facebook.com/share/18Ac9xMsiq/',
  },
  {
    name: 'Instagram',
    icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png',
    url: 'https://www.instagram.com/mohamd.almostfa.9',
  },
];

// النصوص الثابتة للقسم
export const contactText = {
  titlePrefix: "Let's build something",
  titleHighlight: "extraordinary",
  description:
    "I'm currently open for high-impact project collaborations or strategic roles. If you have a challenging backend problem, I'd love to solve it.",
  formTitle: "Send me a message",
  nameLabel: "Your name",
  emailLabel: "Email address",
  subjectLabel: "Subject",
  messageLabel: "Message",
  namePlaceholder: "Ahmed",
  emailPlaceholder: "hello@example.com",
  subjectPlaceholder: "Project inquiry",
  messagePlaceholder: "Tell me about your idea...",
  buttonText: "Send Message",
  buttonSendingText: "Sending...",
  successMessage: "✓ Message sent successfully!",
  errorMessage: "✗ Failed to send. Please try again.",
  followText: "Follow My Development",
};

// إعدادات الفورم (مثل البريد المستهدف)
export const formConfig = {
  submitUrl: "https://formsubmit.co/ajax/mohammedalmostfa36@gmail.com",
  emailSubjectPrefix: "رسالة جديدة من", // سيتم استخدامه في الـ payload
};