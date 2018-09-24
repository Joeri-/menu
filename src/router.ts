import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Products from './components/Products.vue';
import ProductDetail from './components/ProductDetail.vue';
import Recipes from './components/Recipes.vue';
import RecipeDetail from './components/RecipeDetail.vue';
import Shops from './components/Shops.vue';
import ShopDetail from './components/ShopDetail.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/products',
      name: 'products',
      component: Products,
    },
    {
      path: '/products/:id',
      name: 'productDetail',
      component: ProductDetail,
      meta: {
        isAuthenticated: false,
      },
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: Recipes,
    },
    {
      path: '/recipes/:id',
      name: 'recipeDetail',
      component: RecipeDetail,
      meta: {
        isAuthenticated: false,
      }
    },
    {
      path: '/shops',
      name: 'shops',
      component: Shops,
    },
    {
      path: '/shops/:id',
      name: 'shopDetail',
      component: ShopDetail,
      meta: {
        isAuthenticated: false,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.isAuthenticated) {
    next('/');
  } else {
    next();
  }
});

export default router;
