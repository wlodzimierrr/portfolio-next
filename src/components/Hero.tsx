'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

interface HeroProps {
  title: React.ReactNode;
  description?: string;
  showImage?: boolean;
  cta?: {
    label: string;
    href: string;
  };
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export function Hero({ title, description, showImage = false, cta }: HeroProps) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: '100vh', backgroundColor: '#ffffff' }}
    >
      {/* Barbell — home page only */}
      {showImage && <motion.div
        className="absolute right-[-120px] top-1/2 -translate-y-[42%]"
        style={{ width: 'clamp(620px, 48vw, 980px)' }}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <Image
          src="/home.png"
          alt="Barbell"
          width={1600}
          height={900}
          priority
          className="w-full h-auto block"
        />
      </motion.div>}

      {/* Text — left side */}
      <div className="relative z-10 h-full flex items-center" style={{ paddingLeft: '10%', paddingBottom: '20%' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col"
          style={{ maxWidth: '60%' }}
        >
          <motion.h1
            variants={itemVariants}
            className="font-black uppercase text-[#0a0a0a]"
            style={{
              fontFamily: 'var(--font-montserrat)',
              fontSize: 'clamp(44px, 4.5vw, 72px)',
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              marginBottom: '28px',
            }}
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              variants={itemVariants}
              className="font-light text-[rgba(29,29,36,0.65)] text-lg"
              style={{ fontFamily: 'var(--font-poppins)', marginBottom: '40px', maxWidth: '480px' }}
            >
              {description}
            </motion.p>
          )}
          
          <motion.p
            variants={itemVariants}
            className="text-[#0a0a0a]/70"
            style={{
              fontFamily: 'var(--font-montserrat)',
              fontSize: 'clamp(16px, 1.2vw, 20px)',
              lineHeight: 1.5,
              maxWidth: '520px',
              marginTop: '8px',
              marginBottom: '32px',
            }}
          >
            Exploring data, DevOps, and machine learning through hands-on projects.
          </motion.p>

          {cta && (
            <motion.div variants={itemVariants} className="flex items-center">
              <Link
                href={cta.href}
                className="px-6 py-3 rounded-xl text-white font-medium shadow-sm transition-all duration-200"
                style={{
                  fontFamily: 'var(--font-poppins)',
                  background: 'linear-gradient(90deg, #4f46e5, #ec4899)',
                }}
              >
                {cta.label}
              </Link>
              <Link
                href="/contact"
                className="ml-4 text-[#0a0a0a] font-medium underline-offset-4 hover:underline"
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
                Let&apos;s Talk →
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
