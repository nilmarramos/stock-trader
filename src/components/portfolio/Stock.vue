<template>
	<div class="t col-12 col-md-3">
		<div class="card ">
			<div class="card-header">
				{{stock.name}}
				<small>(Price: {{ stock.price }}) | Quantity: {{ stock.quantity }})</small>
			</div>
			<div class="card-body">
				<div class="form-row">
					<div class="col d-flex justify-content-start">
						<input
								type="number"
								class="form-control"
								placeholder="Quantity"
								v-model="quantity"
								:class="{danger: insufficientQnatity}"
						>
					</div>
					<div class="col d-flex justify-content-end">
						<button
								class="btn btn-success"
								@click="sellStock"
								:disabled="insufficientQnatity || quantity <= 0"
						>{{ insufficientQnatity ? 'Not enough' : 'Sell'}}
						</button>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'

	export default {
		name: 'Stock',
		props: ['stock'],
		data() {
			return {
				quantity: 0
			}
		},
		computed: {
			insufficientQnatity() {
				return this.quantity > this.stock.quantity
			}
		},
		methods: {
			...mapActions({
				placeSellOrder: 'sellStock'
			}),
			sellStock() {
				const order = {
					stockId: this.stock.id,
					stockPrice: this.stock.price,
					quantity: this.quantity
				}
				this.placeSellOrder(order)
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
