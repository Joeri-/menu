import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { RootState } from '@/models/RootState';
import { Product } from '@/models/Product';
import { Recipe } from '@/models/Recipe';
import { Shop } from '@/models/Shop';

Vue.use(Vuex);
export default new Vuex.Store<RootState>({
  state: {
    products: [],
    recipes: [],
    shops: [],
  },
  mutations: {
    // Products
    setProducts: (state: RootState, products: Product[]) => { state.products = products; },
    deleteProduct: (state: RootState, product: Product) => {
      state.products = state.products.filter(prod => prod._id !== product._id);
    },
    // Recipes
    setRecipes: (state: RootState, recipes: Recipe[]) => { state.recipes = recipes; },
    deleteRecipe: (state: RootState, rec: Recipe) => {
      state.recipes = state.recipes.filter(recipe => recipe._id !== rec._id);
    },
    // Shops
    setShops: (state: RootState, shops: Shop[]) => { state.shops = shops; },
    deleteShop: (state: RootState, shop: Shop) => {
      state.shops = state.shops.filter(shp => shp._id !== shop._id);
    },

  },
  actions: {
    // Products
    getProducts: (context) => {
      axios
        .get('http://localhost:3001/products')
        .then(res => context.commit('setProducts', res.data))
        .catch(err => console.log(err));
    },
    deleteProduct: (context, product: Product) => context.commit('deleteProduct', product),
    // Recipes
    getRecipes: (context) => {
      axios
        .get('http://localhost:3001/recipes')
        .then(res => context.commit('setRecipes', res.data))
        .catch(err => console.log(err));
    },
    deleteRecipe: (context, recipe: Recipe) => context.commit('deleteRecipe', recipe),
    // Shops
    getShops: (context) => {
      axios
        .get('http://localhost:3001/shops')
        .then(res => context.commit('setShops', res.data))
        .catch(err => console.log(err));
    },
    deleteShop: (context, shop: Shop) => context.commit('deleteShop', shop),
  },
});
