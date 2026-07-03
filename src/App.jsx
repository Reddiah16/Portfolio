import React, { lazy, Suspense } from 'react'

// ── Above-fold: load eagerly (critical path) ─────────────────────────────────
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BackToTop from './components/BackToTop'

// ── Below-fold: lazy-load for code splitting & faster initial paint ──────────
const About           = lazy(() => import('./components/About'))
const TechnicalSkills = lazy(() => import('./components/TechnicalSkills'))
const Services        = lazy(() => import('./components/Services'))
const Projects        = lazy(() => import('./components/Projects'))
const Timeline        = lazy(() => import('./components/Timeline'))
const Certificates    = lazy(() => import('./components/Certificates'))
const SoftSkills      = lazy(() => import('./components/SoftSkills'))
const Contact         = lazy(() => import('./components/Contact'))
const Footer          = lazy(() => import('./components/Footer'))

function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <BackToTop />
      <Suspense fallback={null}>
        <About />
        <TechnicalSkills />
        <Services />
        <Projects />
        <Timeline />
        <Certificates />
        <SoftSkills />
        <Contact />
        <Footer />
      </Suspense>
    </>
  )
}

export default App

