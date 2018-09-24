<template>
  <div class="ui segment">
    <h2>{{`Shop '${shop.name}'`}}</h2>
      <h4 class="ui left aligned">
        Accounts
      </h4>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { defaultShop, Shop } from '../models/Shop';

@Component
export default class ShopDetail extends Vue {
  shop: Shop;
  constructor() {
    super();
    this.shop = defaultShop;
  }

  created() {
    this.shop = this.$store.state.shops
      .find((shop: Shop) => shop._id === this.$route.params.id)
      || defaultShop;
  }
}
</script>
<style>

</style>
