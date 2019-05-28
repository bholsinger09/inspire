export default class ToDoModel {
  constructor(data) {
    this.completed = data.completed
    this._id = data._id || ''
    this.description = data.description || ''
    this.user = data.user


  }
  // get TodoTemplate() {
  //   return `
  //       <form class="todo" onsubmit="app.controller.todo-controller.addTodo(event))">
  //       <div id = "inputToDo">
  //        <label for="description"><h1>Your To Do's</h1></label>
  //       <input type="text" class="form-control" id="description" name="description"placeholder="Enter Todo's">
  //       </div>
  //   `
  // }

  get TaskTemp() {
    return `
    
        <div id = "task" >
        <label for="description">task</label>
         <p>${this.description}</p>
          <p>${this.user}</p>
            <p>completed:${this.completed}</p>
  			</div >
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