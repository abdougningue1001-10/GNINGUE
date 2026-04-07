import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Player } from '../types';
import { X, Trophy, Target, Clock, Shield, Zap, AlertCircle } from 'lucide-react';
import { cn } from '../lib/utils';

interface PlayerStatsModalProps {
  player: Player | null;
  onClose: () => void;
}

const PlayerStatsModal: React.FC<PlayerStatsModalProps> = ({ player, onClose }) => {
  if (!player) return null;

  const stats = player.stats;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/90 backdrop-blur-xl"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-4xl bg-white/5 border border-white/10 rounded-[40px] overflow-hidden shadow-2xl"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-3 bg-white/10 rounded-full text-white hover:bg-red-600 transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left: Image & Basic Info */}
            <div className="relative h-[400px] md:h-full overflow-hidden">
              <img
                src={player.image}
                alt={player.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <span className="text-6xl font-black text-white/20 absolute -top-12 -left-4">
                  #{player.number}
                </span>
                <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-2">
                  {player.name}
                </h2>
                <p className="text-red-600 font-black uppercase tracking-widest text-sm">
                  {player.position}
                </p>
              </div>
            </div>

            {/* Right: Detailed Stats */}
            <div className="p-8 md:p-12 overflow-y-auto max-h-[600px]">
              <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-8 border-b border-white/10 pb-4">
                Statistiques Individuelles
              </h3>

              {stats ? (
                <div className="grid grid-cols-2 gap-6">
                  <StatItem icon={Trophy} label="Matchs" value={stats.matches} />
                  <StatItem icon={Clock} label="Minutes" value={stats.minutesPlayed || '-'} />
                  <StatItem icon={Target} label="Buts" value={stats.goals} color="text-red-600" />
                  <StatItem icon={Zap} label="Passes D." value={stats.assists} color="text-red-600" />
                  
                  {player.position.toLowerCase().includes('gardien') ? (
                    <>
                      <StatItem icon={Shield} label="Clean Sheets" value={stats.cleanSheets || 0} />
                      <StatItem icon={Shield} label="Arrêts" value={stats.saves || 0} />
                    </>
                  ) : (
                    <>
                      <StatItem icon={Shield} label="Tacles" value={stats.tackles || '-'} />
                      <StatItem icon={Target} label="Précision" value={`${stats.passAccuracy || 0}%`} />
                    </>
                  )}

                  <div className="col-span-2 grid grid-cols-2 gap-4 mt-4 pt-8 border-t border-white/10">
                    <div className="flex items-center gap-3 p-4 bg-yellow-500/10 rounded-2xl border border-yellow-500/20">
                      <AlertCircle className="w-5 h-5 text-yellow-500" />
                      <div>
                        <p className="text-[10px] font-black text-yellow-500 uppercase tracking-widest">Cartons Jaunes</p>
                        <p className="text-xl font-black text-white">{stats.yellowCards || 0}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-red-600/10 rounded-2xl border border-red-600/20">
                      <AlertCircle className="w-5 h-5 text-red-600" />
                      <div>
                        <p className="text-[10px] font-black text-red-600 uppercase tracking-widest">Cartons Rouges</p>
                        <p className="text-xl font-black text-white">{stats.redCards || 0}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-gray-500 font-bold uppercase tracking-widest text-center py-12">
                  Aucune statistique disponible
                </p>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

const StatItem = ({ icon: Icon, label, value, color = "text-white" }: { icon: any, label: string, value: string | number, color?: string }) => (
  <div className="p-6 bg-white/5 rounded-3xl border border-white/5 hover:border-white/10 transition-all">
    <Icon className="w-5 h-5 text-red-600 mb-3" />
    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">{label}</p>
    <p className={cn("text-2xl font-black tracking-tighter", color)}>{value}</p>
  </div>
);

export default PlayerStatsModal;
