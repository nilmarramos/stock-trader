<template>
  <div class="container-fluid">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/Header'

  export default {
  	components: {
  		appHeader: Header
    }
  }
</script>

<style>
  @import "https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css";
  body {
    padding: 30px;
  }
</style>
