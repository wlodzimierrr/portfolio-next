'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  index?: number;
  link?: string;
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  index = 0,
  link = '#',
}: ProjectCardProps) {
  const delay = index * 0.1;

  return (
    <motion.div
      className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 hover:shadow-md transition-all"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <Link href={link} className="block h-full">
        {/* Image Container */}
        <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-gray-100">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>

          <p className="text-gray-600 mb-4 text-sm md:text-base leading-relaxed">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-block px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded border border-gray-200 group-hover:border-gray-300 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Hover indicator */}
          <motion.div
            className="mt-4 flex items-center gap-2 text-blue-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity"
            initial={{ x: -10 }}
            whileHover={{ x: 5 }}
          >
            View project
            <span>→</span>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}
