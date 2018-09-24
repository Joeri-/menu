<template>
  <div class="ui segment">
    <h3>Shops</h3>
    <table class="ui table celled selectable">
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="shop in shops()"
            :key="shop._id"
            v-on:click="routeToShop(shop)">
            <td>{{shop.name}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Shop } from '../models/Shop';

@Component
export default class Shops extends Vue {
  constructor() {
    super();
    this.$store.dispatch('getShops');
  }

  shops(): Shop[] {
    return this.$store.state.shops;
  }

  routeToShop(shop: Shop) {
    this.$router.push(`/shops/${shop._id}`);
  }

  deleteShop(shop: Shop) {
    this.$store.dispatch('deleteShop', shop);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
