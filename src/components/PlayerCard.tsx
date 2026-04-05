import React from 'react';
import { motion } from 'motion/react';
import { Player } from '../types';
import { Trophy, Star } from 'lucide-react';

interface PlayerCardProps {
  player: Player;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="relative group overflow-hidden rounded-2xl bg-black/40 border border-white/5"
    >
      <div className="aspect-[4/5] overflow-hidden relative">
        <img
          src={player.image}
          alt={player.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
        
        {player.isCaptain && (
          <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-black uppercase flex items-center gap-2 shadow-xl">
            <Star className="w-3 h-3 fill-white" />
            Capitaine
          </div>
        )}
        
        <div className="absolute top-4 right-4 text-6xl font-black text-white/20 tracking-tighter group-hover:text-red-600/40 transition-colors">
          {player.number}
        </div>
      </div>

      <div className="p-6 relative">
        <div className="flex justify-between items-end mb-4">
          <div>
            <span className="text-red-600 text-xs font-black uppercase tracking-widest mb-1 block">
              {player.position}
            </span>
            <h3 className="text-xl font-black text-white uppercase tracking-tighter leading-none">
              {player.name}
            </h3>
          </div>
          <div className="text-3xl font-black text-white/10 group-hover:text-red-600/20 transition-colors">
            #{player.number}
          </div>
        </div>

        {player.stats && (
          <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/5">
            <div className="text-center">
              <div className="text-white font-black text-lg leading-none">{player.stats.goals}</div>
              <div className="text-[10px] text-gray-500 uppercase font-bold">Buts</div>
            </div>
            <div className="text-center">
              <div className="text-white font-black text-lg leading-none">{player.stats.assists}</div>
              <div className="text-[10px] text-gray-500 uppercase font-bold">Passes</div>
            </div>
            <div className="text-center">
              <div className="text-white font-black text-lg leading-none">{player.stats.matches}</div>
              <div className="text-[10px] text-gray-500 uppercase font-bold">Matchs</div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default PlayerCard;
