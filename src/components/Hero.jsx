import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroIllustration from '../assets/hero-illustration.png';
import { heroContent, socialLinks, personalInfo } from '../data/portfolioData';

const titles = [
  "AI Engineer",
  "Generative AI Engineer",
  "Python Backend Developer",
  "LLM Application Developer"
];

/* ─── Inline Social Icon Components ─────────────────────────────────── */
const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const EmailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

/* ─── Social Icon Pill with tooltip ─────────────────────────────────── */
const SocialPill = ({ href, label, icon, isExternal = true }) => (
  <div className="relative group/social">
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="
        flex items-center justify-center w-11 h-11 rounded-full
        bg-white/8 border border-white/15
        text-white/60
        hover:text-[#ff2a2a]
        hover:border-[#ff2a2a]/50
        hover:bg-[#ff2a2a]/10
        hover:shadow-[0_0_18px_rgba(255,42,42,0.35)]
        transition-all duration-300
        hover:scale-110
        active:scale-95
      "
    >
      {icon}
    </a>
    {/* Tooltip */}
    <span
      className="
        pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2
        bg-[#1a1a1a] border border-white/10 text-white text-[10px] font-bold
        uppercase tracking-widest px-2.5 py-1 rounded-md
        opacity-0 group-hover/social:opacity-100
        translate-y-1 group-hover/social:translate-y-0
        transition-all duration-200 whitespace-nowrap z-50
        shadow-[0_4px_20px_rgba(0,0,0,0.4)]
      "
    >
      {label}
    </span>
  </div>
);

/* ─── Hero Component ─────────────────────────────────────────────────── */
const Hero = () => {
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let frameId;
    const handleMouseMove = (e) => {
      // Use requestAnimationFrame to throttle state updates for smoother performance
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const x = (e.clientX / width) - 0.5;
        const y = (e.clientY / height) - 0.5;
        setMouseCoords({ x, y });
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  const parallaxTranslateX = mouseCoords.x * 20;
  const parallaxTranslateY = mouseCoords.y * 20;
  const glowTranslateX = mouseCoords.x * -15;
  const glowTranslateY = mouseCoords.y * -15;

  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const fullText = titles[titleIndex];
    const handleType = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setSpeed(80);
        if (currentText === fullText) {
          timer = setTimeout(() => { setIsDeleting(true); setSpeed(40); }, 1500);
          return;
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
          setSpeed(150);
          return;
        }
      }
      timer = setTimeout(handleType, speed);
    };
    timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIndex, speed]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out' });
  }, []);

  return (
    <>
      <section className="relative w-full h-screen overflow-hidden bg-black flex items-center">

        {/* ── Background illustration with parallax ──────────────────── */}
        <div
          className="absolute inset-0 z-0 overflow-hidden pointer-events-none will-change-transform"
          style={{
            transform: `translate3d(${parallaxTranslateX}px, ${parallaxTranslateY}px, 0)`,
            transition: 'transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)'
          }}
        >
          <img
            src={heroIllustration}
            alt="Macha Reddaiah - AI Engineer Portrait"
            width="1920"
            height="1080"
            fetchPriority="high"
            className="w-full h-full object-cover opacity-55 md:opacity-70 animate-float will-change-transform scale-[0.85] md:scale-[1.06] -translate-y-12 md:translate-y-0 object-center md:object-[center_right]"
          />

          {/* Primary red radial glow — behind character on right */}
          <div
            className="absolute right-[0%] top-[10%] w-[55%] h-[65%] rounded-full pointer-events-none transition-transform duration-500 ease-out will-change-transform"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(255,42,42,0.20) 0%, rgba(180,10,10,0.12) 40%, transparent 70%)',
              filter: 'blur(70px)',
              transform: `translate3d(${glowTranslateX}px, ${glowTranslateY}px, 0)`
            }}
          />

          {/* Secondary softer glow */}
          <div
            className="absolute right-[10%] top-[30%] w-[40%] h-[50%] rounded-full pointer-events-none will-change-transform"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(255,42,42,0.10) 0%, transparent 65%)',
              filter: 'blur(90px)',
              transform: `translate3d(${glowTranslateX * 0.5}px, ${glowTranslateY * 0.5}px, 0)`
            }}
          />

          {/* Left-side gradient mask for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/88 to-transparent z-10 w-full h-full pointer-events-none" />
        </div>

        {/* ── Hero Content ───────────────────────────────────────────── */}
        <div className="absolute inset-0 z-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col justify-center items-start text-left w-full">

          {/* Left Column: Text + Buttons + Social Row */}
          <div className="flex flex-col items-start text-left max-w-2xl w-full">

            {/* Greeting */}
            <p
              data-aos="fade-up"
              className="text-[#ff2a2a] text-sm md:text-base font-black uppercase tracking-[0.25em] mb-3 md:mb-4 select-none"
            >
              Hi, I'm
            </p>

            {/* Name */}
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-white text-5xl md:text-6xl lg:text-[5.5rem] font-black mb-4 md:mb-6 tracking-tighter uppercase leading-[1.05] select-none text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70"
            >
              Macha Reddaiah
            </h1>

            {/* Typing Role */}
            <h2
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-lg md:text-2xl lg:text-3xl font-bold tracking-tight mb-6 md:mb-8 min-h-[36px] sm:min-h-[44px] md:min-h-[52px] leading-tight text-white flex items-center"
            >
              <span className="text-transparent [-webkit-text-stroke:1px_white] hover:text-[#ff2a2a] transition-colors duration-500 cursor-default">
                {currentText}
              </span>
              <span className="text-[#ff2a2a] ml-1.5 font-extrabold animate-[pulse_0.8s_infinite] select-none" aria-hidden="true">|</span>
            </h2>

            {/* Subtitle */}
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-white/70 text-base md:text-lg font-medium mb-8 md:mb-12 max-w-2xl leading-relaxed drop-shadow-md"
            >
              Building production-ready AI applications using LangGraph, FastAPI, PostgreSQL, Retrieval-Augmented Generation (RAG), and modern Large Language Models.
            </p>

            {/* CTA Buttons */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8 md:mb-10 lg:mb-12"
            >
              <a
                href={heroContent.ctaPrimary.href}
                className="px-8 py-4 text-base rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-all duration-300 transform hover:scale-[1.03] shadow-[0_4px_20px_rgba(255,255,255,0.15)] flex items-center justify-center"
              >
                {heroContent.ctaPrimary.text}
              </a>

              <a
                href={heroContent.ctaSecondary.href}
                className="px-8 py-4 text-base rounded-full bg-black/40 border border-white/20 text-white font-bold hover:bg-black/60 hover:border-white/40 transition-all duration-300 backdrop-blur-md flex items-center justify-center"
              >
                {heroContent.ctaSecondary.text}
              </a>

              <a
                href={heroContent.ctaResume.href}
                download
                className="px-8 py-4 text-base rounded-full bg-transparent border border-white/30 text-white font-semibold hover:bg-white hover:text-black hover:border-white transition-all duration-300 backdrop-blur-md flex items-center gap-2.5 justify-center"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {heroContent.ctaResume.text}
              </a>
            </div>

            {/* ── Social Icons Row — integrated below CTAs ────────────── */}
            <div
              data-aos="fade-up"
              data-aos-delay="550"
              className="flex items-center gap-4 pl-1"
            >
              <div className="w-8 h-[1px] bg-white/20" />

              <SocialPill
                href={socialLinks.github}
                label="GitHub"
                icon={<GitHubIcon />}
              />
              <SocialPill
                href={socialLinks.linkedin}
                label="LinkedIn"
                icon={<LinkedInIcon />}
              />
              <SocialPill
                href="#contact"
                label="Email"
                icon={<EmailIcon />}
                isExternal={false}
              />

              <div className="w-8 h-[1px] bg-white/20" />
            </div>
          </div>
        </div>

        {/* ── Scroll Indicator ───────────────────────────────────────── */}
        <div
          data-aos="fade-up"
          data-aos-delay="800"
          className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
        >
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-[#ff2a2a] filter drop-shadow-[0_0_8px_rgba(255,42,42,0.8)]"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* ── Hero → About Transition: Dark-Red Gradient Wave ──────────── */}
      <div className="relative w-full overflow-hidden" style={{ height: '160px', marginTop: '-1px' }}>
        {/* Deep dark-red gradient base */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #000000 0%, #0d0000 30%, #1a0000 60%, #7f1212 85%, #c41717 100%)'
          }}
        />

        {/* Subtle animated particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${2 + (i % 3)}px`,
                height: `${2 + (i % 3)}px`,
                left: `${(i * 8.5) % 100}%`,
                top: `${20 + (i * 13) % 60}%`,
                background: `rgba(255,42,42,${0.15 + (i % 4) * 0.08})`,
                boxShadow: `0 0 6px rgba(255,42,42,0.3)`,
                animation: `heroParticleFloat ${3 + (i % 3)}s ease-in-out ${i * 0.4}s infinite alternate`
              }}
            />
          ))}
        </div>

        {/* SVG wave shape — blends into About (#ff2a2a) */}
        <svg
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="waveGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7f1212" stopOpacity="0" />
              <stop offset="60%" stopColor="#a81616" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#c41717" stopOpacity="1" />
            </linearGradient>
          </defs>
          {/* Back wave — deeper */}
          <path
            d="M0,80 C240,140 480,40 720,90 C960,140 1200,50 1440,80 L1440,160 L0,160 Z"
            fill="url(#waveGrad)"
            opacity="0.5"
          />
          {/* Front wave — sharper edge */}
          <path
            d="M0,110 C180,60 360,140 540,100 C720,60 900,130 1080,95 C1260,60 1380,115 1440,100 L1440,160 L0,160 Z"
            fill="#bf1515"
            opacity="0.85"
          />
          {/* Final fill that lands at About bg */}
          <path
            d="M0,140 C360,115 720,155 1080,130 C1260,118 1380,140 1440,140 L1440,160 L0,160 Z"
            fill="#ff2a2a"
          />
        </svg>
      </div>
    </>
  );
};

export default Hero;
