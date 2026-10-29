import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  Sparkles,
  AlertCircle,
  ExternalLink
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'info' | 'error'; text: string } | null>(null);

  const validate = () => {
    const errs: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      errs.name = 'Please enter your name.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please enter a subject.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    if (statusMessage) setStatusMessage(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      setStatusMessage({
        type: 'error',
        text: 'Please review and correct the highlighted fields before sending.'
      });
      return;
    }

    // Honest handling: Since no backend API key/credentials
    // are configured in this environment, construct a mailto link so the email client opens
    // directly without fabricating a fake "Sent!" server response.
    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const mailtoBody = encodeURIComponent(
      `Hello Kavindu,\n\nMy name is ${formData.name} (${formData.email}).\n\n${formData.message}\n\nBest regards,\n${formData.name}`
    );

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    
    // Trigger user mail client
    window.location.href = mailtoUrl;

    setStatusMessage({
      type: 'info',
      text: 'Opening your default email client with your prefilled message to Janaka Kavindu. You can also copy the email address directly below!'
    });
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#0B0D12]">
      {/* Background glow elements */}
      <div 
        className="absolute top-1/3 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-10 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6">
            Have an Idea? Let's Build Something.
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6" />
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            I'm always enthusiastic about discussing web development projects, collaboration opportunities, or simply connecting with fellow developers and tech enthusiasts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <div className="rounded-2xl bg-[#111520]/90 border border-white/[0.08] p-8 shadow-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Contact Details</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mb-8 leading-relaxed">
                Feel free to email me directly or reach out on social channels. I usually respond within 24 hours.
              </p>

              <div className="space-y-6">
                
                {/* Email Item with Copy Button */}
                <div className="p-4 rounded-xl bg-[#161B28] border border-white/[0.06] flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">Email</div>
                      <a 
                        href={`mailto:${personalInfo.email}`}
                        className="text-xs sm:text-sm font-medium text-white hover:text-blue-400 transition-colors truncate block"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={copyEmailToClipboard}
                    className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/10 text-gray-300 hover:text-white transition-colors shrink-0 cursor-pointer"
                    title="Copy Email"
                    aria-label="Copy Email Address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Item */}
                <div className="p-4 rounded-xl bg-[#161B28] border border-white/[0.06] flex items-center gap-3.5">
                  <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">Location</div>
                    <div className="text-xs sm:text-sm font-medium text-white">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>

                {/* Social Profiles */}
                <div className="pt-2">
                  <div className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-3">
                    Profiles & Socials
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-[#161B28] hover:bg-[#1C2335] border border-white/[0.06] hover:border-blue-500/40 text-xs font-medium text-gray-200 hover:text-white transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2">
                        <GithubIcon className="w-4 h-4 text-gray-400 group-hover:text-blue-400" />
                        <span>GitHub</span>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-gray-500 group-hover:text-gray-300" />
                    </a>

                    <a
                      href={`https://${personalInfo.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-[#161B28] hover:bg-[#1C2335] border border-white/[0.06] hover:border-violet-500/40 text-xs font-medium text-gray-200 hover:text-white transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2">
                        <LinkedinIcon className="w-4 h-4 text-gray-400 group-hover:text-violet-400" />
                        <span>LinkedIn</span>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-gray-500 group-hover:text-gray-300" />
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Note on Communication */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-gray-400 flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>
                Looking forward to hearing about potential junior/associate roles, collaborative initiatives, or open-source projects!
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#111520]/90 border border-white/[0.08] p-8 shadow-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-2">Send a Direct Message</h3>
              <p className="text-xs sm:text-sm text-gray-400 mb-6 leading-relaxed">
                Fill in the details below to initiate contact directly.
              </p>

              {statusMessage && (
                <div className={`p-4 rounded-xl mb-6 text-xs flex items-start gap-3 border ${
                  statusMessage.type === 'error'
                    ? 'bg-red-500/10 border-red-500/20 text-red-200'
                    : 'bg-blue-500/10 border-blue-500/20 text-blue-200'
                }`}>
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <div>{statusMessage.text}</div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-2">
                      Your Name <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full px-4 py-3 rounded-xl bg-[#161B28] border text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${
                        errors.name
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-white/[0.08] focus:border-blue-500 focus:ring-blue-500/20'
                      }`}
                    />
                    {errors.name && <p className="text-xs text-red-400 mt-1.5">{errors.name}</p>}
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-2">
                      Email Address <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="alex@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-[#161B28] border text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${
                        errors.email
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-white/[0.08] focus:border-blue-500 focus:ring-blue-500/20'
                      }`}
                    />
                    {errors.email && <p className="text-xs text-red-400 mt-1.5">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-2">
                    Subject <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project Inquiry / Job Opportunity / Hello"
                    className={`w-full px-4 py-3 rounded-xl bg-[#161B28] border text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${
                      errors.subject
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-white/[0.08] focus:border-blue-500 focus:ring-blue-500/20'
                    }`}
                  />
                  {errors.subject && <p className="text-xs text-red-400 mt-1.5">{errors.subject}</p>}
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-2">
                    Message <span className="text-blue-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me a bit about your idea, timeline, or position..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#161B28] border text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all resize-y ${
                      errors.message
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-white/[0.08] focus:border-blue-500 focus:ring-blue-500/20'
                    }`}
                  />
                  {errors.message && <p className="text-xs text-red-400 mt-1.5">{errors.message}</p>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>

                <p className="text-[11px] text-gray-500 text-center font-mono">
                  No spam or marketing emails. Your email is only used to reply to your inquiry.
                </p>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
