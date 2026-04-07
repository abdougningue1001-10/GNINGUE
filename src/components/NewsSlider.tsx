import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NewsArticle } from '../types';
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NewsSliderProps {
  articles: NewsArticle[];
}

const NewsSlider: React.FC<NewsSliderProps> = ({ articles }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % articles.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [articles.length]);

  const next = () => setCurrentIndex((prev) => (prev + 1) % articles.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + articles.length) % articles.length);

  return (
    <div className="relative h-[600px] w-full overflow-hidden rounded-3xl group">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={articles[currentIndex].image}
            alt={articles[currentIndex].title}
            className="h-full w-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-12 md:p-20">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                {articles[currentIndex].category}
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-6 max-w-4xl">
                {articles[currentIndex].title}
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                {articles[currentIndex].excerpt}
              </p>
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2 text-gray-400 text-sm font-bold uppercase tracking-widest">
                  <Calendar className="w-4 h-4 text-red-600" />
                  {new Date(articles[currentIndex].date).toLocaleDateString('fr-FR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </div>
                <Link
                  to={`/news/${articles[currentIndex].id}`}
                  className="flex items-center gap-2 text-white font-black uppercase tracking-tighter hover:text-red-600 transition-colors group/link"
                >
                  Lire la suite
                  <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="absolute bottom-12 right-12 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={prev}
          className="p-4 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-white hover:bg-red-600 transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={next}
          className="p-4 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-white hover:bg-red-600 transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-12 left-12 flex gap-2">
        {articles.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1 transition-all duration-500 rounded-full ${
              idx === currentIndex ? 'w-12 bg-red-600' : 'w-4 bg-white/20'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsSlider;
