import { Player, Match, Product, StandingEntry, StaffMember, NewsArticle, GalleryItem, Partner, BlogPost } from './types';

export const PLAYERS: Player[] = [
  {
    id: '1',
    name: 'El Hadji Abdou Gningue',
    position: 'Milieu offensif / Ailier',
    number: 10,
    image: 'https://i.imgur.com/N7CtZw6.png',
    isCaptain: true,
    stats: {
      goals: 8,
      assists: 15,
      matches: 24,
      minutesPlayed: 2160,
      yellowCards: 2,
      redCards: 0,
      passAccuracy: 88,
    },
  },
  {
    id: '2',
    name: 'Lamine Gueye',
    position: 'Défenseur Central',
    number: 12,
    image: 'https://i.imgur.com/9NCLiCF.png',
    stats: {
      goals: 3,
      assists: 8,
      matches: 22,
      minutesPlayed: 1980,
      yellowCards: 5,
      redCards: 1,
      tackles: 45,
      passAccuracy: 82,
    },
  },
  {
    id: '3',
    name: 'El H. Amadou Thioye',
    position: 'Milieu Relayeur',
    number: 21,
    image: 'https://i.imgur.com/fQjmNo8.png',
    stats: {
      goals: 2,
      assists: 15,
      matches: 25,
      minutesPlayed: 2250,
      yellowCards: 3,
      redCards: 0,
      passAccuracy: 91,
    },
  },
  {
    id: '4',
    name: 'Papi Badji',
    position: 'Gardien de but',
    number: 1,
    image: 'https://cdn.phototourl.com/free/2026-04-07-c5dcf4e3-201e-4b09-94e6-192845720be6.png',
    stats: {
      goals: 0,
      assists: 0,
      matches: 24,
      minutesPlayed: 2160,
      cleanSheets: 12,
      saves: 85,
      yellowCards: 1,
      redCards: 0,
    },
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'L\'ascension fulgurante de l\'académie EAGLE FC',
    author: 'Direction Technique',
    date: '2026-04-01',
    category: 'Formation',
    excerpt: 'Comment notre centre de formation est devenu une référence nationale en moins de 5 ans.',
    content: `
      L'académie EAGLE FC n'est pas seulement un club de football, c'est une institution dédiée à l'excellence. 
      Depuis notre création, nous avons mis l'accent sur une méthodologie de travail rigoureuse, alliant discipline tactique et liberté créative.
      
      Nos infrastructures de pointe permettent à nos jeunes talents de s'épanouir dans un environnement professionnel. 
      Chaque joueur bénéficie d'un suivi individualisé, tant sur le plan sportif que scolaire.
      
      "Nous ne formons pas seulement des footballeurs, nous formons des hommes," déclare notre Directeur Technique. 
      Cette philosophie porte ses fruits, avec de nombreux joueurs intégrant désormais les sélections nationales de jeunes.
    `,
    image: 'https://imgur.com/MB1vWK6.png',
    tags: ['Académie', 'Formation', 'Excellence'],
  },
  {
    id: '2',
    title: 'Analyse Tactique : Le système en 4-3-3 des Aigles',
    author: 'Staff Technique',
    date: '2026-03-28',
    category: 'Tactique',
    excerpt: 'Décryptage du style de jeu offensif qui fait trembler nos adversaires cette saison.',
    content: `
      Le succès de l'EAGLE FC cette saison repose sur une identité de jeu claire : un 4-3-3 porté vers l'avant. 
      L'animation offensive s'appuie sur des ailiers percutants et un milieu de terrain capable de dicter le tempo.
      
      Le pressing haut est la clé de notre récupération. Dès la perte du ballon, le bloc équipe se projette pour étouffer l'adversaire. 
      Cette intensité demande une condition physique irréprochable, fruit du travail acharné de notre préparateur physique.
      
      La polyvalence de nos milieux permet des permutations constantes, rendant notre jeu imprévisible. 
      L'analyse vidéo joue également un rôle crucial dans la préparation de chaque rencontre.
    `,
    image: 'https://cdn.phototourl.com/free/2026-04-07-4ebd19ef-c4eb-4da1-99a8-5e938202b25c.png',
    tags: ['Tactique', 'Analyse', 'Coaching'],
  },
];

export const STAFF: StaffMember[] = [
  {
    id: '1',
    name: 'Moussa Ndiaye',
    role: 'Entraîneur Principal',
    image: 'https://picsum.photos/seed/coach1/400/500',
  },
  {
    id: '2',
    name: 'Abdoulaye Diallo',
    role: 'Directeur Technique',
    image: 'https://picsum.photos/seed/coach2/400/500',
  },
  {
    id: '3',
    name: 'cyrile',
    role: 'Préparateur Physique',
    image: 'https://cdn.phototourl.com/free/2026-04-07-7d80cd69-f1bf-46ed-9d08-f6fa51b62b62.png',
  },
];

