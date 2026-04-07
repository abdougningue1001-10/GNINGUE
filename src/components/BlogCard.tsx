import React from 'react';
import { motion } from 'motion/react';
import { BlogPost } from '../types';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative flex flex-col bg-black/40 border border-white/5 rounded-[40px] overflow-hidden hover:border-red-600/30 transition-all"
    >
      <div className="aspect-[16/9] overflow-hidden relative">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        <div className="absolute top-6 left-6">
          <span className="bg-red-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-2xl shadow-red-600/40">
            {post.category}
          </span>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-1">
        <div className="flex items-center gap-6 mb-6">
          <div className="flex items-center gap-2 text-gray-500 text-[10px] font-black uppercase tracking-widest">
            <Calendar className="w-3 h-3 text-red-600" />
            {new Date(post.date).toLocaleDateString('fr-FR', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            })}
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-[10px] font-black uppercase tracking-widest">
            <User className="w-3 h-3 text-red-600" />
            {post.author}
          </div>
        </div>

        <h3 className="text-2xl font-black text-white uppercase tracking-tighter leading-tight mb-4 group-hover:text-red-600 transition-colors">
          {post.title}
        </h3>
        
        <p className="text-gray-400 font-medium leading-relaxed mb-8 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
          <div className="flex gap-2">
            {post.tags?.slice(0, 2).map((tag, i) => (
              <span key={i} className="flex items-center gap-1 text-[8px] font-black text-gray-500 uppercase tracking-widest">
                <Tag className="w-2 h-2" />
                {tag}
              </span>
            ))}
          </div>
          <Link
            to={`/blog/${post.id}`}
            className="flex items-center gap-2 text-white font-black uppercase tracking-widest text-[10px] group/btn"
          >
            Lire l'article
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
