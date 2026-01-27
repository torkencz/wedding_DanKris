import { motion } from 'framer-motion';
import { siteContent } from '../content/siteContent';

export default function Hero() {
  const { hero, meta, links } = siteContent;

  return (
    <section
      id="welcome"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/background.jpg)' }}
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/45" />
      
      {/* Subtle vignette effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0, 0, 0, 0.3) 100%)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 section-container text-center py-20 lg:py-32">
        {/* Date badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 mb-8"
        >
          <span className="w-16 h-px bg-white/70" />
          <span className="font-body text-lg md:text-xl tracking-[0.25em] text-white uppercase" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}>
            {meta.dateRangeLabel}
          </span>
          <span className="w-16 h-px bg-white/70" />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium mb-4 leading-[1.1] text-balance"
        >
          {hero.headline.split(' & ').map((name, i) => (
            <span key={i}>
              {i > 0 && (
                <span 
                  className="font-accent text-terracotta-500 italic mx-2 md:mx-4"
                  style={{ 
                    textShadow: '2px 2px 8px rgba(0,0,0,0.5), 0 0 20px rgba(0,0,0,0.3)' 
                  }}
                >
                  &
                </span>
              )}
              <span 
                className="inline-block text-white"
                style={{ 
                  textShadow: '2px 2px 8px rgba(0,0,0,0.5), 0 0 20px rgba(0,0,0,0.3)' 
                }}
              >
                {name}
              </span>
            </span>
          ))}
        </motion.h1>

        {/* Subhead / Location */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-accent text-2xl md:text-3xl text-white italic mb-12"
          style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}
        >
          {hero.subhead}
        </motion.p>

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
          <a href={links.map.href} className="btn-secondary bg-white shadow-sm" target="_blank" rel="noopener noreferrer">
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
            className="flex flex-col items-center gap-2 text-charcoal-500"
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
