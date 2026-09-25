import React, { useState, useEffect } from 'react';
import { navLinks } from '../data/portfolioData.ts';
import { Menu, X, Code2 } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll spy for active section
      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="main-navigation"
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070b14]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30'
          : 'bg-[#070b14]/50 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo / Personal Brand */}
          <a
            id="nav-brand-logo"
            href="#hero"
            onClick={(e) => scrollToSection(e, 'hero')}
            className="flex items-center space-x-2.5 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
            aria-label="NAVAANITH B R - Home"
          >
            <div className="w-9 h-9 rounded-lg bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:bg-blue-600/25 group-hover:border-blue-400 transition-all duration-200">
              <Code2 className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                NAVAANITH B R
              </span>
              <span className="text-[10px] text-slate-400 font-medium -mt-1 hidden sm:block">
                Software Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav-menu" className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isActive
                      ? 'text-blue-400 bg-blue-950/50 border border-blue-800/60 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60 border border-transparent'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex items-center md:hidden">
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-menu"
              aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden border-b border-slate-800 bg-[#0a0f1d]/98 backdrop-blur-xl px-4 pt-3 pb-5 shadow-2xl transition-all"
        >
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`mobile-nav-link-${link.id}`}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`px-4 py-2.5 rounded-lg text-base font-medium flex items-center justify-between transition-colors ${
                    isActive
                      ? 'text-blue-400 bg-blue-950/60 border border-blue-800/50'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/70'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                  )}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
