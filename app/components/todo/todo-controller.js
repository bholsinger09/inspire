import TodoService from "./todo-service.js";

//`Functionality`
//- Todo's can be added to a list (POST)
//	- Todo's can be removed (DELETE)
//	- Todo's can be marked complete (PUT)
//	- The todolist shows the total count of tasks currently being tracked
//		- The todolist takes advantage of the TodoService to provide persistent data

const _todoService = new TodoService()

function _drawTodoForm() {
	document.getElementById('todos').innerHTML = `
	<form class="todo" onsubmit="app.controllers.todoController.addTodo(event))">
         <div id = "inputToDo">
         <label for="description"><h1>Your To Do's</h1></label>
         <input type="text" class="form-control" id="description" name="description"placeholder="Enter Todo's">
         </div>
	
	
	`




	///old form
	// < form class="todo" onsubmit = "app.controllers.todo-controller.addTodo(event))" >
	// 	<div id="inputToDo">
	// 		<label for="description"><h1>Your To Do's</h1></label>
	// 		<input type="text" class="form-control" id="description" name="description" placeholder="Enter Todo's">
	//   </div>








}

function _drawTasks() {
	let tasks = _todoService.Todos
	let template = ''
	tasks.forEach(task => {
		template += task.TaskTemp
	})
	document.getElementById('todo-content-section').innerHTML = template

}



function _drawError() {
	console.error('[TODO ERROR]', _todoService.TodoError)
	document.querySelector('#todo-error').textContent = `${_todoService.TodoError.message}`
}


export default class TodoController {
	constructor() {
		_todoService.addSubscriber('error', _drawError)
		_todoService.addSubscriber('todos', _drawTasks)

		_todoService.getTodos()


	}

	renderTasks() {
		_drawTasks();
		_drawTodoForm();

	}

	addTodo(event) {
		event.preventDefault()
		var form = event.target
		var todo = {
			// TODO OBJECT

			completed: form.completed.value,
			_id: form._id.value,
			description: form.description.value,
			user: form.user.value

		}




		_todoService.addTodo(todo)
		//form.reset()
	}

	toggleTodoStatus(todoId) {
		// edit the todo status
		_todoService.toggleTodoStatus(todoId)
	}

	removeTodo(todoId) {
		// run the remove todo with this id
		_todoService.removeTodo(todoId)
	}



}
