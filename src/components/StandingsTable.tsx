import React from 'react';
import { StandingEntry } from '../types';
import { cn } from '../lib/utils';

interface StandingsTableProps {
  standings: StandingEntry[];
  compact?: boolean;
}

const StandingsTable: React.FC<StandingsTableProps> = ({ standings, compact = false }) => {
  return (
    <div className="overflow-x-auto rounded-2xl border border-white/5 bg-black/40 backdrop-blur-md">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-white/5 bg-white/5">
            <th className="px-4 py-4 text-xs font-black uppercase tracking-widest text-red-600">Pos</th>
            <th className="px-4 py-4 text-xs font-black uppercase tracking-widest text-red-600">Équipe</th>
            <th className="px-4 py-4 text-xs font-black uppercase tracking-widest text-red-600 text-center">J</th>
            {!compact && (
              <>
                <th className="px-4 py-4 text-xs font-black uppercase tracking-widest text-red-600 text-center">G</th>
                <th className="px-4 py-4 text-xs font-black uppercase tracking-widest text-red-600 text-center">N</th>
                <th className="px-4 py-4 text-xs font-black uppercase tracking-widest text-red-600 text-center">P</th>
                <th className="px-4 py-4 text-xs font-black uppercase tracking-widest text-red-600 text-center">Diff</th>
              </>
            )}
            <th className="px-4 py-4 text-xs font-black uppercase tracking-widest text-red-600 text-center">Pts</th>
          </tr>
        </thead>
        <tbody>
          {standings.map((entry) => (
            <tr
              key={entry.team}
              className={cn(
                "border-b border-white/5 transition-colors hover:bg-white/5",
                entry.isCurrentTeam && "bg-red-600/10"
              )}
            >
              <td className="px-4 py-4 font-black text-white">{entry.rank}</td>
              <td className="px-4 py-4">
                <div className="flex items-center gap-3">
                  <span className={cn(
                    "font-bold uppercase tracking-tighter",
                    entry.isCurrentTeam ? "text-red-600" : "text-white"
                  )}>
                    {entry.team}
                  </span>
                </div>
              </td>
              <td className="px-4 py-4 text-center text-gray-400 font-bold">{entry.played}</td>
              {!compact && (
                <>
                  <td className="px-4 py-4 text-center text-gray-400 font-bold">{entry.won}</td>
                  <td className="px-4 py-4 text-center text-gray-400 font-bold">{entry.drawn}</td>
                  <td className="px-4 py-4 text-center text-gray-400 font-bold">{entry.lost}</td>
                  <td className="px-4 py-4 text-center text-gray-400 font-bold">
                    {entry.goalsFor - entry.goalsAgainst}
                  </td>
                </>
              )}
              <td className="px-4 py-4 text-center font-black text-white">{entry.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StandingsTable;
