'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { staggerContainer, staggerItem } from '@/lib/animations';

const testimonials = [
  {
    quote:
      "Working with them was transformative. They didn't just design a beautiful interface—they solved complex problems with elegance and clarity.",
    author: 'Sarah Chen',
    role: 'Product Manager',
    company: 'Tech Innovation Labs',
  },
  {
    quote:
      'Their attention to detail and understanding of user behavior resulted in a 40% increase in conversion rates. A true strategic partner.',
    author: 'Marcus Johnson',
    role: 'CEO',
    company: 'Digital Commerce Inc.',
  },
  {
    quote:
      'Exceptional at translating business needs into intuitive product experiences. Our team learned so much from their approach and expertise.',
    author: 'Elena Rodriguez',
    role: 'Head of Design',
    company: 'Creative Solutions Co.',
  },
];

export function Testimonials() {
  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Testimonials"
          title="What clients say"
          description="Feedback from partners and collaborators"
          align="center"
        />

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.author}
              className="bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-xl p-6 md:p-8 hover:border-white/20 transition-colors"
              variants={staggerItem}
              whileHover={{ y: -4 }}
            >
              {/* Quote mark */}
              <motion.div
                className="text-4xl text-amber-500/40 mb-4 font-serif"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                "
              </motion.div>

              {/* Quote */}
              <p className="text-gray-300 mb-6 leading-relaxed text-lg italic">{testimonial.quote}</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500/30 to-orange-500/20 flex items-center justify-center border border-amber-500/20" />
                <div>
                  <p className="font-semibold text-white text-sm">{testimonial.author}</p>
                  <p className="text-xs text-gray-400">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
