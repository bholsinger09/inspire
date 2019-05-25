import Weather from "../../models/weather.js";
//private

// @ts-ignore
const weatherApi = axios.create({
	baseURL: "//bcw-sandbox.herokuapp.com/api/weather",
	timeout: 3000
});

let _state = {
	weather: {}
}

let _subscribers = {
	weather: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn());
}

//public
export default class WeatherService {

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	get Weather() {
		return _state.weather
	}



	getWeather() {
		console.log('Calling the Weatherman')
		weatherApi.get()
			.then(res => {
				let weather = new Weather(res.data)
				_setState('weather', weather)
			})
	}




}
