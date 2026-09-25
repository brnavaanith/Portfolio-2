import React from 'react';
import { personalInfo } from '../data/portfolioData.ts';
import { ArrowDown, FileDown, MapPin, GraduationCap, Sparkles, Image as ImageIcon } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      const navOffset = 70;
      const elementPosition = projectsEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center tech-grid hero-glow py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      {/* Subtle background ambient light (strictly no particles, no excessive 3D) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-10 w-[300px] h-[300px] bg-sky-500/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Hero content */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
            
            {/* Greeting badge */}
            <div className="inline-flex items-center space-x-2 text-blue-400 text-sm font-semibold tracking-wide">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              <span>Hi, I'm</span>
            </div>

            {/* Name: Balanced and prominent (NOT excessively large) */}
            <h1
              id="hero-name"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight"
            >
              {personalInfo.name}
            </h1>

            {/* Professional Title */}
            <div className="inline-block">
              <span
                id="hero-title"
                className="text-lg sm:text-xl lg:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-200"
              >
                {personalInfo.professionalTitle}
              </span>
            </div>

            {/* Tagline */}
            <p
              id="hero-tagline"
              className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal"
            >
              {personalInfo.heroTagline}
            </p>

            {/* Academic & Location Meta Badge */}
            <div
              id="hero-meta-badge"
              className="inline-flex flex-wrap items-center gap-3 py-2 px-3.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300 w-fit"
            >
              <div className="flex items-center space-x-1.5 text-blue-400">
                <MapPin className="w-3.5 h-3.5" />
                <span>SRMIST</span>
              </div>
              <span className="text-slate-600">·</span>
              <div className="flex items-center space-x-1.5 text-slate-300">
                <GraduationCap className="w-4 h-4 text-blue-400" />
                <span>Expected graduation 2029</span>
              </div>
            </div>

            {/* Buttons: 1. Download Resume (disabled/ready) & 2. View Projects */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              {/* View Projects Button */}
              <a
                id="hero-view-projects-button"
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center space-x-2.5 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm sm:text-base font-semibold transition-all duration-200 shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              {/* Download Resume Button: Created now, kept ready/disabled as no PDF yet exists */}
              <div className="relative group">
                <button
                  id="hero-download-resume-button"
                  type="button"
                  disabled
                  aria-disabled="true"
                  aria-describedby="resume-tooltip"
                  className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-slate-800/80 text-slate-400 border border-slate-700/70 text-sm sm:text-base font-medium cursor-not-allowed opacity-80 transition-colors"
                >
                  <FileDown className="w-4 h-4 text-slate-400" />
                  <span>Download Resume</span>
                </button>
                {/* Subtle helper tooltip explaining status */}
                <div
                  id="resume-tooltip"
                  role="tooltip"
                  className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block w-52 p-2 bg-slate-950 text-[11px] text-slate-300 rounded-md border border-slate-800 shadow-xl text-center z-20 pointer-events-none"
                >
                  Resume PDF will be linked upon publication.
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Profile photo placeholder */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              id="hero-profile-container"
              className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-square rounded-2xl bg-gradient-to-br from-slate-800/80 via-slate-900 to-[#070b14] p-2 border border-slate-800 shadow-2xl shadow-black/50 group"
            >
              {/* Outer decorative subtle accent ring */}
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-600/20 to-sky-400/20 blur opacity-75 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

              {/* Inner placeholder canvas */}
              <div className="w-full h-full rounded-xl bg-[#090e1a] border border-slate-800/80 overflow-hidden flex flex-col items-center justify-center p-6 relative text-center">
                <img
                  src="/images/profile-placeholder.svg"
                  alt="Navaanith B R - Profile Placeholder"
                  className="w-full h-full object-contain"
                  loading="eager"
                />

                {/* Clear replace label badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md border border-slate-800 rounded-lg py-2 px-3 flex items-center justify-center space-x-2">
                  <ImageIcon className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span className="text-xs font-medium text-slate-300 truncate">
                    {personalInfo.profilePhotoPlaceholderLabel}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
