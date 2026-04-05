import { Player, Match, Product } from './types';

export const PLAYERS: Player[] = [
  {
    id: '1',
    name: 'El Hadji Abdou Gningue',
    position: 'Milieu offensif / Ailier',
    number: 10,
    image: '/Gemini_Generated_Image_t2y11kt2y11kt2y1.png', //  image en ligne directe
    isCaptain: true,
    stats: {
      goals: 8,
      assists: 15,
      matches: 24,
    },
  },
  {
    id: '2',
    name: 'Lamine Gueye',
    position: 'defenseur centrale',
    number: 4,
    image: '/Gemini_Generated_Image_rf0tnorf0tnorf0t.png',
    stats: {
      goals: 3,
      assists: 8,
      matches: 22,
    },
  },
  {
    id: '3',
    name: 'El H. Amadou Thioye ',
    position: 'Défenseur Central',
    number: 21,
    image: '/Gemini_Generated_Image_g5ws7og5ws7og5ws.png',
    stats: {
      goals: 2,
      assists: 12,
      matches: 25,
    },
  },
  {
    id: '4',
    name: 'LES AIGLES',
    HEURE: '9h',
    number: 100,
    image: '/WhatsApp Image 2026-04-05 at 10.57.27.jpeg',
    stats: {
    
    },
  },
];

export const MATCHES: Match[] = [
  {
    id: '1',
    opponent: 'Lions de la Teranga',
    date: '2026-04-10',
    time: '20:00',
    isHome: true,
    status: 'upcoming',
  },
  {
    id: '2',
    opponent: 'Dakar Stars',
    date: '2026-04-01',
    time: '18:30',
    isHome: false,
    score: '2 - 1',
    status: 'finished',
  },
  {
    id: '3',
    opponent: 'Saint-Louis FC',
    date: '2026-03-25',
    time: '16:00',
    isHome: true,
    score: '3 - 0',
    status: 'finished',
  },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Maillot Domicile 2026',
    price: 10000,
    image: 'Gemini_Generated_Image_27ajcm27ajcm27aj.png', // image en ligne directe
    description: 'Le maillot officiel domicile rouge et noir avec le logo "FLY HIGH" et le brassard de capitaine.',
    category: 'kit',
  },
  {
    id: '2',
    name: 'Maillot Extérieur 2026',
    price: 1000,
    image: 'Gemini_Generated_Image_ltwlezltwlezltwl.png', // image en ligne directe
    description: 'Le maillot officiel extérieur blanc et bleu avec les logos MLG Loyauté et EAGLE FC.',
    category: 'kit',
  },
];

export const PARTNERS = [
  { name: 'MLG Loyauté', logo: 'https://picsum.photos/seed/mlg/200/100' },
  { name: 'EAT', logo: 'https://picsum.photos/seed/eat/200/100' },
];
