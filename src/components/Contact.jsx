import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { emailjsConfig, personalInfo, socialLinks } from '../data/portfolioData';

const CopyButtonState = ({ isCopied }) => {
  return (
    <div className="relative w-5 h-5 flex items-center justify-center">
      {/* Copy Icon */}
      <svg
        className={`w-4 h-4 absolute transition-all duration-300 ${
          isCopied ? 'opacity-0 scale-75 rotate-90' : 'opacity-100 scale-100 rotate-0'
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2.5"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-3a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.375c0-.621.504-1.125 1.125-1.125h9.75c.621 0 1.125.504 1.125 1.125v3.375c0 .621-.504 1.125-1.125 1.125H7.875a1.125 1.125 0 01-1.125-1.125V7.375z" />
      </svg>
      {/* Checkmark Icon */}
      <svg
        className={`w-4.5 h-4.5 absolute transition-all duration-300 text-green-400 ${
          isCopied ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 -rotate-90'
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="3"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    </div>
  );
};

const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle, sending, success, error
  const [toasts, setToasts] = useState([]);
  const [copiedField, setCopiedField] = useState(null);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax translation for the big text
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

  const addToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopiedField(field);
        addToast(`${field} copied to clipboard!`, 'success');
        setTimeout(() => setCopiedField(null), 2000);
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
        addToast(`Failed to copy ${field}`, 'error');
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return; // Prevent duplicate submissions

    const now = Date.now();
    if (now - lastSubmitTime < 10000) {
      addToast('Please wait 10 seconds between messages.', 'error');
      return;
    }

    const form = formRef.current;
    const name = form.querySelector('#name')?.value || '';
    const email = form.querySelector('#email')?.value || '';
    const message = form.querySelector('#message')?.value || '';
    const permissionChecked = form.querySelector('#permission')?.checked;

    // Validate inputs - empty values
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('error');
      addToast('Please fill out all required fields.', 'error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    // Validate Email syntax using standard regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setStatus('error');
      addToast('Please enter a valid email address.', 'error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    // Validate permission checkbox
    if (!permissionChecked) {
      setStatus('error');
      addToast('Please authorize email contact permission.', 'error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setStatus('sending');


    // EmailJS integration
    try {
      const emailjs = await import('@emailjs/browser');
      const nameParts = name.trim().split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';

      const templateParams = {
        from_name: `${firstName} ${lastName}`.trim(),
        from_email: email,
        message: message,
        first_name: firstName,
        last_name: lastName,
        name: `${firstName} ${lastName}`.trim(),
        time: new Date().toLocaleString()
      };

      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        emailjsConfig.publicKey
      );
      setStatus('success');
      setLastSubmitTime(Date.now());
      addToast('Message sent successfully.', 'success');
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      addToast('Failed to send message. Please try again.', 'error');
    }

    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section ref={ref} id="contact" className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-center justify-center py-24 md:py-32 lg:py-40 px-4 md:px-12 border-t border-gray-900">
      {/* Huge Background Text */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12"
      >
        <h1 
          className="text-[25vw] leading-[0.75] font-black text-white uppercase tracking-tighter select-none scale-y-[1.6] origin-top opacity-5"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </h1>
      </motion.div>

      {/* Form Card Overlay */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex justify-center lg:justify-end items-center">
        <div 
          data-aos="fade-up"
          className="bg-[#ff2a2a] w-full lg:w-[90%] rounded-[2rem] md:rounded-[3rem] p-8 md:p-14 lg:p-16 text-white flex flex-col justify-between shadow-[0_30px_60px_-15px_rgba(255,42,42,0.35)] border border-white/10"
        >
          {/* Section Header */}
          <div className="mb-10 text-left">
            <div className="text-xs font-bold tracking-[0.2em] uppercase opacity-80 mb-2">
              Reach Me
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1]">
              Let's Build Something Great
            </h2>
          </div>

          {/* Contact Cards Hub Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 w-full mb-12 pb-10 border-b border-white/20">
            {/* Email Card */}
            <div className="bg-black/10 border border-white/10 rounded-2xl p-4 flex items-center justify-between gap-4 backdrop-blur-sm group/card hover:border-white/30 hover:bg-black/20 transition-all duration-300">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-lg shrink-0 group-hover/card:scale-110 transition-transform">
                  ✉
                </div>
                <div className="text-left overflow-hidden">
                  <p className="text-[9px] uppercase tracking-wider text-white/50 font-bold">Email</p>
                  <a href="#contact" className="text-sm font-bold font-mono hover:underline truncate block">{personalInfo.emails.primary}</a>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                {/* Send Email button */}
                <a 
                  href="#contact"
                  className="p-2 rounded-xl bg-white/10 hover:bg-white text-white hover:text-[#ff2a2a] transition-all duration-300 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white flex items-center justify-center w-8 h-8"
                  title="Send Email"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </a>
                {/* Copy Email button */}
                <button 
                  type="button"
                  onClick={() => handleCopy(personalInfo.emails.primary, 'Email')}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white text-white hover:text-[#ff2a2a] transition-all duration-300 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white flex items-center justify-center w-8 h-8"
                  title="Copy Email"
                >
                  <CopyButtonState isCopied={copiedField === 'Email'} />
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-black/10 border border-white/10 rounded-2xl p-4 flex items-center justify-between gap-4 backdrop-blur-sm group/card hover:border-white/30 hover:bg-black/20 transition-all duration-300">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-lg shrink-0 group-hover/card:scale-110 transition-transform">
                  📞
                </div>
                <div className="text-left overflow-hidden">
                  <p className="text-[9px] uppercase tracking-wider text-white/50 font-bold">Phone</p>
                  <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="text-sm font-bold font-mono hover:underline truncate block">{personalInfo.phone}</a>
                </div>
              </div>
              <button 
                type="button"
                onClick={() => handleCopy(personalInfo.phone, 'Phone')}
                className="p-2 rounded-xl bg-white/10 hover:bg-white text-white hover:text-[#ff2a2a] transition-all duration-300 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white flex items-center justify-center w-8 h-8 shrink-0"
                title="Copy Phone"
              >
                <CopyButtonState isCopied={copiedField === 'Phone'} />
              </button>
            </div>

            {/* LinkedIn Card */}
            <div className="bg-black/10 border border-white/10 rounded-2xl p-4 flex items-center justify-between gap-4 backdrop-blur-sm group/card hover:border-white/30 hover:bg-black/20 transition-all duration-300">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-lg shrink-0 group-hover/card:scale-110 transition-transform">
                  🔗
                </div>
                <div className="text-left overflow-hidden">
                  <p className="text-[9px] uppercase tracking-wider text-white/50 font-bold">LinkedIn</p>
                  <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm font-bold font-mono hover:underline truncate block">in/macha-reddaiah</a>
                </div>
              </div>
              <a 
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white/10 hover:bg-white text-white hover:text-[#ff2a2a] transition-all duration-300 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white flex items-center justify-center w-8 h-8 shrink-0"
                title="Visit LinkedIn"
              >
                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>

            {/* GitHub Card */}
            <div className="bg-black/10 border border-white/10 rounded-2xl p-4 flex items-center justify-between gap-4 backdrop-blur-sm group/card hover:border-white/30 hover:bg-black/20 transition-all duration-300">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-lg shrink-0 group-hover/card:scale-110 transition-transform">
                  💻
                </div>
                <div className="text-left overflow-hidden">
                  <p className="text-[9px] uppercase tracking-wider text-white/50 font-bold">GitHub</p>
                  <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-sm font-bold font-mono hover:underline truncate block">github.com/Reddiah16</a>
                </div>
              </div>
              <a 
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white/10 hover:bg-white text-white hover:text-[#ff2a2a] transition-all duration-300 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white flex items-center justify-center w-8 h-8 shrink-0"
                title="Visit GitHub"
              >
                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-12 md:gap-16 w-full">
            <div className="flex flex-col md:flex-row gap-12 md:gap-20 w-full">
              {/* Left Column */}
              <div className="flex-1 flex flex-col gap-10">
                <div className="relative">
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    placeholder="Full Name" 
                    aria-label="Full Name"
                    autoComplete="name"
                    required
                    className="w-full bg-transparent border-b-2 border-white/30 pb-3 text-lg focus:outline-none focus:border-white transition-all duration-300 placeholder-white/70 focus:placeholder-white font-medium rounded-none focus:ring-0 focus:scale-[1.002]"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="email" 
                    id="email" 
                    name="user_email"
                    placeholder="Email" 
                    aria-label="Email address"
                    autoComplete="email"
                    required
                    className="w-full bg-transparent border-b-2 border-white/30 pb-3 text-lg focus:outline-none focus:border-white transition-all duration-300 placeholder-white/70 focus:placeholder-white font-medium rounded-none focus:ring-0 focus:scale-[1.002]"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="flex-1 flex flex-col">
                <div className="relative h-full flex flex-col">
                  <textarea 
                    id="message" 
                    name="message"
                    placeholder="Type your message here" 
                    aria-label="Message text"
                    required
                    className="w-full h-full min-h-[140px] bg-transparent border-b-2 border-white/30 pb-3 text-lg focus:outline-none focus:border-white transition-all duration-300 placeholder-white/70 focus:placeholder-white font-medium resize-none rounded-none focus:ring-0 focus:scale-[1.002]"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row gap-12 mt-4">
              {/* Left text */}
              <div className="flex-1 flex items-start gap-4 text-sm font-medium text-white/90">
                <input 
                  type="checkbox" 
                  id="permission" 
                  className="mt-1 w-5 h-5 rounded-md border-white/40 bg-transparent text-white focus:ring-2 focus:ring-white focus:ring-offset-0 focus:ring-offset-transparent cursor-pointer" 
                  style={{ accentColor: "white" }}
                />
                <label htmlFor="permission" className="cursor-pointer max-w-[280px] leading-snug select-none">
                  I give permission to contact me at this email address.
                </label>
              </div>

              {/* Right text & button */}
              <div className="flex-1 flex flex-col gap-8 text-xs text-white/70 font-medium">
                <p className="leading-relaxed max-w-[400px]">
                  Your message will be sent directly to my inbox. I typically respond within 24-48 hours.
                </p>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6">
                  <p className="max-w-[250px] leading-relaxed">
                    For urgent inquiries, reach me at <a href="#contact" className="underline hover:text-white transition-colors">{personalInfo.emails.primary}</a>
                  </p>
                  
                  <motion.button 
                    type="submit" 
                    disabled={status === 'sending'}
                    animate={
                      status === 'success' ? { scale: [1, 1.05, 1] } : 
                      status === 'error' ? { x: [0, -8, 8, -8, 8, 0] } : 
                      {}
                    }
                    transition={{ duration: 0.4 }}
                    className={`px-8 py-3.5 rounded-full border border-white/45 text-white font-bold flex items-center justify-center gap-3 transition-all duration-300 group whitespace-nowrap self-start sm:self-auto hover:scale-[1.03] active:scale-[0.97] hover:shadow-[0_4px_20px_rgba(255,255,255,0.15)] ${
                      status === 'sending' 
                        ? 'opacity-50 cursor-not-allowed bg-white/10' 
                        : status === 'success'
                        ? 'bg-green-600 border-green-500 text-white shadow-[0_0_20px_rgba(22,163,74,0.4)]'
                        : status === 'error'
                        ? 'bg-red-800 border-red-700 text-white'
                        : 'hover:bg-white hover:text-[#ff2a2a] focus:ring-2 focus:ring-white focus:outline-none'
                    }`}
                  >
                    {status === 'sending' ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : status === 'success' ? (
                      <span className="flex items-center gap-2">
                        Sent Successfully ✓
                      </span>
                    ) : status === 'error' ? (
                      <span className="flex items-center gap-2">
                        Failed — Try Again
                      </span>
                    ) : 'Send Message'}
                    
                    {status === 'idle' && (
                      <svg 
                        className="w-4.5 h-4.5 transform group-hover:translate-x-1.5 group-hover:-translate-y-0.5 transition-transform duration-300 ease-out text-white group-hover:text-[#ff2a2a]" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                      </svg>
                    )}
                  </motion.button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Toast Notifications */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 pointer-events-none">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              className="pointer-events-auto bg-[#111]/95 border border-white/10 text-white rounded-2xl px-5 py-3.5 shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex items-center gap-3 backdrop-blur-md"
            >
              {toast.type === 'success' ? (
                <div className="w-5 h-5 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center text-green-400 font-black text-xs select-none">
                  ✓
                </div>
              ) : (
                <div className="w-5 h-5 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center text-red-400 font-black text-xs select-none">
                  ✕
                </div>
              )}
              <span className="text-xs font-bold font-sans tracking-wide text-white/95">{toast.message}</span>
              <button
                onClick={() => setToasts((prev) => prev.filter((t) => t.id !== toast.id))}
                className="ml-3 text-white/40 hover:text-white transition-colors cursor-pointer text-xs font-bold"
              >
                ✕
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Contact;
