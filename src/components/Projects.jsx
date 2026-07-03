import React, { useState } from 'react';
import { projects, socialLinks } from '../data/portfolioData';

/* ─── Icon Components ──────────────────────────────────────────────── */
const GitHubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const EyeIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

/* ─── Interactive Mockup (screenshot placeholder) ───────────────────── */
const InteractiveMockup = ({ projectId }) => {
  if (projectId === "resumeiq") {
    return (
      <div className="w-full h-full flex flex-col justify-between text-xs font-mono text-white/90 select-none relative">
        {/* Scanning Laser Bar */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-red-500 shadow-[0_0_10px_#ff2a2a] animate-scan z-10 pointer-events-none" />

        <div className="flex justify-between items-center pb-2 border-b border-white/10 text-white/50 text-[10px]">
          <span>resume_scanner.py</span>
          <span className="w-2 h-2 rounded-full bg-[#ff2a2a] animate-ping" />
        </div>

        <div className="flex-grow flex items-center justify-between gap-4 py-4">
          <div className="flex flex-col items-center gap-1 shrink-0">
            <div className="w-16 h-16 rounded-full border-4 border-dashed border-red-500/30 flex items-center justify-center relative animate-[spin_20s_linear_infinite]">
              <span className="absolute text-sm font-black tracking-tight text-white animate-pulse">85%</span>
            </div>
            <span className="text-[8px] uppercase tracking-wider text-white/40 mt-1">ATS Score</span>
          </div>
          <div className="flex-1 flex flex-col gap-1.5">
            <div className="bg-white/5 rounded px-2.5 py-1 flex justify-between border border-white/5">
              <span className="text-white/50">Skills Match</span>
              <span className="text-red-400 font-bold">92%</span>
            </div>
            <div className="bg-white/5 rounded px-2.5 py-1 flex justify-between border border-white/5">
              <span className="text-white/50">Experience</span>
              <span className="text-red-400 font-bold">88%</span>
            </div>
            <div className="bg-white/5 rounded px-2.5 py-1 flex justify-between border border-white/5">
              <span className="text-white/50">Formatter</span>
              <span className="text-green-400 font-bold">PASS</span>
            </div>
          </div>
        </div>

        <div className="bg-black/60 rounded p-2 text-[9px] text-red-300/80 border border-white/5">
          <span>Llama 3.1: Parsing semantic equivalent skills...</span>
        </div>
      </div>
    );
  }

  if (projectId === "research-agent") {
    return (
      <div className="w-full h-full flex flex-col justify-between text-xs font-mono text-white/90 select-none relative">
        <div className="flex justify-between items-center pb-2 border-b border-white/10 text-white/50 text-[10px]">
          <span>langgraph_agent.py</span>
          <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
        </div>

        <div className="flex-grow flex items-center justify-center relative py-4">
          <div className="flex items-center justify-between w-full px-6 relative">
            <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-[1px] bg-white/10 z-0">
              <div className="w-3 h-3 rounded-full bg-[#ff2a2a] blur-[2px] absolute -top-1 animate-pulse-travel-x" />
            </div>
            <div className="w-12 h-12 rounded-full bg-[#111] border border-[#ff2a2a]/40 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(255,42,42,0.15)]">
              <span className="text-[8px] font-bold text-white/80">Plan</span>
            </div>
            <div className="w-12 h-12 rounded-full bg-[#111] border border-[#ff2a2a]/40 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(255,42,42,0.15)]">
              <span className="text-[8px] font-bold text-white/80">Research</span>
            </div>
            <div className="w-12 h-12 rounded-full bg-[#111] border border-green-500/40 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(34,197,94,0.15)] animate-pulse">
              <span className="text-[8px] font-bold text-white/80">Editor</span>
            </div>
          </div>
        </div>

        <div className="bg-black/60 rounded p-2 text-[9px] text-green-300/80 border border-white/5 flex flex-col gap-0.5 leading-snug">
          <span>&gt; Planner: Assign task list...</span>
          <span className="text-white/40">&gt; Research: Fetching DuckDuckGo APIs...</span>
        </div>
      </div>
    );
  }

  if (projectId === "hybrid-rag") {
    return (
      <div className="w-full h-full flex flex-col justify-between text-xs font-mono text-white/90 select-none relative">
        <div className="flex justify-between items-center pb-2 border-b border-white/10 text-white/50 text-[10px]">
          <span>hybrid_rag_engine.py</span>
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
        </div>

        <div className="flex-grow flex flex-col justify-center gap-3.5 py-4">
          <div>
            <div className="flex justify-between text-[10px] text-white/40 mb-1">
              <span>Vector Search (FAISS)</span>
              <span className="text-blue-400">94.8% Match</span>
            </div>
            <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
              <div className="bg-blue-500 h-full w-[95%] rounded-full" />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-[10px] text-white/40 mb-1">
              <span>Keyword Search (BM25)</span>
              <span className="text-red-400">76.2% Match</span>
            </div>
            <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
              <div className="bg-[#ff2a2a] h-full w-[76%] rounded-full" />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-[10px] text-white/40 mb-1">
              <span>Reranked Result</span>
              <span className="text-green-400">98.1% Relevance</span>
            </div>
            <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
              <div className="bg-green-500 h-full w-[98%] rounded-full" />
            </div>
          </div>
        </div>

        <div className="bg-black/60 rounded p-2 text-[9px] text-blue-300/80 border border-white/5">
          <span>&gt; Llama 3: Reranking hybrid retrieve docs...</span>
        </div>
      </div>
    );
  }

  // layoff-forecasting
  return (
    <div className="w-full h-full flex flex-col justify-between text-xs font-mono text-white/90 select-none relative">
      <div className="flex justify-between items-center pb-2 border-b border-white/10 text-white/50 text-[10px]">
        <span>layoff_forecaster.py</span>
        <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
      </div>

      <div className="flex-grow flex items-end justify-between gap-2 px-2 py-4 border-b border-white/5">
        {[
          { label: 'Q1', height: 'h-8', opacity: 'bg-[#ff2a2a]/30' },
          { label: 'Q2', height: 'h-11', opacity: 'bg-[#ff2a2a]/50', pulse: true },
          { label: 'Q3', height: 'h-16', opacity: 'bg-[#ff2a2a]' },
          { label: 'Q4', height: 'h-20', opacity: 'bg-[#ff2a2a]', pulse: true },
        ].map(({ label, height, opacity, pulse }) => (
          <div key={label} className="w-full flex flex-col items-center gap-1.5">
            <div className={`w-full ${opacity} ${height} rounded-sm ${pulse ? 'animate-pulse' : ''}`} />
            <span className="text-[8px] text-white/30">{label}</span>
          </div>
        ))}
      </div>

      <div className="bg-black/60 rounded p-2 text-[9px] text-red-300/80 border border-white/5 mt-2">
        <span>&gt; XGBoost: Forecast confidence = 92.4%</span>
      </div>
    </div>
  );
};

/* ─── View Details Modal ─────────────────────────────────────────────── */
const DetailsModal = ({ project, onClose }) => {
  if (!project) return null;
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative bg-[#0f0f0f] border border-white/10 rounded-3xl p-8 max-w-2xl w-full shadow-[0_30px_80px_rgba(0,0,0,0.7)] overflow-y-auto max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-[#ff2a2a]/40 transition-all duration-200"
          aria-label="Close modal"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Badge */}
        {project.badge && (
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-red-400 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20 mb-5">
            {project.badge}
          </span>
        )}

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-4">{project.title}</h3>

        {/* Description */}
        <p className="text-white/65 text-sm leading-relaxed mb-6">{project.description}</p>

        {/* Key Achievements */}
        {project.keyAchievements && (
          <div className="mb-6">
            <h4 className="text-white/80 text-xs font-bold uppercase tracking-wider mb-3">Key Achievements</h4>
            <ul className="text-white/60 text-sm font-medium space-y-2 pl-4 list-disc">
              {project.keyAchievements.map((a, i) => (
                <li key={i} className="leading-relaxed">{a}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.techTags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-bold text-[#ff2a2a] bg-red-500/10 rounded-full border border-red-500/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold hover:bg-white hover:text-black transition-all duration-300"
            >
              <GitHubIcon /> GitHub Repository
            </a>
          )}
          {project.links.demo ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ff2a2a] text-white text-sm font-semibold hover:bg-red-600 hover:shadow-[0_0_20px_rgba(255,42,42,0.5)] transition-all duration-300"
            >
              <ExternalLinkIcon /> Live Demo
            </a>
          ) : (
            <span className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 text-white/30 border border-white/10 text-sm font-semibold cursor-not-allowed">
              <ExternalLinkIcon /> Coming Soon
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

/* ─── Project Card ───────────────────────────────────────────────────── */
const ProjectCard = ({ project, aosDelay }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-delay={aosDelay}
        className={`
          relative rounded-3xl p-[1px] group
          transition-all duration-500
          hover:scale-[1.015]
          hover:shadow-[0_24px_60px_rgba(255,42,42,0.12)]
          ${project.isFlagship
            ? 'bg-gradient-to-br from-red-500/40 via-white/5 to-red-500/20 hover:from-red-500 hover:via-red-400/20 hover:to-red-500/50'
            : 'bg-white/10 hover:bg-white/20'}
        `}
      >
        <div
          className={`
            rounded-3xl p-8 md:p-10 lg:p-12 h-full backdrop-blur-md
            transition-all duration-500
            flex flex-col md:flex-row gap-8 lg:gap-12 items-stretch
            ${project.isFlagship
              ? 'bg-[#0f0f0f]/95 group-hover:bg-[#0f0f0f]/90'
              : 'bg-[#111111]/90 group-hover:bg-[#111111]/80'}
          `}
        >
          {/* ── Left Column: Details ──────────────────────────────── */}
          <div className="flex-1 flex flex-col justify-between text-left">
            <div>
              {/* Badge */}
              {project.badge && (
                <span className="inline-block text-xs font-bold tracking-widest uppercase text-red-400 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20 mb-6">
                  {project.badge}
                </span>
              )}

              {/* Number + Title */}
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-4xl md:text-5xl font-black text-white/10 font-serif italic select-none">{project.number}</span>
                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight group-hover:text-[#ff2a2a] transition-colors duration-500">
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <p
                className="text-white/60 text-sm md:text-base leading-relaxed mb-6 font-medium"
                style={{ display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical', overflow: 'hidden', minHeight: '72px' }}
              >
                {project.description}
              </p>

              {/* Key Achievements */}
              {project.keyAchievements && (
                <div className="mb-6">
                  <h4 className="text-white/80 text-xs font-bold uppercase tracking-wider mb-3">Key Achievements:</h4>
                  <ul className="text-white/60 text-sm font-medium space-y-2 pl-4 list-disc">
                    {project.keyAchievements.map((a, i) => (
                      <li key={i} className="hover:text-white transition-colors duration-300 leading-relaxed">{a}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div>
              {/* Technology Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-bold text-white/70 bg-white/5 rounded-full border border-white/10 hover:bg-red-500/20 hover:border-red-500/30 hover:text-red-300 transition-all duration-300 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                {/* GitHub */}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold hover:bg-white hover:text-black transition-all duration-300 shadow-sm"
                  >
                    <GitHubIcon /> GitHub Repository
                  </a>
                )}

                {/* Live Demo */}
                {project.links.demo !== undefined && (
                  <a
                    href={project.links.demo || '#'}
                    target={project.links.demo ? "_blank" : undefined}
                    rel={project.links.demo ? "noopener noreferrer" : undefined}
                    className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm ${
                      project.links.demo
                        ? 'bg-[#ff2a2a] text-white hover:bg-red-600 hover:shadow-[0_0_20px_rgba(255,42,42,0.4)]'
                        : 'bg-white/5 text-white/40 border border-white/10 cursor-not-allowed'
                    }`}
                  >
                    <ExternalLinkIcon />
                    {project.links.demo ? 'Live Demo' : 'Coming Soon'}
                  </a>
                )}

                {/* View Details */}
                <button
                  onClick={() => setShowModal(true)}
                  className="flex items-center gap-2.5 px-6 py-3 rounded-full bg-transparent border border-white/15 text-white/60 text-sm font-semibold hover:border-[#ff2a2a]/50 hover:text-[#ff2a2a] hover:bg-[#ff2a2a]/8 transition-all duration-300"
                >
                  <EyeIcon /> View Details
                </button>
              </div>
            </div>
          </div>

          {/* ── Right Column: Large Screenshot / Mockup Area ──────── */}
          <div className="w-full md:w-[380px] lg:w-[460px] shrink-0 mt-8 md:mt-0 flex flex-col justify-center">
            <div
              className="
                bg-black/50 border border-white/10 rounded-2xl relative overflow-hidden
                group-hover:border-[#ff2a2a]/30 group-hover:shadow-[0_15px_50px_rgba(255,42,42,0.12)]
                transition-all duration-500 flex flex-col h-full min-h-[320px] lg:min-h-[360px]
              "
            >
              {/* Browser chrome decoration */}
              <div className="bg-white/5 border-b border-white/10 px-4 py-2.5 flex items-center gap-1.5 shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <div className="bg-white/5 rounded px-3 py-0.5 text-[9px] text-white/30 font-mono flex-1 text-center truncate ml-4">
                  macha-reddaiah.dev/{project.id}
                </div>
              </div>

              {/* Screenshot placeholder + interactive mockup overlay */}
              <div className="relative flex-grow flex flex-col">
                {/* Placeholder grid pattern when no screenshot */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(255,42,42,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,42,42,0.03) 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                  }}
                />

                {/* Corner label: "screenshot coming soon" watermark */}
                {!project.screenshot && (
                  <div className="absolute top-3 right-3 z-10">
                    <span className="text-[8px] uppercase tracking-widest text-white/15 font-mono bg-white/3 border border-white/8 px-2 py-0.5 rounded">
                      Live Preview
                    </span>
                  </div>
                )}

                {/* If real screenshot exists, show it; otherwise show interactive mockup */}
                {project.screenshot ? (
                  <img
                    src={project.screenshot}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="p-5 flex-grow flex flex-col justify-center relative z-0">
                    <InteractiveMockup projectId={project.id} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details Modal */}
      {showModal && (
        <DetailsModal project={project} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

/* ─── Projects Section ───────────────────────────────────────────────── */
const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#0a0a0a] py-24 md:py-32 lg:py-40 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-8 shadow-sm bg-white/5 backdrop-blur-sm">
            Featured Projects
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
            Work that speaks <br className="hidden md:block" />for itself
          </h2>
          <p className="text-white/70 text-base md:text-lg max-w-lg font-medium leading-relaxed">
            A selection of projects that showcase my expertise in Generative AI systems, LangGraph agent workflows, and backend systems development.
          </p>
        </div>

        {/* Project Cards */}
        <div className="flex flex-col gap-8 md:gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              aosDelay={String((index + 1) * 150)}
            />
          ))}
        </div>

        {/* GitHub CTA */}
        <div data-aos="fade-up" data-aos-delay="500" className="mt-16 flex justify-center">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white font-bold text-lg hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-500 group"
          >
            <GitHubIcon />
            Explore All My Repositories
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
