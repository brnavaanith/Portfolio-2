import React from 'react';
import { skillCategories } from '../data/portfolioData.ts';
import { Terminal, Layout, Code2, FileCode, CheckCircle2, Plus } from 'lucide-react';

export const Skills: React.FC = () => {
  // Helper to render relevant clean icon for skill
  const getSkillIcon = (skillName: string) => {
    switch (skillName.toLowerCase()) {
      case 'python':
      case 'c':
      case 'c++':
        return <Terminal className="w-4 h-4 text-blue-400" />;
      case 'html':
      case 'css':
        return <FileCode className="w-4 h-4 text-sky-400" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-slate-400" />;
    }
  };

  return (
    <section
      id="skills"
      className="py-16 sm:py-20 lg:py-24 border-t border-slate-900 bg-[#070b14] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            <span>Core Competencies</span>
          </div>
          <h2
            id="skills-section-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white"
          >
            Skills
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
            Programming and web technologies applied across software coursework and projects.
          </p>
        </div>

        {/* Categories Grid - Exactly 2 clean categories as specified */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => {
            const isProgramming = category.id === 'programming';
            return (
              <div
                key={category.id}
                id={`skill-category-${category.id}`}
                className="p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-all duration-200 shadow-md group"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-slate-800">
                  <div className={`p-2.5 rounded-xl border ${
                    isProgramming
                      ? 'bg-blue-950/60 text-blue-400 border-blue-800/50'
                      : 'bg-sky-950/60 text-sky-400 border-sky-800/50'
                  }`}>
                    {isProgramming ? <Code2 className="w-5 h-5" /> : <Layout className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {category.category}
                    </h3>
                    <span className="text-xs text-slate-400">
                      {category.skills.length} core competencies
                    </span>
                  </div>
                </div>

                {/* Skills Badges List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      id={`skill-item-${skill.toLowerCase().replace(/[^a-z0-9]/g, '')}`}
                      className="flex items-center space-x-3 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-blue-700/60 hover:bg-slate-900/80 transition-all duration-150 group/item"
                    >
                      <div className="p-1.5 rounded-md bg-slate-900 border border-slate-800 group-hover/item:border-blue-500/40 transition-colors">
                        {getSkillIcon(skill)}
                      </div>
                      <span className="text-sm font-semibold text-slate-200 group-hover/item:text-white transition-colors">
                        {skill}
                      </span>
                    </div>
                  ))}

                  {/* Clean "+ Add More" Option Card */}
                  <div
                    id={`add-more-skill-${category.id}`}
                    className="flex items-center space-x-3 p-3.5 rounded-xl bg-slate-950/40 border border-dashed border-slate-800/90 hover:border-blue-600/60 hover:bg-slate-900/50 transition-all duration-150 text-slate-400 hover:text-slate-200 group/add cursor-default"
                    title="Easily add more skills in src/data/portfolioData.ts"
                  >
                    <div className="p-1.5 rounded-md bg-slate-900/80 border border-dashed border-slate-800 group-hover/add:border-blue-500/50 transition-colors">
                      <Plus className="w-4 h-4 text-slate-500 group-hover/add:text-blue-400 transition-colors" />
                    </div>
                    <span className="text-sm font-medium text-slate-400 group-hover/add:text-slate-200 transition-colors">
                      + Add More
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
