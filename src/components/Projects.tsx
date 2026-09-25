import React, { useState } from 'react';
import { projects } from '../data/portfolioData.ts';
import {
  ExternalLink,
  Github,
  ChevronDown,
  ChevronUp,
  Layers,
  Sparkles,
  CheckCircle,
  Cpu,
  Compass,
  PlusCircle,
  HeartHandshake,
  Globe,
  Radio
} from 'lucide-react';

export const Projects: React.FC = () => {
  // State to track expanded project IDs
  const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>({
    sharehope: true // featured project expanded by default for great initial impression
  });

  const toggleExpand = (projectId: string) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const featuredProject = projects.find((p) => p.isFeatured);
  const secondaryProjects = projects.filter((p) => !p.isFeatured);

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 lg:py-24 border-t border-slate-900 bg-[#070b14] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            <span>Featured Work</span>
          </div>
          <h2
            id="projects-section-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white"
          >
            Projects
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
            Software, web development, and practical engineering solutions developed through coursework and independent initiatives.
          </p>
        </div>

        <div className="space-y-10">

          {/* ========================================================
              PROJECT 1: SHAREHOPE (FEATURED TEXT-FOCUSED CARD)
              ======================================================== */}
          {featuredProject && (
            <div
              id={`project-card-${featuredProject.id}`}
              className="rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-[#0a1428] border border-blue-900/50 hover:border-blue-700/60 transition-all duration-300 shadow-xl overflow-hidden group"
            >
              {/* Featured Badge Header */}
              <div className="px-6 sm:px-8 py-3.5 bg-blue-950/40 border-b border-blue-900/30 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-bold tracking-wider text-blue-300 uppercase">
                    Featured Project
                  </span>
                </div>
                <span className="text-xs font-medium text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded-full border border-slate-800">
                  {featuredProject.categoryTag}
                </span>
              </div>

              {/* Text-focused Project Body */}
              <div className="p-6 sm:p-8 lg:p-10 space-y-6">
                
                {/* Title & Icon Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center space-x-3.5">
                    <div className="w-12 h-12 rounded-xl bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-blue-400 flex-shrink-0 shadow-inner">
                      <HeartHandshake className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        {featuredProject.title}
                      </h3>
                      <p className="text-xs text-blue-400/90 font-medium mt-0.5">
                        Social Impact &amp; Donation Logistics Platform
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3">
                    {/* Live Demo button - unlinked/disabled */}
                    <button
                      id="sharehope-live-demo-btn"
                      type="button"
                      disabled
                      aria-disabled="true"
                      className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-800/80 text-slate-400 border border-slate-700/60 text-xs sm:text-sm font-medium cursor-not-allowed opacity-80"
                    >
                      <ExternalLink className="w-4 h-4 text-slate-400" />
                      <span>Live Demo</span>
                    </button>

                    {/* GitHub button - unlinked/disabled */}
                    <button
                      id="sharehope-github-btn"
                      type="button"
                      disabled
                      aria-disabled="true"
                      className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-800/80 text-slate-400 border border-slate-700/60 text-xs sm:text-sm font-medium cursor-not-allowed opacity-80"
                    >
                      <Github className="w-4 h-4 text-slate-400" />
                      <span>GitHub</span>
                    </button>
                  </div>
                </div>

                {/* Core Description */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-4xl">
                  {featuredProject.description}
                </p>

                {/* Key Features & Architecture Grid */}
                {featuredProject.knownFunctionality && (
                  <div className="pt-2">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                        Core Architecture &amp; Capabilities
                      </span>
                      <button
                        id="sharehope-details-toggle"
                        type="button"
                        onClick={() => toggleExpand(featuredProject.id)}
                        className="inline-flex items-center space-x-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
                      >
                        <span>{expandedProjects[featuredProject.id] ? 'Hide Specifications' : 'View Specifications'}</span>
                        {expandedProjects[featuredProject.id] ? (
                          <ChevronUp className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                      {featuredProject.knownFunctionality.map((func, i) => (
                        <div
                          key={i}
                          className="flex items-center space-x-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300"
                        >
                          <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                          <span className="font-medium truncate">{func}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>

              {/* Expandable Specifications Area for ShareHope */}
              {expandedProjects[featuredProject.id] && (
                <div
                  id="sharehope-expanded-details"
                  className="px-6 pb-8 pt-5 sm:px-8 lg:px-10 border-t border-slate-800/80 bg-slate-950/70"
                >
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 flex items-center space-x-2">
                    <Layers className="w-4 h-4 text-blue-400" />
                    <span>Detailed Functional Breakdown</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {featuredProject.knownFunctionality?.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800/90 text-xs text-slate-300 flex items-start space-x-2.5"
                      >
                        <span className="w-5 h-5 rounded-full bg-blue-950 border border-blue-800/60 text-blue-400 flex items-center justify-center font-bold flex-shrink-0 text-[10px]">
                          {idx + 1}
                        </span>
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ========================================================
              SECONDARY PROJECTS: 2-COLUMN TEXT-FOCUSED GRID
              Project 2: Smart Search & Rescue Rover
              Project 3: Real Madrid Website
              ======================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {secondaryProjects.map((project) => {
              const isRover = project.id === 'search-rescue-rover';
              const isRealMadrid = project.id === 'real-madrid-website';
              const isExpanded = !!expandedProjects[project.id];

              return (
                <div
                  key={project.id}
                  id={`project-card-${project.id}`}
                  className="rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-900/50 transition-all duration-300 shadow-lg overflow-hidden flex flex-col justify-between group"
                >
                  <div className="p-6 sm:p-7 space-y-5">
                    {/* Project Header Tag & Category */}
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 text-xs">
                      <span className="font-semibold text-slate-400 uppercase tracking-wider">
                        {project.categoryTag}
                      </span>
                      {isRover && (
                        <span className="text-[11px] text-sky-400 bg-sky-950/60 px-2.5 py-0.5 rounded-full border border-sky-800/50 font-medium">
                          Engineering Project
                        </span>
                      )}
                      {isRealMadrid && (
                        <span className="text-[11px] text-blue-400 bg-blue-950/60 px-2.5 py-0.5 rounded-full border border-blue-800/50 font-medium">
                          Frontend Showcase
                        </span>
                      )}
                    </div>

                    {/* Title & Subtle Icon */}
                    <div className="flex items-start space-x-3.5">
                      <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                        {isRover ? (
                          <Cpu className="w-5 h-5 text-sky-400" />
                        ) : (
                          <Globe className="w-5 h-5 text-blue-400" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white tracking-tight">
                          {project.title}
                        </h3>
                        <p className="text-xs text-slate-400 mt-0.5">
                          {isRover ? 'Autonomous Hardware & Embedded System' : 'Sports Web Experience & Interactive UI'}
                        </p>
                      </div>
                    </div>

                    {/* Short Project Description */}
                    <p className="text-sm text-slate-300 leading-relaxed font-normal">
                      {project.description}
                    </p>

                    {/* Key Features/Details where applicable */}
                    {isRover && project.features && (
                      <div className="pt-1">
                        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                          Key Prototype Features
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.features.map((f, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 rounded-lg bg-slate-950 text-slate-300 border border-slate-800 text-xs font-medium"
                            >
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {isRealMadrid && (
                      <div className="pt-1">
                        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                          Key Highlights
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                          <div className="flex items-center space-x-2 p-2 rounded-lg bg-slate-950/70 border border-slate-800/80">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                            <span className="truncate">Responsive Club Interface</span>
                          </div>
                          <div className="flex items-center space-x-2 p-2 rounded-lg bg-slate-950/70 border border-slate-800/80">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                            <span className="truncate">Player &amp; Squad Showcase</span>
                          </div>
                          <div className="flex items-center space-x-2 p-2 rounded-lg bg-slate-950/70 border border-slate-800/80">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                            <span className="truncate">Fixtures &amp; Match Results</span>
                          </div>
                          <div className="flex items-center space-x-2 p-2 rounded-lg bg-slate-950/70 border border-slate-800/80">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                            <span className="truncate">Interactive Club Aesthetics</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Footer Action Buttons & Expand Toggle */}
                  <div className="px-6 sm:px-7 pb-6 pt-3 bg-slate-950/30 border-t border-slate-800/80">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center space-x-2">
                        {/* Live Demo Button: Active for Real Madrid, disabled for others */}
                        {project.liveDemoUrl ? (
                          <a
                            id={`${project.id}-live-demo`}
                            href={project.liveDemoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md shadow-blue-900/20"
                          >
                            <span>Live Demo</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        ) : (
                          <button
                            id={`${project.id}-live-demo-disabled`}
                            type="button"
                            disabled
                            aria-disabled="true"
                            className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-slate-800/80 text-slate-400 border border-slate-700/60 text-xs font-medium cursor-not-allowed opacity-80"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Live Demo</span>
                          </button>
                        )}

                        {/* GitHub Button: Disabled for Rover & Real Madrid */}
                        <button
                          id={`${project.id}-github-disabled`}
                          type="button"
                          disabled
                          aria-disabled="true"
                          className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-slate-800/80 text-slate-400 border border-slate-700/60 text-xs font-medium cursor-not-allowed opacity-80"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>GitHub</span>
                        </button>
                      </div>

                      {/* Expand details button for Rover */}
                      {(project.learningExperience || project.futureScope) && (
                        <button
                          id={`${project.id}-toggle-details`}
                          type="button"
                          onClick={() => toggleExpand(project.id)}
                          className="inline-flex items-center space-x-1 text-xs font-semibold text-blue-400 hover:text-blue-300 py-1.5 px-2 rounded-lg hover:bg-blue-950/30 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <span>{isExpanded ? 'Hide Specs' : 'View Specs'}</span>
                          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>
                      )}
                    </div>

                    {/* Expandable Specifications Area for Rover */}
                    {isExpanded && (
                      <div
                        id={`${project.id}-expanded-content`}
                        className="mt-4 pt-4 border-t border-slate-800 text-xs space-y-4"
                      >
                        {/* Rover Learning & Experience */}
                        {isRover && project.learningExperience && (
                          <div>
                            <span className="font-bold text-white uppercase tracking-wider block mb-2 flex items-center space-x-1.5">
                              <Radio className="w-3.5 h-3.5 text-blue-400" />
                              <span>Practical Engineering Experience</span>
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-slate-300">
                              {project.learningExperience.map((item, idx) => (
                                <div key={idx} className="flex items-center space-x-2">
                                  <span className="text-blue-400 font-bold">•</span>
                                  <span>{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Rover Future Scope */}
                        {isRover && project.futureScope && (
                          <div className="pt-2 border-t border-slate-800/80">
                            <span className="font-bold text-white uppercase tracking-wider block mb-2 flex items-center space-x-1.5">
                              <Compass className="w-3.5 h-3.5 text-sky-400" />
                              <span>Future Scope</span>
                            </span>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-slate-300">
                              {project.futureScope.map((item, idx) => (
                                <li key={idx} className="flex items-center space-x-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}

                  </div>

                </div>
              );
            })}
          </div>

          {/* ========================================================
              MORE PROJECTS AREA
              (No "Coming Soon", clean structure to easily add projects)
              ======================================================== */}
          <div
            id="more-projects-area"
            className="p-6 sm:p-8 rounded-2xl bg-slate-950/40 border border-dashed border-slate-800 text-center flex flex-col items-center justify-center space-y-3"
          >
            <div className="p-3 rounded-full bg-slate-900 border border-slate-800 text-blue-400">
              <PlusCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                More Projects Area
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 max-w-md mt-1">
                New software builds and web applications will be documented here as development continues.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

