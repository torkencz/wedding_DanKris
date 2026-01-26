import { motion } from 'framer-motion';
import { siteContent } from '../content/siteContent';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ThingsToDo() {
  const { thingsToDo } = siteContent;

  return (
    <section id="things" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-sage-500 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-terracotta-500 blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">{thingsToDo.title}</h2>
          <p className="section-subtitle max-w-2xl mx-auto">{thingsToDo.intro}</p>
        </motion.div>

        {/* Day Plans */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          {thingsToDo.dayPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card bg-gradient-to-br from-terracotta-50 to-cream-50 border-terracotta-100"
            >
              <h3 className="font-display text-xl text-terracotta-700 mb-4">{plan.title}</h3>
              <ul className="space-y-2">
                {plan.items.map((item, i) => (
                  <li key={i} className="font-body text-charcoal-700 flex items-start gap-3">
                    <span className="w-6 h-6 bg-terracotta-200 rounded-full flex items-center justify-center text-xs text-terracotta-700 flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Activity Sections */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {thingsToDo.sections.map((section, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card group hover:shadow-md transition-all duration-300"
            >
              <h3 className="font-display text-xl text-charcoal-900 mb-3 group-hover:text-terracotta-600 transition-colors">
                {section.title}
              </h3>
              {section.intro && (
                <p className="font-body text-sm text-charcoal-500 italic mb-3">{section.intro}</p>
              )}
              <ul className="space-y-2">
                {section.bullets.map((bullet, i) => (
                  <li key={i} className="font-body text-sm text-charcoal-600 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-sage-400 rounded-full mt-1.5 flex-shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Note from us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-block">
            <span className="w-12 h-px bg-terracotta-300 inline-block align-middle mr-4" />
            <span className="font-accent text-lg text-charcoal-600 italic">{thingsToDo.noteFromUs}</span>
            <span className="w-12 h-px bg-terracotta-300 inline-block align-middle ml-4" />
          </div>
        </motion.div>

        {/* Kid-Friendly Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card bg-gradient-to-br from-sage-50 to-cream-50 border-sage-200 max-w-3xl mx-auto"
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-sage-200 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">👨‍👩‍👧‍👦</span>
            </div>
            <div>
              <h3 className="font-display text-xl text-sage-800">{thingsToDo.kidFriendly.title}</h3>
              <p className="font-body text-sm text-charcoal-600 mt-1">{thingsToDo.kidFriendly.intro}</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-2 mt-4">
            {thingsToDo.kidFriendly.bullets.map((bullet, i) => (
              <div key={i} className="font-body text-sm text-charcoal-700 flex items-start gap-2">
                <span className="text-sage-500">•</span>
                {bullet}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
