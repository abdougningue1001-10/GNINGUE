import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { User, Settings, ShoppingBag, Heart, LogOut, ShieldCheck, CreditCard } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

const Profile = () => {
  const { profile, user, logout, loading } = useAuth();
  const navigate = useNavigate();
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user) {
      const q = query(
        collection(db, 'orders'),
        where('userId', '==', user.uid),
        orderBy('date', 'desc')
      );
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const ordersData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setOrders(ordersData);
      });
      return () => unsubscribe();
    }
  }, [user]);

  if (loading || !profile) {
    return (
      <div className="bg-black min-h-screen pt-32 flex items-center justify-center">
        <div className="text-red-600 font-black uppercase tracking-widest animate-pulse">Chargement...</div>
      </div>
    );
  }

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <div className="bg-black min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="p-8 rounded-[40px] bg-white/5 border border-white/10 text-center">
              <div className="relative inline-block mb-6">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-red-600"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 right-0 p-2 bg-red-600 rounded-full border-4 border-black">
                  <ShieldCheck className="w-4 h-4 text-white" />
                </div>
              </div>
              <h2 className="text-2xl font-black text-white uppercase tracking-tighter mb-1">{profile.name}</h2>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-6">{profile.membership} Member</p>
              
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5">
                <div>
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Points</p>
                  <p className="text-xl font-black text-red-600">{profile.points}</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Depuis</p>
                  <p className="text-xl font-black text-white">{new Date(profile.memberSince).getFullYear()}</p>
                </div>
              </div>
            </div>

            <nav className="p-4 rounded-[40px] bg-white/5 border border-white/10">
              <ul className="space-y-2">
                <NavItem icon={User} label="Mon Profil" active />
                <NavItem icon={ShoppingBag} label="Mes Commandes" />
                <NavItem icon={Heart} label="Favoris" />
                <NavItem icon={CreditCard} label="Paiement" />
                <NavItem icon={Settings} label="Paramètres" />
                <li className="pt-4 mt-4 border-t border-white/5">
                  <button 
                    onClick={handleLogout}
                    className="w-full flex items-center gap-4 px-6 py-4 text-gray-500 hover:text-red-600 font-black uppercase tracking-widest text-xs transition-all"
                  >
                    <LogOut className="w-5 h-5" />
                    Déconnexion
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            <div className="p-12 rounded-[40px] bg-gradient-to-br from-red-600 to-red-900 relative overflow-hidden shadow-2xl shadow-red-600/20">
              <div className="relative z-10">
                <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-6">
                  Bienvenue, <br /> {profile.name.split(' ')[0]} !
                </h1>
                <p className="text-white/80 text-lg font-medium max-w-xl mb-8">
                  En tant que membre {profile.membership}, vous bénéficiez de -10% sur toute la boutique et d'un accès prioritaire aux billets de match.
                </p>
                <div className="flex gap-4">
                  <button className="bg-white text-red-600 px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-all">
                    Utiliser mes points
                  </button>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                <ShoppingBag className="w-full h-full -rotate-12 translate-x-1/4 translate-y-1/4" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-[40px] bg-white/5 border border-white/10">
                <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-8 flex items-center gap-3">
                  <ShoppingBag className="w-6 h-6 text-red-600" />
                  Dernières Commandes
                </h3>
                <div className="space-y-6">
                  {orders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
                      <div>
                        <p className="text-xs font-black text-white uppercase tracking-tighter">{order.id}</p>
                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{order.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-black text-red-600">{order.total}</p>
                        <span className="text-[8px] font-black uppercase tracking-widest px-2 py-1 bg-white/10 rounded-full text-white">
                          {order.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 rounded-[40px] bg-white/5 border border-white/10">
                <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-8 flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-red-600" />
                  Avantages Membre
                </h3>
                <ul className="space-y-4">
                  <BenefitItem label="Réduction Boutique" value="-10%" />
                  <BenefitItem label="Billetterie Prioritaire" value="Activé" />
                  <BenefitItem label="Contenu Exclusif" value="Illimité" />
                  <BenefitItem label="Rencontres Joueurs" value="1 / Saison" />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) => (
  <li>
    <button className={cn(
      "w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all",
      active ? "bg-red-600 text-white shadow-lg shadow-red-600/20" : "text-gray-400 hover:bg-white/5 hover:text-white"
    )}>
      <Icon className="w-5 h-5" />
      {label}
    </button>
  </li>
);

const BenefitItem = ({ label, value }: { label: string, value: string }) => (
  <li className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{label}</span>
    <span className="text-sm font-black text-white uppercase tracking-tighter">{value}</span>
  </li>
);

import { cn } from '../lib/utils';

export default Profile;
