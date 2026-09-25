import React, { useState } from 'react';
import { contactInfo } from '../data/portfolioData.ts';
import { Mail, Github, Linkedin, Copy, Check, ExternalLink, ArrowUp } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 border-t border-slate-900 bg-[#060911] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            <span>Get In Touch</span>
          </div>
          <h2
            id="contact-section-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white"
          >
            Contact
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
            Open to software engineering discussions, collaboration, and learning opportunities.
          </p>
        </div>

        {/* Contact Container Card */}
        <div
          id="contact-details-card"
          className="p-8 sm:p-10 lg:p-12 rounded-2xl bg-slate-900/60 border border-slate-800/80 shadow-xl max-w-4xl"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            
            {/* Left: Name and Email */}
            <div className="space-y-4">
              <div>
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider block mb-1">
                  Connect Directly
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {contactInfo.name}
                </h3>
              </div>

              {/* Email Block with Copy Button */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  id="contact-email-link"
                  href={`mailto:${contactInfo.email}`}
                  className="inline-flex items-center space-x-2.5 px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-blue-600/60 text-slate-200 hover:text-white transition-all text-sm sm:text-base font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>{contactInfo.email}</span>
                </a>

                {/* Copy button */}
                <button
                  id="copy-email-btn"
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  title={copied ? "Email address copied!" : "Copy email address"}
                  aria-label={copied ? "Email copied to clipboard" : "Copy email to clipboard"}
                >
                  {copied ? (
                    <span className="flex items-center text-xs text-emerald-400 font-sans space-x-1">
                      <Check className="w-4 h-4" />
                      <span>Copied</span>
                    </span>
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Right: Modern Icon Buttons for GitHub and LinkedIn */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              
              {/* GitHub Button */}
              <a
                id="contact-github-button"
                href={contactInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2.5 px-5 py-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-800 hover:border-slate-700 text-sm font-semibold transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 group"
              >
                <Github className="w-4 h-4 text-slate-300 group-hover:text-white" />
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-300 ml-0.5" />
              </a>

              {/* LinkedIn Button */}
              <a
                id="contact-linkedin-button"
                href={contactInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2.5 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all duration-200 shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-400 group"
              >
                <Linkedin className="w-4 h-4 text-white" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 text-blue-200 ml-0.5" />
              </a>

            </div>

          </div>

          {/* Clean terminal strip: No footer, ends cleanly */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
            <span>Portfolio of NAVAANITH B R · Aspiring Software Developer</span>
            <button
              id="back-to-top-btn"
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1 text-slate-400 hover:text-blue-400 transition-colors focus:outline-none"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
