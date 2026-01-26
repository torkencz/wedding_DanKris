import { motion } from 'framer-motion';
import { siteContent } from '../content/siteContent';

export default function Footer() {
  const { footer, meta } = siteContent;

  return (
    <footer className="bg-charcoal-900 text-white py-16 relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="footer-pattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="5" cy="5" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-pattern)" />
        </svg>
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Names */}
          <h2 className="font-display text-4xl md:text-5xl mb-2">
            {meta.shortCoupleNames.split(' & ').map((name, i) => (
              <span key={i}>
                {i > 0 && <span className="font-accent text-terracotta-400 italic mx-3">&</span>}
                {name}
              </span>
            ))}
          </h2>

          {/* Location & Date */}
          <p className="font-accent text-lg text-charcoal-300 italic mb-8">{footer.line2}</p>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
            {footer.links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="font-body text-sm text-charcoal-400 hover:text-terracotta-400 transition-colors duration-300 flex items-center gap-1"
              >
                {link.label}
                {link.external && (
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                )}
              </a>
            ))}
          </div>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="w-16 h-px bg-charcoal-700" />
            <svg className="w-6 h-6 text-terracotta-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span className="w-16 h-px bg-charcoal-700" />
          </div>

          {/* Copyright / Made with love */}
          <p className="font-body text-xs text-charcoal-500">
            Made with love for our favorite people
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
