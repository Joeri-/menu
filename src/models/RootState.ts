import { Product } from '@/models/Product';
import { Recipe } from '@/models/Recipe';
import { Shop } from '@/models/Shop';

export interface RootState {
  products: Product[];
  recipes: Recipe[];
  shops: Shop[];
}