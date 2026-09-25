import React from 'react';
import { educationList } from '../data/portfolioData.ts';
import { GraduationCap, School, Calendar, Award } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="py-16 sm:py-20 lg:py-24 border-t border-slate-900 bg-[#070b14] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            <span>Academic Background</span>
          </div>
          <h2
            id="education-section-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white"
          >
            Education
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
            Formal education timeline spanning undergraduate engineering and senior secondary schooling.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-3xl">
          {/* Vertical connecting line */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-6 w-0.5 bg-gradient-to-b from-blue-500 via-blue-900 to-slate-800" />

          <div className="space-y-8 relative">
            {educationList.map((item, index) => {
              const isCollege = index === 0;
              return (
                <div
                  key={item.id}
                  id={`education-item-${item.id}`}
                  className="relative pl-12 sm:pl-16 group"
                >
                  {/* Timeline node icon */}
                  <div className={`absolute left-1.5 sm:left-3.5 top-2 -translate-x-1/2 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center border-2 transition-transform duration-200 group-hover:scale-110 ${
                    isCollege
                      ? 'bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-600/40'
                      : 'bg-slate-900 border-slate-700 text-slate-400'
                  }`}>
                    {isCollege ? (
                      <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    ) : (
                      <School className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    )}
                  </div>

                  {/* Content card */}
                  <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-all duration-200 shadow-md">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                        {item.degree}
                      </h3>
                      {/* Grade Badge */}
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold w-fit ${
                        isCollege
                          ? 'bg-blue-950 text-blue-300 border border-blue-800/60'
                          : 'bg-slate-800 text-slate-300 border border-slate-700'
                      }`}>
                        <Award className="w-3 h-3 mr-1 text-blue-400" />
                        {item.grade}
                      </span>
                    </div>

                    {/* Institution */}
                    <p className="text-sm sm:text-base font-medium text-slate-300">
                      {item.institution}
                    </p>

                    {/* Timeline / Graduation Year */}
                    <div className="flex items-center space-x-1.5 mt-3 text-xs text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      <span>{item.timelineOrGraduation}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
