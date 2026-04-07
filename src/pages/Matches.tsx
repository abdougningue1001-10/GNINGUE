import React from 'react';
import SectionTitle from '../components/SectionTitle';
import MatchCard from '../components/MatchCard';
import StandingsTable from '../components/StandingsTable';
import { MATCHES, STANDINGS } from '../constants';

const Matches = () => {
  return (
    <div className="bg-black min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <SectionTitle
              title="Matchs & Résultats"
              subtitle="Suivez le calendrier de l'EAGLE FC et revivez nos performances de la saison."
            />
            
            <div className="space-y-8">
              <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-8 border-l-4 border-red-600 pl-4">Prochains Matchs</h3>
              {MATCHES.filter(m => m.status === 'upcoming').map((match) => (
                <MatchCard key={match.id} match={match} />
              ))}

              <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-8 mt-16 border-l-4 border-red-600 pl-4">Résultats Récents</h3>
              {MATCHES.filter(m => m.status === 'finished').map((match) => (
                <MatchCard key={match.id} match={match} />
              ))}
            </div>
          </div>

          <div>
            <SectionTitle
              title="Classement"
              subtitle="Ligue Professionnelle 2026/27"
            />
            <StandingsTable standings={STANDINGS} />
            
            <div className="mt-12 p-8 rounded-3xl bg-red-600/10 border border-red-600/20">
              <h4 className="text-xl font-black text-white uppercase tracking-tighter mb-4">Légende</h4>
              <ul className="space-y-3 text-sm font-bold uppercase tracking-widest">
                <li className="flex items-center gap-3 text-white">
                  <div className="w-3 h-3 rounded-full bg-red-600" /> Promotion Ligue 1
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <div className="w-3 h-3 rounded-full bg-gray-600" /> Maintien
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <div className="w-3 h-3 rounded-full bg-white/10" /> Relégation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Matches;
