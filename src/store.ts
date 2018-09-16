import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { RootState } from '@/models/RootState';

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  state: {
      users: []
  },
  mutations: {
      setUsers: (state, users) => state.users = users,
  },
  actions: {
      getUsers: (context) => {
          axios
              .get('http://localhost:3000/users')
              .then(res => context.commit('setUsers', res.data));
      },
  },
});
