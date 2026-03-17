'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface CTAProps {
  title: string;
  description?: string;
  primaryButton?: {
    label: string;
    href: string;
  };
  secondaryButton?: {
    label: string;
    href: string;
  };
}

export function CTA({
  title,
  description,
  primaryButton,
  secondaryButton,
}: CTAProps) {
  return (
    <section className="py-24 md:py-32 px-6 lg:px-8 bg-[#f5f5f5]">
      <motion.div
        className="max-w-3xl mx-auto text-center space-y-8 md:space-y-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Large Heading */}
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#111111] leading-tight"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>

        {/* Description */}
        {description && (
          <motion.p
            className="text-lg md:text-xl text-[#666666] leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>
        )}

        {/* Buttons */}
        {(primaryButton || secondaryButton) && (
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {primaryButton && (
              <Link
                href={primaryButton.href}
                className="px-10 py-4 bg-[#111111] text-[#f5f5f5] font-semibold hover:bg-[#2563eb] transition-all duration-300 flex items-center gap-2"
              >
                {primaryButton.label}
                <span className="text-lg">→</span>
              </Link>
            )}
            {secondaryButton && (
              <Link
                href={secondaryButton.href}
                className="px-10 py-4 border-2 border-[#111111] text-[#111111] font-semibold hover:bg-[#111111] hover:text-[#f5f5f5] transition-all duration-300 flex items-center gap-2"
              >
                {secondaryButton.label}
              </Link>
            )}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
