import React from 'react';
import stackImage from '../assets/about/macha-avatar.jpg';
import { aboutContent } from '../data/portfolioData';

// Tech stack SVG icons rendered inline for crisp rendering
const PythonIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 24 24" fill="none">
      {/* Interlocking snakes */}
      <path d="M14.25.18c.9 0 1.8.07 2.6.22 1.45.28 2.65 1 3.4 2.15.68 1.05.9 2.4.9 4.15v1.6h-3.8V6.3c0-.98-.36-1.56-1.13-1.56h-4.04v-1.2c0-1.07-.63-1.63-1.63-1.63h-2.18c-1 .03-1.6.6-1.6 1.63v1.2H4.9V4.4c.03-1.4.38-2.3 1.1-3 1.1-.98 2.8-1.22 4.95-1.22h3.3zm-5.8 2.1c.42 0 .76.34.76.75s-.34.75-.76.75-.76-.34-.76-.75.34-.75.76-.75zm1.3 7.82c-.9 0-1.8-.07-2.6-.22-1.45-.28-2.65-1-3.4-2.15C3.07 6.68 2.85 5.33 2.85 3.58V1.98h3.8V3.9c0 .98.36 1.56 1.13 1.56h4.04v1.2c0 1.07.63 1.63 1.63 1.63h2.18c1-.03 1.6-.6 1.6-1.63v-1.2h2.2v1.9c-.03 1.4-.38 2.3-1.1 3-1.1.98-2.8 1.22-4.95 1.22h-3.3zm5.8 2.1c.42 0 .76.34.76.75s-.34.75-.76.75-.76-.34-.76-.75.34-.75.76-.75z" transform="rotate(180 12 12)" fill="#306998"/>
      <path d="M14.25.18c.9 0 1.8.07 2.6.22 1.45.28 2.65 1 3.4 2.15.68 1.05.9 2.4.9 4.15v1.6h-3.8V6.3c0-.98-.36-1.56-1.13-1.56h-4.04v-1.2c0-1.07-.63-1.63-1.63-1.63h-2.18c-1 .03-1.6.6-1.6 1.63v1.2H4.9V4.4c.03-1.4.38-2.3 1.1-3 1.1-.98 2.8-1.22 4.95-1.22h3.3zm-5.8 2.1c.42 0 .76.34.76.75s-.34.75-.76.75-.76-.34-.76-.75.34-.75.76-.75z" fill="#FFE873"/>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Python</span>
  </div>
);

const FastApiIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128" fill="none">
      <circle cx="64" cy="64" r="64" fill="#009688" />
      <path d="M72.2 24L38.4 69.1h21.1v34.9l33.8-45.1H72.2V24z" fill="white" />
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">FastAPI</span>
  </div>
);

const PostgresIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128" fill="none">
      <circle cx="64" cy="64" r="64" fill="#336791" />
      <path d="M89.7 48.6c-1-2.9-3.7-6-8.9-6.3-5-.3-10 2.2-11.4 3.7-1.9 2.1-2.9 5-3.3 7.8-.5-.8-1.1-1.6-1.8-2.2-2.1-2.1-4.7-3.2-8.5-3.2-5 0-9 2.8-10.7 5.6-.9 1.4-1.7 3.3-1.9 6-.2 2.7.2 6.1 1.7 9 2.3 4.4 7.2 6.6 11 6.8h1.2c.4 0 .9-.1 1.3-.2l.9 3c1.7 5.7 6.9 9.8 13.1 9.8 4 0 7.7-1.7 10.3-4.5 1.5-1.6 2.6-3.8 3.1-6.1.4.3.9.7 1.4 1 2.9 2 6.5 2.5 10.1 2.3 4-.2 7.7-1.9 9.8-4.7 2.4-3.1 3-7.5 1.8-11-.6-1.9-1.9-3.5-3.5-4.8 1.4-2.1 2-4.8 1.5-7.5-.5-2.7-2-5.1-4.2-6.8zM47.2 63.8c-1.3-.1-2.5-.7-3.3-1.6-.7-.9-.9-2-.7-3.1.2-1 .9-1.9 1.9-2.3 1-.5 2.2-.4 3.1.2.9.6 1.4 1.6 1.5 2.7.1 1.1-.3 2.2-1.1 2.9-.9.8-2 1.2-3.1 1.2-.5 0-.9 0-1.4 0zm37.2-2.3c-.9-.7-1.4-1.7-1.5-2.8-.1-1.1.3-2.2 1.1-2.9.9-.8 2-1.2 3.1-1.2.5 0 .9 0 1.4.1 1.3.1 2.5.7 3.3 1.6.7.9.9 2 .7 3.1-.2 1-.9 1.9-1.9 2.3-1 .5-2.2.4-3.1-.2-.9-.6-1.4-1.6-1.5-2.7-.1-.6-.2-1.3 0-1.8 0 1.1-.5 1.9-1.2 2.5-.9.9-2.2 1.2-3.4.6z" fill="white" />
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">PostgreSQL</span>
  </div>
);

const LangChainIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128" fill="none">
      <circle cx="64" cy="64" r="64" fill="#F9A825" />
      <rect x="36" y="44" width="38" height="22" rx="11" transform="rotate(-45 36 44)" stroke="white" strokeWidth="8" fill="none" />
      <rect x="58" y="66" width="38" height="22" rx="11" transform="rotate(-45 58 66)" stroke="white" strokeWidth="8" fill="none" />
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">LangChain</span>
  </div>
);

const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img 
                  src={stackImage} 
                  alt="Macha Reddaiah — AI &amp; Generative AI Engineer" 
                  loading="lazy"
                  decoding="async"
                  width="256"
                  height="341"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20 w-full">
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6 tracking-tight uppercase">{aboutContent.heading}</h2>
          <p 
            className="text-base md:text-lg font-medium mb-12 leading-relaxed max-w-3xl text-red-50/95"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          {/* Horizontal Skills Row — Scrollable on mobile to prevent overflow */}
          <div className="w-full overflow-x-auto pb-4 -mb-4 scrollbar-thin">
            <div className="flex items-center gap-8 md:gap-10 min-w-max py-2" role="list" aria-label="Core Technology Icons">
              <div data-aos="zoom-in" data-aos-delay="300" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl" role="listitem" title="Python">
                <PythonIcon />
              </div>
              <div data-aos="zoom-in" data-aos-delay="450" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl" role="listitem" title="FastAPI">
                <FastApiIcon />
              </div>
              <div data-aos="zoom-in" data-aos-delay="600" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl" role="listitem" title="PostgreSQL">
                <PostgresIcon />
              </div>
              <div data-aos="zoom-in" data-aos-delay="750" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl" role="listitem" title="LangChain">
                <LangChainIcon />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
