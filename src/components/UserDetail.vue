<template>
    <div class="ui segment">
    <div class="ui form">
        <h2>{{`User ${user.id}`}}</h2>
        <form>
            <div class="ui inline field">
                <label>Username</label>
                <input type="text" v-model="user.username">
            </div>
            <div class="ui inline field">
                <label>password</label>
                <input type="password" v-model="user.password">
            </div>
        </form>
    </div></div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { defaultUser, User } from '../models/User';

@Component
export default class UserDetail extends Vue {
    user: User;

    created() {
        this.user = this.$store.state.users.find(user => user.id === +this.$route.params.id) || defaultUser;
    }
}
</script>
<style></style>