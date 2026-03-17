'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const textAlign = align === 'center' ? 'text-center' : 'text-left';

  return (
    <motion.div
      className={`mb-12 md:mb-16 ${align === 'center' ? 'mx-auto max-w-2xl' : ''}`}
      {...fadeInUp}
    >
      {eyebrow && (
        <motion.div
          className={`flex items-center ${align === 'center' ? 'justify-center' : ''} gap-2 mb-4`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
        >
          {align === 'center' && <div className="w-6 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent" />}
          <span className="text-xs font-semibold text-amber-500 uppercase tracking-widest">
            {eyebrow}
          </span>
          {align === 'center' && <div className="w-6 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent" />}
        </motion.div>
      )}

      <motion.h2
        className={`text-4xl md:text-5xl font-bold text-white mb-4 leading-tight ${textAlign}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          className={`text-lg text-gray-400 ${textAlign}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
