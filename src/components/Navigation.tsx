import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteContent } from '../content/siteContent';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('welcome');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = siteContent.nav.sections.map(s => s.id);
      for (const sectionId of sections.reverse()) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navigation - Fixed right side */}
      <nav
        className={`fixed right-0 top-0 h-full z-50 hidden lg:flex flex-col justify-center transition-all duration-500 ${
          scrolled ? 'pr-4' : 'pr-8'
        }`}
      >
        <div className="flex flex-col gap-1">
          {siteContent.nav.sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`group flex items-center justify-end gap-3 py-2 px-4 transition-all duration-300`}
            >
              <span
                className={`font-body text-sm tracking-wide transition-all duration-300 ${
                  activeSection === section.id
                    ? 'text-terracotta-600 font-medium'
                    : 'text-charcoal-400 group-hover:text-charcoal-700'
                }`}
              >
                {section.label}
              </span>
              <span
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-terracotta-500 scale-125'
                    : 'bg-charcoal-200 group-hover:bg-charcoal-400'
                }`}
              />
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation - Top bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 lg:hidden transition-all duration-300 ${
          scrolled ? 'bg-cream-50/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <span className="font-display text-lg text-charcoal-800">
            {siteContent.meta.shortCoupleNames}
          </span>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-charcoal-700 transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-charcoal-700 transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-charcoal-700 transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-cream-50/98 backdrop-blur-lg lg:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center justify-center h-full gap-2"
            >
              {siteContent.nav.sections.map((section, index) => (
                <motion.button
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  onClick={() => scrollToSection(section.id)}
                  className={`font-display text-2xl py-3 px-6 transition-colors duration-300 ${
                    activeSection === section.id
                      ? 'text-terracotta-600'
                      : 'text-charcoal-600 hover:text-charcoal-900'
                  }`}
                >
                  {section.label}
                </motion.button>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
