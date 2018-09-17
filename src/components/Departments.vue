<template>
  <div class="ui segment">
    <h3>Departments</h3>
    <table class="ui table celled selectable">
      <thead>
        <tr>
          <th>Departments</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="dep in departments()"
            :key="dep.name"
            v-on:click="deleteDep(dep)">
            <td>{{dep.name}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Department } from '../models/Department';

@Component
export default class Departments extends Vue {
  buttonText: string;

  constructor() {
    super();
    this.buttonText = 'Click me';
    this.$store.dispatch('getDepartments');
  }

  deleteDep(department: Department) {
    this.$store.dispatch('deleteDepartment', department);
  }

  departments(): Department[] {
    return this.$store.state.departments;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
