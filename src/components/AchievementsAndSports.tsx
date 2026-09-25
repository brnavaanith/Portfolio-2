import React, { useState } from 'react';
import { tableTennisAchievements, fideAchievement } from '../data/portfolioData.ts';
import { CertificateModal } from './CertificateModal.tsx';
import { Medal, Trophy, Crown, Target, Maximize2, ExternalLink, Activity } from 'lucide-react';

export const AchievementsAndSports: React.FC = () => {
  const [fideModalOpen, setFideModalOpen] = useState(false);
  const [fideImageError, setFideImageError] = useState(false);

  // Helper to get clean icon based on Table Tennis achievement
  const getAchievementIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Medal className="w-5 h-5 text-amber-400" />;
      case 1:
        return <Trophy className="w-5 h-5 text-blue-400" />;
      case 2:
      case 3:
        return <Target className="w-5 h-5 text-sky-400" />;
      default:
        return <Activity className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section
      id="achievements"
      className="py-16 sm:py-20 lg:py-24 border-t border-slate-900 bg-[#070b14] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            <span>Honors &amp; Athletics</span>
          </div>
          <h2
            id="achievements-section-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white"
          >
            Achievements &amp; Sports
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
            Recognitions across competitive chess and institutional table tennis tournaments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ========================================================
              FIDE ACHIEVEMENT CARD (BALANCED CARD LAYOUT)
              Title: FIDE Arena Candidate Master (ACM)
              Organization: FIDE
              Awarded: 2025
              Certificate preview image
              ======================================================== */}
          <div className="lg:col-span-5">
            <div className="mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-2">
                <Crown className="w-4 h-4 text-amber-400" />
                <span>International Chess Title</span>
              </span>
            </div>

            <div
              id="fide-achievement-card"
              className="rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-[#0c1836] border border-blue-900/40 hover:border-blue-700/60 transition-all duration-300 shadow-xl overflow-hidden group"
            >
              {/* Header */}
              <div className="p-5 sm:p-6 pb-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/30 text-xs font-bold mb-2">
                      Awarded {fideAchievement.awardedYear}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {fideAchievement.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1">
                      {fideAchievement.organization}
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-blue-950/60 border border-blue-800/40 text-blue-400">
                    <Crown className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* FIDE Certificate Preview Image - Balanced Size, click to view full */}
              <div className="px-5 sm:px-6 pb-5">
                <div
                  onClick={() => setFideModalOpen(true)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setFideModalOpen(true);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label="View enlarged FIDE certificate"
                  className="relative min-h-[260px] sm:min-h-[280px] rounded-xl overflow-hidden bg-slate-950/80 border border-slate-800 cursor-pointer group/fide focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center p-3"
                >
                  {!fideImageError ? (
                    <img
                      src={fideAchievement.imageUrl}
                      alt={fideAchievement.title}
                      onError={() => setFideImageError(true)}
                      className="max-h-72 w-auto h-auto object-contain transition-transform duration-300 group-hover/fide:scale-[1.02]"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center p-6 text-center text-slate-400 h-full w-full">
                      <Crown className="w-12 h-12 text-amber-400 mb-2 opacity-90" />
                      <span className="text-sm font-bold text-white">{fideAchievement.title}</span>
                      <span className="text-xs text-slate-300 mt-1">{fideAchievement.organization}</span>
                      <span className="text-[11px] text-slate-400 mt-2 font-mono">
                        {fideAchievement.imageUrl?.split('/').pop()}
                      </span>
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/fide:opacity-100 transition-opacity duration-200 flex items-center justify-center space-x-2 text-white pointer-events-none">
                    <Maximize2 className="w-5 h-5 text-blue-400" />
                    <span className="text-xs font-semibold">Click to view full original</span>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                  <span className="truncate">{fideAchievement.imagePlaceholderLabel}</span>
                  <button
                    type="button"
                    onClick={() => setFideModalOpen(true)}
                    className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center space-x-1"
                  >
                    <span>Enlarge</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================
              TABLE TENNIS ACHIEVEMENTS (CLEAN PROFESSIONAL CARDS)
              IMPORTANT: NO large image section, NO photo placeholder!
              Cards communicate: Participation, Representation, Competition, Achievement
              ======================================================== */}
          <div className="lg:col-span-7">
            <div className="mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-2">
                <Trophy className="w-4 h-4 text-blue-400" />
                <span>Table Tennis Tournaments &amp; Representation</span>
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tableTennisAchievements.map((item, index) => (
                <div
                  key={item.id}
                  id={`tt-achievement-${item.id}`}
                  className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-all duration-200 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    {/* Icon & Category Tag */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                        {getAchievementIcon(index)}
                      </div>
                      {item.highlight && (
                        <span className={`px-2.5 py-1 rounded-md text-xs font-bold border ${
                          index === 0
                            ? 'bg-amber-950/60 text-amber-300 border-amber-800/50'
                            : 'bg-blue-950/60 text-blue-300 border-blue-800/50'
                        }`}>
                          {item.highlight}
                        </span>
                      )}
                    </div>

                    {/* Tournament / Match Title */}
                    <h4 className="text-base font-bold text-white tracking-tight leading-snug">
                      {item.title}
                    </h4>

                    {/* Level / Subtitle */}
                    <p className="text-xs text-slate-400 mt-1.5">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Representation footer note */}
                  <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                    <span>Competitive Athletics</span>
                    <span className="text-slate-400 font-medium">Table Tennis</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Modal for FIDE Certificate */}
      <CertificateModal
        isOpen={fideModalOpen}
        onClose={() => setFideModalOpen(false)}
        certificate={{
          title: fideAchievement.title,
          organization: fideAchievement.organization,
          awardedYear: fideAchievement.awardedYear,
          imageUrl: fideAchievement.imageUrl,
          placeholderLabel: fideAchievement.imagePlaceholderLabel
        }}
      />
    </section>
  );
};
