import React, { useState } from 'react';
import { certificates } from '../data/portfolioData';

const CertificateCard = ({ cert, aosDelay, onPreview }) => {
  const handleDownload = (e) => {
    e.stopPropagation();
    const link = document.createElement('a');
    link.href = cert.fileUrl;
    const ext = cert.fileUrl.split('.').pop() || 'jpg';
    link.download = `${cert.name.replace(/\s+/g, '_')}.${ext}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div 
      data-aos="zoom-in"
      data-aos-delay={aosDelay}
      onClick={() => onPreview(cert)}
      className="bg-black/40 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:border-[#ff2a2a]/30 hover:bg-black/60 hover:scale-[1.03] hover:shadow-[0_20px_45px_rgba(255,42,42,0.08)] transition-all duration-500 cursor-pointer group flex flex-col justify-between h-full relative"
    >
      {/* Visual Certificate Document Thumbnail */}
      <div 
        className="w-full aspect-[1.4/1] bg-neutral-950 border border-white/5 rounded-2xl relative overflow-hidden flex flex-col justify-between p-4 mb-5 group-hover:border-[#ff2a2a]/20 transition-all duration-500"
      >
        {/* Decorative Grid Line Background */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '16px 16px'
          }}
        />

        {/* Certificate Header */}
        <div className="flex justify-between items-start z-10">
          <span className="text-[8px] font-mono text-white/30 uppercase tracking-widest font-semibold">Verification Node</span>
          <span className="text-xl filter drop-shadow-[0_2px_8px_rgba(255,255,255,0.2)]">{cert.icon}</span>
        </div>

        {/* Certificate Center Metadata */}
        <div className="my-2 z-10 text-left">
          <div className="text-[8px] text-[#ff2a2a] uppercase tracking-wider font-extrabold mb-1">
            Certificate of Completion
          </div>
          <div className="text-sm font-black text-white truncate leading-tight group-hover:text-red-100 transition-colors">
            {cert.name}
          </div>
          <div className="text-[10px] text-white/50 font-bold mt-0.5">
            {cert.issuer}
          </div>
        </div>

        {/* Certificate Footer / Secure ID / Completion Badge */}
        <div className="flex justify-between items-end border-t border-white/5 pt-2 text-[8px] text-white/30 font-mono z-10">
          <span>ID: {cert.name.slice(0, 4).toUpperCase()}-2026</span>
          {/* Gold Completion Seal Badge */}
          <span className="px-2 py-0.5 bg-yellow-500/10 text-yellow-400 border border-yellow-500/25 rounded-md font-black uppercase tracking-wider text-[7px] flex items-center gap-1 shadow-[0_0_10px_rgba(234,179,8,0.15)]">
            <svg className="w-2 h-2 fill-current" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21L12 17.77L5.82 21L7 14.14L2 9.27l6.91-1.01L12 2z"/>
            </svg>
            Verified
          </span>
        </div>
      </div>

      {/* Card Details Footer */}
      <div className="text-left mb-6">
        <h3 className="text-white font-extrabold text-base md:text-lg leading-snug mb-1 group-hover:text-[#ff2a2a] transition-colors duration-300">
          {cert.name}
        </h3>
        <p className="text-white/60 text-xs font-bold uppercase tracking-wider">
          {cert.issuer}
        </p>
      </div>

      <div className="flex items-center gap-3 mt-auto w-full z-10">
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onPreview(cert);
          }}
          className="flex-1 text-center py-2 px-4 rounded-full border border-white/10 hover:border-white/30 hover:bg-white/5 text-white text-xs font-bold transition-all duration-300"
        >
          Preview
        </button>
        <button 
          onClick={handleDownload}
          className="py-2 px-4 rounded-full bg-white hover:bg-gray-200 text-black text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1.5 shrink-0"
          title="Download PDF"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          Download
        </button>
      </div>
    </div>
  );
};

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const handleCloseModal = () => setSelectedCert(null);

  // Close modal on Escape key press
  React.useEffect(() => {
    if (!selectedCert) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleCloseModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCert]);

  return (
    <section id="certificates" className="bg-[#ff2a2a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      
      {/* Torn paper divider at top (transition from dark Projects/GithubStats section) */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#0a0a0a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        {/* Header */}
        <div data-aos="fade-up" className="mb-12 md:mb-16 text-center">
          <div className="inline-block border border-black/25 rounded-full px-5 py-1.5 text-sm text-black/70 font-bold mb-6 bg-white/10 backdrop-blur-sm shadow-sm select-none">
            Credentials
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight uppercase">
            Certifications
          </h2>
          <p className="text-red-100 text-base md:text-lg font-semibold max-w-lg mx-auto">
            Industry-recognized credentials that validate my machine learning, database, and Python capabilities.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certificates.featured.map((cert, index) => (
            <CertificateCard 
              key={cert.name} 
              cert={cert} 
              aosDelay={String((index + 1) * 100)} 
              onPreview={setSelectedCert}
            />
          ))}
        </div>
      </div>

      {/* Interactive Modal Preview */}
      {selectedCert && (
        <div 
          className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-6 animate-fade-in"
          onClick={handleCloseModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div 
            className="bg-[#111] border border-white/10 w-full max-w-4xl rounded-3xl p-6 relative flex flex-col gap-4 max-h-[90vh] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.5)] animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center pb-3 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{selectedCert.icon}</span>
                <div className="text-left">
                  <h3 id="modal-title" className="text-white font-extrabold text-sm md:text-base leading-snug">
                    {selectedCert.name}
                  </h3>
                  <p className="text-white/40 text-xs font-mono uppercase tracking-wider">
                    {selectedCert.issuer}
                  </p>
                </div>
              </div>
              <button 
                onClick={handleCloseModal}
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white flex items-center justify-center transition-all duration-300 font-black text-sm"
                aria-label="Close Preview"
                autoFocus
              >
                ✕
              </button>
            </div>

            {/* Modal Body: File Viewer */}
            <div className="flex-grow bg-black/40 rounded-xl overflow-hidden min-h-[300px] md:min-h-[450px]">
              {selectedCert.fileUrl.match(/\.(jpeg|jpg|gif|png|webp)$/i) ? (
                <img 
                  src={selectedCert.fileUrl} 
                  alt={selectedCert.name}
                  className="w-full h-full object-contain border-0 min-h-[300px] md:min-h-[450px] bg-white/5"
                />
              ) : (
                <iframe 
                  src={selectedCert.fileUrl} 
                  className="w-full h-full border-0 min-h-[300px] md:min-h-[450px] bg-white/5" 
                  title={selectedCert.name}
                />
              )}
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end gap-3 pt-3 border-t border-white/10">
              <button 
                onClick={handleCloseModal}
                className="px-6 py-2.5 rounded-full border border-white/20 text-white text-sm font-bold hover:bg-white/5 transition-all duration-300"
              >
                Close
              </button>
              <a 
                href={selectedCert.fileUrl}
                download={`${selectedCert.name.replace(/\s+/g, '_')}.${selectedCert.fileUrl.split('.').pop() || 'jpg'}`}
                className="px-6 py-2.5 rounded-full bg-[#ff2a2a] text-white text-sm font-bold hover:bg-red-600 hover:shadow-[0_0_20px_rgba(255,42,42,0.4)] transition-all duration-300 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Download
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Decorative stars (matching About section) */}
      <div className="absolute top-16 left-6 md:left-16 text-black opacity-20 animate-pulse">
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-20 right-8 md:right-24 text-black opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }}>
        <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default Certificates;
