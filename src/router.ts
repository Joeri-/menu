import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Departments from './components/Departments.vue';
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
        isAuthenticated: false
      }
    },
    {
      path: '/departments',
      name: 'departments',
      component: Departments,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
    if (to.meta.isAuthenticated) {
        next('/');
    }
    else {
        next();
    }
});

export default router;
