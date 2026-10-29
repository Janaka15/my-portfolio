import React from 'react';
import { X, Printer, Mail, MapPin, Briefcase, GraduationCap, CheckCircle } from 'lucide-react';
import { personalInfo, skillCategories, featuredProjects } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto print:p-0">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#0B0D12]/80 backdrop-blur-md transition-opacity print:hidden"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="cv-modal-title"
        className="relative w-full max-w-4xl rounded-2xl bg-[#111522] border border-white/10 shadow-2xl overflow-hidden z-10 my-8 animate-in fade-in zoom-in-95 duration-200 print:border-none print:shadow-none print:my-0 print:bg-white print:text-black"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#151928] border-b border-white/[0.08] print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span id="cv-modal-title" className="ml-2 text-xs font-mono text-gray-400">
              Curriculum Vitae — {personalInfo.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close CV Modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* CV Document Content */}
        <div className="p-8 sm:p-10 max-h-[80vh] overflow-y-auto print:max-h-none print:overflow-visible print:p-8">
          
          {/* CV Header */}
          <div className="flex flex-col sm:flex-row items-start justify-between gap-6 pb-8 border-b border-white/10 print:border-black/20">
            <div>
              <h1 className="text-3xl font-extrabold text-white print:text-black tracking-tight mb-1">
                {personalInfo.name}
              </h1>
              <p className="text-base text-blue-400 print:text-blue-600 font-medium mb-3">
                {personalInfo.role}
              </p>
              <p className="text-xs sm:text-sm text-gray-300 print:text-gray-700 max-w-xl leading-relaxed">
                {personalInfo.shortIntro}
              </p>
            </div>

            <div className="flex flex-col gap-2 text-xs text-gray-300 print:text-gray-800 font-mono shrink-0">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <GithubIcon className="w-3.5 h-3.5 text-gray-400" />
                <span>github.com/Janaka15</span>
              </div>
              <div className="flex items-center gap-2">
                <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                <span>linkedin.com/in/janaka-kavindu</span>
              </div>
            </div>
          </div>

          {/* Core Technical Proficiencies */}
          <div className="py-6 border-b border-white/10 print:border-black/20">
            <h2 className="text-xs font-mono uppercase tracking-wider text-purple-400 print:text-purple-700 mb-4 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Technical Skills</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillCategories.map((group) => (
                <div key={group.category} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] print:border-gray-200 print:bg-gray-50">
                  <h3 className="text-xs font-semibold text-white print:text-black mb-2">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((s) => (
                      <span
                        key={s.name}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#161B28] print:bg-white text-gray-300 print:text-black border border-white/[0.06] print:border-gray-300"
                      >
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Works */}
          <div className="py-6 border-b border-white/10 print:border-black/20">
            <h2 className="text-xs font-mono uppercase tracking-wider text-blue-400 print:text-blue-700 mb-4 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Highlighted Projects</span>
            </h2>

            <div className="space-y-4">
              {featuredProjects.map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] print:border-gray-200">
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="text-sm font-bold text-white print:text-black">{proj.title}</h3>
                    <span className="text-[10px] font-mono text-gray-400">{proj.tags.slice(0, 3).join(', ')}</span>
                  </div>
                  <p className="text-xs text-gray-300 print:text-gray-700 leading-relaxed mb-2">
                    {proj.shortDescription}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px] text-gray-400 print:text-gray-600">
                    {proj.features.slice(0, 2).map((f, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <CheckCircle className="w-3 h-3 text-emerald-400 print:text-emerald-700 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Notice */}
          <div className="pt-6 text-center text-xs text-gray-400 print:text-gray-600 font-mono">
            Full repository code and portfolio available online at https://github.com/Janaka15
          </div>

        </div>

        {/* Modal Bottom Bar */}
        <div className="px-6 py-4 bg-[#141825] border-t border-white/[0.06] flex items-center justify-between print:hidden">
          <span className="text-xs text-gray-400 font-mono">
            Tip: Use browser 'Save as PDF' to export this document.
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/10 text-xs font-medium text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
