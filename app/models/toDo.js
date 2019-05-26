export default class ToDoModel {
  constructor(data) {
    this.completed = data.completed
    this._id = data._id || ''
    this.description = data.description || ''
    this.user = data.user


  }
  get TodoTemplate() {
    return `<h1>to do 's</h1>
				<input class="new-todo" placeholder="enter todo's here" autofocus>
    `
  }
}



//this is what is in the database
// {
//   "message": "Got users todos!",
//     "data": [
//       {
//         "completed": false,
//         "_id": "5c75d546398e1300146ba699",
//         "description": "make dat money",
//         "user": "ben",
//         "__v": 0
//       }