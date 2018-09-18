<template>
    <div class="ui segment">
        <h2>{{`User ${user.username}`}}</h2>
        <h4 class="ui left aligned">
            Accounts
        </h4>
        <table class="ui table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>account</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(account, index) in user.accounts"
                    v-bind:key="account">
                    <td>{{index}}</td>
                    <td>{{account}}</td>
                </tr>
            </tbody>
        </table>
        <h4 class="ui left aligned">
            Blacklist
        </h4>
        <table class="ui table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>ISIN</th>
                    <th>Date From</th>
                    <th>Date To</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(stock, index) in user.blacklist"
                    v-bind:key="stock.ISIN">
                    <td>{{index}}</td>
                    <td>{{stock.ISIN}}</td>
                    <td>{{stock.dateFrom}}</td>
                    <td>{{stock.dateTo}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { defaultUser, User } from '../models/User';

@Component
export default class UserDetail extends Vue {
  user: User;
  constructor() {
    super();
    this.user = defaultUser;
  }

  created() {
    this.user = this.$store.state.users.find((user: User) => user.id === +this.$route.params.id)
        || defaultUser;
  }
}
</script>
<style>
</style>
