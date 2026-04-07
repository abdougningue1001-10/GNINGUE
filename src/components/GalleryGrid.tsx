import React from 'react';
import { motion } from 'motion/react';
import { GalleryItem } from '../types';
import { Play, ZoomIn } from 'lucide-react';

interface GalleryGridProps {
  items: GalleryItem[];
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((item, idx) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="group relative aspect-square overflow-hidden rounded-3xl bg-black/40 border border-white/5 cursor-pointer"
        >
          <img
            src={item.url}
            alt={item.title}
            className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="p-4 bg-red-600 rounded-full text-white shadow-2xl shadow-red-600/40 transform scale-0 group-hover:scale-100 transition-transform duration-500">
              {item.type === 'video' ? <Play className="w-6 h-6 fill-white" /> : <ZoomIn className="w-6 h-6" />}
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <h4 className="text-lg font-black text-white uppercase tracking-tighter leading-none">
              {item.title}
            </h4>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default GalleryGrid;
