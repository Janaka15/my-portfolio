import React from 'react';
import { 
  BookOpen, 
  Lightbulb, 
  Code, 
  Sparkles, 
  CheckCircle2, 
  Compass, 
  Cpu, 
  Rocket 
} from 'lucide-react';
import { aboutCards, personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-blue-400" />;
      case 'Lightbulb':
        return <Lightbulb className="w-6 h-6 text-amber-400" />;
      case 'Code':
        return <Code className="w-6 h-6 text-purple-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-blue-400" />;
    }
  };

  const focusPoints = [
    { title: "Modern Technologies", desc: "Building with React, TypeScript, and modern ecosystem tools." },
    { title: "Clean Architecture", desc: "Writing maintainable, modular, and readable source code." },
    { title: "User Centered", desc: "Designing responsive, intuitive, and accessible user flows." },
    { title: "Continuous Growth", desc: "Deepening full-stack engineering skills daily with real-world practice." },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#0B0D12]">
      {/* Background Subtle Accents */}
      <div 
        className="absolute top-1/2 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-900/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>BACKGROUND & PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6">
            A Little About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6" />
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            I'm <span className="text-white font-semibold">{personalInfo.name}</span>, an aspiring full-stack developer based in {personalInfo.location}. My journey in software engineering is driven by curiosity, a love for clean visual design, and a dedication to crafting robust, high-performance web applications that make everyday digital experiences smoother and more impactful.
          </p>
        </div>

        {/* 3 Interactive Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {aboutCards.map((card, idx) => (
            <div
              key={card.id}
              className="relative group rounded-2xl bg-[#121622]/80 border border-white/[0.08] p-8 hover:border-violet-500/40 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-violet-500/10 backdrop-blur-sm flex flex-col justify-between"
            >
              {/* Subtle card glow overlay on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/[0.04] to-violet-500/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-inner">
                    {getIcon(card.icon)}
                  </div>
                  <span className="text-xs font-mono text-gray-500">0{idx + 1}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {card.title}
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-gray-400 group-hover:text-violet-400 transition-colors">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Dedicated Mindset</span>
              </div>
            </div>
          ))}
        </div>

        {/* Focus & Core Principles Grid */}
        <div className="rounded-2xl bg-[#111520] border border-white/[0.08] p-8 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Cpu className="w-48 h-48 text-white" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-2">
                <Rocket className="w-3.5 h-3.5" />
                <span>HOW I WORK</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Committed to writing purposeful code and modern aesthetics.
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
                I believe modern web applications should not only look refined and visually engaging, but also deliver rock-solid performance, clean code organization, and intuitive user experiences.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {focusPoints.map((pt, i) => (
                <div 
                  key={i} 
                  className="p-4 rounded-xl bg-[#161B28]/80 border border-white/[0.06] hover:border-blue-500/30 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1">{pt.title}</h4>
                      <p className="text-xs text-gray-300 leading-relaxed">{pt.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
