import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { motion } from 'motion/react';
import { Calendar, User, ArrowLeft, Tag, Share2, MessageSquare } from 'lucide-react';

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="bg-black min-h-screen pt-32 pb-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-6">Article non trouvé</h2>
          <Link to="/blog" className="text-red-600 font-black uppercase tracking-widest text-sm hover:gap-4 transition-all flex items-center gap-2 justify-center">
            <ArrowLeft className="w-4 h-4" /> Retour au blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-red-600 font-black uppercase tracking-widest text-xs mb-12 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Retour au blog
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="space-y-8">
            <span className="inline-block bg-red-600 text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-2xl shadow-red-600/20">
              {post.category}
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none max-w-4xl">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-8 py-8 border-y border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center text-red-600">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Auteur</p>
                  <p className="text-sm font-black text-white uppercase tracking-tighter">{post.author}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center text-red-600">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Date</p>
                  <p className="text-sm font-black text-white uppercase tracking-tighter">
                    {new Date(post.date).toLocaleDateString('fr-FR', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </p>
                </div>
              </div>
              <div className="ml-auto flex gap-4">
                <button className="p-3 bg-white/5 border border-white/10 rounded-2xl text-white hover:bg-red-600 transition-all">
                  <Share2 className="w-5 h-5" />
                </button>
                <button className="p-3 bg-white/5 border border-white/10 rounded-2xl text-white hover:bg-red-600 transition-all">
                  <MessageSquare className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="aspect-[21/9] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
            <div className="lg:col-span-3 space-y-8">
              <div className="prose prose-invert prose-red max-w-none">
                {post.content.split('\n').map((paragraph, i) => (
                  <p key={i} className="text-xl text-gray-300 leading-relaxed font-medium">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-12 border-t border-white/5">
                {post.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-xs font-black text-gray-400 uppercase tracking-widest hover:border-red-600 transition-colors cursor-pointer"
                  >
                    <Tag className="w-4 h-4" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-12">
              <div className="p-8 rounded-[40px] bg-red-600/10 border border-red-600/20">
                <h4 className="text-xl font-black text-white uppercase tracking-tighter mb-6">À propos de l'EAGLE FC</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 font-medium">
                  L'académie EAGLE FC est dédiée à la formation de l'élite du football sénégalais. Notre mission est de cultiver le talent et l'excellence.
                </p>
                <Link
                  to="/contact"
                  className="block text-center bg-red-600 text-white py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-red-700 transition-all"
                >
                  Nous rejoindre
                </Link>
              </div>

              <div className="space-y-6">
                <h4 className="text-xl font-black text-white uppercase tracking-tighter">Articles récents</h4>
                {BLOG_POSTS.filter(p => p.id !== id).slice(0, 3).map(p => (
                  <Link key={p.id} to={`/blog/${p.id}`} className="group block space-y-2">
                    <h5 className="text-sm font-black text-white uppercase tracking-tighter group-hover:text-red-600 transition-colors leading-tight">
                      {p.title}
                    </h5>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                      {new Date(p.date).toLocaleDateString('fr-FR', {
                        day: 'numeric',
                        month: 'short'
                      })}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPostPage;
