import { motion } from 'framer-motion';
import { siteContent } from '../content/siteContent';

export default function RSVP() {
  const { rsvpAndRegistry, kidsAndChildcare, links } = siteContent;

  return (
    <section id="rsvp" className="py-24 md:py-32 bg-gradient-to-br from-terracotta-50 via-cream-50 to-sage-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <svg className="absolute top-10 left-10 w-32 h-32 text-terracotta-300" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg className="absolute bottom-10 right-10 w-48 h-48 text-sage-300" viewBox="0 0 100 100">
          <path d="M10 50 Q50 10 90 50 Q50 90 10 50" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M20 50 Q50 20 80 50 Q50 80 20 50" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{rsvpAndRegistry.title}</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* RSVP Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card text-center bg-white/90 backdrop-blur-sm"
          >
            <h3 className="font-display text-3xl text-charcoal-900 mb-4">{rsvpAndRegistry.rsvp.headline}</h3>
            <p className="font-body text-charcoal-600 mb-2 max-w-lg mx-auto">{rsvpAndRegistry.rsvp.body}</p>
            <p className="font-accent text-terracotta-600 italic mb-6">{rsvpAndRegistry.rsvp.deadlineLabel}</p>
            {links.rsvp && (
              <a
                href={links.rsvp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-10 py-4"
              >
                {links.rsvp.label}
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            )}
          </motion.div>

          {/* Registry Card */}
          {rsvpAndRegistry.registry.show && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card text-center bg-white/70 backdrop-blur-sm"
            >
              <h3 className="font-display text-2xl text-charcoal-900 mb-3">{rsvpAndRegistry.registry.headline}</h3>
              <p className="font-body text-charcoal-600 max-w-lg mx-auto">{rsvpAndRegistry.registry.body}</p>
              {links.registry && (
                <a
                  href={links.registry.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary mt-6"
                >
                  View Registry
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </motion.div>
          )}

          {/* Kids & Childcare */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card bg-sage-50/80 border-sage-200 backdrop-blur-sm"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-sage-200 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">👶</span>
              </div>
              <div>
                <h3 className="font-display text-xl text-sage-800 mb-3">{kidsAndChildcare.title}</h3>
                <p className="font-body text-charcoal-700 mb-3">{kidsAndChildcare.strictPolicy}</p>
                <p className="font-body text-charcoal-600 mb-3">{kidsAndChildcare.childcareInProgress}</p>
                <p className="font-accent text-sage-700 italic">{kidsAndChildcare.detailsComing}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
