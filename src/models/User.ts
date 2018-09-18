import { Stock } from '@/models/Stock';

export interface User {
  id: number;
  username: string;
  accounts: string[];
  blacklist: Stock[];
}

export const defaultUser = <User>{
  id: 0,
  username: 'defaultUser',
  accounts: [],
  blacklist: [],
};
