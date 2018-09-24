<template>
  <div class="ui segment">
    <h3>Recepten</h3>
    <table class="ui table celled selectable">
      <thead>
        <tr>
          <th>Omschrijving</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="recipe in recipes()"
            :key="recipe._id"
            v-on:click="routeToRecipe(recipe)">
            <td>{{recipe.description}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Recipe } from '../models/Recipe';

@Component
export default class Recipes extends Vue {
  constructor() {
    super();
    this.$store.dispatch('getRecipes');
  }

  recipes(): Recipe[] {
    return this.$store.state.recipes;
  }

  routeToRecipe(recipe: Recipe) {
    this.$router.push(`/recipes/${recipe._id}`);
  }

  deleteRecipe(recipe: Recipe) {
    this.$store.dispatch('deleteRecipe', recipe);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
