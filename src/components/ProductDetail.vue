<template>
  <div class="ui segment">
    <h2>{{`Product '${product.name}'`}}</h2>
      <h4 class="ui left aligned">
        Accounts
      </h4>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { defaultProduct, Product } from '../models/Product';

@Component
export default class ProductDetail extends Vue {
  product: Product;
  constructor() {
    super();
    this.product = defaultProduct;
  }

  created() {
    this.product = this.$store.state.products
      .find((product: Product) => product._id === this.$route.params.id)
      || defaultProduct;
  }
}
</script>
<style>

</style>
