<template>
  <div class="hello">
    <h3>Users</h3>
    <ul v-for="user in users()">
        <li>{{user.username}}</li>
    </ul>
    <input type="text" name="" id="" v-model="buttonText">
    <sui-button v-on:click="onClick()">{{buttonText}}</sui-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { User } from '../models/User';

@Component
export default class HelloWorld extends Vue {
  buttonText: string;

  constructor() {
      super();
      this.buttonText = 'Click me';
      this.$store.dispatch('getUsers');
  }

  users(): User[] {
      return this.$store.state.users;
  }

  onClick(): void{
    console.log('clicked');
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
