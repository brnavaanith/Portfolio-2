import React, { useEffect } from 'react';
import { X, ZoomIn, ZoomOut, ExternalLink, Award } from 'lucide-react';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificate: {
    title: string;
    issuer?: string;
    organization?: string;
    imageUrl?: string;
    placeholderLabel?: string;
    awardedYear?: string;
  } | null;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  certificate
}) => {
  const [isZoomed, setIsZoomed] = React.useState(false);
  const [hasImageError, setHasImageError] = React.useState(false);

  useEffect(() => {
    setHasImageError(false);
    setIsZoomed(false);
  }, [certificate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !certificate) return null;

  return (
    <div
      id="certificate-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md transition-opacity duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-modal-title"
    >
      <div
        id="certificate-modal-card"
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-blue-600/10 text-blue-400 border border-blue-500/20">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 id="cert-modal-title" className="text-base sm:text-lg font-bold text-white leading-tight">
                {certificate.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                {certificate.issuer || certificate.organization} {certificate.awardedYear ? `· ${certificate.awardedYear}` : ''}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              id="zoom-cert-button"
              type="button"
              onClick={() => setIsZoomed(!isZoomed)}
              className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              title={isZoomed ? "Zoom out" : "Zoom in"}
              aria-label={isZoomed ? "Zoom out" : "Zoom in"}
            >
              {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
            </button>
            <button
              id="close-cert-button"
              type="button"
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Close certificate viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Display Canvas */}
        <div className="relative flex-1 overflow-auto p-4 sm:p-6 bg-slate-950/90 flex items-center justify-center min-h-[320px]">
          {certificate.imageUrl && !hasImageError ? (
            <div className={`transition-all duration-300 ${isZoomed ? 'scale-150 cursor-zoom-out' : 'scale-100 cursor-zoom-in'} max-w-full flex justify-center items-center`}
                 onClick={() => setIsZoomed(!isZoomed)}
            >
              <img
                src={certificate.imageUrl}
                alt={certificate.title}
                onError={() => setHasImageError(true)}
                className="max-h-[75vh] max-w-full w-auto h-auto object-contain rounded-lg shadow-2xl"
                loading="lazy"
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center p-8 text-center text-slate-400">
              <Award className="w-16 h-16 text-blue-500 mb-3 opacity-80" />
              <p className="text-base font-bold text-white mb-1">{certificate.title}</p>
              <p className="text-sm font-semibold text-blue-400 mb-2">{certificate.issuer}</p>
              <p className="text-xs text-slate-400 font-mono bg-slate-900 px-3 py-1.5 rounded border border-slate-800">
                {certificate.imageUrl ? certificate.imageUrl.split('/').pop() : certificate.placeholderLabel}
              </p>
            </div>
          )}
        </div>

        {/* Footer info note */}
        <div className="px-5 py-3 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Click anywhere outside or press ESC to dismiss</span>
          {certificate.imageUrl && (
            <a
              href={certificate.imageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span>Open in new tab</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
