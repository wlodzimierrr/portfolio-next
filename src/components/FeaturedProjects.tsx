'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  href: string;
}

interface FeaturedProjectsProps {
  projects: Project[];
  title?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export function FeaturedProjects({
  projects,
  title = 'Selected Work',
}: FeaturedProjectsProps) {
  return (
    <section className="py-24 md:py-32 px-6 lg:px-8 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-5xl md:text-6xl font-black text-[#111111] leading-tight">
            {title}
          </h2>
          <div className="w-16 h-1 bg-[#2563eb] mt-6" />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="space-y-16 md:space-y-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Image */}
              <motion.div
                className={`w-full h-[300px] overflow-hidden rounded-lg shadow-md group ${
                  index % 2 === 1 ? 'lg:col-start-2' : ''
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={300}
                  className="w-full h-[300px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay accent */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              {/* Content */}
              <motion.div
                className={`flex flex-col justify-center space-y-6 ${
                  index % 2 === 1 ? 'lg:col-start-1' : ''
                }`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {/* Title */}
                <Link href={project.href}>
                  <h3 className="text-3xl md:text-4xl font-black text-[#111111] hover:text-[#2563eb] transition-colors duration-300 cursor-pointer">
                    {project.title}
                  </h3>
                </Link>

                {/* Description */}
                <p className="text-lg text-[#666666] leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold uppercase tracking-wide px-4 py-2 bg-[#e5e7eb] text-[#111111] rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Link */}
                <Link
                  href={project.href}
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-[#111111] hover:text-[#2563eb] transition-colors duration-300 pt-4"
                >
                  View Project
                  <span className="text-lg">→</span>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


