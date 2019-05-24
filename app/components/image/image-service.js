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

}
