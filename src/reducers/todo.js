const initialState = {todos: []};

const todo = (state = initialState, action) => {
    switch(action.type) {
        case "ADDTODO":
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case  "DELETETODO":
            const indexOfTodo = state.todos.indexOf(action.payload);
            if(indexOfTodo > -1) {
                return state.todos.filter(elem => elem !== todo)
            }
        default:
            return state;
    }
}

export default todo;