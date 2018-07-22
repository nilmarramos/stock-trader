<template>
	<div class="row">
		<app-stock v-for="stock in allStocks" :key="stock.id" :stock="stock"></app-stock>
	</div>
</template>

<script>
	import Stock from './Stock'
	import { mapGetters } from 'vuex'

export default {
  name: 'Stocks',
	components: {
  	 appStock: Stock
	},
	computed: mapGetters(['allStocks'])
}
</script>

<style scoped>

</style>
