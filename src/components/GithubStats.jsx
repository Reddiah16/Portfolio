import React, { useState, useEffect, useRef } from 'react';

const ImageWithSkeleton = ({ src, alt, className, containerClassName }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative ${containerClassName || ''}`}>
      {!isLoaded && (
        <div className="w-full h-full min-h-[160px] bg-white/5 rounded-3xl animate-pulse flex items-center justify-center text-white/30 text-xs font-mono border border-white/5">
          <div className="flex flex-col items-center gap-2">
            <svg className="w-6 h-6 animate-spin text-white/20" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <span>Fetching metrics...</span>
          </div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className || ''} transition-all duration-700 ${
          isLoaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-95 blur-md absolute top-0 left-0 w-full h-full'
        }`}
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
      />
    </div>
  );
};

const GithubStats = () => {
  const username = "Reddiah16";
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const themeParams = "show_icons=true&theme=dark&hide_border=true&bg_color=0a0a0a&title_color=ff2a2a&icon_color=ff2a2a&text_color=ffffff";
  const languageParams = "layout=compact&theme=dark&hide_border=true&bg_color=0a0a0a&title_color=ff2a2a&text_color=ffffff";
  const streakParams = "theme=dark&hide_border=true&background=0a0a0a&ring=ff2a2a&fire=ff2a2a&currStreakLabel=ff2a2a";

  const chartUrl  = isVisible ? `https://ghchart.rshah.org/ff2a2a/${username}` : null;
  const statsUrl  = isVisible ? `https://github-stats-extended.vercel.app/api?username=${username}&${themeParams}` : null;
  const langUrl   = isVisible ? `https://github-stats-extended.vercel.app/api/top-langs/?username=${username}&${languageParams}` : null;
  const streakUrl = isVisible ? `https://streak-stats.demolab.com/?user=${username}&${streakParams}` : null;

  return (
    <section id="github" ref={sectionRef} className="bg-[#0a0a0a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">

      {/* Torn paper divider at top (transition from white SoftSkills section) */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20 text-left">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-[#ff2a2a] font-bold mb-8 shadow-sm bg-white/5 backdrop-blur-sm">
            GitHub Activity
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
            GitHub Activity
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-xl font-medium leading-relaxed">
            Real-time contribution frequency, coding streaks, and primary languages aggregated from my GitHub profile.
          </p>
        </div>

        {/* Contribution Graph Card */}
        <div 
          data-aos="fade-up" 
          data-aos-delay="100"
          className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 mb-8 backdrop-blur-md hover:border-red-500/20 transition-colors duration-500"
        >
          <h3 className="text-white text-lg font-bold uppercase tracking-wider mb-6 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff2a2a] animate-pulse"></span>
            Contribution Calendar
          </h3>
          <div className="overflow-x-auto overflow-y-hidden py-2 scrollbar-thin">
            <div className="min-w-[800px] flex justify-center">
              <ImageWithSkeleton
                src={chartUrl}
                alt={`${username}'s GitHub Contributions`}
                className="w-full object-contain"
                containerClassName="w-full flex justify-center"
              />
            </div>
          </div>
        </div>

        {/* Stats and Streak Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* General Stats Card */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="200"
            className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md hover:border-red-500/20 transition-all duration-500 hover:scale-[1.02]"
          >
            <ImageWithSkeleton
              src={statsUrl}
              alt="Macha Reddaiah's GitHub Stats"
              className="w-full rounded-2xl"
              containerClassName="w-full"
            />
          </div>

          {/* Languages Card */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="300"
            className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md hover:border-red-500/20 transition-all duration-500 hover:scale-[1.02]"
          >
            <ImageWithSkeleton
              src={langUrl}
              alt="Macha Reddaiah's Top Languages"
              className="w-full rounded-2xl"
              containerClassName="w-full"
            />
          </div>

          {/* Streak Card */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="400"
            className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md hover:border-red-500/20 transition-all duration-500 hover:scale-[1.02]"
          >
            <ImageWithSkeleton
              src={streakUrl}
              alt="Macha Reddaiah's GitHub Streak"
              className="w-full rounded-2xl"
              containerClassName="w-full"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default GithubStats;