export const STANDINGS: StandingEntry[] = [
  { rank: 1, team: 'EAGLE FC', played: 12, won: 9, drawn: 2, lost: 1, goalsFor: 28, goalsAgainst: 10, points: 29, isCurrentTeam: true },
  { rank: 2, team: 'Dakar Stars', played: 12, won: 8, drawn: 3, lost: 1, goalsFor: 24, goalsAgainst: 12, points: 27 },
  { rank: 3, team: 'Saint-Louis FC', played: 12, won: 7, drawn: 2, lost: 3, goalsFor: 20, goalsAgainst: 15, points: 23 },
  { rank: 4, team: 'Lions de la Teranga', played: 12, won: 6, drawn: 4, lost: 2, goalsFor: 18, goalsAgainst: 14, points: 22 },
  { rank: 5, team: 'KLM', played: 12, won: 5, drawn: 3, lost: 4, goalsFor: 15, goalsAgainst: 16, points: 18 },
];

export const NEWS: NewsArticle[] = [
  {
    id: '1',
    title: 'Victoire historique contre KLM',
    excerpt: 'Une performance magistrale de notre capitaine a permis de décrocher les 3 points...',
    date: '2026-03-26',
    image: 'https://cdn.phototourl.com/free/2026-04-07-8c31c1e4-c348-4170-9b3e-128c94254872.png',
    category: 'Match',
  },
  {
    id: '2',
    title: 'Nouveau partenariat avec MLG Loyauté',
    excerpt: 'Nous sommes fiers d\'annoncer notre nouveau sponsor principal pour la saison prochaine...',
    date: '2026-03-20',
    image: 'https://imgur.com/e1psXi1.png',
    category: 'Club',
  },
  {
    id: '3',
    title: 'Inauguration du nouveau centre d\'entraînement',
    excerpt: 'Un pas de plus vers l\'excellence avec des infrastructures de classe mondiale...',
    date: '2026-03-15',
    image: 'https://cdn.phototourl.com/free/2026-04-07-d0b1ebfc-37f5-4d82-9612-cfaec4dec17a.png',
    category: 'Infrastructure',
  },
];

export const GALLERY: GalleryItem[] = [
  { id: '1', title: 'Entraînement Matinal', url: 'https://cdn.phototourl.com/free/2026-04-07-1818adbd-b172-415a-916d-79ca9da13421.jpg', type: 'image' },
  { id: '2', title: 'Célébration de But', url: 'https://cdn.phototourl.com/free/2026-04-07-b9ad9fc2-d2c3-47c6-92a4-dc1ee17a736c.png', type: 'image' },
  { id: '3', title: 'Teaser Saison 2026', url: 'https://imgur.com/id4lsEk.png', type: 'image' },
  { id: '4', title: 'Supporters en Folie', url: 'https://cdn.phototourl.com/free/2026-04-07-411a5ce6-bbc5-4901-8507-37cef5210657.png', type: 'image' },
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
    opponent: 'equipe thier',
    date: '2026-04-01',
    time: '18:30',
    isHome: false,
    score: '2 - 1',
    status: 'finished',
    scorers: ['Abdou Gningue (2)'],
    lineup: ['Gueye', 'Thioye', 'Gningue', 'Diallo', 'Sow', 'Ndiaye', 'Sarr', 'Mbow', 'Diop', 'Fall', 'Kane'],
  },
  {
    id: '3',
    opponent: 'Saint-Louis FC',
    date: '2026-03-25',
    time: '16:00',
    isHome: true,
    score: '3 - 0',
    status: 'finished',
    scorers: ['Abdou Gningue', 'Lamine Gueye', 'Amadou Thioye'],
    lineup: ['Gueye', 'Thioye', 'Gningue', 'Diallo', 'Sow', 'Ndiaye', 'Sarr', 'Mbow', 'Diop', 'Fall', 'Kane'],
  },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Maillot Domicile 2026',
    price: 10000,
    image: 'https://i.imgur.com/ntAqNJO.jpeg', // image en ligne directe
    description: 'Le maillot officiel domicile rouge et noir avec le logo "FLY HIGH" et le brassard de capitaine.',
    category: 'kit',
  },
  {
    id: '2',
    name: 'Maillot Extérieur 2026',
    price: 10000,
    image: 'https://i.imgur.com/9RHXFet.png', // image en ligne directe
    description: 'Le maillot officiel extérieur blanc et bleu avec les logos MLG Loyauté et EAGLE FC.',
    category: 'kit',
  },
];

export const PARTNERS = [
  { name: 'MLG Loyauté', logo: 'https://imgur.com/undefined.png' },
  { name: 'EAT', logo: 'https://picsum.photos/seed/eat/200/100' },
];
