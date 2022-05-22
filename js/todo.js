const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-form input:first-child")
const todoListDisplay = document.querySelector("#todo-display ul")

const TODO_KEY = "todos"

let todoList = []

function removeTodo(item) {
    const parentElement = item.target.parentElement
    parentElement.remove()
    todoList = todoList.filter(todo => todo.id !== parseInt(item.target.parentNode.id))
    console.log(todoList);
    saveTodo()
}

function saveTodo() {
    localStorage.setItem(TODO_KEY, JSON.stringify(todoList))
}

function printTodo(todoObj) {
    const li = document.createElement("li")
    li.id = todoObj.id
    li.style.color = "white"
    li.style.fontSize = "25px"
    li.style.paddingLeft = "5px"

    const span = document.createElement("span")
    span.innerText = todoObj.todo
    const btn = document.createElement("button")
    btn.innerText = "❌"
    btn.style.background = "transparent"
    btn.style.border = "none"
    btn.addEventListener("click", removeTodo)

    li.appendChild(span)
    li.appendChild(btn)
    todoListDisplay.appendChild(li)
}

function addTodoHandle(event) {
    event.preventDefault()
    const newTodo = `${todoInput.value}  `
    todoInput.value = ""

    const todoObj = {
        todo: newTodo,
        id: Date.now(),
    }

    todoList.push(todoObj)
    printTodo(todoObj)
    saveTodo()
}

function mouseOnHandle() {
    todoInput.style.color = "white"
}

function mouseLeftHandle() {
    todoInput.style.color = "grey"
}

todoInput.addEventListener("mouseover", mouseOnHandle)
todoInput.addEventListener("mouseleave", mouseLeftHandle)
todoForm.addEventListener("submit", addTodoHandle)

const savedTodos = JSON.parse(localStorage.getItem(TODO_KEY))

if (savedTodos !== null) {
    savedTodos.forEach(printTodo)
    todoList = savedTodos
} 