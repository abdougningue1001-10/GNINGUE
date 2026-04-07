import React from 'react';
import SectionTitle from '../components/SectionTitle';
import BlogCard from '../components/BlogCard';
import { BLOG_POSTS } from '../constants';
import { Search, Filter } from 'lucide-react';

const Blog = () => {
  return (
    <div className="bg-black min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <SectionTitle
            title="Le Blog des Aigles"
            subtitle="Analyses tactiques, coulisses de l'académie et actualités exclusives de l'EAGLE FC."
            className="mb-0"
          />
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Rechercher..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-6 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
              />
            </div>
            <button className="p-3 bg-white/5 border border-white/10 rounded-2xl text-white hover:bg-white/10 transition-all">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {BLOG_POSTS.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
