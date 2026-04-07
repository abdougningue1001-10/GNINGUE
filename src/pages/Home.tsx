import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play, Trophy, Users, ShoppingBag, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import PlayerCard from '../components/PlayerCard';
import MatchCard from '../components/MatchCard';
import ProductCard from '../components/ProductCard';
import { PLAYERS, MATCHES, PRODUCTS, PARTNERS, NEWS, STANDINGS, GALLERY } from '../constants';
import NewsSlider from '../components/NewsSlider';
import StandingsTable from '../components/StandingsTable';
import GalleryGrid from '../components/GalleryGrid';
import SocialFeed from '../components/SocialFeed';
import BlogCard from '../components/BlogCard';
import { BLOG_POSTS } from '../constants';

const Home = () => {
  const captain = PLAYERS.find(p => p.isCaptain);

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.imgur.com/N7CtZw6.png" // Remplacez par votre image téléchargée
            alt="EAGLE FC Captain"
            className="w-full h-full object-cover opacity-60 scale-105 animate-pulse-slow"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="inline-block bg-red-600 text-white px-6 py-2 rounded-full font-black uppercase tracking-widest text-sm mb-6 shadow-2xl shadow-red-600/20">
              Saison 2026 / 2027
            </span>
            <img 
              src="https://i.imgur.com/PluBEZ3.png" 
              alt="EAGLE FC" 
              className="h-32 w-auto mx-auto mb-8 animate-float"
              referrerPolicy="no-referrer"
            />
            <h1 className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter leading-none mb-6">
              EAGLE <span className="text-red-600">FC</span>
            </h1>
            <p className="text-2xl md:text-4xl font-black text-white/80 uppercase tracking-tighter italic mb-8">
              L'envol vers la victoire
            </p>
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="h-px w-12 bg-white/20" />
              <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">
                Capitaine : <span className="text-white">{captain?.name}</span>
              </p>
              <div className="h-px w-12 bg-white/20" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <Link
              to="/effectif"
              className="bg-red-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-tighter flex items-center gap-3 hover:bg-red-700 transition-all hover:scale-105 group shadow-2xl shadow-red-600/20"
            >
              Découvrir l'effectif
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="bg-white/5 backdrop-blur-md text-white border border-white/10 px-10 py-5 rounded-2xl font-black uppercase tracking-tighter flex items-center gap-3 hover:bg-white/10 transition-all group">
              <Play className="w-5 h-5 fill-white" />
              Voir le teaser
            </button>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
            <div className="w-1 h-2 bg-red-600 rounded-full" />
          </div>
        </div>
      </section>

      {/* News Slider Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <NewsSlider articles={NEWS} />
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-black border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 hover:opacity-100 transition-opacity">
            {PARTNERS.map((partner) => (
              <div key={partner.name} className="flex items-center gap-4 grayscale hover:grayscale-0 transition-all cursor-pointer">
                <img src={partner.logo} alt={partner.name} className="h-12 w-auto" referrerPolicy="no-referrer" />
                <span className="text-xl font-black text-white uppercase tracking-tighter">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Squad Preview */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <SectionTitle
              title="Notre Effectif"
              subtitle="Une équipe de guerriers menée par notre capitaine emblématique. Découvrez les visages qui portent haut nos couleurs."
              className="mb-0"
            />
            <Link
              to="/effectif"
              className="text-red-600 font-black uppercase tracking-widest text-sm flex items-center gap-2 hover:gap-4 transition-all"
            >
              Voir tout l'effectif <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PLAYERS.slice(0, 4).map((player) => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-red-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Buts Marqués', value: '54', icon: Trophy },
              { label: 'Matchs Joués', value: '24', icon: Calendar },
              { label: 'Supporters', value: '12K', icon: Users },
              { label: 'Trophées', value: '08', icon: Trophy },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="inline-flex p-4 bg-white/10 rounded-2xl mb-6">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-2">
                  {stat.value}
                </div>
                <div className="text-white/60 font-black uppercase tracking-widest text-xs">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Matches & Standings Section */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <SectionTitle
                title="Derniers Matchs"
                subtitle="Suivez le parcours de l'EAGLE FC à travers ses performances récentes et les chocs à venir."
              />
              <div className="space-y-8">
                {MATCHES.map((match) => (
                  <MatchCard key={match.id} match={match} />
                ))}
              </div>
            </div>
            <div>
              <SectionTitle
                title="Classement"
                subtitle="Saison 2026/27"
              />
              <StandingsTable standings={STANDINGS} compact />
              <Link
                to="/matchs"
                className="mt-8 inline-flex items-center gap-2 text-red-600 font-black uppercase tracking-widest text-xs hover:gap-4 transition-all"
              >
                Voir le classement complet <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-red-600/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <SectionTitle
              title="Boutique Officielle"
              subtitle="Portez fièrement nos couleurs. Découvrez les nouveaux maillots de la saison 2026."
              className="mb-0"
            />
            <Link
              to="/boutique"
              className="text-red-600 font-black uppercase tracking-widest text-sm flex items-center gap-2 hover:gap-4 transition-all"
            >
              Accéder à la boutique <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 bg-black border-t border-white/5">
        <div className="container mx-auto px-4">
          <SectionTitle
            centered
            title="Galerie & Médias"
            subtitle="Immersion totale dans la vie de l'académie EAGLE FC. Revivez nos plus beaux moments."
          />
          <GalleryGrid items={GALLERY} />
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-32 bg-black border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <SectionTitle
              title="Derniers Articles"
              subtitle="Analyses, interviews et coulisses. Plongez dans l'univers de l'EAGLE FC."
              className="mb-0"
            />
            <Link
              to="/blog"
              className="text-red-600 font-black uppercase tracking-widest text-sm flex items-center gap-2 hover:gap-4 transition-all"
            >
              Voir tout le blog <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Social Feed Section */}
      <section className="py-32 bg-black border-t border-white/5">
        <div className="container mx-auto px-4">
          <SectionTitle
            centered
            title="Suivez les Aigles"
            subtitle="Restez connectés avec l'EAGLE FC sur tous nos réseaux sociaux pour ne rien manquer de l'actualité."
          />
          <SocialFeed />
        </div>
      </section>

      {/* Recruitment Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-red-600 to-red-900 rounded-[40px] p-12 md:p-24 relative overflow-hidden shadow-2xl shadow-red-600/20">
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
              <Trophy className="w-full h-full -rotate-12 translate-x-1/4 translate-y-1/4" />
            </div>
            
            <div className="max-w-3xl relative z-10">
              <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-8">
                Rejoins l'aventure <br /> EAGLE FC
              </h2>
              <p className="text-white/80 text-xl mb-12 leading-relaxed font-medium">
                Tu as du talent ? Tu es passionné ? Notre centre de formation et notre équipe première sont toujours à la recherche de nouveaux talents.
              </p>
              
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Nom complet"
                  className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-colors"
                />
                <select className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-white transition-colors appearance-none">
                  <option className="bg-red-900">Poste souhaité</option>
                  <option className="bg-red-900">Gardien</option>
                  <option className="bg-red-900">Défenseur</option>
                  <option className="bg-red-900">Milieu</option>
                  <option className="bg-red-900">Attaquant</option>
                </select>
                <button className="bg-white text-red-600 py-4 rounded-2xl font-black uppercase tracking-tighter hover:bg-black hover:text-white transition-all shadow-xl">
                  Postuler maintenant
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
