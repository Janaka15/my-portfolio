import React from 'react';
import { 
  ArrowRight, 
  FileDown, 
  Mail, 
  MapPin, 
  Sparkles,
  Code2,
  Terminal,
  Layers
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface HeroProps {
  onOpenCV: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCV }) => {
  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Background Ambient Glows */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-blue-600/15 via-violet-600/15 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute top-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#161B28] border border-blue-500/20 text-xs font-medium text-gray-300 shadow-sm mb-6 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-gray-200">{personalInfo.availability}</span>
              <span className="text-gray-500">•</span>
              <span className="flex items-center gap-1 text-gray-400">
                <MapPin className="w-3 h-3 text-blue-400" />
                {personalInfo.location}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
              {personalInfo.headline.prefix}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400 drop-shadow-sm">
                {personalInfo.headline.gradientWords}
              </span>{' '}
              {personalInfo.headline.suffix}
            </h1>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed max-w-2xl mb-8">
              {personalInfo.shortIntro}
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 text-blue-100" />
              </a>

              <button
                type="button"
                onClick={onOpenCV}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-gray-200 bg-[#141824] hover:bg-[#1A2030] border border-white/10 hover:border-violet-500/40 transition-all duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-purple-400" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Social Links & Highlights */}
            <div className="flex items-center gap-4 pt-6 border-t border-white/[0.08] w-full">
              <span className="text-xs uppercase tracking-wider text-gray-400 font-mono">
                Connect
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] hover:border-blue-400/40 text-gray-400 hover:text-white transition-all transform hover:-translate-y-0.5"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={`https://${personalInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] hover:border-blue-400/40 text-gray-400 hover:text-white transition-all transform hover:-translate-y-0.5"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] hover:border-blue-400/40 text-gray-400 hover:text-white transition-all transform hover:-translate-y-0.5"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Portrait & Floating Interactive Cards */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-3xl opacity-30 blur-xl group-hover:opacity-50 transition duration-1000 animate-pulse-subtle" />

              {/* Card Container */}
              <div className="relative rounded-2xl overflow-hidden bg-[#11141E] border border-white/10 shadow-2xl">
                
                {/* Top Code Badge Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#151926]/90 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-gray-400">
                    <Terminal className="w-3 h-3 text-blue-400" />
                    <span>kavindu.dev</span>
                  </div>
                  <Sparkles className="w-3.5 h-3.5 text-purple-400 opacity-70" />
                </div>

                {/* Developer Image */}
                <div className="relative aspect-square overflow-hidden bg-[#0D1017]">
                  <img
                    src={personalInfo.profileImage}
                    alt="Kavindu Hewage - Developer Portrait"
                    className="w-full h-full object-cover object-center filter contrast-[1.03] hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                  {/* Subtle bottom gradient shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#11141E] via-transparent to-transparent opacity-80" />
                </div>

                {/* Bottom Meta Bar */}
                <div className="p-4 bg-[#131722]/95 border-t border-white/[0.06] flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-white">{personalInfo.name}</h3>
                    <p className="text-xs text-blue-400 font-mono">{personalInfo.role}</p>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10 text-[11px] font-mono text-gray-300">
                    <Code2 className="w-3 h-3 text-purple-400" />
                    <span>Full-Stack</span>
                  </div>
                </div>
              </div>

              {/* Floating Tech Badges */}
              <div className="absolute -top-4 -left-4 sm:-left-6 px-3.5 py-2 rounded-xl bg-[#161B29]/90 border border-blue-500/30 shadow-xl backdrop-blur-md flex items-center gap-2 animate-float">
                <Code2 className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-mono font-medium text-gray-200">React + TS</span>
              </div>

              <div 
                className="absolute -bottom-4 -right-4 sm:-right-6 px-3.5 py-2 rounded-xl bg-[#161B29]/90 border border-purple-500/30 shadow-xl backdrop-blur-md flex items-center gap-2 animate-float"
                style={{ animationDelay: '3s' }}
              >
                <Layers className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-mono font-medium text-gray-200">Node.js + APIs</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
