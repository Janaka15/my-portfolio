import React from 'react';
import { 
  Milestone, 
  Sparkles, 
  Compass, 
  Target, 
  GraduationCap, 
  Code2 
} from 'lucide-react';
import { learningJourney } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const getMilestoneIcon = (category: string) => {
    switch (category) {
      case 'milestone':
        return <Code2 className="w-4 h-4 text-blue-400" />;
      case 'learning':
        return <GraduationCap className="w-4 h-4 text-indigo-400" />;
      case 'future':
        return <Target className="w-4 h-4 text-purple-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <section id="journey" className="py-24 relative overflow-hidden bg-[#0B0D12]">
      {/* Ambient background light */}
      <div 
        className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-mono text-purple-300 mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>GROWTH & EVOLUTION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6">
            Learning Journey & Milestones
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6" />
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            An authentic roadmap reflecting my path in software engineering—from web fundamentals to full-stack application development and upcoming technical horizons.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Central Line */}
          <div 
            className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500/50 via-purple-500/40 to-transparent -translate-x-1/2 hidden sm:block"
            aria-hidden="true"
          />

          <div className="space-y-12">
            {learningJourney.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.period}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-8 group`}
                >
                  {/* Center Node Pin */}
                  <div className="hidden sm:flex absolute left-1/2 top-6 -translate-x-1/2 w-8 h-8 rounded-full bg-[#111520] border-2 border-blue-500/80 items-center justify-center shadow-lg shadow-blue-500/20 group-hover:border-violet-400 group-hover:scale-110 transition-all duration-300 z-10">
                    {getMilestoneIcon(item.category)}
                  </div>

                  {/* Content Card (Half width on desktop) */}
                  <div className="w-full sm:w-[calc(50%-2rem)]">
                    <div className="rounded-2xl bg-[#111520]/90 border border-white/[0.08] p-7 hover:border-violet-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 backdrop-blur-sm">
                      
                      {/* Top Period Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-blue-400">
                          <Milestone className="w-3.5 h-3.5" />
                          <span>{item.period}</span>
                        </div>

                        <span className={`text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded ${
                          item.category === 'future'
                            ? 'bg-purple-500/10 text-purple-300 border border-purple-500/20'
                            : 'bg-blue-500/10 text-blue-300 border border-blue-500/20'
                        }`}>
                          {item.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-5">
                        {item.description}
                      </p>

                      {/* Tech Chips */}
                      <div>
                        <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-2">
                          Key Focus:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {item.highlightTechnologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-md bg-[#161B28] border border-white/[0.06] text-xs font-mono text-gray-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Empty Spacer on other side for symmetry */}
                  <div className="hidden sm:block w-[calc(50%-2rem)]" />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
