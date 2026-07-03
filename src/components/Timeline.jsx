import React, { useEffect, useRef } from 'react';
import { education, internshipsList } from '../data/portfolioData';

// ─── Timeline data assembly ───────────────────────────────────────────────────
const timelineItems = [
  {
    type: 'education',
    icon: '🎓',
    title: education.degree,
    subtitle: education.institution,
    period: `Graduating ${education.graduation}`,
    details: [`CGPA: ${education.cgpa}`],
    tags: ['AI & ML', 'B.Tech'],
  },
  ...internshipsList.map((intern) => ({
    type: 'experience',
    icon: '💼',
    title: intern.role,
    subtitle: intern.organization,
    period: intern.duration,
    details: intern.skills,
    tags: intern.tech,
  })),
  {
    type: 'education',
    icon: '📚',
    title: education.twelfth,
    subtitle: education.tenth,
    period: '2022',
    details: [],
    tags: ['MPC', 'Intermediate'],
  },
];

// ─── Glassmorphism card ───────────────────────────────────────────────────────
const CardContent = ({ item, index, side }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('tl-card-visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={cardRef}
      className={`tl-card-animate ${side === 'left' ? 'tl-from-left' : 'tl-from-right'} w-full max-w-md`}
      style={{ transitionDelay: `${index * 100 + 80}ms` }}
    >
      <div className="group relative bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/[0.07] hover:border-red-500/30 hover:shadow-[0_8px_40px_rgba(255,42,42,0.12)] transition-all duration-500 cursor-default">
        {/* Red top accent line */}
        <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent rounded-full" />

        {/* Meta row */}
        <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
          <span className={`text-[10px] font-black tracking-[0.2em] uppercase px-3 py-1 rounded-full border ${
            item.type === 'education'
              ? 'border-red-400/30 text-red-400 bg-red-500/10'
              : 'border-white/15 text-white/60 bg-white/5'
          }`}>
            {item.type === 'education' ? 'Education' : 'Experience'}
          </span>
          <time className="text-white/35 text-[11px] font-mono font-bold tracking-wider">
            {item.period}
          </time>
        </div>

        {/* Title */}
        <h3 className="text-white text-lg md:text-xl font-black tracking-tight mb-1 leading-snug group-hover:text-red-100 transition-colors duration-300">
          {item.title}
        </h3>

        {/* Subtitle */}
        <p className="text-red-400/90 text-sm font-bold uppercase tracking-wide mb-4">
          {item.subtitle}
        </p>

        {/* Bullet details */}
        {item.details.length > 0 && (
          <ul className="space-y-1.5 mb-5">
            {item.details.map((d, i) => (
              <li key={i} className="flex items-start gap-2 text-white/70 text-sm font-medium">
                <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-red-500/70" />
                {d}
              </li>
            ))}
          </ul>
        )}

        {/* Tags */}
        {item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.07]">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 text-[11px] font-mono font-semibold text-white/50 bg-white/[0.04] border border-white/[0.08] rounded-full hover:text-white/80 hover:border-white/20 transition-all duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

// ─── Dot on the vertical spine ────────────────────────────────────────────────
const TimelineDot = ({ item, index }) => {
  const dotRef = useRef(null);

  useEffect(() => {
    const el = dotRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('tl-dot-visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={dotRef}
      className="tl-dot shrink-0 z-20 w-12 h-12 rounded-full border-2 border-red-500/50 bg-[#0a0a0a] flex items-center justify-center text-xl shadow-[0_0_24px_rgba(255,42,42,0.3)]"
      style={{ transitionDelay: `${index * 120}ms` }}
      aria-hidden
    >
      {item.icon}
    </div>
  );
};

// ─── End marker ───────────────────────────────────────────────────────────────
const EndMarker = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0) scale(1)';
          observer.unobserve(el);
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex justify-center mt-10">
      <div
        ref={ref}
        className="flex flex-col items-center gap-2 transition-all duration-700"
        style={{ opacity: 0, transform: 'translateY(20px) scale(0.8)' }}
      >
        <div className="w-4 h-4 rounded-full bg-red-500 shadow-[0_0_20px_rgba(255,42,42,0.7)]" />
        <span className="text-white/60 text-[10px] font-mono tracking-[0.25em] uppercase">Today</span>
      </div>
    </div>
  );
};

// ─── Main Timeline section ─────────────────────────────────────────────────────
const Timeline = () => {
  const lineRef = useRef(null);

  // Grow the spine as the user scrolls through the section
  useEffect(() => {
    const line = lineRef.current;
    if (!line) return;
    const section = line.closest('section');

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const progress = Math.min(
        1,
        Math.max(0, (window.innerHeight - rect.top) / (rect.height + window.innerHeight))
      );
      line.style.transform = `scaleY(${progress})`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      id="timeline"
      className="relative bg-[#0a0a0a] py-24 md:py-32 lg:py-40 px-6 md:px-12 w-full overflow-hidden font-sans"
    >
      {/* Dot-grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}
      />

      {/* Ambient glow blobs */}
      <div aria-hidden className="pointer-events-none absolute top-1/4 -left-40 w-80 h-80 rounded-full blur-3xl" style={{ background: 'rgba(255,42,42,0.08)' }} />
      <div aria-hidden className="pointer-events-none absolute bottom-1/3 -right-40 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(255,42,42,0.06)' }} />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* ── Section header ────────────────────────────────────────────── */}
        <div className="text-center mb-20" data-aos="fade-up">
          <span className="inline-block text-[11px] font-black tracking-[0.25em] uppercase text-red-400 bg-red-500/10 border border-red-500/20 px-4 py-1.5 rounded-full mb-5">
            Journey
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 md:mb-8 leading-[1.1]">
            Education &amp; Experience
          </h2>
          <p className="text-white/70 text-base md:text-lg font-medium max-w-xl mx-auto leading-relaxed">
            The milestones that shaped my engineering path — from classrooms to production AI systems.
          </p>
        </div>

        {/* ── Timeline body ─────────────────────────────────────────────── */}
        <div className="relative">

          {/* Desktop centre spine */}
          <div
            aria-hidden
            className="hidden md:block absolute left-1/2 -translate-x-[0.5px] top-0 bottom-0 w-px bg-white/[0.06]"
          >
            <div
              ref={lineRef}
              className="absolute inset-0 origin-top"
              style={{
                background: 'linear-gradient(to bottom, #ff2a2a 0%, rgba(255,42,42,0.3) 70%, transparent 100%)',
                transform: 'scaleY(0)',
                transition: 'transform 0.08s linear',
              }}
            />
          </div>

          {/* Mobile left spine */}
          <div
            aria-hidden
            className="md:hidden absolute left-[44px] top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, #ff2a2a, rgba(255,42,42,0.15))' }}
          />

          {/* Items */}
          <div className="flex flex-col">
            {timelineItems.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={index} className="relative">

                  {/* ── Desktop two-column row ──────────────────────────── */}
                  <div className="hidden md:flex items-center gap-0 py-8">
                    {/* Left column */}
                    <div className="flex-1 flex justify-end pr-8">
                      {isLeft
                        ? <CardContent item={item} index={index} side="left" />
                        : <div />}
                    </div>

                    {/* Centre dot */}
                    <TimelineDot item={item} index={index} />

                    {/* Right column */}
                    <div className="flex-1 flex justify-start pl-8">
                      {!isLeft
                        ? <CardContent item={item} index={index} side="right" />
                        : <div />}
                    </div>
                  </div>

                  {/* ── Mobile single-column row ────────────────────────── */}
                  <div className="md:hidden flex items-start gap-4 py-6">
                    {/* Dot (left aligned with spine) */}
                    <div className="shrink-0 w-10 flex justify-center">
                      <div className="w-10 h-10 rounded-full border-2 border-red-500/50 bg-[#0a0a0a] flex items-center justify-center text-base shadow-[0_0_16px_rgba(255,42,42,0.3)]" aria-hidden>
                        {item.icon}
                      </div>
                    </div>
                    {/* Card */}
                    <CardContent item={item} index={index} side="right" />
                  </div>

                </div>
              );
            })}
          </div>

          <EndMarker />
        </div>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-16 right-10 md:right-24 text-red-500/20 animate-pulse pointer-events-none" aria-hidden>
        <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" /></svg>
      </div>
      <div className="absolute bottom-20 left-8 md:left-24 text-red-500/15 animate-pulse pointer-events-none" style={{ animationDelay: '1.2s' }} aria-hidden>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" /></svg>
      </div>
    </section>
  );
};

export default Timeline;
