import React from 'react';
import { personalInfo } from '../data/portfolioData.ts';
import { Award, Code2, Globe, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-24 border-t border-slate-900 bg-[#070b14] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            <span>Background</span>
          </div>
          <h2
            id="about-section-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white"
          >
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Main About Paragraph */}
          <div className="lg:col-span-8 space-y-6">
            <div
              id="about-paragraph-card"
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 shadow-md text-slate-200 leading-relaxed text-base sm:text-lg space-y-4"
            >
              <p id="about-text" className="text-slate-300 font-normal leading-relaxed">
                {personalInfo.aboutParagraph}
              </p>
            </div>

            {/* Core Direction Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                id="interest-software-dev"
                className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/70 flex items-start space-x-4 hover:border-blue-900/60 transition-colors"
              >
                <div className="p-2.5 rounded-lg bg-blue-950 text-blue-400 border border-blue-800/40">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Software Development</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Building robust logical algorithms and practical software solutions.
                  </p>
                </div>
              </div>

              <div
                id="interest-web-dev"
                className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/70 flex items-start space-x-4 hover:border-blue-900/60 transition-colors"
              >
                <div className="p-2.5 rounded-lg bg-sky-950 text-sky-400 border border-sky-800/40">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Web Development</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Creating responsive, user-friendly frontend interfaces and accessible web platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Highlight Sidebar (CGPA & Status) */}
          <div className="lg:col-span-4 space-y-4">
            {/* CGPA Feature Card */}
            <div
              id="about-cgpa-card"
              className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-blue-950/40 via-slate-900/80 to-slate-900 border border-blue-900/50 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center space-x-2 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-3">
                <Award className="w-4 h-4" />
                <span>Academic Distinction</span>
              </div>

              <div className="mt-1">
                <span className="text-xs text-slate-400 block mb-1">Cumulative GPA</span>
                <div className="flex items-baseline space-x-2">
                  <span id="cgpa-number" className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    9.47
                  </span>
                  <span className="text-lg text-slate-400 font-medium">/ 10</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-800 text-xs text-slate-400 leading-relaxed">
                Computer Science and Engineering student at SRM Institute of Science and Technology (SRMIST).
              </div>
            </div>

            {/* Quick Summary Pill */}
            <div
              id="about-profile-summary"
              className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 text-xs text-slate-400 space-y-2.5"
            >
              <div className="flex items-center justify-between text-slate-300">
                <span>Career Direction</span>
                <span className="font-semibold text-blue-400">{personalInfo.careerDirection}</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>Institution</span>
                <span className="font-semibold text-white">SRMIST</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>Class Of</span>
                <span className="font-semibold text-white">2029</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
