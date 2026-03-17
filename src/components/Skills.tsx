'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { staggerContainer, staggerItem } from '@/lib/animations';

const services = [
  {
    title: 'Product Design',
    description: 'End-to-end design thinking, wireframing, prototyping, and high-fidelity mockups for web and mobile applications.',
  },
  {
    title: 'User Experience',
    description: 'Research-driven UX strategy, user testing, journey mapping, and optimizing for conversion and engagement.',
  },
  {
    title: 'Frontend Development',
    description: 'React, Next.js, TypeScript, and Tailwind CSS—building performant, accessible, and delightful interfaces.',
  },
  {
    title: 'Design Systems',
    description: 'Creating comprehensive component libraries, design tokens, and documentation for scalable product development.',
  },
  {
    title: 'Animation & Motion',
    description: 'Framer Motion, CSS animations, and micro-interactions that enhance user experience without sacrificing performance.',
  },
  {
    title: 'Brand Development',
    description: 'Visual identity creation, brand guidelines, typography systems, and cohesive brand narratives.',
  },
];

export function Skills() {
  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="What I Do"
          title="Services & Expertise"
          description="A comprehensive approach to design and development"
          align="center"
        />

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="group bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-xl p-6 md:p-8 hover:border-amber-500/30 transition-colors"
              variants={staggerItem}
              whileHover={{ y: -4 }}
            >
              <motion.div
                className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/10 border border-amber-500/30 flex items-center justify-center mb-4 group-hover:border-amber-500/60 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-500 to-orange-500" />
              </motion.div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
