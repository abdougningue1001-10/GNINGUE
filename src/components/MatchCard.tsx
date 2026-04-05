import React from 'react';
import { motion } from 'motion/react';
import { Match } from '../types';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { cn } from '../lib/utils';

interface MatchCardProps {
  match: Match;
}

const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-black/40 border border-white/5 rounded-3xl p-8 hover:border-red-600/30 transition-all group"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 text-center md:text-right">
          <h4 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">
            EAGLE FC
          </h4>
          <span className="text-red-600 font-bold text-xs uppercase tracking-widest">
            Domicile
          </span>
        </div>

        <div className="flex flex-col items-center gap-4 px-8 border-x border-white/5">
          {match.status === 'finished' ? (
            <div className="text-5xl font-black text-white tracking-tighter">
              {match.score}
            </div>
          ) : (
            <div className="bg-red-600 text-white px-6 py-2 rounded-full font-black text-sm uppercase tracking-widest animate-pulse">
              À Venir
            </div>
          )}
          <div className="flex flex-col items-center gap-1 text-gray-500 text-xs font-bold uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <Calendar className="w-3 h-3" />
              {match.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3 h-3" />
              {match.time}
            </div>
          </div>
        </div>

        <div className="flex-1 text-center md:text-left">
          <h4 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">
            {match.opponent}
          </h4>
          <span className="text-gray-500 font-bold text-xs uppercase tracking-widest">
            Adversaire
          </span>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-white/5 flex justify-center">
        <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
          <MapPin className="w-4 h-4 text-red-600" />
          Bayakh, Thies
        </div>
      </div>
    </motion.div>
  );
};

export default MatchCard;
