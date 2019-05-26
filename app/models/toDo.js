export default class ToDoModel {
  constructor(data) {
    this.completed = data.completed
    this._id = data._id || ''
    this.description = data.description || ''
    this.user = data.user


  }
  TodoTemplate() {
    return ``
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