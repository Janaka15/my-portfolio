import React, { useState } from 'react';
import { 
  Code2, 
  Server, 
  Database, 
  Wrench, 
  Sparkles, 
  Info,
  CheckCircle,
  Layers
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend':
        return <Code2 className="w-5 h-5 text-blue-400" />;
      case 'Backend':
        return <Server className="w-5 h-5 text-indigo-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'Tools & Workflow':
        return <Wrench className="w-5 h-5 text-purple-400" />;
      default:
        return <Layers className="w-5 h-5 text-blue-400" />;
    }
  };

  const categoriesList = ['All', ...skillCategories.map(c => c.category)];

  const filteredCategories = selectedCategory === 'All'
    ? skillCategories
    : skillCategories.filter(c => c.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#0B0D12]">
      {/* Background glow */}
      <div 
        className="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-10 right-10 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-mono text-purple-300 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DEVELOPMENT TOOLBOX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6">
            Skills & Technologies
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6" />
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4">
            A structured overview of the modern programming languages, libraries, databases, and development workflows I actively practice and explore.
          </p>
          
          {/* Transparent Notice */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs text-gray-400">
            <Info className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span>Curated learning stack continuously evolving through hands-on project work.</span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categoriesList.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/20 scale-105'
                    : 'bg-[#131722] hover:bg-[#1A2030] text-gray-400 hover:text-white border border-white/[0.06]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl bg-[#111520]/90 border border-white/[0.08] p-7 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 backdrop-blur-sm group"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 group-hover:scale-105 transition-transform">
                    {getCategoryIcon(group.category)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                      {group.category}
                    </h3>
                    <p className="text-xs text-gray-400 font-normal">
                      {group.skills.length} Technologies
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono text-gray-500">Active</span>
              </div>

              <p className="text-xs sm:text-sm text-gray-400 mb-6 leading-relaxed">
                {group.description}
              </p>

              {/* Skills Badges */}
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#171C2B] hover:bg-[#1E253A] border border-white/[0.06] hover:border-violet-500/40 text-xs font-medium text-gray-200 hover:text-white transition-all duration-200 transform hover:-translate-y-0.5 cursor-default group/item shadow-sm"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-blue-400 group-hover/item:text-violet-400 transition-colors" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
