import { ImageModel } from "../../models/images.js";

//Private

// @ts-ignore
const imgApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/images',
	timeout: 3000
});

let _state = {
	apiImages: [],
	activeImage: {},

}

let _subscribers = {
	apiImages: [],
	activeImage: {},

}

function _setState(propName, data) {
	_state[propName] = data
	_subscribers[propName].forEach(fn => fn())
}


//currently only one image is in database



//Public
export default class ImageService {
	addSubscribers(propName, fn) {
		_subscribers[propName].push(fn)
	}
	get ApiImages() {
		console.log('getting from model ')
		return _state.apiImages.map(image => new ImageModel(image))
	}

	get ActiveImage() {
		return new ImageModel(_state.activeImage)
	}


	getAllSImages() {

		imgApi.get()
			.then(res => {

				let imgData = res.data.map(i => new ImageModel(i))
				_setState('apiImages', imgData)
			})
			.catch(err => console.error(err))
	}
}