<template>
  <div class="ui segment">
    <h3>Products</h3>
    <table class="ui table celled selectable">
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products()"
            :key="product._id"
            v-on:click="routeToProduct(product)">
            <td>{{product.name}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Product } from '../models/Product';

@Component
export default class Products extends Vue {
  constructor() {
    super();
    this.$store.dispatch('getProducts');
  }

  products(): Product[] {
    return this.$store.state.products;
  }

  routeToProduct(product: Product) {
    this.$router.push(`/products/${product._id}`);
  }

  deleteProduct(product: Product) {
    this.$store.dispatch('deleteProduct', product);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
