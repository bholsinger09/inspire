import WeatherService from "./weather-service.js";

// Visualization`
//    - The data from the services are each rendered. 
//         - Quote (quote and author)
//         - Image (only the image is required, however feel free to include other data)
//         - Weather (The temp is displayed, feel free to add other pieces)
//         - Todo (the new todo form exists, and any todos are rendered *GET*)
//    - The image should be on large display with at least one other element positioned over the top of the image.
// - A form to add a new todo can be accessed and when submitted the page does not reload

var _weatherService = new WeatherService()

function drawWeather() {
	console.log("THE WEATHER MAN SAYS:", _weatherService.Weather)
}

export default class WeatherController {

	constructor() {
		_weatherService.addSubscriber('weather', drawWeather)
		_weatherService.getWeather()
	}

}
