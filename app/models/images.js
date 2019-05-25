export class ImageModel {
  constructor(data) {
    this._id = data._id
    this.url = data.url
    this.source_id = data._id
    this.copyright = data.copyright
    this.site = data.site

  }



  get ImageTemplate() {
    return `
     	


		<img src="${this.url}" alt="Smiley face">

	


	

	

    
    
    
    
    
    `
  }
}




// "id": 224,
//   "url": "https://splashbase.s3.amazonaws.com/unsplash/regular/tumblr_mzgzcdEDTL1st5lhmo1_1280.jpg",
//     "large_url": "https://splashbase.s3.amazonaws.com/unsplash/large/1m7WnTR",
//       "source_id": 146,
//         "copyright": "CC0",
//           "site": "unsplash"