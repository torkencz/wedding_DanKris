import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteContent } from '../content/siteContent';

export default function Stay() {
  const { travel } = siteContent;
  const [openCategory, setOpenCategory] = useState<number | null>(0);

  return (
    <section id="stay" className="py-24 md:py-32 bg-cream-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Hotels</h2>
          <p className="section-subtitle max-w-2xl mx-auto">{travel.hotels.intro}</p>
        </motion.div>

        {/* Hotel Categories Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto space-y-4"
        >
          {travel.hotels.categories.map((category, index) => (
            <div
              key={index}
              className="card overflow-hidden p-0"
            >
              <button
                onClick={() => setOpenCategory(openCategory === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-cream-50/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="w-8 h-8 bg-terracotta-100 rounded-lg flex items-center justify-center text-sm font-medium text-terracotta-600">
                    {category.hotels.length}
                  </span>
                  <h3 className="font-display text-xl text-charcoal-900">{category.title}</h3>
                </div>
                <motion.svg
                  animate={{ rotate: openCategory === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-5 text-charcoal-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>

              <AnimatePresence>
                {openCategory === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 border-t border-cream-200">
                      <ul className="pt-4 space-y-3">
                        {category.hotels.map((hotel, i) => (
                          <li
                            key={i}
                            className="flex items-center justify-between py-2 border-b border-cream-100 last:border-0"
                          >
                            <span className="font-body text-charcoal-700">{hotel.name}</span>
                            {hotel.link && hotel.link !== "#" && (
                              <a
                                href={hotel.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-terracotta-500 hover:text-terracotta-600 transition-colors"
                              >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              </a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

        {/* Disclaimer */}
        {travel.hotels.disclaimer && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center font-body text-sm text-charcoal-500 italic mt-8 max-w-xl mx-auto"
          >
            {travel.hotels.disclaimer}
          </motion.p>
        )}
      </div>
    </section>
  );
}
