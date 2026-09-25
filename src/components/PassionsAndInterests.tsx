import React from 'react';
import { passionsAndInterests } from '../data/portfolioData.ts';
import {
  Code2,
  Compass,
  CircleDot,
  Trophy,
  Zap,
  Crown,
  Palette,
  BookOpen,
  Sparkles
} from 'lucide-react';

export const PassionsAndInterests: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-blue-400" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-sky-400" />;
      case 'ShieldCheck':
        return <CircleDot className="w-5 h-5 text-emerald-400" />;
      case 'Activity':
        return <Trophy className="w-5 h-5 text-amber-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-yellow-400" />;
      case 'Crown':
        return <Crown className="w-5 h-5 text-purple-400" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-pink-400" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-cyan-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section
      id="passions-interests"
      className="py-14 sm:py-16 border-t border-slate-900 bg-[#070b14] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Compact */}
        <div className="mb-8">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            <span>Beyond Development</span>
          </div>
          <h2
            id="passions-section-heading"
            className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white"
          >
            Passions &amp; Interests
          </h2>
        </div>

        {/* Compact grid of 8 items */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {passionsAndInterests.map((item) => (
            <div
              key={item.id}
              id={`passion-item-${item.id}`}
              className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/70 transition-all duration-200 flex items-center space-x-3 group"
            >
              <div className="p-2 rounded-lg bg-slate-950 border border-slate-800/90 group-hover:border-blue-900/60 transition-colors flex-shrink-0">
                {getIcon(item.iconName)}
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                {item.title}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
