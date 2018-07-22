<template>
	<div class="t col-12 col-md-3">
		<div class="card ">
			<div class="card-header">
				{{stock.name}}
				<small>(Price: {{stock.price}})</small>
			</div>
			<div class="card-body">
				<div class="form-row">
					<div class="col d-flex justify-content-start">
						<input
								type="number"
								class="form-control"
								placeholder="Quantity"
								v-model="quantity"
								:class="{danger: insufficientFunds}"
						>
					</div>
					<div class="col d-flex justify-content-end">
						<button
								class="btn btn-success"
								@click="buyStock"
								:disabled="insufficientFunds || quantity <= 0"
						>{{ insufficientFunds ? 'Insufficient Funds' : 'Buy'}}
						</button>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Stock',
	props: ['stock'],
	data() {
  	return {
  		quantity: 0
  	}
	},
	computed: {
		...mapGetters(['funds']),
  	insufficientFunds() {
  		return this.quantity * this.stock.price > this.funds
	  }
	},
	methods: {
		...mapActions({
			buyStockOrder: 'buyStock'
		}),
  	buyStock() {
  		const order = {
  			stockId: this.stock.id,
			  stockPrice: this.stock.price,
			  quantity: this.quantity
		  }
		  this.buyStockOrder(order)
		  this.quantity = 0
	  }
	}
}
</script>

<style scoped>
	.danger {
		border: 1px solid red;
	}
	.t {
		padding: 10px;
	}
	.card-header {
		background: #eafae1;
		color: #11741e;
	}
</style>
