'use client';

import { motion } from 'framer-motion';
import { heroStagger } from '@/lib/animations';

export function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent rounded-3xl blur-2xl" />

        <motion.div
          className="text-center"
          variants={heroStagger.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Eyebrow */}
          <motion.div className="mb-6 flex items-center justify-center gap-2" variants={heroStagger.item}>
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
            <span className="text-xs font-semibold text-amber-500 uppercase tracking-widest">
              Let&apos;s work together
            </span>
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            variants={heroStagger.item}
          >
            Ready to bring your vision to life?
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed"
            variants={heroStagger.item}
          >
            I&apos;m always interested in hearing about interesting projects and creative collaborations.
            Let&apos;s start a conversation about what you&apos;re building.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={heroStagger.item}
          >
            <motion.a
              href="mailto:hello@example.com"
              className="relative px-8 py-4 bg-white text-black font-semibold rounded-lg overflow-hidden group w-full sm:w-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 opacity-0 group-hover:opacity-20 transition-opacity"
                layoutId="hoverBg"
              />
              <span className="relative text-center block">Get in touch via email</span>
            </motion.a>

            <motion.a
              href="#"
              className="px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:border-white/60 transition-colors group w-full sm:w-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative flex items-center justify-center gap-2">
                View my resume
              </span>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="mt-12 flex items-center justify-center gap-6"
            variants={heroStagger.item}
          >
            {[
              { label: 'Twitter', href: '#' },
              { label: 'LinkedIn', href: '#' },
              { label: 'GitHub', href: '#' },
              { label: 'Dribbble', href: '#' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
                whileHover={{ scale: 1.05 }}
              >
                {social.label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
