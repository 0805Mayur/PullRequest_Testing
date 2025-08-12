// BAD: No proper function documentation
function deleteTodo(id) {
// BAD: Inconsistent indentation and spacing
todos = todos.filter(todo=>todo.id!=id);
renderTodos();
}

// BAD: Poorly named function with unclear purpose
function x(str) {
return str.length > 0 ? true : false; // BAD: Unnecessary ternary
}

// BAD: Function does too many things
function doStuff(todoText) {
if(!x(todoText)) return; // BAD: No proper validation
console.log("Adding: " + todoText); // BAD: String concatenation instead of template literals
var trimmed = todoText.trim();
return trimmed.toLowerCase().replace(/\s+/g, '-');
}

// BAD: Unused function that should be removed
function unusedFunction() { return "waste of space"; } 