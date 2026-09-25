import React, { useState } from 'react';
import { certificationsList } from '../data/portfolioData.ts';
import { CertificateModal } from './CertificateModal.tsx';
import { Award, ExternalLink, Maximize2, ShieldCheck, Plus } from 'lucide-react';
import { CertificationItem } from '../types.ts';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  return (
    <section
      id="certifications"
      className="py-16 sm:py-20 lg:py-24 border-t border-slate-900 bg-[#070b14] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            <span>Credentials</span>
          </div>
          <h2
            id="certifications-section-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white"
          >
            Certifications
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
            Verified course completions and technical workshops across programming languages and software tools.
          </p>
        </div>

        {/* Certificate Cards Grid - Consistent card sizes with + Add More option */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {certificationsList.map((cert) => (
            <div
              key={cert.id}
              id={`certification-card-${cert.id}`}
              onClick={() => setSelectedCert(cert)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedCert(cert);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View certificate for ${cert.title} by ${cert.issuer}`}
              className="group rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-700/60 transition-all duration-300 shadow-md flex flex-col justify-between overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <div>
                {/* Certificate Image Preview - Object-contain, uncropped, original aspect ratio */}
                <div className="relative h-56 sm:h-60 bg-slate-950/80 border-b border-slate-800 overflow-hidden flex items-center justify-center p-3">
                  {!imageErrors[cert.id] ? (
                    <img
                      src={cert.imageUrl}
                      alt={`${cert.issuer} - ${cert.title}`}
                      onError={() => setImageErrors((prev) => ({ ...prev, [cert.id]: true }))}
                      className="max-h-full max-w-full w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center p-4 text-center text-slate-400 h-full w-full">
                      <Award className="w-10 h-10 text-blue-400 mb-2 opacity-80" />
                      <span className="text-xs font-semibold text-slate-200">{cert.title}</span>
                      <span className="text-[11px] text-slate-400 mt-1 font-mono">
                        {cert.imageUrl?.split('/').pop()}
                      </span>
                    </div>
                  )}
                  
                  {/* Subtle hover overlay to view full original */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center space-x-2 text-white pointer-events-none">
                    <Maximize2 className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-semibold">Click to view full original</span>
                  </div>
                </div>

                {/* Content info */}
                <div className="p-5 space-y-2">
                  {/* Issuer Badge */}
                  <div className="flex items-center space-x-1.5 text-xs font-semibold text-blue-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{cert.issuer}</span>
                  </div>

                  {/* Course / Workshop Title */}
                  <h3 className="text-base font-bold text-white tracking-tight leading-snug group-hover:text-blue-300 transition-colors">
                    {cert.title}
                  </h3>
                </div>
              </div>

              {/* Bottom Placeholder / View trigger */}
              <div className="px-5 py-3 border-t border-slate-800/80 bg-slate-950/40 flex items-center justify-between text-xs text-slate-400">
                <span className="truncate text-[11px]">{cert.imagePlaceholderLabel}</span>
                <span className="text-blue-400 group-hover:text-blue-300 font-semibold flex items-center space-x-1 flex-shrink-0 ml-2">
                  <span>View</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}

          {/* Clean "+ Add More" Certification Card */}
          <div
            id="add-more-certification-card"
            className="group rounded-2xl bg-slate-900/40 border border-dashed border-slate-800/90 hover:border-blue-600/60 hover:bg-slate-900/60 transition-all duration-300 shadow-md flex flex-col justify-between overflow-hidden cursor-default"
            title="Easily add new certificates in src/data/portfolioData.ts"
          >
            <div>
              {/* Aspect-[4/3] Canvas matching certificate preview */}
              <div className="relative aspect-[4/3] bg-slate-950/80 border-b border-dashed border-slate-800 flex flex-col items-center justify-center p-4 text-center group-hover:border-blue-500/40 transition-colors">
                <div className="w-12 h-12 rounded-full bg-slate-900/90 border border-dashed border-slate-700/80 flex items-center justify-center text-slate-400 group-hover:text-blue-400 group-hover:border-blue-500/50 transition-colors mb-2">
                  <Plus className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-slate-400 group-hover:text-slate-200 transition-colors">
                  New Certificate Slot
                </span>
              </div>

              {/* Content info */}
              <div className="p-5 space-y-2">
                {/* Issuer Badge */}
                <div className="flex items-center space-x-1.5 text-xs font-semibold text-slate-400 group-hover:text-blue-400 transition-colors">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Credential</span>
                </div>

                {/* Card Title */}
                <h3 className="text-base font-bold text-slate-300 group-hover:text-white tracking-tight leading-snug transition-colors">
                  + Add More
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  Ready for new course completions and verified technical credentials.
                </p>
              </div>
            </div>

            {/* Bottom Strip */}
            <div className="px-5 py-3 border-t border-slate-800/80 bg-slate-950/40 flex items-center justify-between text-xs text-slate-400">
              <span className="truncate text-[11px] text-slate-400">Ready in portfolioData.ts</span>
              <span className="text-slate-400 group-hover:text-blue-400 font-semibold flex items-center space-x-1 flex-shrink-0 ml-2 transition-colors">
                <Plus className="w-3.5 h-3.5" />
                <span>Add</span>
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Lightbox Modal for Certificate Viewing */}
      <CertificateModal
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        certificate={selectedCert}
      />
    </section>
  );
};
