'use client';

import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
}

interface FeaturesProps {
  features: Feature[];
  title?: string;
}

export function Features({ features, title = 'What We Offer' }: FeaturesProps) {
  return (
    <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {title && (
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white p-8 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
