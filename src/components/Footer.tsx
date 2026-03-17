'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { label: 'Twitter', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'GitHub', href: '#' },
  ];

  return (
    <footer className="bg-[#000000] text-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-24">
        {/* Main Footer Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 mb-16 md:mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Brand */}
          <div className="space-y-2">
            <h3 className="text-xs font-black uppercase tracking-widest text-[#f5f5f5]">
              WR
            </h3>
            <p className="text-sm text-[#999999] leading-relaxed">
              Designer & developer crafting modern digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#f5f5f5]">
              Navigate
            </h4>
            <div className="space-y-2">
              <Link
                href="/about"
                className="block text-sm text-[#999999] hover:text-[#f5f5f5] transition-colors duration-300"
              >
                About
              </Link>
              <Link
                href="/projects"
                className="block text-sm text-[#999999] hover:text-[#f5f5f5] transition-colors duration-300"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="block text-sm text-[#999999] hover:text-[#f5f5f5] transition-colors duration-300"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#f5f5f5]">
              Connect
            </h4>
            <div className="space-y-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-[#999999] hover:text-[#f5f5f5] transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="border-t border-[#333333] pt-8 md:pt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-[#666666]">
              © {currentYear} WR. All rights reserved.
            </p>
            <p className="text-xs text-[#666666]">
              Built with Next.js, TypeScript, Tailwind CSS & Framer Motion.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

