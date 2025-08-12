// BAD: Global variables without proper declaration
var todos = [];
let todoId = 0;

// BAD: Function without proper error handling
function addTodo() {
    var input = document.getElementById('todoInput');
    var text = input.value;
    // BAD: No input validation
    todos.push({id: todoId++, text: text, done: false});
    input.value = '';
    renderTodos();
}

// MIXED: Function is okay but could be better
function renderTodos() {
    const list = document.getElementById('todoList');
    list.innerHTML = ''; // BAD: Could cause memory leaks
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.innerHTML = `${todo.text} <button onclick="deleteTodo(${todo.id})">Delete</button>`;
        list.appendChild(li);
    });
} 