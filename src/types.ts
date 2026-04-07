export interface Player {
  id: string;
  name: string;
  position: string;
  number: number;
  image: string;
  isCaptain?: boolean;
  stats?: {
    goals: number;
    assists: number;
    matches: number;
    minutesPlayed?: number;
    yellowCards?: number;
    redCards?: number;
    cleanSheets?: number; // for goalkeepers
    saves?: number; // for goalkeepers
    tackles?: number; // for defenders
    passAccuracy?: number; // percentage
  };
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  category: string;
  tags?: string[];
}

export interface Match {
  id: string;
  opponent: string;
  date: string;
  time: string;
  isHome: boolean;
  score?: string;
  status: 'upcoming' | 'finished';
  scorers?: string[];
  lineup?: string[];
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: 'kit' | 'accessory';
}

export interface StandingEntry {
  rank: number;
  team: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
  isCurrentTeam?: boolean;
}

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  url: string;
  type: 'image' | 'video';
}

export interface Partner {
  name: string;
  logo: string;
}
