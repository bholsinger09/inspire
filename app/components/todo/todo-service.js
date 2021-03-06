import ToDoModel from "../../models/toDo.js";

//`Functionality`
//	- Todo's can be added to a list (POST)
//			- Todo's can be marked complete (PUT)
//			- The todolist shows the total count of tasks currently being tracked
//				- The todolist takes advantage of the TodoService to provide persistent data

// @ts-ignore
const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/ben/todos/',
	timeout: 3000
});



let _state = {
	todos: {},
	error: {},

}
let _subscribers = {
	todos: [],
	error: [],

}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}

export default class TodoService {
	get TodoError() {
		return _state.error
	}
	get Todos() {
		return _state.todos.map(tasks => new ToDoModel(tasks))
	}




	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getTodos() {
		console.log("Getting the Todo List")
		todoApi.get()
			.then(res => {
				//console.log(res.data.data)
				let toDoApiData = res.data.data.map(t => new ToDoModel(t))
				console.log(toDoApiData)
				_setState('todos', toDoApiData)


			})
			.catch(err => _setState('error', err.response.data))
	}

	addTodo(todo) {
		todoApi.post('', todo)
			.then(res => {
				this.getTodos()
			})
			.catch(err => _setState('error', err.response.data))
	}

	toggleTodoStatus(todoId) {
		let todo = _state.todos.find(todo => todo._id == todoId)
		// Be sure to change the completed property to its opposite
		todo.completed = !todo.completed

		todoApi.put(todoId, todo)
			.then(res => {
				this.getTodos()
			})
			.catch(err => _setState('error', err.response.data))
	}

	removeTodo(todoId) {
		todoApi.delete(todoId)
			.then(res => {
				this.getTodos()
			})
	}

}
