import React from 'react';
import SectionTitle from '../components/SectionTitle';
import MatchCard from '../components/MatchCard';
import { MATCHES } from '../constants';

const Matches = () => {
  return (
    <div className="bg-black min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          centered
          title="Matchs & Résultats"
          subtitle="Suivez le calendrier de l'EAGLE FC et revivez nos performances de la saison."
        />
        
        <div className="max-w-4xl mx-auto space-y-8">
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
    </div>
  );
};

export default Matches;
