// ============================================================
// portfolioData.js — Centralized configuration for Macha Reddaiah's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Macha Reddaiah",
  firstName: "Macha",
  brandName: "Macha Reddaiah",
  title: "AI Engineer | Generative AI & LLM Engineer",
  location: "Proddatur, Andhra Pradesh",
  phone: "+91 9346119522",
  emails: {
    primary: "reddiah151@gmail.com",
  },
  summary:
    "AI Engineer with hands-on experience building and deploying Generative AI systems, LLM-powered applications, and production-grade RAG pipelines. Proficient in LangGraph multi-agent orchestration, LangChain, hybrid vector + keyword retrieval, prompt engineering, and FastAPI backend services containerized with Docker.",
  resumeUrl: "/MACHA_REDDAIAH_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/Reddiah16",
  linkedin: "https://www.linkedin.com/in/macha-reddaiah",
};

export const heroContent = {
  greeting: "Hi, I'm Macha Reddaiah",
  titleHighlight: "AI & Generative AI Engineer",
  subtitle:
    "Building production-ready AI applications using LangGraph, FastAPI, PostgreSQL, Retrieval-Augmented Generation (RAG), and modern Large Language Models.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "#contact",
  },
  ctaResume: { text: "Download Resume", href: "/MACHA_REDDAIAH_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Macha Reddaiah</span>, an AI & Generative AI Engineer specializing in designing, building, and deploying production-ready Generative AI systems, multi-agent workflows with LangGraph, LLM integration with LangChain, and high-performance RAG pipelines containerized with Docker.`,
  techStack: ["LangGraph", "LangChain", "RAG", "FastAPI"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I architect production-grade AI systems",
  description:
    "I follow a structured, secure, and highly optimized approach to engineer agentic AI systems, scalable backend services, and custom vector search engines.",
  cards: [
    {
      number: "01",
      title: "Agentic Design & RAG",
      text: "Defining multi-agent flows with LangGraph, planning retrieval strategies, and structuring RAG pipelines for domain-specific accuracy.",
    },
    {
      number: "02",
      title: "API & Backend Development",
      text: "Building high-throughput, secure REST APIs with FastAPI, managing PostgreSQL schemas, and implementing SQLAlchemy ORM layers.",
    },
    {
      number: "03",
      title: "Security & Optimization",
      text: "Hardening prompts against injection risks, setting up rate limits, and optimizing semantic vector searches for production scales.",
    },
    {
      number: "04",
      title: "DevOps & Deployment",
      text: "Containerizing the AI application with Docker and deploying to cloud infrastructure with persistent databases and monitoring.",
    },
  ],
  endText: "Ready to deploy!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "SQL", level: 90 },
      ]
    },
    {
      title: "Generative & Agentic AI",
      skills: [
        { name: "LangGraph (Multi-Agent Flows)", level: 92 },
        { name: "LangChain (LLM Integration)", level: 92 },
        { name: "Retrieval-Augmented Generation (RAG)", level: 92 },
        { name: "Prompt Engineering & Hardening", level: 95 },
        { name: "Local Inference (Ollama & Qwen)", level: 88 }
      ]
    },
    {
      title: "ML & Vector Search",
      skills: [
        { name: "Vector Search (FAISS & Semantic Search)", level: 90 },
        { name: "Machine Learning & NLP", level: 85 },
        { name: "PyTorch & Transformers", level: 80 }
      ]
    },
    {
      title: "Backend & MLOps",
      skills: [
        { name: "FastAPI & REST APIs", level: 92 },
        { name: "PostgreSQL & SQLAlchemy", level: 88 },
        { name: "Docker Containerization", level: 85 },
        { name: "Git & Version Control", level: 90 },
        { name: "Streamlit UI", level: 88 }
      ]
    }
  ]
};

export const contentCreation = {
  badge: "",
  heading: "",
  description: "",
  categories: []
};

export const leadershipList = [];

export const internshipsList = [
  {
    organization: "SkillDzire",
    role: "Machine Learning Intern",
    duration: "June 2025 - August 2025",
    skills: ["Machine Learning Algorithms", "Data Preprocessing & Cleaning", "Model Training & Evaluation", "Python Development"],
    tech: ["Python", "Jupyter Notebooks", "Scikit-Learn", "Pandas", "NumPy"]
  }
];

export const softSkillsList = [
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex engineering and LLM orchestration challenges into modular, readable backend logic." },
  { name: "Team Collaboration", icon: "🤝", desc: "Collaborating with cross-functional teams to integrate backend AI engines with interactive frontend interfaces." },
  { name: "Adaptability", icon: "🌟", desc: "Quick to research, learn, and implement emerging AI libraries, security patches, and database architectures." },
  { name: "Communication", icon: "💬", desc: "Articulating technical system designs and multi-agent workflow layouts clearly to business and engineering teams." }
];

