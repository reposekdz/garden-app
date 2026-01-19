
export type Language = 'en' | 'fr' | 'rw' | 'sw';

export enum UserRole {
  STUDENT = 'STUDENT',
  PARENT = 'PARENT',
  DOS = 'DIRECTOR_OF_STUDY',
  DOD = 'DIRECTOR_OF_DISCIPLINE',
  HEAD_MASTER = 'HEAD_MASTER',
  TEACHER = 'TEACHER',
  ACCOUNTANT = 'ACCOUNTANT',
  STOCK_MANAGER = 'STOCK_MANAGER',
  ADMIN = 'ADMIN'
}

export interface TradeLevel {
  id: string;
  name: string;
  description: string;
}

export interface TradeTool {
  name: string;
  description: string;
  icon?: string;
}

export interface Trade {
  id: string;
  name: string;
  code: string;
  description: string;
  image: string;
  levels: TradeLevel[];
  tools: TradeTool[];
  gallery: string[];
  coreModules: string[];
  careerProspects: string[];
}

export interface SearchResult {
  id: string;
  title: string;
  type: 'Course' | 'Student' | 'Staff' | 'Event' | 'Trade';
  link: string;
}
