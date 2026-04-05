import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, Trophy } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Effectif', path: '/effectif' },
    { name: 'Boutique', path: '/boutique' },
    { name: 'Matchs', path: '/matchs' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-black/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src="/Gemini_Generated_Image_lwz2e4lwz2e4lwz2.png" 
            alt="EAGLE FC Logo" 
            className="h-12 w-auto group-hover:scale-110 transition-transform"
            referrerPolicy="no-referrer"
          />
          <span className="text-2xl font-black tracking-tighter text-white">
            EAGLE <span className="text-red-500">FC</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-bold uppercase tracking-widest transition-colors hover:text-red-600',
                location.pathname === link.path ? 'text-red-600' : 'text-white'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-white hover:text-red-600 transition-colors">
            <ShoppingCart className="w-5 h-5" />
          </button>
          <Link
            to="/login"
            className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full font-bold text-sm hover:bg-red-700 transition-colors"
          >
            <User className="w-4 h-4" />
            Connexion
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'text-xl font-black uppercase tracking-tighter',
                    location.pathname === link.path ? 'text-red-600' : 'text-white'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 bg-red-600 text-white py-4 rounded-xl font-bold"
                >
                  <User className="w-5 h-5" />
                  Connexion
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
