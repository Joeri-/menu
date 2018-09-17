import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { RootState } from '@/models/RootState';

Vue.use(Vuex);
export default new Vuex.Store<RootState>({
  state: {
    users: [],
    departments: [],
  },
  mutations: {
    setUsers: (state, users) => state.users = users,
    setDepartments: (state, deps) => state.departments = deps,
  },
  actions: {
    getUsers: (context) => {
      axios
        .get('http://localhost:3000/users')
        .then(res => context.commit('setUsers', res.data));
    },
    getDepartments: (context) => {
      axios
        .get('http://localhost:3000/departments')
        .then(res => context.commit('setDepartments', res.data));
    },
  },
});
