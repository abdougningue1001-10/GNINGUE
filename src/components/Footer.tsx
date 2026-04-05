import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Trophy } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <img 
                src="https://i.imgur.com/PluBEZ3.png" //  image en ligne direct
                alt="EAGLE  FC" 
                className="h-10 w-auto group-hover:scale -79 transition-transform"
                referrerPolicy="no-referrer"
              />
              <span className="text-3xl font-black tracking-tighter">
                EAGLE <span className="text-red-600">FC</span>
              </span>
            </Link>
            <p className="text-gray-400 max-w-md leading-relaxed mb-8">
              EAGLE FC est plus qu'un club, c'est une famille. Fondé sur l'excellence et la loyauté, nous volons ensemble vers les sommets du football sénégalais et africain.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-red-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-red-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-red-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-red-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-red-600">Navigation</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Accueil</Link></li>
              <li><Link to="/effectif" className="text-gray-400 hover:text-white transition-colors">Effectif</Link></li>
              <li><Link to="/boutique" className="text-gray-400 hover:text-white transition-colors">Boutique</Link></li>
              <li><Link to="/matchs" className="text-gray-400 hover:text-white transition-colors">Matchs</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-red-600">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Bayakh, Sénégal</li>
              <li>contact@eaglefc.sn</li>
              <li>+221 754468837 </li>
              <li>aleatoire</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 EAGLE FC. Tous droits réservés.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
