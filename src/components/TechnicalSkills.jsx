import React, { useEffect, useRef } from 'react';

const techIcons = {
  python: (
    <svg className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.87 2.01c-1.39 0-2.69.11-3.79.33c-1.93.38-3.5 1.55-4 3.55c-.5 2-.5 4.15-.5 6.27h5.12V6.26c0-1.42.54-2.22 1.7-2.22H15.9V2.36c-1-.23-2.58-.35-4.03-.35z" fill="#3776AB"/>
      <path d="M12.13 21.99c1.39 0 2.69-.11 3.79-.33c1.93-.38 3.5-1.55 4-3.55c.5-2 .5-4.15.5-6.27h-5.12v5.9c0 1.42-.54 2.22-1.7 2.22H8.1v1.68c1 .23 2.58.35 4.03.35z" fill="#FFE873"/>
      <circle cx="8.5" cy="5.5" r="0.75" fill="#fff"/>
      <circle cx="15.5" cy="18.5" r="0.75" fill="#000"/>
    </svg>
  ),
  sql: (
    <svg className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="#ff2a2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="12" cy="5" rx="9" ry="3"/>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/>
    </svg>
  ),
  langchain: (
    <svg className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  ),
  langgraph: (
    <svg className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="5" r="3" fill="#f97316"/>
      <circle cx="5" cy="18" r="3" fill="#f97316"/>
      <circle cx="19" cy="18" r="3" fill="#f97316"/>
      <path d="M12 8l-5 7M12 8l5 7M8 18h8" />
    </svg>
  ),
  rag: (
    <svg className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6h16M4 12h16M4 18h12M19 15l3 3-3 3M22 18h-4" />
    </svg>
  ),
  prompt_eng: (
    <svg className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="m5 9 4 3-4 3M11 15h6" />
      <path d="M12 3l1.5 3L17 6.5l-3.5 2.5L15 13l-3-1.5L9 13l1.5-4L7 6.5l3.5-.5z" fill="#a855f7" stroke="none" />
    </svg>
  ),
  ollama: (
    <svg className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 3.31 1.61 6.24 4.09 8.09M22 12c0-5.52-4.48-10-10-10M17.91 20.09c1.3-.97 2.37-2.25 3.09-3.71M9 13h6M12 9v8" />
    </svg>
  ),
  groq: (
    <svg className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z" fill="#f97316"/>
      <path d="M12 6v6l4 2" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  fastapi: (
    <svg className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm1 14.5v-3.75l2.25 1.25L11 6.25v3.75L8.75 8.75L13 16.5z" fill="#009688"/>
    </svg>
  ),
  rest_api: (
    <svg className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="5" width="20" height="14" rx="2"/>
      <path d="M6 12h12M12 8v8" />
    </svg>
  ),
  postgresql: (
    <svg className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm5 12h-4v4h-2v-4H7v-2h4V8h2v4h4v2z" fill="#336791"/>
    </svg>
  ),
  docker: (
    <svg className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.82 11.51c-.13-.37-.4-.68-.78-.85c-.32-.15-.68-.18-1.02-.1c-.32.07-.63.22-.88.46c-.51.48-.83 1.15-.9 1.87v1.12h1.67c.72 0 1.39-.32 1.87-.83c.31-.33.48-.77.48-1.23c0-.15-.02-.3-.06-.44M1.64 12H21.5c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5H1.64c-.28 0-.5.22-.5.5v1c0 .28.22.5.5.5z" fill="#2496ED"/>
      <path d="M2 13v2.5c0 3 2.5 5.5 5.5 5.5h9c3 0 5.5-2.5 5.5-5.5V13H2z" fill="#2496ED"/>
    </svg>
  ),
  pytorch: (
    <svg className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm1 14H11v-4h2v4zm0-6H11V8h2v2z" fill="#EE4C2C"/>
    </svg>
  ),
  transformers: (
    <svg className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V8h2v4zm4 4h-2v-2h2v2zm0-4h-2V8h2v4z" fill="#facc15"/>
    </svg>
  ),
  nlp: (
    <svg className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M8 10h8M8 14h6" />
    </svg>
  ),
  faiss: (
    <svg className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <path d="M9 9h6v6H9z" />
      <path d="M9 12h6M12 9v6" />
    </svg>
  ),
  git: (
    <svg className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.61 11.23L12.77 1.39a1.98 1.98 0 0 0-2.8 0l-9.4 9.4c-.78.78-.78 2.05 0 2.83l9.84 9.84c.78.78 2.05.78 2.83 0l9.37-9.37c.78-.83.78-2.08 0-2.86zm-10.66.75v5.3c-.4.2-.82.3-1.25.3a2 2 0 1 1 1.25-3.83v-3.04c.83-.43 1.4-1.27 1.4-2.26a2.5 2.5 0 1 1 5 0c0 1-.57 1.83-1.4 2.26v3.04a2 2 0 1 1-2 2v-5.3c-.4-.17-.8-.28-1.25-.3c-.27.02-.5.1-.75.25z" fill="#F05032"/>
    </svg>
  ),
  github: (
    <svg className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" fill="#ffffff" />
    </svg>
  ),
  streamlit: (
    <svg className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 22h20L12 2zm0 6l6 12H6l6-12z" fill="#FF4B4B"/>
    </svg>
  )
};

const skillCategories = [
  {
    title: "Programming",
    skills: [
      { name: "Python", key: "python" },
      { name: "SQL", key: "sql" }
    ]
  },
  {
    title: "AI & LLM",
    skills: [
      { name: "LangChain", key: "langchain" },
      { name: "LangGraph", key: "langgraph" },
      { name: "RAG", key: "rag" },
      { name: "Prompt Engineering", key: "prompt_eng" },
      { name: "Ollama", key: "ollama" },
      { name: "Groq API", key: "groq" }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "FastAPI", key: "fastapi" },
      { name: "REST APIs", key: "rest_api" },
      { name: "PostgreSQL", key: "postgresql" },
      { name: "Docker", key: "docker" }
    ]
  },
  {
    title: "Machine Learning",
    skills: [
      { name: "PyTorch", key: "pytorch" },
      { name: "Transformers", key: "transformers" },
      { name: "NLP", key: "nlp" },
      { name: "FAISS", key: "faiss" }
    ]
  },
  {
    title: "Developer Tools",
    skills: [
      { name: "Git", key: "git" },
      { name: "GitHub", key: "github" },
      { name: "Streamlit", key: "streamlit" }
    ]
  }
];

