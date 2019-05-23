// @ts-ignore
const imgApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/images',
	timeout: 3000
});


//images to be sent to controller are coming from sandbox api
//database currently only has one image 

//{
// 	"id": 5588,
// 		"url": "https://splashbase.s3.amazonaws.com/snapwiresnaps/regular/tumblr_o1y270lb671teue7jo1_1280.jpg",
// 			"large_url": "https://splashbase.s3.amazonaws.com/snapwiresnaps/large/tumblr_o1y270lb671teue7jo1_1280.jpg",
// 				"source_id": null,
// 					"copyright": "CC0",
// 						"site": "snapwiresnaps"
// }


export default class ImageService {


}
