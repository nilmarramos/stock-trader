<template>
  <div class="container-fluid">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/Header'
  import { mapActions } from 'vuex'

  export default {
  	components: {
  		appHeader: Header
    },
    methods: mapActions(['initStocks']),
    created() {
      this.initStocks()
    }
  }
</script>

<style>
  @import "https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css";
  body {
    padding: 30px;
  }
</style>
