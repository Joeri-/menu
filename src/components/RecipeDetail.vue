<template>
  <div class="ui segment">
    <h2>{{`Recipe '${recipe.name}'`}}</h2>
      <h4 class="ui left aligned">
        Accounts
      </h4>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { defaultRecipe, Recipe } from '../models/Recipe';

@Component
export default class RecipeDetail extends Vue {
  recipe: Recipe;
  constructor() {
    super();
    this.recipe = defaultRecipe;
  }

  created() {
    this.recipe = this.$store.state.recipes
      .find((recipe: Recipe) => recipe._id === this.$route.params.id)
      || defaultRecipe;
  }
}
</script>
<style>

</style>