const TechCard = ({ skill, index }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('tl-card-visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="tl-card-animate tl-from-right bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-5 flex flex-col items-center justify-center text-center gap-3 hover:scale-105 hover:border-red-500/30 hover:shadow-[0_12px_30px_rgba(255,42,42,0.08)] transition-all duration-500 cursor-default group"
      style={{ transitionDelay: `${(index % 4) * 50}ms` }}
    >
      <div
        className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/5 group-hover:bg-red-500/10 group-hover:border-red-500/20 transition-all duration-300"
        aria-hidden="true"
      >
        {techIcons[skill.key] || <span className="text-xl">🛠️</span>}
      </div>
      <div>
        <h3 className="text-white text-xs md:text-sm font-bold tracking-tight">
          {skill.name}
        </h3>
      </div>
    </div>
  );
};

const TechnicalSkills = () => {
  return (
    <section id="skills" className="bg-[#0a0a0a] pt-24 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-20 text-center" data-aos="fade-up">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-6 shadow-sm bg-white/5 backdrop-blur-sm">
            Technical Stack
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase">
            My Technology Grid
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            The core language, framework, database, and library stack I leverage to design, build, and orchestrate production-grade Generative AI systems.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="flex flex-col gap-16">
          {skillCategories.map((category, catIndex) => (
            <div key={category.title} className="flex flex-col gap-6" data-aos="fade-up" data-aos-delay={String(catIndex * 100)}>
              {/* Category Title */}
              <div className="flex items-center gap-4">
                <h3 className="text-lg md:text-xl font-extrabold text-white tracking-wider uppercase font-heading">
                  {category.title}
                </h3>
                <div className="flex-grow h-[1px] bg-white/10" />
              </div>

              {/* Skills cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                {category.skills.map((skill, index) => (
                  <TechCard key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechnicalSkills;
