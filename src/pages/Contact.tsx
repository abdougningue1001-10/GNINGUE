import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-black min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          centered
          title="Contactez-nous"
          subtitle="Une question ? Un partenariat ? Envie de rejoindre l'EAGLE FC ? Notre équipe est à votre écoute."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div className="space-y-12">
            <div className="flex items-start gap-6">
              <div className="bg-red-600/10 p-4 rounded-2xl">
                <Mail className="w-8 h-8 text-red-600" />
              </div>
              <div>
                <h4 className="text-xl font-black text-white uppercase tracking-tighter mb-2">Email</h4>
                <p className="text-gray-400">MLG@eaglefc.sn</p>
                <p className="text-gray-400">recrutement@eaglefc.sn</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="bg-red-600/10 p-4 rounded-2xl">
                <Phone className="w-8 h-8 text-red-600" />
              </div>
              <div>
                <h4 className="text-xl font-black text-white uppercase tracking-tighter mb-2">Téléphone</h4>
                <p className="text-gray-400">+221 75 446 88 37</p>
                <p className="text-gray-400"></p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="bg-red-600/10 p-4 rounded-2xl">
                <MapPin className="w-8 h-8 text-red-600" />
              </div>
              <div>
                <h4 className="text-xl font-black text-white uppercase tracking-tighter mb-2">Adresse</h4>
                <p className="text-gray-400">Bayakh</p>
                <p className="text-gray-400">Bayakh, Sénégal</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[40px] p-8 md:p-12">
            <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-8 leading-none">Envoyez un message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-red-600 uppercase tracking-widest">Nom Complet</label>
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-red-600 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-red-600 uppercase tracking-widest">Email</label>
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-red-600 transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-red-600 uppercase tracking-widest">Sujet</label>
                <input
                  type="text"
                  placeholder="Le sujet de votre message"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-red-600 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-red-600 uppercase tracking-widest">Message</label>
                <textarea
                  rows={5}
                  placeholder="Votre message..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-red-600 transition-colors"
                />
              </div>
              <button className="w-full bg-red-600 text-white py-5 rounded-2xl font-black uppercase tracking-tighter flex items-center justify-center gap-3 hover:bg-red-700 transition-all shadow-2xl shadow-red-600/20">
                <Send className="w-5 h-5" />
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
