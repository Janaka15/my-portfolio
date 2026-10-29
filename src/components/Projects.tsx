import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Info, 
  Eye, 
  Sparkles,
  Layers
} from 'lucide-react';
import { featuredProjects } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Full-Stack', 'Frontend'];

  const filteredProjects = selectedTag === 'All'
    ? featuredProjects
    : featuredProjects.filter((p) => p.category === selectedTag);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#0B0D12]">
      {/* Background ambient light */}
      <div 
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-600/10 via-violet-600/10 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6" />
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
            A selection of modern web applications and design engineering projects. Each card includes live links, architecture overviews, and source code.
          </p>

          {/* Transparent Notice */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200">
            <Info className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Sample projects serve as customizable templates until replaced with live client or personal repositories.</span>
          </div>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedTag(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                selectedTag === cat
                  ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/20 scale-105'
                  : 'bg-[#131722] hover:bg-[#1A2030] text-gray-400 hover:text-white border border-white/[0.06]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl bg-[#111520]/90 border border-white/[0.08] hover:border-violet-500/40 transition-all duration-300 hover:-translate-y-1.5 shadow-lg hover:shadow-2xl hover:shadow-violet-500/10 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Visual Preview */}
                <div className="relative aspect-video overflow-hidden bg-[#0C101A] border-b border-white/[0.06]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Subtle top gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111520] via-transparent to-transparent opacity-60" />

                  {/* Demo/Example Badge */}
                  {project.isExample ? (
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-amber-500/90 text-black text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
                      Demo Example
                    </span>
                  ) : (
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-blue-600/90 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5" />
                      Live Project
                    </span>
                  )}

                  {/* Hover Overlay Button to trigger detail modal */}
                  <div className="absolute inset-0 bg-[#0B0D12]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-xs">
                    <button
                      type="button"
                      onClick={() => setActiveModalProject(project)}
                      className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold text-white flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-all duration-200 cursor-pointer"
                    >
                      <Eye className="w-4 h-4 text-blue-300" />
                      <span>Inspect Details</span>
                    </button>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6">
                  {/* Category tag */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors mb-3">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6 line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-[#161B28] border border-white/[0.06] text-[11px] font-mono text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="p-6 pt-0 border-t border-white/[0.04] mt-auto">
                <div className="flex items-center justify-between pt-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-white transition-colors p-1"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <GithubIcon className="w-4 h-4 text-gray-400" />
                    <span>Repository</span>
                  </a>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-xs font-medium text-gray-300 hover:text-white transition-colors cursor-pointer"
                    >
                      <Layers className="w-3.5 h-3.5 text-violet-400" />
                      <span>Overview</span>
                    </button>

                    {project.demoUrl !== '#' && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600/30 hover:bg-blue-600/50 text-xs font-medium text-blue-300 hover:text-white transition-colors"
                      >
                        <span>Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Interactive Project Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
