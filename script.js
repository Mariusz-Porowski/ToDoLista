let toDoInput
let errorInfo
let addBtn
let ulList
let newTodo // nowe zadanie

const main = () => {
	prepareDOMElements()
	prepareDOMEvents()
}

const prepareDOMElements = () => {
	toDoInput = document.querySelector('.todo-input')
	errorInfo = document.querySelector('.error-info')
	addBtn = document.querySelector('.btn-add')
	ulList = document.querySelector('.todolist ul')
}

const prepareDOMEvents = () => {
	addBtn.addEventListener('click', addNewTodo)
}

const addNewTodo = () => {
	if (toDoInput.value !== '') {
		newTodo = document.createElement('li')
		newTodo.textContent = toDoInput.value
		ulList.append(newTodo)

		toDoInput.value = ''
        errorInfo.textContent = ''
	} else {
		errorInfo.textContent = 'Wpisz treść zadania!'
	}
}

document.addEventListener('DOMContentLoaded', main)
