import React from 'react';
import { personalInfo, socialLinks, footerContent } from '../data/portfolioData';

/* ─── Icon Components ──────────────────────────────────────────────── */
const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const EmailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

/* ─── Footer Social Icon with tooltip ─────────────────────────────── */
const FooterSocial = ({ href, label, icon, isExternal = true }) => (
  <div className="relative group/ftsocial">
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="
        flex items-center justify-center w-11 h-11 rounded-full
        border border-white/10 text-[#d4d4d4]
        hover:text-[#ff2a2a] hover:border-[#ff2a2a]/40
        hover:bg-[#ff2a2a]/8 hover:shadow-[0_0_16px_rgba(255,42,42,0.3)]
        transition-all duration-300 hover:scale-110 active:scale-95
      "
    >
      {icon}
    </a>
    <span
      className="
        pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2
        bg-[#1a1a1a] border border-white/10 text-white text-[10px] font-bold
        uppercase tracking-widest px-2.5 py-1 rounded-md
        opacity-0 group-hover/ftsocial:opacity-100
        translate-y-1 group-hover/ftsocial:translate-y-0
        transition-all duration-200 whitespace-nowrap z-50
      "
    >
      {label}
    </span>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-[#0e0e0e] text-[#d4d4d4] w-full font-mono text-xs tracking-widest flex flex-col items-center">
      {/* Subtle glowing divider above the footer */}
      <div
        className="w-full h-[1px] shrink-0 mb-16"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,42,42,0.15) 15%, rgba(255,42,42,0.55) 40%, rgba(255,42,42,0.55) 60%, rgba(255,42,42,0.15) 85%, transparent 100%)',
          boxShadow: '0 0 18px rgba(255,42,42,0.25), 0 0 40px rgba(255,42,42,0.08)'
        }}
      />

      <div className="max-w-4xl w-full px-6 pb-12 md:pb-16 flex flex-col items-center text-center gap-12 md:gap-14">
        
        {/* Brand Name - Elegant Title Case with Gradient */}
        <h2 className="text-[9vw] md:text-[6.5vw] leading-none font-sans font-black tracking-tighter select-none text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] via-[#f4f4f4] to-[#d4d4d4] hover:from-[#ff2a2a] hover:to-[#b91c1c] transition-all duration-500">
          {personalInfo.brandName}
        </h2>

        {/* Tagline */}
        <p className="text-white/60 text-xs md:text-sm max-w-xl leading-relaxed tracking-wider">
          Building AI systems with Python, LLMs, and modern backend technologies.
        </p>

        {/* Nav links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-[10px] md:text-xs font-bold uppercase tracking-widest">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <span className="text-white/10 select-none">|</span>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <span className="text-white/10 select-none">|</span>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <span className="text-white/10 select-none">|</span>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <span className="text-white/10 select-none">|</span>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Social Icons Row */}
        <div className="flex items-center justify-center gap-4">
          <FooterSocial href={socialLinks.github}   label="GitHub"   icon={<GitHubIcon />}   />
          <FooterSocial href={socialLinks.linkedin} label="LinkedIn" icon={<LinkedInIcon />} />
          <FooterSocial
            href="#contact"
            label="Email"
            icon={<EmailIcon />}
            isExternal={false}
          />
        </div>

        {/* Copyright & Info */}
        <div className="flex flex-col gap-2 pt-4 border-t border-white/5 w-full text-[10px] text-white/40">
          <p>{footerContent.copyright}</p>
          <p>Built with ❤️ using React &amp; AI</p>
          <p className="lowercase">{personalInfo.emails.primary}</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
