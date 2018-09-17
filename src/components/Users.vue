<template>
  <div class="ui segment">
    <h3>Users</h3>
        <a href="#/departments">Deps</a>
    <table class="ui table celled selectable">
      <thead>
        <tr>
          <th>Users</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users()"
            :key="user.username"
            v-on:click="deleteUser(user)">
            <td>{{user.username}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { User } from '../models/User';

@Component
export default class Users extends Vue {
  buttonText: string;

  constructor() {
    super();
    this.buttonText = 'Click me';
    this.$store.dispatch('getUsers');
  }

  users(): User[] {
    return this.$store.state.users;
  }

  deleteUser(user: User) {
      this.$store.dispatch('deleteUser', user);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
