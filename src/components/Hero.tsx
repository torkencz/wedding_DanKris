import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteContent } from '../content/siteContent';

const hingePhotos = [
  '/hinge/IMG_1603.PNG',
  '/hinge/IMG_1604.PNG',
  '/hinge/IMG_1605.PNG',
  '/hinge/IMG_1606.PNG',
  '/hinge/IMG_1607.PNG',
  '/hinge/IMG_1608.PNG',
  '/hinge/IMG_1609.PNG',
  '/hinge/IMG_1610.PNG',
  '/hinge/IMG_1611.PNG',
  '/hinge/IMG_1612.PNG',
  '/hinge/IMG_1613.PNG',
  '/hinge/IMG_1614.PNG',
  '/hinge/IMG_1615.PNG',
  '/hinge/IMG_1616.PNG',
];

export default function Hero() {
  const { hero, meta, links } = siteContent;
  const [easterEggState, setEasterEggState] = useState<'hidden' | 'question' | 'gallery'>('hidden');
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(false);

  const handleRingClick = () => {
    setEasterEggState('question');
    setAnswer('');
    setError(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const normalizedAnswer = answer.trim().toLowerCase();
    if (normalizedAnswer === 'hinge' || normalizedAnswer === 'on hinge') {
      setEasterEggState('gallery');
      setError(false);
    } else {
      setError(true);
    }
  };

  const closeModal = () => {
    setEasterEggState('hidden');
    setAnswer('');
    setError(false);
  };

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

      {/* Secret ring easter egg - temporarily visible for positioning */}
      <button
        onClick={handleRingClick}
        className="absolute z-20 w-4 h-4 rounded-full cursor-pointer focus:outline-none bg-red-500/50 border-2 border-red-600"
        style={{ 
          left: 'calc(38% - 1px)', 
          top: '52%',
          transform: 'translate(-50%, -50%)'
        }}
        aria-hidden="true"
        tabIndex={-1}
      />

      {/* Easter egg modal */}
      <AnimatePresence>
        {easterEggState !== 'hidden' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {easterEggState === 'question' && (
                <div className="p-8 text-center">
                  <div className="text-4xl mb-4">💍</div>
                  <h2 className="font-display text-2xl md:text-3xl text-charcoal-800 mb-6">
                    Congratulations, you have found my precious!
                  </h2>
                  <p className="font-body text-lg text-charcoal-600 mb-8">
                    But answer me this: how did Kristof and Danica meet?
                  </p>
                  <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
                    <input
                      type="text"
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                      placeholder="Your answer..."
                      className={`w-full px-4 py-3 rounded-lg border-2 ${
                        error ? 'border-red-400' : 'border-cream-200'
                      } focus:border-terracotta-400 focus:outline-none font-body text-center text-lg`}
                      autoFocus
                    />
                    {error && (
                      <p className="text-red-500 mt-2 font-body">That's not quite right... try again!</p>
                    )}
                    <button
                      type="submit"
                      className="mt-4 btn-primary"
                    >
                      Submit
                    </button>
                  </form>
                  <button
                    onClick={closeModal}
                    className="mt-6 text-charcoal-400 hover:text-charcoal-600 font-body text-sm"
                  >
                    Close
                  </button>
                </div>
              )}

              {easterEggState === 'gallery' && (
                <div className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-2">🎉</div>
                    <h2 className="font-display text-2xl md:text-3xl text-charcoal-800 mb-2">
                      You got it!
                    </h2>
                    <p className="font-body text-charcoal-600">
                      Here's how it all started on Hinge...
                    </p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {hingePhotos.map((photo, index) => (
                      <motion.div
                        key={photo}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="aspect-[9/16] rounded-lg overflow-hidden shadow-md"
                      >
                        <img
                          src={photo}
                          alt={`Hinge conversation ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                  <div className="text-center mt-6">
                    <button
                      onClick={closeModal}
                      className="btn-secondary"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
