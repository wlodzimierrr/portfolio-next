'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { staggerContainer, staggerItem } from '@/lib/animations';

const experiences = [
  {
    role: 'Senior Product Designer',
    company: 'Digital Studio Co.',
    period: '2022 - Present',
    description:
      'Leading design strategy and execution for a suite of B2B SaaS products. Established design systems and mentored junior designers.',
    highlights: ['Design System', 'Team Leadership', 'UX Strategy'],
  },
  {
    role: 'Full Stack Designer & Developer',
    company: 'Creative Agency Ltd.',
    period: '2019 - 2022',
    description:
      'Designed and developed custom web applications for enterprise clients. Pioneered component-driven development approach.',
    highlights: ['React', 'Full Stack', 'Client Relations'],
  },
  {
    role: 'Junior UI/UX Designer',
    company: 'Tech Startup Inc.',
    period: '2017 - 2019',
    description:
      'Designed mobile and web interfaces for consumer-facing products. Conducted user research and A/B testing.',
    highlights: ['Mobile Design', 'User Research', 'Prototyping'],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white/2 to-transparent">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="Career"
          title="Professional Experience"
          description="A timeline of roles and responsibilities"
          align="center"
        />

        {/* Timeline */}
        <motion.div
          className="space-y-8 md:space-y-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.2 }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              className="relative pl-8 md:pl-12"
              variants={staggerItem}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 border-4 border-black" />

              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[7px] top-8 w-0.5 h-24 md:h-32 bg-gradient-to-b from-amber-500/50 to-transparent" />
              )}

              {/* Content */}
              <div className="group">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-amber-500 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-amber-500/70 font-semibold mt-1">{exp.company}</p>
                  </div>
                  <p className="text-sm text-gray-500 mt-2 md:mt-0">{exp.period}</p>
                </div>

                <p className="text-gray-400 mb-4 leading-relaxed">{exp.description}</p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="inline-block px-3 py-1 text-xs font-medium text-amber-500/60 bg-amber-500/5 rounded-full border border-amber-500/20 group-hover:border-amber-500/40 transition-colors"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
