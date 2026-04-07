import React from 'react';
import { motion } from 'motion/react';
import { StaffMember } from '../types';

interface StaffCardProps {
  member: StaffMember;
}

const StaffCard: React.FC<StaffCardProps> = ({ member }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl bg-black/40 border border-white/5"
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
        <span className="text-red-600 font-black uppercase tracking-widest text-[10px] mb-1 block">
          {member.role}
        </span>
        <h3 className="text-xl font-black text-white uppercase tracking-tighter leading-none">
          {member.name}
        </h3>
      </div>
    </motion.div>
  );
};

export default StaffCard;
