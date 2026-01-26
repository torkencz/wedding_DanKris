import { motion } from 'framer-motion';
import { siteContent } from '../content/siteContent';
import type { Link } from '../content/siteContent';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function ExternalLink({ link }: { link: Link }) {
  return (
    <a
      href={link.href}
      target={link.external ? '_blank' : undefined}
      rel={link.external ? 'noopener noreferrer' : undefined}
      className="link-underline text-sm"
    >
      {link.label}
      {link.external && (
        <svg className="w-3 h-3 ml-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      )}
    </a>
  );
}

function VenueImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-72 xl:w-80 overflow-hidden rounded-r-2xl">
      {/* Image with fade effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${src})` }}
      />
      {/* Gradient overlay for blending into background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.85) 15%, rgba(255,255,255,0) 40%)'
        }}
      />
      {/* Top and bottom fade */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.5) 0%, transparent 20%, transparent 80%, rgba(255,255,255,0.5) 100%)'
        }}
      />
      <span className="sr-only">{alt}</span>
    </div>
  );
}

function VenueImageWedding({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-72 xl:w-96 overflow-hidden rounded-r-2xl">
      {/* Image with fade effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${src})` }}
      />
      {/* Gradient overlay for blending - matches the terracotta gradient bg */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.9) 10%, rgba(255,255,255,0.4) 35%, rgba(255,255,255,0) 50%)'
        }}
      />
      {/* Subtle terracotta tint overlay */}
      <div 
        className="absolute inset-0 bg-terracotta-50/20"
      />
      {/* Top and bottom fade */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, transparent 15%, transparent 85%, rgba(255,255,255,0.4) 100%)'
        }}
      />
      <span className="sr-only">{alt}</span>
    </div>
  );
}

export default function Schedule() {
  const { schedule } = siteContent;

  return (
    <section id="schedule" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-cream-50 to-transparent" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">The Weekend</h2>
          <p className="section-subtitle">{schedule.introNote}</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {/* Welcome Event */}
          {schedule.events.map((event, index) => (
            <motion.div key={index} variants={itemVariants} className="card relative overflow-hidden">
              <div className="absolute -left-3 top-8 w-6 h-6 bg-terracotta-500 rounded-full hidden md:flex items-center justify-center z-10">
                <span className="w-2 h-2 bg-white rounded-full" />
              </div>
              
              {/* Venue Photo - Brody House */}
              <VenueImage src="/brody-house.webp" alt="Brody House venue" />
              
              <div className="flex flex-col md:flex-row md:items-start gap-6 relative z-10 lg:pr-64 xl:pr-72">
                {/* Date/Time column */}
                <div className="md:w-48 flex-shrink-0">
                  <div className="bg-terracotta-50 rounded-xl p-4 text-center md:text-left">
                    <span className="block font-display text-2xl text-terracotta-600 mb-1">
                      {event.dateLabel}
                    </span>
                    <span className="block font-body text-sm text-charcoal-600">
                      {event.timeLabel}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-display text-2xl text-charcoal-900 mb-2">{event.title}</h3>
                  <p className="font-accent text-lg text-terracotta-600 italic mb-1">{event.venueName}</p>
                  <p className="font-body text-sm text-charcoal-500 mb-4">
                    {event.address}, {event.cityCountry}
                  </p>
                  
                  {event.links && event.links.length > 0 && (
                    <div className="flex flex-wrap gap-4 mb-4">
                      {event.links.map((link, i) => (
                        <ExternalLink key={i} link={link} />
                      ))}
                    </div>
                  )}

                  {event.notes && event.notes.length > 0 && (
                    <ul className="space-y-1">
                      {event.notes.map((note, i) => (
                        <li key={i} className="font-body text-sm text-charcoal-600 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-sage-400 rounded-full mt-1.5 flex-shrink-0" />
                          {note}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Wedding Day */}
          <motion.div variants={itemVariants} className="card relative bg-gradient-to-br from-white to-terracotta-50/30 overflow-hidden">
            <div className="absolute -left-3 top-8 w-6 h-6 bg-terracotta-600 rounded-full hidden md:flex items-center justify-center z-10">
              <span className="w-2 h-2 bg-white rounded-full" />
            </div>

            {/* Venue Photo - Haris Park */}
            <VenueImageWedding src="/haris-park.jpg" alt="Haris Park venue" />

            <div className="flex flex-col md:flex-row md:items-start gap-6 relative z-10 lg:pr-64 xl:pr-80">
              {/* Date column */}
              <div className="md:w-48 flex-shrink-0">
                <div className="bg-terracotta-100 rounded-xl p-4 text-center md:text-left">
                  <span className="block font-display text-2xl text-terracotta-700 mb-1">
                    {schedule.weddingDay.dateLabel}
                  </span>
                  <span className="block font-body text-sm text-terracotta-600 font-medium">
                    The Big Day
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-display text-3xl text-charcoal-900 mb-2">{schedule.weddingDay.title}</h3>
                <p className="font-accent text-lg text-terracotta-600 italic mb-1">
                  {schedule.weddingDay.venueName}
                </p>
                <p className="font-body text-sm text-charcoal-500 mb-6">
                  {schedule.weddingDay.address}, {schedule.weddingDay.cityCountry}
                </p>

                {schedule.weddingDay.links && schedule.weddingDay.links.length > 0 && (
                  <div className="flex flex-wrap gap-4 mb-6">
                    {schedule.weddingDay.links.map((link, i) => (
                      <ExternalLink key={i} link={link} />
                    ))}
                  </div>
                )}

                {/* Timeline */}
                <div className="space-y-0">
                  {schedule.weddingDay.timeline.map((item, index) => (
                    <div
                      key={index}
                      className="relative pl-6 pb-6 last:pb-0 border-l-2 border-terracotta-200 last:border-transparent"
                    >
                      {/* Timeline dot */}
                      <div className="absolute -left-[7px] top-0 w-3 h-3 bg-terracotta-400 rounded-full" />
                      
                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                        <span className="font-body text-sm font-medium text-terracotta-600 whitespace-nowrap">
                          {item.time}
                        </span>
                        <div>
                          <span className="font-display text-base text-charcoal-800">{item.title}</span>
                          {item.notes && (
                            <span className="block sm:inline font-body text-sm text-charcoal-500 sm:ml-2">
                              — {item.notes}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {schedule.weddingDay.notes && schedule.weddingDay.notes.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-terracotta-100">
                    {schedule.weddingDay.notes.map((note, i) => (
                      <p key={i} className="font-body text-sm text-charcoal-500 italic">
                        {note}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
