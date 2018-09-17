import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { RootState } from '@/models/RootState';
import { User } from '@/models/User';
import { Department } from '@/models/Department';

Vue.use(Vuex);
export default new Vuex.Store<RootState>({
  state: {
    users: [],
    departments: [],
  },
  mutations: {
    setUsers: (state: RootState, users: User[]) => state.users = users,
    setDepartments: (state: RootState, deps: Department[]) => state.departments = deps,
    deleteDepartment: (state: RootState, dep: Department) => state.departments = state.departments.filter(department => department.name !== dep.name),
    deleteUser: (state: RootState, user: User) => state.users = state.users.filter(usr => usr.username !== user.username),
  },
  actions: {
    getUsers: (context) => {
      axios
        .get('http://localhost:3000/users')
        .then(res => context.commit('setUsers', res.data));
    },
    deleteUser: (context, user: User) => {
      context.commit('deleteUser', user);
    },
    getDepartments: (context) => {
      axios
        .get('http://localhost:3000/departments')
        .then(res => context.commit('setDepartments', res.data));
    },
    deleteDepartment: (context, department: Department) => {
      context.commit('deleteDepartment', department);
    },
  },
});
