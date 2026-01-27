import { motion } from 'framer-motion';
import { siteContent } from '../content/siteContent';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Travel() {
  const { travel } = siteContent;

  return (
    <section id="travel" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background panorama image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(/budapest-panorama.jpg)' }}
      />
      
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-white/90" />
      
      {/* Subtle color tint */}
      <div className="absolute inset-0 bg-sage-50/30" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{travel.title}</h2>
        </motion.div>

        {/* TL;DR Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card bg-gradient-to-br from-sage-50/90 to-sage-100/80 border-sage-200 mb-12 backdrop-blur-sm"
        >
          <h3 className="font-display text-xl text-sage-800 mb-4 flex items-center gap-2">
            <span className="text-2xl">✈️</span> TL;DR
          </h3>
          <ul className="space-y-2">
            {travel.tldr.map((item, i) => (
              <li key={i} className="font-body text-charcoal-700 flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-sage-500 rounded-full mt-2 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Airport Info */}
          <motion.div variants={itemVariants} className="card bg-white/80 backdrop-blur-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-terracotta-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🛬</span>
              </div>
              <div>
                <h3 className="font-display text-xl text-charcoal-900">{travel.airport.name}</h3>
                <span className="font-body text-sm text-terracotta-600 font-medium">{travel.airport.code}</span>
              </div>
            </div>
            <p className="font-body text-charcoal-600 mb-4">{travel.airport.gettingToCity}</p>
            <ul className="space-y-2">
              {travel.airport.recommendations.map((rec, i) => (
                <li key={i} className="font-body text-sm text-charcoal-600 flex items-start gap-2">
                  <span className="text-terracotta-400">→</span>
                  {rec}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Getting Around */}
          <motion.div variants={itemVariants} className="card bg-white/80 backdrop-blur-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🚋</span>
              </div>
              <h3 className="font-display text-xl text-charcoal-900">{travel.gettingAround.title}</h3>
            </div>
            <ul className="space-y-3">
              {travel.gettingAround.bullets.map((bullet, i) => (
                <li key={i} className="font-body text-charcoal-600 flex items-start gap-2">
                  <span className="text-sage-500">•</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Neighborhoods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <h3 className="font-display text-2xl text-charcoal-900 mb-6 text-center">Where to Stay</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {travel.neighborhoods.map((hood, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card text-center group hover:shadow-md transition-shadow duration-300 bg-white/80 backdrop-blur-sm"
              >
                <h4 className="font-display text-lg text-charcoal-900 mb-2 group-hover:text-terracotta-600 transition-colors">
                  {hood.name}
                </h4>
                <p className="font-body text-xs tracking-wide uppercase text-terracotta-500 mb-3">
                  {hood.bestFor}
                </p>
                <p className="font-body text-sm text-charcoal-600">{hood.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Map Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="card inline-block bg-gradient-to-br from-terracotta-50/90 to-cream-100/90 border-terracotta-200 backdrop-blur-sm">
            <h3 className="font-display text-xl text-charcoal-900 mb-2">{travel.mapEmbed.title}</h3>
            <p className="font-body text-sm text-charcoal-600 mb-4 max-w-md">{travel.mapEmbed.description}</p>
            <a
              href={travel.mapEmbed.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              {travel.mapEmbed.link.label}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
