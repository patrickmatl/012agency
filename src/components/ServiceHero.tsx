'use client';

import { motion } from 'framer-motion';

interface ServiceHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
}

export default function ServiceHero({
  eyebrow = '012 Agency • Pretoria',
  title,
  description,
}: ServiceHeroProps) {
  return (
    <section className="w-full bg-gradient-to-b from-black via-zinc-950 to-black border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="space-y-6 md:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70 backdrop-blur-sm"
          >
            <span className="mr-2 h-2 w-2 rounded-full bg-[#FFD700] animate-pulse" />
            <span>{eyebrow}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className="font-syne text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              {title}
            </h1>
            <p className="max-w-2xl text-base sm:text-lg md:text-xl text-neutral-300">
              {description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

