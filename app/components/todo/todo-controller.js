import TodoService from "./todo-service.js";

//`Functionality`
//- Todo's can be added to a list (POST)
//	- Todo's can be removed (DELETE)
//	- Todo's can be marked complete (PUT)
//	- The todolist shows the total count of tasks currently being tracked
//		- The todolist takes advantage of the TodoService to provide persistent data

const _todoService = new TodoService()

function _drawTodos() {
	let todoList = _todoService
	let template = ''
	template += todoList.TodoTemplate

	document.getElementById('todos').innerHTML = template
}

function _drawError() {
	console.error('[TODO ERROR]', _todoService.TodoError)
	//document.querySelector('#todo-error').textContent = `${_todoService.TodoError.message}`
}


export default class TodoController {
	constructor() {
		_todoService.addSubscriber('error', _drawError)
		_todoService.getTodos()
		// Don't forget to add your subscriber
	}

	addTodo(e) {
		e.preventDefault()
		var form = e.target
		var todo = {
			// DONT FORGET TO BUILD YOUR TODO OBJECT
		}

		_todoService.addTodo(todo)
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
