<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<router-link class="navbar-brand" to="/"><a>Stock Trader</a></router-link>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item">
					<router-link class="nav-link" to="/portfolio" activeClass="active"><a>Portfolio</a></router-link>
				</li>
				<li class="nav-item">
					<router-link class="nav-link" to="/stocks" activeClass="active"><a>Stocks</a></router-link>
				</li>
			</ul>
			<ul class="navbar-nav">
				<li class="nav-item">
					<a href="#" class="nav-link" @click="endDay">End Day</a>
				</li>
				<li :class="{show: isDropdownOpen}" class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">
						Save & Load
					</a>
					<div class="dropdown-menu" aria-labelledby="navbarDropdown">
						<a class="dropdown-item" href="#">Save Data</a>
						<a class="dropdown-item" href="#">Load Data</a>
					</div>
				</li>
			</ul>
			<strong>Funds: {{ funds | currency }}</strong>
		</div>
	</nav>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
export default {
   name: 'Header',
	data() {
		return {
			isDropdownOpen: true
		}
	},
	computed: {
		...mapGetters(['funds'])
	},
	methods: {
		...mapActions(['randomizeStocks']),
   	endDay() {
			this.randomizeStocks()
    }
	}
}
</script>

<style scoped>
	nav {
		margin-bottom: 30px ;
	}
	strong {
		margin-left: 10px;
	}
</style>
