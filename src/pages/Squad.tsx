import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import PlayerCard from '../components/PlayerCard';
import StaffCard from '../components/StaffCard';
import PlayerStatsModal from '../components/PlayerStatsModal';
import { PLAYERS, STAFF } from '../constants';
import { Player } from '../types';

const Squad = () => {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  return (
    <div className="bg-black min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          centered
          title="L'Effectif"
          subtitle="Découvrez les joueurs qui composent l'équipe première de l'EAGLE FC pour la saison 2026/2027. Cliquez sur un joueur pour voir ses statistiques détaillées."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {PLAYERS.map((player) => (
            <div key={player.id} onClick={() => setSelectedPlayer(player)} className="cursor-pointer">
              <PlayerCard player={player} />
            </div>
          ))}
        </div>

        <SectionTitle
          centered
          title="Le Staff Technique"
          subtitle="Les experts qui encadrent nos joueurs et préparent chaque victoire."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {STAFF.map((member) => (
            <StaffCard key={member.id} member={member} />
          ))}
        </div>
      </div>

      <PlayerStatsModal
        player={selectedPlayer}
        onClose={() => setSelectedPlayer(null)}
      />
    </div>
  );
};

export default Squad;
