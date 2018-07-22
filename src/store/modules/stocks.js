import stocks from '../../data/stocks'

const state = {
	stocks: []
}

const getters = {
	 allStocks: state => state.stocks
}

const actions = {
	buyStock ({ commit }, order) {
		commit('buyStock', order)
	},
	 initStocks ({ commit }) {
		commit('setStocks', stocks)
	 },
	randomizeStocks ({ commit })  {
		commit('rndStocks')
	}
}

const mutations = {
	setStocks(state, stocks) {
		state.stocks = stocks
	},
	rndStocks (state) {
		state.stocks.forEach(stock => {
			stock.price = Math.round(stock.price * (1 + Math.random() - 0.5))
		})
	}
}


export default {
	state,
	getters,
	actions,
	mutations
}
