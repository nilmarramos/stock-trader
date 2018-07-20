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
						>
					</div>
					<div class="col d-flex justify-content-end">
						<button
								class="btn btn-success"
								@click="buyStock"
								:disabled="quantity <= 0"
						>Buy
						</button>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Stock',
	props: ['stock'],
	data() {
  	return {
  		quantity: 0
  	}
	},
	methods: {
  	buyStock() {
  		const order = {
  			stockId: this.stock.id,
			  stockPrice: this.stock.price,
			  quantity: this.quantity
		  }
		  console.log(order)
		  this.quantity = 0
	  }
	}
}
</script>

<style scoped>
	.t {
		padding: 10px;
	}
	.card-header {
		background: #eafae1;
		color: #11741e;
	}
</style>
