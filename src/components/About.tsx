'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

export function About() {
  return (
    <section id="about" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-white/2">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            className="order-2 lg:order-1"
            {...fadeInUp}
          >
            <SectionHeading
              eyebrow="About Me"
              title="Crafting thoughtful digital experiences"
              align="left"
            />

            <motion.div
              className="space-y-6 text-gray-400"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.p className="text-lg leading-relaxed" variants={staggerItem}>
                I&apos;m a creative developer and designer passionate about building elegant digital
                products that solve real problems. With a background in both design and engineering,
                I bridge the gap between aesthetics and functionality.
              </motion.p>

              <motion.p className="text-lg leading-relaxed" variants={staggerItem}>
                My philosophy centers on creating experiences that feel natural and intentional.
                I believe great design is invisible—it should guide users effortlessly toward their
                goals while maintaining a sense of delight and discovery.
              </motion.p>

              <motion.p className="text-lg leading-relaxed" variants={staggerItem}>
                When I&apos;m not designing or coding, you&apos;ll find me exploring new tools, reading about
                typography and motion design, or working on experimental projects that push the
                boundaries of what&apos;s possible on the web.
              </motion.p>
            </motion.div>

            {/* Key stats */}
            <motion.div
              className="mt-12 grid grid-cols-3 gap-6 md:gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, amount: 0.3 }}
            >
              {[
                { number: '50+', label: 'Projects Completed' },
                { number: '8+', label: 'Years Experience' },
                { number: '30+', label: 'Happy Clients' },
              ].map((stat) => (
                <motion.div key={stat.label} variants={staggerItem} className="border-l border-white/10 pl-4">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            className="order-1 lg:order-2 relative h-80 md:h-96 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl overflow-hidden border border-white/10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
              alt="About"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
