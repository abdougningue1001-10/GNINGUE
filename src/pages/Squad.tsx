import React from 'react';
import SectionTitle from '../components/SectionTitle';
import PlayerCard from '../components/PlayerCard';
import { PLAYERS } from '../constants';

const Squad = () => {
  return (
    <div className="bg-black min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          centered
          title="L'Effectif"
          subtitle="Découvrez les joueurs qui composent l'équipe première de l'EAGLE FC pour la saison 2026/2027."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PLAYERS.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Squad;
