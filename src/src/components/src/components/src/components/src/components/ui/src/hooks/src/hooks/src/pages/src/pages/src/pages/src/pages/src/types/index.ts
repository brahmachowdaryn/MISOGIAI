export interface EcoAction {
  id: string;
  name: string;
  icon: string;
  ecoPoints: number;
  description: string;
}

export interface LoggedAction {
  id: string;
  userId: string;
  actionId: string;
  date: string; // ISO date string
  notes?: string;
}

export interface User {
  id: string;
  email: string;
  totalPoints: number;
  streak: number;
  badges: Badge[];
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  image: string;
  earnedAt?: string;
}

export interface GlobalStats {
  totalUsers: number;
  totalActions: number;
  totalPoints: number;
  topActions: {
    actionId: string;
    count: number;
  }[];
}
