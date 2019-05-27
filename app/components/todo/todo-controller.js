import TodoService from "./todo-service.js";

//`Functionality`
//- Todo's can be added to a list (POST)
//	- Todo's can be removed (DELETE)
//	- Todo's can be marked complete (PUT)
//	- The todolist shows the total count of tasks currently being tracked
//		- The todolist takes advantage of the TodoService to provide persistent data

const _todoService = new TodoService()

function _drawTodoForm() {
	let todoList = _todoService.Todos
	let template = ''


	todoList.forEach(td => {

		template += td.TodoTemplate




	});
	//console.log(template)
	console.log(template.search('</div>'))

	document.getElementById('todos').innerHTML = template.slice(0, 400)
}

// function _addedToDos() {
// 	document.getElementById('todo-content-section').innerHTML = `
// 	<form class="user" onsubmit="app.controller.todo-controller.addTodo(event))">
// 	<div id = "inputUser">
//          <label for="description">user</label>
//         <input type="text" class="form-control" id="description" name="user"placeholder="enter user">
//         </div>
// 	`

// }

function _drawError() {
	console.error('[TODO ERROR]', _todoService.TodoError)
	document.querySelector('#todo-error').textContent = `${_todoService.TodoError.message}`
}


export default class TodoController {
	constructor() {
		_todoService.addSubscriber('error', _drawError)
		_todoService.addSubscriber('todos', _drawTodoForm)
		_todoService.getTodos()
		//_addedToDos()

	}

	addTodo(e) {
		e.preventDefault()
		var form = e.target
		var todo = {
			// TODO OBJECT

			completed: form.completed.value,
			_id: form._id.value,
			description: form.description.value,
			user: form.user.value

		}




		_todoService.addTodo(todo)
		form.reset()
	}

	toggleTodoStatus(todoId) {
		// asks the service to edit the todo status
		_todoService.toggleTodoStatus(todoId)
	}

	removeTodo(todoId) {
		// ask the service to run the remove todo with this id
		_todoService.removeTodo(todoId)
	}



}
