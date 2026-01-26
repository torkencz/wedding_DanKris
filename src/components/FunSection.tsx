import { motion } from 'framer-motion';
import { siteContent } from '../content/siteContent';
import RedPandaChase from './RedPandaChase';

export default function FunSection() {
  const { fun } = siteContent;

  return (
    <section id="fun" className="py-24 md:py-32 bg-cream-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="fun-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="#e47347" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#fun-dots)" />
        </svg>
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">{fun.title}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <RedPandaChase
            speed={fun.animation.speed}
            caption={fun.caption}
          />
        </motion.div>
      </div>
    </section>
  );
}
