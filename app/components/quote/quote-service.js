import QuotesModel from "../../models/quotes.js";

// @ts-ignore
const _quoteApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/quotes',
	timeout: 3000
});
//Private

let _state = {
	apiQuotes: []


}

let _subscribers = {
	apiQuotes: []


}

function _setState(propName, data) {
	_state[propName] = data
	_subscribers[propName].forEach(fn => fn())
}






//we need to add state and subscriber

//Public

export default class QuoteService {


	addSubscribers(propName, fn) {
		_subscribers[propName].push(fn)
	}
	get ApiQuotes() {
		console.log('getting from model ')
		return _state.apiQuotes
	}

	getAllQuotes() {

		_quoteApi.get()
			.then(res => {

				console.log(res.data.quote.body)

				let quoteData = new QuotesModel(res.data)



				_setState('apiQuotes', quoteData)
			})
		//.catch(err => console.error(err))
	}







}
