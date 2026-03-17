'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface HeroProps {
  title: string;
  description?: string;
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

export function Hero({ title, description, cta }: HeroProps) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: '100vh', backgroundColor: '#ffffff' }}
    >
      {/* Image — right side, no background, blends with page */}
      <motion.div
        className="absolute right-0 top-0 h-full"
        style={{ width: '50%' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <Image
          src="/server.png"
          alt="Hero visual"
          fill
          className="object-contain object-center"
          priority
          style={{ backgroundColor: '#ffffff' }}
        />
      </motion.div>

      {/* Text — left side */}
      <div className="relative z-10 h-full flex items-center" style={{ paddingLeft: '8%' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col"
          style={{ maxWidth: '45%' }}
        >
          <motion.h1
            variants={itemVariants}
            className="font-black uppercase text-[#0a0a0a]"
            style={{
              fontFamily: 'var(--font-montserrat)',
              fontSize: 'clamp(48px, 5.5vw, 80px)',
              lineHeight: 1.05,
              marginBottom: '40px',
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

          {cta && (
            <motion.div variants={itemVariants}>
              <Link href={cta.href} className="inline-block group" style={{ fontFamily: 'var(--font-poppins)' }}>
                <span className="text-base font-semibold text-[#0a0a0a] group-hover:text-[#023059] transition-colors">
                  {cta.label}
                </span>
                <div
                  className="mt-1 h-[3px] w-8"
                  style={{ background: 'linear-gradient(90deg, #1C99FE, #7644FF, #ed1a7a)' }}
                />
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
