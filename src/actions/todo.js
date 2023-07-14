export function addTodo(todo) {
    return {
        type: "ADDTODO",
        payload: todo
    }
}

export function deleteTodo(todo) {
    return {
        type: "DELETETODO",
        payload: todo
    }
}