export const projects = [
  {
    id: "resumeiq",
    number: "01",
    badge: "🚀 Featured Project",
    title: "ResumeIQ — AI Resume Analyzer & ATS Optimizer",
    description:
      "Production-grade resume evaluation engine containerized with Docker, parsing unstructured profiles using FastAPI and Llama 3.1. Achieves high accuracy via custom domain-weighted mathematical scoring. Boosts recruitment efficiency with Groq-accelerated semantic extraction, structured JSON parsing, and PostgreSQL storage.",
    techTags: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Groq API",
      "Llama 3.1",
      "SQLAlchemy",
      "Docker",
    ],
    keyAchievements: [
      "Designed a custom domain-weighted similarity scoring engine evaluating multiple alignment parameters.",
      "Integrated Groq API with Llama 3.1 for semantic structured output parsing and seniority analysis.",
      "Implemented security boundaries using prompt injection filters and API rate limiting."
    ],
    links: {
      github: "https://github.com/Reddiah16/ats-optimizer",
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "research-agent",
    number: "02",
    badge: "🤖 Agentic System",
    title: "AI Research Agent — Multi-Agent Autonomous Research System",
    description:
      "Enterprise-ready multi-agent search and synthesis system built with LangGraph. Orchestrates planner, researcher, and editor agents to automate competitive intelligence collection. Features state sharing, cyclical graph routing, and local Ollama inference, exposing async endpoints via FastAPI for secure, high-throughput backend task execution.",
    techTags: [
      "Python",
      "LangGraph",
      "Ollama",
      "Qwen2.5",
      "DuckDuckGo API",
      "PostgreSQL",
      "Streamlit",
    ],
    keyAchievements: [
      "Built a cyclical multi-agent graph system using LangGraph with state sharing and role delegation.",
      "Integrated local Ollama inference using Qwen2.5 to synthesize research reports on localized hardware.",
      "Developed interactive Streamlit reporting interface supporting dynamic history search and PDF compiles."
    ],
    links: {
      github: "https://github.com/Reddiah16/Research_agent",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "hybrid-rag",
    number: "03",
    badge: "🔍 Retrieval Engine",
    title: "Hybrid Search RAG Assistant — Advanced QA Retrieval Engine",
    description:
      "High-performance RAG pipeline combining FAISS semantic vector search and BM25 keyword search, improving query accuracy by 25%. Deployed via FastAPI with asynchronous retrieval endpoints, the backend handles semantic document chunking, automated query rewriting, and Llama 3 reranking for production-level response times.",
    techTags: [
      "Python",
      "LangChain",
      "FAISS",
      "FastAPI",
      "BM25",
      "Llama 3",
      "Streamlit",
    ],
    keyAchievements: [
      "Implemented hybrid vector-keyword query routing to improve search retrieval accuracy by 25%.",
      "Developed custom semantic document chunking to preserve contextual boundaries during indexing.",
      "Deployed asynchronous retrieval endpoints using FastAPI with automated query rewriting."
    ],
    links: {
      github: "https://github.com/Reddiah16/hybrid-rag-assistant",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "layoff-forecasting",
    number: "04",
    badge: "📈 ML & Forecasting",
    title: "Layoff Forecasting System — Predictive Workforce Analytics",
    description:
      "Workforce prediction platform built with Scikit-Learn and XGBoost, achieving 92% trend forecasting accuracy. Exposes scalable feature engineering pipelines and model inference via FastAPI. Helps enterprises mitigate risk by transforming macroeconomic metrics and seasonal indicators into actionable predictive intelligence.",
    techTags: [
      "Python",
      "Scikit-Learn",
      "XGBoost",
      "Pandas",
      "NumPy",
      "Streamlit",
    ],
    keyAchievements: [
      "Trained XGBoost regression model achieving 92% forecasting accuracy for tech sector layoff trends.",
      "Engineered 15+ custom features capturing macroeconomic indicators and seasonal workforce variations.",
      "Designed Streamlit analytics dashboard to visualize feature importance and localized hot-spot metrics."
    ],
    links: {
      github: "https://github.com/Reddiah16/layoff-forecaster",
      demo: null,
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Python Programming Certification",
      issuer: "GeeksforGeeks",
      icon: "🐍",
      fileUrl: "/certificates/python_geeksforgeeks.pdf"
    },
    {
      name: "Database Solutions Certification",
      issuer: "Wipro TalentNext",
      icon: "🗄️",
      fileUrl: "/certificates/wipro_talentnext.jpg"
    },
    {
      name: "Machine Learning Certification",
      issuer: "SkillDzire",
      icon: "🧠",
      fileUrl: "/certificates/skilldzire_ml.jpg"
    },
  ],
  viewAllUrl: "",
};

export const education = {
  degree: "B.Tech – Artificial Intelligence & Machine Learning",
  institution: "Annamacharya Institute of Technology and Sciences, Rajampet",
  cgpa: "8.26",
  graduation: "2026",
  twelfth: "Intermediate MPC – 72%",
  tenth: "Abhyas Jr. College, Proddatur",
};

export const footerContent = {
  taglines: [
    "AI & Generative AI Engineering",
    "Python · LangGraph · FastAPI · RAG",
    "Production-ready AI Architectures",
  ],
  credential: "B.Tech AI & ML · CGPA 8.26",
  copyright: `© ${new Date().getFullYear()} Macha Reddaiah`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
