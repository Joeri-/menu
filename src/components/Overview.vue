<template>
  <div>
    <div class="ui segment">
    <h3>Users</h3>
    <table class="ui table celled striped">
      <thead>
        <tr>
          <th>Users</th>
        </tr>
      </thead>
      <tbody>
        <!--<tr v-for="user in users()" :key="user.username">-->
        <tr v-for="user in users()">
            <td>{{user.username}}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="ui segment">
    <h3>Departments</h3>
    <table class="ui table celled striped">
      <thead>
        <tr>
          <th>Departments</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="dep in departments()" :key="dep.name">
            <td>{{dep.name}}</td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { User } from '../models/User';
import { Department } from '../models/Department';

@Component
export default class Overview extends Vue {
  buttonText: string;

  constructor() {
    super();
    this.buttonText = 'Click me';
    this.$store.dispatch('getUsers');
    this.$store.dispatch('getDepartments');
  }

  users(): User[] {
    return this.$store.state.users;
  }

  departments(): Department[] {
    return this.$store.state.departments;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
