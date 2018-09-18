import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Users from './components/Users.vue';
import UserDetail from './components/UserDetail.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/users',
      name: 'users',
      component: Users,
    },
    {
      path: '/users/:id',
      name: 'userDetail',
      component: UserDetail,
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
