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
  };
}

export interface Match {
  id: string;
  opponent: string;
  date: string;
  time: string;
  isHome: boolean;
  score?: string;
  status: 'upcoming' | 'finished';
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: 'kit' | 'accessory';
}
