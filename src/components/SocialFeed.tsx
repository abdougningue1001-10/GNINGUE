import React from 'react';
import { motion } from 'motion/react';
import { Twitter, Facebook, Instagram, MessageSquare } from 'lucide-react';

const SocialFeed = () => {
  const posts = [
    {
      id: 1,
      platform: 'Twitter',
      icon: Twitter,
      content: "Victoire écrasante aujourd'hui ! Merci à tous les supporters présents au stade. #EagleFC #FlyHigh 🦅⚽",
      date: 'Il y a 2h',
      color: 'text-blue-400'
    },
    {
      id: 2,
      platform: 'Instagram',
      icon: Instagram,
      content: "Nouvelle séance d'entraînement matinale. La préparation continue pour le choc de dimanche. 💪🔥",
      date: 'Il y a 5h',
      color: 'text-pink-500'
    },
    {
      id: 3,
      platform: 'Facebook',
      icon: Facebook,
      content: "Découvrez les coulisses de notre nouveau centre de formation dans notre dernière vidéo. 🎥🏟️",
      date: 'Hier',
      color: 'text-blue-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {posts.map((post, idx) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-red-600/50 transition-all group"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg bg-white/5 ${post.color}`}>
                <post.icon className="w-5 h-5" />
              </div>
              <span className="font-black uppercase tracking-widest text-xs text-white">
                {post.platform}
              </span>
            </div>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
              {post.date}
            </span>
          </div>
          <p className="text-gray-300 leading-relaxed mb-6 font-medium">
            {post.content}
          </p>
          <div className="flex items-center gap-4 text-gray-500 group-hover:text-red-600 transition-colors">
            <MessageSquare className="w-4 h-4" />
            <span className="text-xs font-black uppercase tracking-widest">Répondre</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SocialFeed;
