'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => pathname === href;


  return (
    <motion.nav
      className="bg-white py-[21px] px-[50px]"
      initial={{ y: 0 }}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-5xl font-black text-[#1f1f25] hover:text-[#023059] transition-colors"
          style={{ fontFamily: 'var(--font-montserrat)' }}
        >
          WB
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-base font-medium mx-[15px] py-[29px] transition-colors ${
                isActive(item.href)
                  ? 'text-[#023059]'
                  : 'text-[#1f1f25] hover:text-[#023059]'
              }`}
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden flex flex-col gap-1 w-5 h-5 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle menu"
        >
          <motion.span
            className="w-full h-0.5 bg-[#111111] rounded-full"
            animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-full h-0.5 bg-[#111111] rounded-full"
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-full h-0.5 bg-[#111111] rounded-full"
            animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden border-t border-[#E6E6E6] bg-white overflow-hidden"
        animate={isMobileMenuOpen ? { height: 'auto' } : { height: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`block text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? 'text-[#2563eb]'
                  : 'text-[#111111] hover:text-[#2563eb]'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}

