import { motion } from 'framer-motion';
import { siteContent } from '../content/siteContent';

export default function Hero() {
  const { hero, meta, links } = siteContent;

  return (
    <section
      id="welcome"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream-100 via-cream-50 to-terracotta-50/30" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 opacity-20">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <circle cx="350" cy="50" r="200" fill="none" stroke="#e47347" strokeWidth="0.5" />
          <circle cx="350" cy="50" r="150" fill="none" stroke="#e47347" strokeWidth="0.5" />
          <circle cx="350" cy="50" r="100" fill="none" stroke="#e47347" strokeWidth="0.5" />
        </svg>
      </div>
      
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 opacity-15">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path d="M0 100 Q50 50 100 100 T200 100" fill="none" stroke="#788862" strokeWidth="2" />
          <path d="M0 120 Q50 70 100 120 T200 120" fill="none" stroke="#788862" strokeWidth="2" />
          <path d="M0 140 Q50 90 100 140 T200 140" fill="none" stroke="#788862" strokeWidth="2" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center py-20 lg:py-32">
        {/* Date badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 mb-8"
        >
          <span className="w-12 h-px bg-terracotta-300" />
          <span className="font-body text-sm tracking-[0.25em] text-terracotta-600 uppercase">
            {meta.dateRangeLabel}
          </span>
          <span className="w-12 h-px bg-terracotta-300" />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-charcoal-900 mb-4 leading-[1.1] text-balance"
        >
          {hero.headline.split(' & ').map((name, i) => (
            <span key={i}>
              {i > 0 && (
                <span className="font-accent text-terracotta-500 italic mx-2 md:mx-4">&</span>
              )}
              <span className="inline-block">{name}</span>
            </span>
          ))}
        </motion.h1>

        {/* Subhead / Location */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-accent text-xl md:text-2xl text-charcoal-500 italic mb-12"
        >
          {hero.subhead}
        </motion.p>

        {/* Quick facts grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-3xl mx-auto mb-14"
        >
          {hero.quickFacts.map((fact, index) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="text-center"
            >
              <span className="block font-body text-xs tracking-[0.2em] text-terracotta-500 uppercase mb-2">
                {fact.label}
              </span>
              <span className="block font-display text-sm md:text-base text-charcoal-700">
                {fact.value}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {links.rsvp && (
            <a href={links.rsvp.href} className="btn-primary" target="_blank" rel="noopener noreferrer">
              {links.rsvp.label}
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          )}
          <a href={links.map.href} className="btn-secondary" target="_blank" rel="noopener noreferrer">
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {links.map.label}
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-charcoal-400"
          >
            <span className="font-body text-xs tracking-widest uppercase">Scroll</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
