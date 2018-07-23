import axios from 'axios'

export const loadData =({ commit }) => {
	axios.get('https://vue-stock-trader-569b8.firebaseio.com/data.json')
		.then(resp => resp.data)
		.then(data => {
			if (data) {
				const stocks = data.stocks
				const funds = data.funds
				const stockPortfolio = data.stockPortfolio

				const portfolio = {
					stockPortfolio,
					funds
				}
				commit('setStocks', stocks)
				commit('setPortfolio', portfolio)
			}
		})
}