import ImageService from "./image-service.js";

// Visualization`
//    - The data from the services are each rendered. 
//         - Quote (quote and author)
//         - Image (only the image is required, however feel free to include other data)
//         - Weather (The temp is displayed, feel free to add other pieces)
//         - Todo (the new todo form exists, and any todos are rendered *GET*)
//    - The image should be on large display with at least one other element positioned over the top of the image.
// - A form to add a new todo can be accessed and when submitted the page does not reload

//Private

let _is = new ImageService()

//updateui needs created

function _updateImagesUi() {
  let images = _is.ApiImages
  let template = ''
  template += images.ImageTemplate


  document.getElementById('bg-image').innerHTML = template


}



//Public
export default class ImageController {
  constructor() {
    // _is.addSubscribers('apiImages', _updateImagesUi)

    // _is.getAllSImages()
  }



}

