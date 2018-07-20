<template>
	<div class="row">
		<app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
	</div>
</template>

<script>
	import Stock from './Stock'

export default {
  name: 'Stocks',
	components: {
  	 appStock: Stock
	},
	data() {
  	return {
  		stocks: [
			  { id: 1, name: 'BMW', price: 110 },
			  { id: 2, name: 'Google', price: 200 },
			  { id: 3, name: 'Apple', price: 110 },
			  { id: 4, name: 'Twitter', price: 8 },
			  { id: 5, name: 'Gulo Mania', price: 900 },
			  { id: 6, name: 'Slack', price: 118 },
		  ]
	  }
	}
}
</script>

<style scoped>

</style>
