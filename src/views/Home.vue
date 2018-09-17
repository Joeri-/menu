<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Overview />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Overview from '@/components/Overview.vue'; // @ is an alias to /src

@Component({
  components: {
  Overview,
  },
  })
export default class Home extends Vue {}
</script>
