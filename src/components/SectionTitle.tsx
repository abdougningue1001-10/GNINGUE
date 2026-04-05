import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle = ({ title, subtitle, centered = false, className }: SectionTitleProps) => {
  return (
    <div className={cn('mb-16', centered ? 'text-center' : 'text-left', className)}>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className={cn('flex items-center gap-4 mb-4', centered ? 'justify-center' : 'justify-start')}
      >
        <div className="h-1 w-12 bg-red-600 rounded-full" />
        <span className="text-red-600 font-black uppercase tracking-widest text-sm">
          EAGLE FC
        </span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase leading-none mb-6"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;
