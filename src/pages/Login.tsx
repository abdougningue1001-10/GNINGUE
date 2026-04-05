import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Mail, Lock, ArrowRight, UserPlus, LogIn } from 'lucide-react';
import { motion } from 'motion/react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 pt-32 pb-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-red-600/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="text-center mb-12">
          <Link to="/" className="inline-flex items-center gap-2 mb-8">
            <div className="bg-red-600 p-3 rounded-2xl shadow-2xl shadow-red-600/20">
              <Trophy className="text-white w-8 h-8" />
            </div>
            <span className="text-4xl font-black tracking-tighter text-white">
              EAGLE <span className="text-red-600">FC</span>
            </span>
          </Link>
          <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">
            {isLogin ? 'Bon retour parmi nous' : 'Rejoins la famille'}
          </h2>
          <p className="text-gray-400 font-medium">
            {isLogin ? 'Connectez-vous pour accéder à votre espace supporter.' : 'Créez votre compte pour ne rien rater de l\'actualité du club.'}
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 md:p-12 shadow-2xl">
          <form className="space-y-6">
            {!isLogin && (
              <div className="space-y-2">
                <label className="text-xs font-black text-red-600 uppercase tracking-widest">Nom Complet</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-6 py-4 text-white focus:outline-none focus:border-red-600 transition-colors"
                  />
                  <UserPlus className="w-5 h-5 text-white/20 absolute left-4 top-1/2 -translate-y-1/2" />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label className="text-xs font-black text-red-600 uppercase tracking-widest">Email ou Téléphone</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="votre@email.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-6 py-4 text-white focus:outline-none focus:border-red-600 transition-colors"
                />
                <Mail className="w-5 h-5 text-white/20 absolute left-4 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-black text-red-600 uppercase tracking-widest">Mot de passe</label>
                {isLogin && (
                  <button type="button" className="text-[10px] font-black text-white/40 uppercase tracking-widest hover:text-white transition-colors">
                    Oublié ?
                  </button>
                )}
              </div>
              <div className="relative">
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-6 py-4 text-white focus:outline-none focus:border-red-600 transition-colors"
                />
                <Lock className="w-5 h-5 text-white/20 absolute left-4 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <button className="w-full bg-red-600 text-white py-5 rounded-2xl font-black uppercase tracking-tighter flex items-center justify-center gap-3 hover:bg-red-700 transition-all shadow-2xl shadow-red-600/20 group">
              {isLogin ? <LogIn className="w-5 h-5" /> : <UserPlus className="w-5 h-5" />}
              {isLogin ? 'Se Connecter' : 'Créer un Compte'}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-white/5 text-center">
            <p className="text-gray-400 text-sm font-medium mb-4">
              {isLogin ? "Vous n'avez pas encore de compte ?" : "Vous avez déjà un compte ?"}
            </p>
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-white font-black uppercase tracking-widest text-xs hover:text-red-600 transition-colors"
            >
              {isLogin ? 'Créer un compte maintenant' : 'Se connecter à mon compte'}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
